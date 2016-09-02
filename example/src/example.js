var React = require('react');
var ReactDOM = require('react-dom');
var CellStrip = require('react-cell-strip').CellStrip;

var App = React.createClass({
  render () {
    return (
      <div style={{width: 400 + "px", height: 1200 +"px"}}>
        <CellStrip cellWidth={100} cellHeight={25}
          cellNumbers={[61, 62, 63, 64]} />
        <CellStrip className={"cell-strip-fancy"}
          cellWidth={[50, 120, 150, 80]}
          cellHeight={[80, [30, 50], 80, [25,25,30]]}
          cellNumbers={[1, [2, 3], 4, [5, 6, 7]]} />
        <CellStrip cellWidth={[100, 50, 100, 150]} cellHeight={25}
          cellNumbers={[8, 9, 10, 11]} />
        <CellStrip cellWidth={200}
          cellHeight={[50, [25,25]]}
          cellNumbers={[12, [13, 14]]} />
        <CellStrip className={"cell-strip-modern"}
          cellWidth={[80, 100, 150, 70]}
          cellHeight={[[30, 30, 20], 80, [40,40], 80]}
          cellNumbers={[[70, 65, 60], 55, [50, 45], 40]} />
        <CellStrip className={"cell-strip-fancy"}
          cellWidth={100} cellHeight={25}
          cellNumbers={[110, 116, 525, 41]} />
        <CellStrip className={"cell-strip-dark"}
          cellWidth={[180, 50, 100]} cellHeight={40}
          cellNumbers={['Broken', 'In', 'Out']} />
        <CellStrip cellWidth={[30, 40]} cellHeight={[40, [20, 20]]}
          cellNumbers={[15,[16,17]]} />
      </div>
    );
  }
});

ReactDOM.render(<App />, document.getElementById('app'));
