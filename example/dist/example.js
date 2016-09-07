require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var React = require('react');
var ReactDOM = require('react-dom');
var CellStrip = require('react-cell-strip').CellStrip;

var App = React.createClass({
  displayName: 'App',

  getInitialState: function getInitialState() {
    return {
      selectedItem: null
    };
  },
  clickHandler: function clickHandler(context, item) {
    this.setState({
      selectedItem: item
    });
  },
  getIsSelected: function getIsSelected(context, item) {
    return this.state.selectedItem === item;
  },
  render: function render() {
    var context = {
      cellStripOwner: this
    };
    return React.createElement(
      'div',
      null,
      React.createElement(
        'div',
        { style: { width: "400px", height: "350px" } },
        React.createElement(CellStrip, {
          context: context,
          cellWidth: 100, cellHeight: 25,
          cellNumbers: [61, 62, 63, 64] }),
        React.createElement(CellStrip, { className: "cell-strip-fancy",
          context: context,
          cellWidth: [50, 120, 150, 80],
          cellHeight: [80, [30, 50], 80, [25, 25, 30]],
          cellNumbers: [1, [2, 3], 4, [5, 6, 7]] }),
        React.createElement(CellStrip, {
          context: context,
          cellWidth: [100, 50, 100, 150], cellHeight: 25,
          cellNumbers: [8, 9, 10, 11] }),
        React.createElement(CellStrip, {
          context: context,
          cellWidth: 200,
          cellHeight: [50, [25, 25]],
          cellNumbers: [12, [13, 14]] }),
        React.createElement(CellStrip, { className: "cell-strip-modern",
          context: context,
          cellWidth: [80, 100, 150, 70],
          cellHeight: [[30, 30, 20], 80, [40, 40], 80],
          cellNumbers: [[70, 65, 60], 55, [50, 45], 40] }),
        React.createElement(CellStrip, { className: "cell-strip-fancy",
          context: context,
          cellWidth: 100, cellHeight: 25,
          cellNumbers: [110, 116, 525, 41] }),
        React.createElement(CellStrip, { className: "cell-strip-dark",
          cellWidth: [180, 50, 100], cellHeight: 40,
          cellNumbers: ['Non-selectable', 'In', 'Out'] }),
        React.createElement(CellStrip, {
          context: context,
          cellWidth: [30, 40], cellHeight: [40, [20, 20]],
          cellNumbers: [15, [16, 17]] })
      ),
      React.createElement(
        'div',
        { className: 'indicator',
          style: { width: "380px", height: "60px" } },
        React.createElement(
          'h1',
          null,
          'Selected Cell: ',
          this.state.selectedItem
        )
      )
    );
  }
});

ReactDOM.render(React.createElement(App, null), document.getElementById('app'));

},{"react":undefined,"react-cell-strip":undefined,"react-dom":undefined}]},{},[1]);
