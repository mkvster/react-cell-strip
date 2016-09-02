var React = require('react');

var PlainCell = function(cellAreaClassName, cellNumberClassName) {
    cellAreaClassName = cellAreaClassName || "cell-area";
    cellNumberClassName = cellNumberClassName || "cell-number";
    return React.createClass({
        render: function() {
            return (
                <div className={cellAreaClassName}
                    style={{width: this.props.width + "px",
                      height: this.props.height + "px"}}>
                    <div className={cellNumberClassName}>
                      {this.props.cellNumber}
                    </div>
                </div>
            );
        }
    });
};

var CellStripTemplate = function(CellPresenter) {
    CellPresenter = CellPresenter || PlainCell;

    return React.createClass({

        getSize: function(source, index, subIndex) {
            if (source.constructor === Array) {
                if (source[index].constructor === Array) {
                    return source[index][subIndex];
                }
                return source[index];
            }
            return source;
        },
        getWidth: function(index, subIndex) {
            return this.getSize(this.props.cellWidth, index, subIndex);
        },
        getHeight: function(index, subIndex) {
            return this.getSize(this.props.cellHeight, index, subIndex);
        },
        render: function() {
            var items = this.props.cellNumbers;
            var self = this;
            var innerArea = null;
            var listItems = items.map(function(item, index) {
              if (item.constructor === Array) {
                var listSubItems = item.map(function(subitem, subIndex) {
                    var w = self.getWidth(index, subIndex);
                    var h = self.getHeight(index, subIndex);
                    return (
                        <li key={subitem} className="cell-board-col-li">
                            <CellPresenter cellNumber={subitem} width={w} height={h} />
                        </li>
                    );
                });
                innerArea = (
                    <div>
                        <ul className="cell-board-col-ul">
                          {listSubItems}
                        </ul>
                    </div>
                );
              }
              else {
                var w = self.getWidth(index);
                var h = self.getHeight(index);
                innerArea = (
                    <CellPresenter cellNumber={item} width={w} height={h} />
                );
              }
              return (
                <li key={item} className="cell-board-row-li">
                    {innerArea}
                </li>
              );
            });

            var rootClassName = this.props.className || "";
            return (
                <ul className={rootClassName + " cell-board-row-ul"}>
                  {listItems}
                </ul>
            );
        }
    });
};

var CellStrip = CellStripTemplate(PlainCell("",""));

export {CellStripTemplate}
export {PlainCell};
export {CellStrip};
