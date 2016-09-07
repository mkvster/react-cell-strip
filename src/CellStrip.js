var React = require('react');

var PlainCell = function(cellAreaClassName, cellNumberClassName) {
    cellAreaClassName = cellAreaClassName || "cell-area";
    cellNumberClassName = cellNumberClassName || "cell-number";
    return React.createClass({
        render: function() {
            var isSelected = this.props.isSelected;
            var cellClassName = "cell-strip-box " + cellAreaClassName;
            if (isSelected) {
                cellClassName = cellClassName + " cell-strip-cell-selected";
            }
            return (
                <div className={cellClassName}
                    onClick={this.props.onClick}
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
        getDefaultProps: function() {
            return {
                context: null
            };
        },
        clickHandler: function(item) {
            var context = this.props.context;
            if (context
                && context.cellStripOwner
                && context.cellStripOwner.clickHandler)
            {
                context.cellStripOwner.clickHandler(context, item);
            }
        },
        getIsSelected: function(item) {
            var context = this.props.context;
            if (context
                && context.cellStripOwner
                && context.cellStripOwner.getIsSelected)
            {
                return context.cellStripOwner.getIsSelected(context, item);
            }
            return false;
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
                            <CellPresenter
                              onClick={self.clickHandler.bind(self, subitem)}
                              isSelected={self.getIsSelected(subitem)}
                              cellNumber={subitem} width={w} height={h} />
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
                    <CellPresenter
                      onClick={self.clickHandler.bind(self, item)}
                      isSelected={self.getIsSelected(item)}
                      cellNumber={item} width={w} height={h} />
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
