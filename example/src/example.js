var React = require('react');
var ReactDOM = require('react-dom');
var CellStrip = require('react-cell-strip');

var App = React.createClass({
	render () {
		return (
			<div style={{width: 400 + "px", height: 600 +"px"}}>
				<CellStrip cellWidth={100} cellHeight={25} cellNumbers={[61, 62, 63, 64]} />
				<CellStrip cellWidth={[50, 120, 150, 80]}
						cellHeight={[80, [30, 50], 80, [25,25,30]]}
						cellNumbers={[1, [2, 3], 4, [5, 6, 7]]} />
				<CellStrip cellWidth={[100, 50, 100, 150]} cellHeight={25}
						cellNumbers={[8, 9, 10, 11]} />
			</div>
		);
	}
});

ReactDOM.render(<App />, document.getElementById('app'));
