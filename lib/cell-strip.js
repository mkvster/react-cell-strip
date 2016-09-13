"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var React = require('react');

var PlainCell = function PlainCell(cellAreaClassName, cellNumberClassName) {
    cellAreaClassName = cellAreaClassName || "cell-strip-cell";
    cellNumberClassName = cellNumberClassName || "cell-strip-number";
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
        renderCell: function renderCell(itemId, index, subIndex) {
            var self = this;
            var width = self.getWidth(index, subIndex);
            var height = self.getHeight(index, subIndex);
            return React.createElement(CellPresenter, {
                onClick: self.clickHandler.bind(self, itemId),
                isSelected: self.getIsSelected(itemId),
                cellNumber: itemId, width: width, height: height });
        },
        render: function render() {
            var items = this.props.cellNumbers;
            var self = this;
            var innerArea = null;
            var listItems = items.map(function (item, index) {
                if (item.constructor === Array) {
                    var listSubItems = item.map(function (subItem, subIndex) {
                        return React.createElement(
                            "li",
                            { key: subItem,
                                className: "cell-strip-column-list-item" },
                            self.renderCell(subItem, index, subIndex)
                        );
                    });
                    innerArea = React.createElement(
                        "div",
                        null,
                        React.createElement(
                            "ul",
                            { className: "cell-strip-column-list" },
                            listSubItems
                        )
                    );
                } else {
                    innerArea = self.renderCell(item, index, null);
                }
                return React.createElement(
                    "li",
                    { key: item, className: "cell-strip-row-list-item" },
                    innerArea
                );
            });

            var rootClassName = this.props.className || "";
            return React.createElement(
                "ul",
                { className: rootClassName + " cell-strip-row-list" },
                listItems
            );
        }
    });
};

var CellStrip = CellStripTemplate(PlainCell("", ""));

exports.CellStripTemplate = CellStripTemplate;
exports.PlainCell = PlainCell;
exports.CellStrip = CellStrip;