var React = require('react');

var PlainCell = function(cellAreaClassName, cellNumberClassName) {
    cellAreaClassName = cellAreaClassName || "cell-strip-cell";
    cellNumberClassName = cellNumberClassName || "cell-strip-number";
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
        renderCell: function(itemId, index, subIndex) {
          var self = this;
          var width = self.getWidth(index, subIndex);
          var height = self.getHeight(index, subIndex);
          return (
            <CellPresenter
              onClick={self.clickHandler.bind(self, itemId)}
              isSelected={self.getIsSelected(itemId)}
              cellNumber={itemId} width={width} height={height} />
          );
        },
        render: function() {
            var items = this.props.cellNumbers;
            var self = this;
            var innerArea = null;
            var listItems = items.map(function(item, index) {
              if (item.constructor === Array) {
                var listSubItems = item.map(function(subItem, subIndex) {
                    return (
                        <li key={subItem}
                          className="cell-strip-column-list-item">
                          {self.renderCell(subItem, index, subIndex)}
                        </li>
                    );
                });
                innerArea = (
                    <div>
                        <ul className="cell-strip-column-list">
                          {listSubItems}
                        </ul>
                    </div>
                );
              }
              else {
                  innerArea = self.renderCell(item, index, null);
              }
              return (
                <li key={item} className="cell-strip-row-list-item">
                    {innerArea}
                </li>
              );
            });

            var rootClassName = this.props.className || "";
            return (
                <ul className={rootClassName + " cell-strip-row-list"}>
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
