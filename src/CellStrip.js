var React = require('react');

var CellStrip = React.createClass({

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
				var innerArea = "";
        var self = this;
        var listItems = items.map(function(item, index) {
          if (item.constructor === Array) {
            var listSubItems = item.map(function(subitem, subIndex) {
                var w = self.getWidth(index, subIndex);
                var h = self.getHeight(index, subIndex);
                return (
                    <li key={subitem} className="cell-board-noselect cell-board-col-li">
                          <div className="cell-area" style={{width: w + "px", height: h + "px"}}>
                              {subitem}
                          </div>
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
                  <div className="cell-area" style={{width: w + "px", height: h + "px"}}>
                      {item}
                  </div>
            );
          }
          return (
            <li key={item} className="cell-board-noselect cell-board-row-li">
                {innerArea}
            </li>
          );
        });

        return (
            <ul className="cell-board-row-ul">
              {listItems}
            </ul>
        );
    }
});

export default CellStrip;
