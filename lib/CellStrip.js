"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var React = require('react');

var CellStripOLD = React.createClass({
    displayName: "CellStripOLD",

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

var CellStrip = function CellStrip(CellPresenter) {
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
                            React.createElement(CellPresenter, { cellNumber: subitem, width: w, height: h })
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
                    innerArea = React.createElement(CellPresenter, { cellNumber: item, width: w, height: h });
                }
                return React.createElement(
                    "li",
                    { key: item, className: "cell-board-row-li" },
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
};

exports["default"] = CellStrip;
module.exports = exports["default"];