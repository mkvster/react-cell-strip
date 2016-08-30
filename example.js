require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var React = require('react');
var ReactDOM = require('react-dom');
var CellStrip = require('react-cell-strip');

var App = React.createClass({
	displayName: 'App',

	render: function render() {
		return React.createElement(
			'div',
			{ style: { width: 400 + "px", height: 600 + "px" } },
			React.createElement(CellStrip, { cellWidth: 100, cellHeight: 25, cellNumbers: [61, 62, 63, 64] }),
			React.createElement(CellStrip, { cellWidth: [50, 120, 150, 80],
				cellHeight: [80, [30, 50], 80, [25, 25, 30]],
				cellNumbers: [1, [2, 3], 4, [5, 6, 7]] }),
			React.createElement(CellStrip, { cellWidth: [100, 50, 100, 150], cellHeight: 25,
				cellNumbers: [8, 9, 10, 11] })
		);
	}
});

ReactDOM.render(React.createElement(App, null), document.getElementById('app'));

},{"react":undefined,"react-cell-strip":undefined,"react-dom":undefined}]},{},[1]);
