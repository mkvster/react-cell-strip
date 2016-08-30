(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.CellStrip = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (global){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var React = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null);

var CellStrip = React.createClass({
    displayName: "CellStrip",

    getSize: function getSize(source, index, subIndex) {
        if (source.constructor === Array) {
            if (source[index].constructor === Array) {
                return source[index][subIndex];
            }
            return source[index];
        }
        return source;
    },
    getWidth: function getWidth(index, subIndex) {
        return this.getSize(this.props.cellWidth, index, subIndex);
    },
    getHeight: function getHeight(index, subIndex) {
        return this.getSize(this.props.cellHeight, index, subIndex);
    },
    render: function render() {
        var items = this.props.cellNumbers;
        var innerArea = "";
        var self = this;
        var listItems = items.map(function (item, index) {
            if (item.constructor === Array) {
                var listSubItems = item.map(function (subitem, subIndex) {
                    var w = self.getWidth(index, subIndex);
                    var h = self.getHeight(index, subIndex);
                    return React.createElement(
                        "li",
                        { key: subitem, className: "cell-board-noselect cell-board-col-li" },
                        React.createElement(
                            "div",
                            { className: "cell-area", style: { width: w + "px", height: h + "px" } },
                            subitem
                        )
                    );
                });
                innerArea = React.createElement(
                    "div",
                    null,
                    React.createElement(
                        "ul",
                        { className: "cell-board-col-ul" },
                        listSubItems
                    )
                );
            } else {
                var w = self.getWidth(index);
                var h = self.getHeight(index);
                innerArea = React.createElement(
                    "div",
                    { className: "cell-area", style: { width: w + "px", height: h + "px" } },
                    item
                );
            }
            return React.createElement(
                "li",
                { key: item, className: "cell-board-noselect cell-board-row-li" },
                innerArea
            );
        });

        return React.createElement(
            "ul",
            { className: "cell-board-row-ul" },
            listItems
        );
    }
});

exports["default"] = CellStrip;
module.exports = exports["default"];

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}]},{},[1])(1)
});