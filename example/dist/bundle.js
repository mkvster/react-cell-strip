require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"react-cell-strip":[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var React = require('react');

var PlainCell = function PlainCell(cellAreaClassName, cellNumberClassName) {
    cellAreaClassName = cellAreaClassName || "cell-area";
    cellNumberClassName = cellNumberClassName || "cell-number";
    return React.createClass({
        render: function render() {
            var isSelected = this.props.isSelected;
            var cellClassName = "cell-strip-box " + cellAreaClassName;
            if (isSelected) {
                cellClassName = cellClassName + " cell-strip-cell-selected";
            }
            return React.createElement(
                "div",
                { className: cellClassName,
                    onClick: this.props.onClick,
                    style: { width: this.props.width + "px",
                        height: this.props.height + "px" } },
                React.createElement(
                    "div",
                    { className: cellNumberClassName },
                    this.props.cellNumber
                )
            );
        }
    });
};

var CellStripTemplate = function CellStripTemplate(CellPresenter) {
    CellPresenter = CellPresenter || PlainCell;

    return React.createClass({

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
        getDefaultProps: function getDefaultProps() {
            return {
                context: null
            };
        },
        clickHandler: function clickHandler(item) {
            var context = this.props.context;
            if (context && context.cellStripOwner && context.cellStripOwner.clickHandler) {
                context.cellStripOwner.clickHandler(context, item);
            }
        },
        getIsSelected: function getIsSelected(item) {
            var context = this.props.context;
            if (context && context.cellStripOwner && context.cellStripOwner.getIsSelected) {
                return context.cellStripOwner.getIsSelected(context, item);
            }
            return false;
        },
        render: function render() {
            var items = this.props.cellNumbers;
            var self = this;
            var innerArea = null;
            var listItems = items.map(function (item, index) {
                if (item.constructor === Array) {
                    var listSubItems = item.map(function (subitem, subIndex) {
                        var w = self.getWidth(index, subIndex);
                        var h = self.getHeight(index, subIndex);
                        return React.createElement(
                            "li",
                            { key: subitem, className: "cell-board-col-li" },
                            React.createElement(CellPresenter, {
                                onClick: self.clickHandler.bind(self, subitem),
                                isSelected: self.getIsSelected(subitem),
                                cellNumber: subitem, width: w, height: h })
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
                    innerArea = React.createElement(CellPresenter, {
                        onClick: self.clickHandler.bind(self, item),
                        isSelected: self.getIsSelected(item),
                        cellNumber: item, width: w, height: h });
                }
                return React.createElement(
                    "li",
                    { key: item, className: "cell-board-row-li" },
                    innerArea
                );
            });

            var rootClassName = this.props.className || "";
            return React.createElement(
                "ul",
                { className: rootClassName + " cell-board-row-ul" },
                listItems
            );
        }
    });
};

var CellStrip = CellStripTemplate(PlainCell("", ""));

exports.CellStripTemplate = CellStripTemplate;
exports.PlainCell = PlainCell;
exports.CellStrip = CellStrip;

},{"react":undefined}]},{},[]);
