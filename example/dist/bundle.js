require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"react-cell-strip":[function(require,module,exports){
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

},{"react":undefined}]},{},[])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJDOi9LL19EZXYvR2l0L3JlYWN0LWNlbGwtc3RyaXAvc3JjL0NlbGxTdHJpcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FDQUEsSUFBSSxLQUFLLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDOztBQUU3QixJQUFJLFlBQVksR0FBRyxLQUFLLENBQUMsV0FBVyxDQUFDOzs7QUFFakMsV0FBTyxFQUFFLGlCQUFTLE1BQU0sRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFO0FBQ3ZDLFlBQUksTUFBTSxDQUFDLFdBQVcsS0FBSyxLQUFLLEVBQUU7QUFDOUIsZ0JBQUksTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLFdBQVcsS0FBSyxLQUFLLEVBQUU7QUFDckMsdUJBQU8sTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDO2FBQ2xDO0FBQ0QsbUJBQU8sTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ3hCO0FBQ0QsZUFBTyxNQUFNLENBQUM7S0FDakI7QUFDRCxZQUFRLEVBQUUsa0JBQVMsS0FBSyxFQUFFLFFBQVEsRUFBRTtBQUNoQyxlQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLEVBQUUsS0FBSyxFQUFFLFFBQVEsQ0FBQyxDQUFDO0tBQzlEO0FBQ0QsYUFBUyxFQUFFLG1CQUFTLEtBQUssRUFBRSxRQUFRLEVBQUU7QUFDakMsZUFBTyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxFQUFFLEtBQUssRUFBRSxRQUFRLENBQUMsQ0FBQztLQUMvRDtBQUNELFVBQU0sRUFBRSxrQkFBVztBQUNmLFlBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDO0FBQ3ZDLFlBQUksU0FBUyxHQUFHLEVBQUUsQ0FBQztBQUNmLFlBQUksSUFBSSxHQUFH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QUMsRUFBQyxTQUFTLEVBQUMsbUJBQW1CO29CQUN2QyxTQUFTO2lCQUNULENBQ0w7YUFDSCxDQUFDLENBQUM7O0FBRUgsbUJBQ0k7O2tCQUFJLFNBQVMsRUFBQyxtQkFBbUI7Z0JBQzlCLFNBQVM7YUFDUCxDQUNQO1NBQ0w7S0FDSixDQUFDLENBQUM7Q0FDTixDQUFBOztxQkFFYyxTQUFTIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsInZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBDZWxsU3RyaXBPTEQgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cbiAgICBnZXRTaXplOiBmdW5jdGlvbihzb3VyY2UsIGluZGV4LCBzdWJJbmRleCkge1xuICAgICAgICBpZiAoc291cmNlLmNvbnN0cnVjdG9yID09PSBBcnJheSkge1xuICAgICAgICAgICAgaWYgKHNvdXJjZVtpbmRleF0uY29uc3RydWN0b3IgPT09IEFycmF5KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHNvdXJjZVtpbmRleF1bc3ViSW5kZXhdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHNvdXJjZVtpbmRleF07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHNvdXJjZTtcbiAgICB9LFxuICAgIGdldFdpZHRoOiBmdW5jdGlvbihpbmRleCwgc3ViSW5kZXgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0U2l6ZSh0aGlzLnByb3BzLmNlbGxXaWR0aCwgaW5kZXgsIHN1YkluZGV4KTtcbiAgICB9LFxuICAgIGdldEhlaWdodDogZnVuY3Rpb24oaW5kZXgsIHN1YkluZGV4KSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldFNpemUodGhpcy5wcm9wcy5jZWxsSGVpZ2h0LCBpbmRleCwgc3ViSW5kZXgpO1xuICAgIH0sXG4gICAgcmVuZGVyOiBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGl0ZW1zID0gdGhpcy5wcm9wcy5jZWxsTnVtYmVycztcblx0XHRcdFx0dmFyIGlubmVyQXJlYSA9IFwiXCI7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgdmFyIGxpc3RJdGVtcyA9IGl0ZW1zLm1hcChmdW5jdGlvbihpdGVtLCBpbmRleCkge1xuICAgICAgICAgIGlmIChpdGVtLmNvbnN0cnVjdG9yID09PSBBcnJheSkge1xuICAgICAgICAgICAgdmFyIGxpc3RTdWJJdGVtcyA9IGl0ZW0ubWFwKGZ1bmN0aW9uKHN1Yml0ZW0sIHN1YkluZGV4KSB7XG4gICAgICAgICAgICAgICAgdmFyIHcgPSBzZWxmLmdldFdpZHRoKGluZGV4LCBzdWJJbmRleCk7XG4gICAgICAgICAgICAgICAgdmFyIGggPSBzZWxmLmdldEhlaWdodChpbmRleCwgc3ViSW5kZXgpO1xuICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e3N1Yml0ZW19IGNsYXNzTmFtZT1cImNlbGwtYm9hcmQtbm9zZWxlY3QgY2VsbC1ib2FyZC1jb2wtbGlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjZWxsLWFyZWFcIiBzdHlsZT17e3dpZHRoOiB3ICsgXCJweFwiLCBoZWlnaHQ6IGggKyBcInB4XCJ9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzdWJpdGVtfVxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpbm5lckFyZWEgPSAoXG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImNlbGwtYm9hcmQtY29sLXVsXCI+XG4gICAgICAgICAgICAgICAgICAgICAge2xpc3RTdWJJdGVtc31cbiAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdmFyIHcgPSBzZWxmLmdldFdpZHRoKGluZGV4KTtcbiAgICAgICAgICAgIHZhciBoID0gc2VsZi5nZXRIZWlnaHQoaW5kZXgpO1xuICAgICAgICAgICAgaW5uZXJBcmVhID0gKFxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjZWxsLWFyZWFcIiBzdHlsZT17e3dpZHRoOiB3ICsgXCJweFwiLCBoZWlnaHQ6IGggKyBcInB4XCJ9fT5cbiAgICAgICAgICAgICAgICAgICAgICB7aXRlbX1cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxsaSBrZXk9e2l0ZW19IGNsYXNzTmFtZT1cImNlbGwtYm9hcmQtbm9zZWxlY3QgY2VsbC1ib2FyZC1yb3ctbGlcIj5cbiAgICAgICAgICAgICAgICB7aW5uZXJBcmVhfVxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICApO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImNlbGwtYm9hcmQtcm93LXVsXCI+XG4gICAgICAgICAgICAgIHtsaXN0SXRlbXN9XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICApO1xuICAgIH1cbn0pO1xuXG52YXIgQ2VsbFN0cmlwID0gZnVuY3Rpb24oQ2VsbFByZXNlbnRlcikge1xuICAgIHJldHVybiBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cbiAgICAgICAgZ2V0U2l6ZTogZnVuY3Rpb24oc291cmNlLCBpbmRleCwgc3ViSW5kZXgpIHtcbiAgICAgICAgICAgIGlmIChzb3VyY2UuY29uc3RydWN0b3IgPT09IEFycmF5KSB7XG4gICAgICAgICAgICAgICAgaWYgKHNvdXJjZVtpbmRleF0uY29uc3RydWN0b3IgPT09IEFycmF5KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzb3VyY2VbaW5kZXhdW3N1YkluZGV4XTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHNvdXJjZVtpbmRleF07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gc291cmNlO1xuICAgICAgICB9LFxuICAgICAgICBnZXRXaWR0aDogZnVuY3Rpb24oaW5kZXgsIHN1YkluZGV4KSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRTaXplKHRoaXMucHJvcHMuY2VsbFdpZHRoLCBpbmRleCwgc3ViSW5kZXgpO1xuICAgICAgICB9LFxuICAgICAgICBnZXRIZWlnaHQ6IGZ1bmN0aW9uKGluZGV4LCBzdWJJbmRleCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0U2l6ZSh0aGlzLnByb3BzLmNlbGxIZWlnaHQsIGluZGV4LCBzdWJJbmRleCk7XG4gICAgICAgIH0sXG4gICAgICAgIHJlbmRlcjogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB2YXIgaXRlbXMgPSB0aGlzLnByb3BzLmNlbGxOdW1iZXJzO1xuICAgICAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICAgICAgdmFyIGlubmVyQXJlYSA9IG51bGw7XG4gICAgICAgICAgICB2YXIgbGlzdEl0ZW1zID0gaXRlbXMubWFwKGZ1bmN0aW9uKGl0ZW0sIGluZGV4KSB7XG4gICAgICAgICAgICAgIGlmIChpdGVtLmNvbnN0cnVjdG9yID09PSBBcnJheSkge1xuICAgICAgICAgICAgICAgIHZhciBsaXN0U3ViSXRlbXMgPSBpdGVtLm1hcChmdW5jdGlvbihzdWJpdGVtLCBzdWJJbmRleCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgdyA9IHNlbGYuZ2V0V2lkdGgoaW5kZXgsIHN1YkluZGV4KTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGggPSBzZWxmLmdldEhlaWdodChpbmRleCwgc3ViSW5kZXgpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17c3ViaXRlbX0gY2xhc3NOYW1lPVwiY2VsbC1ib2FyZC1jb2wtbGlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2VsbFByZXNlbnRlciBjZWxsTnVtYmVyPXtzdWJpdGVtfSB3aWR0aD17d30gaGVpZ2h0PXtofSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBpbm5lckFyZWEgPSAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiY2VsbC1ib2FyZC1jb2wtdWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAge2xpc3RTdWJJdGVtc31cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdmFyIHcgPSBzZWxmLmdldFdpZHRoKGluZGV4KTtcbiAgICAgICAgICAgICAgICB2YXIgaCA9IHNlbGYuZ2V0SGVpZ2h0KGluZGV4KTtcbiAgICAgICAgICAgICAgICBpbm5lckFyZWEgPSAoXG4gICAgICAgICAgICAgICAgICAgIDxDZWxsUHJlc2VudGVyIGNlbGxOdW1iZXI9e2l0ZW19IHdpZHRoPXt3fSBoZWlnaHQ9e2h9IC8+XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxsaSBrZXk9e2l0ZW19IGNsYXNzTmFtZT1cImNlbGwtYm9hcmQtcm93LWxpXCI+XG4gICAgICAgICAgICAgICAgICAgIHtpbm5lckFyZWF9XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJjZWxsLWJvYXJkLXJvdy11bFwiPlxuICAgICAgICAgICAgICAgICAge2xpc3RJdGVtc31cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuXG5leHBvcnQgZGVmYXVsdCBDZWxsU3RyaXA7XG4iXX0=
