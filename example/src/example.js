var React = require('react');
var ReactDOM = require('react-dom');
var CellStrip = require('react-cell-strip');

var PlainCell = function(cellAreaClassName, cellNumberClassName) {
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

var CellStripSimple = CellStrip(PlainCell("cell-area", ""));
var CellStripFancy = CellStrip(PlainCell("cell-area-fancy", "cell-number-fancy"));
var CellStripModern = CellStrip(PlainCell("cell-area-modern", "cell-number-modern"));
var CellStripDark = CellStrip(PlainCell("cell-area-dark", "cell-number-dark"));

var App = React.createClass({
  render () {
    return (
      <div style={{width: 400 + "px", height: 1200 +"px"}}>
        <CellStripSimple cellWidth={100} cellHeight={25}
          cellNumbers={[61, 62, 63, 64]} />
        <CellStripFancy cellWidth={[50, 120, 150, 80]}
          cellHeight={[80, [30, 50], 80, [25,25,30]]}
          cellNumbers={[1, [2, 3], 4, [5, 6, 7]]} />
        <CellStripSimple cellWidth={[100, 50, 100, 150]} cellHeight={25}
          cellNumbers={[8, 9, 10, 11]} />
        <CellStripSimple cellWidth={200}
          cellHeight={[50, [25,25]]}
          cellNumbers={[12, [13, 14]]} />
        <CellStripModern cellWidth={[80, 100, 150, 70]}
          cellHeight={[[30, 30, 20], 80, [40,40], 80]}
          cellNumbers={[[70, 65, 60], 55, [50, 45], 40]} />
        <CellStripFancy cellWidth={100} cellHeight={25}
          cellNumbers={[110, 116, 525, 41]} />
        <CellStripDark cellWidth={[180, 50, 100]} cellHeight={40}
          cellNumbers={['Broken', 'In', 'Out']} />
        <CellStripSimple cellWidth={[30, 40]} cellHeight={[40, [20, 20]]}
          cellNumbers={[15,[16,17]]} />
      </div>
    );
  }
});

ReactDOM.render(<App />, document.getElementById('app'));