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
            return React.createElement(
                "div",
                { className: cellAreaClassName,
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

},{"react":undefined}]},{},[])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJDOi9LL19EZXYvR2l0L3JlYWN0LWNlbGwtc3RyaXAvc3JjL0NlbGxTdHJpcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FDQUEsSUFBSSxLQUFLLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDOztBQUU3QixJQUFJLFNBQVMsR0FBRyxTQUFaLFNBQVMsQ0FBWSxpQkFBaUIsRUFBRSxtQkFBbUIsRUFBRTtBQUM3RCxxQkFBaUIsR0FBRyxpQkFBaUIsSUFBSSxXQUFXLENBQUM7QUFDckQsdUJBQW1CLEdBQUcsbUJBQW1CLElBQUksYUFBYSxDQUFDO0FBQzNELFdBQU8sS0FBSyxDQUFDLFdBQVcsQ0FBQztBQUNyQixjQUFNLEVBQUUsa0JBQVc7QUFDZixtQkFDSTs7a0JBQUssU0FBUyxFQUFFLGlCQUFpQixBQUFDO0FBQzlCLHlCQUFLLEVBQUUsRUFBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsSUFBSTtBQUNwQyw4QkFBTSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLElBQUksRUFBQyxBQUFDO2dCQUNwQzs7c0JBQUssU0FBUyxFQUFFLG1CQUFtQixBQUFDO29CQUNqQyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVU7aUJBQ2xCO2FBQ0osQ0FDUjtTQUNMO0tBQ0osQ0FBQyxDQUFDO0NBQ04sQ0FBQzs7QUFFRixJQUFJLGlCQUFpQixHQUFHLFNBQXBCLGlCQUFpQixDQUFZLGFBQWEsRUFBRTtBQUM1QyxpQkFBYSxHQUFHLGFBQWEsSUFBSSxTQUFTLENBQUM7O0FBRTNDLFdBQU8sS0FBSyxDQUFDLFdBQVcsQ0FBQzs7QUFFckIsZUFBTyxFQUFFLGlCQUFTLE1BQU0sRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFO0FBQ3ZDLGdCQUFJLE1BQU0sQ0FBQyxXQUFXLEtBQUssS0FBSyxFQUFFO0FBQzlCLG9CQUFJLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxXQUFXLEtBQUssS0FBSyxFQUFFO0FBQ3JDLDJCQUFPLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQztpQkFDbEM7QUFDRCx1QkFBTyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDeEI7QUFDRCxtQkFBTyxNQUFNLENBQUM7U0FDakI7QUFDRCxnQkFBUSxFQUFFLGtCQUFTLEtBQUssRUFBRSxRQUFRLEVBQUU7QUFDaEMsbUJBQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsRUFBRSxLQUFLLEVBQUUsUUFBUSxDQUFDLENBQUM7U0FDOUQ7QUFDRCxpQkFBUyxFQUFFLG1CQUFTLEtBQUssRUFBRSxRQUFRLEVBQUU7QUFDakMsbUJBQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsRUFBRSxLQUFLLEVBQUUsUUFBUSxDQUFDLENBQUM7U0FDL0Q7QUFDRCxjQUFNLEVBQUUsa0JBQVc7QUFDZixnQkFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUM7QUFDbkMsZ0JBQUksSUFBSSxHQUFHLElBQUksQ0FBQztBQUNoQixnQkFBSSxTQUFTLEdBQUcsSUFBSSxDQUFDO0FBQ3JCLGdCQUFJLFNBQVMsR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDLFVBQVMsSUFBSSxFQUFFLEtBQUssRUFBRTtBQUM5QyxvQkFBSSxJQUFJLENBQUMsV0FBVyxLQUFLLEtBQUssRUFBRTtBQUM5Qix3QkFBSSxZQUFZLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFTLE9BQU8sRUFBRSxRQUFRLEVBQUU7QUFDcEQsNEJBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQyxDQUFDO0FBQ3ZDLDRCQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxRQUFRLENBQUMsQ0FBQztBQUN4QywrQkFDSTs7OEJBQUksR0FBRyxFQUFFLE9BQU8sQUFBQyxFQUFDLFNBQVMsRUFBQyxtQkFBbUI7NEJBQzNDLG9CQUFDLGFBQWEsSUFBQyxVQUFVLEVBQUUsT0FBTyxBQUFDLEVBQUMsS0FBSyxFQUFFLENBQUMsQUFBQyxFQUFDLE1BQU0sRUFBRSxDQUFDLEFBQUMsR0FBRzt5QkFDMUQsQ0FDUDtxQkFDTCxDQUFDLENBQUM7QUFDSCw2QkFBUyxHQUNMOzs7d0JBQ0k7OzhCQUFJLFNBQVMsRUFBQyxtQkFBbUI7NEJBQzlCLFlBQVk7eUJBQ1Y7cUJBQ0gsQUFDVCxDQUFDO2lCQUNILE1BQ0k7QUFDSCx3QkFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUM3Qix3QkFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUM5Qiw2QkFBUyxHQUNMLG9CQUFDLGFBQWEsSUFBQyxVQUFVLEVBQUUsSUFBSSxBQUFDLEVBQUMsS0FBSyxFQUFFLENBQUMsQUFBQyxFQUFDLE1BQU0sRUFBRSxDQUFDLEFBQUMsR0FBRyxBQUMzRCxDQUFDO2lCQUNIO0FBQ0QsdUJBQ0U7O3NCQUFJLEdBQUcsRUFBRSxJQUFJLEFBQUMsRUFBQyxTQUFTLEVBQUMsbUJBQW1CO29CQUN2QyxTQUFTO2lCQUNULENBQ0w7YUFDSCxDQUFDLENBQUM7O0FBRUgsZ0JBQUksYUFBYSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxJQUFJLEVBQUUsQ0FBQztBQUMvQyxtQkFDSTs7a0JBQUksU0FBUyxFQUFFLGFBQWEsR0FBRyxvQkFBb0IsQUFBQztnQkFDakQsU0FBUzthQUNQLENBQ1A7U0FDTDtLQUNKLENBQUMsQ0FBQztDQUNOLENBQUM7O0FBRUYsSUFBSSxTQUFTLEdBQUcsaUJBQWlCLENBQUMsU0FBUyxDQUFDLEVBQUUsRUFBQyxFQUFFLENBQUMsQ0FBQyxDQUFDOztRQUU1QyxpQkFBaUIsR0FBakIsaUJBQWlCO1FBQ2pCLFNBQVMsR0FBVCxTQUFTO1FBQ1QsU0FBUyxHQUFULFNBQVMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwidmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIFBsYWluQ2VsbCA9IGZ1bmN0aW9uKGNlbGxBcmVhQ2xhc3NOYW1lLCBjZWxsTnVtYmVyQ2xhc3NOYW1lKSB7XG4gICAgY2VsbEFyZWFDbGFzc05hbWUgPSBjZWxsQXJlYUNsYXNzTmFtZSB8fCBcImNlbGwtYXJlYVwiO1xuICAgIGNlbGxOdW1iZXJDbGFzc05hbWUgPSBjZWxsTnVtYmVyQ2xhc3NOYW1lIHx8IFwiY2VsbC1udW1iZXJcIjtcbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICAgICAgICByZW5kZXI6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2VsbEFyZWFDbGFzc05hbWV9XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7d2lkdGg6IHRoaXMucHJvcHMud2lkdGggKyBcInB4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiB0aGlzLnByb3BzLmhlaWdodCArIFwicHhcIn19PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2VsbE51bWJlckNsYXNzTmFtZX0+XG4gICAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuY2VsbE51bWJlcn1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgfSk7XG59O1xuXG52YXIgQ2VsbFN0cmlwVGVtcGxhdGUgPSBmdW5jdGlvbihDZWxsUHJlc2VudGVyKSB7XG4gICAgQ2VsbFByZXNlbnRlciA9IENlbGxQcmVzZW50ZXIgfHwgUGxhaW5DZWxsO1xuXG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUNsYXNzKHtcblxuICAgICAgICBnZXRTaXplOiBmdW5jdGlvbihzb3VyY2UsIGluZGV4LCBzdWJJbmRleCkge1xuICAgICAgICAgICAgaWYgKHNvdXJjZS5jb25zdHJ1Y3RvciA9PT0gQXJyYXkpIHtcbiAgICAgICAgICAgICAgICBpZiAoc291cmNlW2luZGV4XS5jb25zdHJ1Y3RvciA9PT0gQXJyYXkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNvdXJjZVtpbmRleF1bc3ViSW5kZXhdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gc291cmNlW2luZGV4XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBzb3VyY2U7XG4gICAgICAgIH0sXG4gICAgICAgIGdldFdpZHRoOiBmdW5jdGlvbihpbmRleCwgc3ViSW5kZXgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdldFNpemUodGhpcy5wcm9wcy5jZWxsV2lkdGgsIGluZGV4LCBzdWJJbmRleCk7XG4gICAgICAgIH0sXG4gICAgICAgIGdldEhlaWdodDogZnVuY3Rpb24oaW5kZXgsIHN1YkluZGV4KSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRTaXplKHRoaXMucHJvcHMuY2VsbEhlaWdodCwgaW5kZXgsIHN1YkluZGV4KTtcbiAgICAgICAgfSxcbiAgICAgICAgcmVuZGVyOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHZhciBpdGVtcyA9IHRoaXMucHJvcHMuY2VsbE51bWJlcnM7XG4gICAgICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgICAgICB2YXIgaW5uZXJBcmVhID0gbnVsbDtcbiAgICAgICAgICAgIHZhciBsaXN0SXRlbXMgPSBpdGVtcy5tYXAoZnVuY3Rpb24oaXRlbSwgaW5kZXgpIHtcbiAgICAgICAgICAgICAgaWYgKGl0ZW0uY29uc3RydWN0b3IgPT09IEFycmF5KSB7XG4gICAgICAgICAgICAgICAgdmFyIGxpc3RTdWJJdGVtcyA9IGl0ZW0ubWFwKGZ1bmN0aW9uKHN1Yml0ZW0sIHN1YkluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciB3ID0gc2VsZi5nZXRXaWR0aChpbmRleCwgc3ViSW5kZXgpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgaCA9IHNlbGYuZ2V0SGVpZ2h0KGluZGV4LCBzdWJJbmRleCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtzdWJpdGVtfSBjbGFzc05hbWU9XCJjZWxsLWJvYXJkLWNvbC1saVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDZWxsUHJlc2VudGVyIGNlbGxOdW1iZXI9e3N1Yml0ZW19IHdpZHRoPXt3fSBoZWlnaHQ9e2h9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGlubmVyQXJlYSA9IChcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJjZWxsLWJvYXJkLWNvbC11bFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICB7bGlzdFN1Ykl0ZW1zfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB2YXIgdyA9IHNlbGYuZ2V0V2lkdGgoaW5kZXgpO1xuICAgICAgICAgICAgICAgIHZhciBoID0gc2VsZi5nZXRIZWlnaHQoaW5kZXgpO1xuICAgICAgICAgICAgICAgIGlubmVyQXJlYSA9IChcbiAgICAgICAgICAgICAgICAgICAgPENlbGxQcmVzZW50ZXIgY2VsbE51bWJlcj17aXRlbX0gd2lkdGg9e3d9IGhlaWdodD17aH0gLz5cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPGxpIGtleT17aXRlbX0gY2xhc3NOYW1lPVwiY2VsbC1ib2FyZC1yb3ctbGlcIj5cbiAgICAgICAgICAgICAgICAgICAge2lubmVyQXJlYX1cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHZhciByb290Q2xhc3NOYW1lID0gdGhpcy5wcm9wcy5jbGFzc05hbWUgfHwgXCJcIjtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT17cm9vdENsYXNzTmFtZSArIFwiIGNlbGwtYm9hcmQtcm93LXVsXCJ9PlxuICAgICAgICAgICAgICAgICAge2xpc3RJdGVtc31cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgIH0pO1xufTtcblxudmFyIENlbGxTdHJpcCA9IENlbGxTdHJpcFRlbXBsYXRlKFBsYWluQ2VsbChcIlwiLFwiXCIpKTtcblxuZXhwb3J0IHtDZWxsU3RyaXBUZW1wbGF0ZX1cbmV4cG9ydCB7UGxhaW5DZWxsfTtcbmV4cG9ydCB7Q2VsbFN0cmlwfTtcbiJdfQ==
