require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"react-cell-strip":[function(require,module,exports){
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

},{"react":undefined}]},{},[])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJDOi9LL19EZXYvR2l0L3JlYWN0LWNlbGwtc3RyaXAvc3JjL2NlbGwtc3RyaXAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQ0FBLElBQUksS0FBSyxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQzs7QUFFN0IsSUFBSSxTQUFTLEdBQUcsU0FBWixTQUFTLENBQVksaUJBQWlCLEVBQUUsbUJBQW1CLEVBQUU7QUFDN0QscUJBQWlCLEdBQUcsaUJBQWlCLElBQUksaUJBQWlCLENBQUM7QUFDM0QsdUJBQW1CLEdBQUcsbUJBQW1CLElBQUksbUJBQW1CLENBQUM7QUFDakUsV0FBTyxLQUFLLENBQUMsV0FBVyxDQUFDO0FBQ3JCLGNBQU0sRUFBRSxrQkFBVztBQUNmLGdCQUFJLFVBQVUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQztBQUN2QyxnQkFBSSxhQUFhLEdBQUcsaUJBQWlCLEdBQUcsaUJBQWlCLENBQUM7QUFDMUQsZ0JBQUksVUFBVSxFQUFFO0FBQ1osNkJBQWEsR0FBRyxhQUFhLEdBQUcsMkJBQTJCLENBQUM7YUFDL0Q7QUFDRCxtQkFDSTs7a0JBQUssU0FBUyxFQUFFLGFBQWEsQUFBQztBQUMxQiwyQkFBTyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxBQUFDO0FBQzVCLHlCQUFLLEVBQUUsRUFBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsSUFBSTtBQUNwQyw4QkFBTSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLElBQUksRUFBQyxBQUFDO2dCQUNwQzs7c0JBQUssU0FBUyxFQUFFLG1CQUFtQixBQUFDO29CQUNqQyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVU7aUJBQ2xCO2FBQ0osQ0FDUjtTQUNMO0tBQ0osQ0FBQyxDQUFDO0NBQ04sQ0FBQzs7QUFFRixJQUFJLGlCQUFp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QVMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwidmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIFBsYWluQ2VsbCA9IGZ1bmN0aW9uKGNlbGxBcmVhQ2xhc3NOYW1lLCBjZWxsTnVtYmVyQ2xhc3NOYW1lKSB7XG4gICAgY2VsbEFyZWFDbGFzc05hbWUgPSBjZWxsQXJlYUNsYXNzTmFtZSB8fCBcImNlbGwtc3RyaXAtY2VsbFwiO1xuICAgIGNlbGxOdW1iZXJDbGFzc05hbWUgPSBjZWxsTnVtYmVyQ2xhc3NOYW1lIHx8IFwiY2VsbC1zdHJpcC1udW1iZXJcIjtcbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICAgICAgICByZW5kZXI6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdmFyIGlzU2VsZWN0ZWQgPSB0aGlzLnByb3BzLmlzU2VsZWN0ZWQ7XG4gICAgICAgICAgICB2YXIgY2VsbENsYXNzTmFtZSA9IFwiY2VsbC1zdHJpcC1ib3ggXCIgKyBjZWxsQXJlYUNsYXNzTmFtZTtcbiAgICAgICAgICAgIGlmIChpc1NlbGVjdGVkKSB7XG4gICAgICAgICAgICAgICAgY2VsbENsYXNzTmFtZSA9IGNlbGxDbGFzc05hbWUgKyBcIiBjZWxsLXN0cmlwLWNlbGwtc2VsZWN0ZWRcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NlbGxDbGFzc05hbWV9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMucHJvcHMub25DbGlja31cbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3t3aWR0aDogdGhpcy5wcm9wcy53aWR0aCArIFwicHhcIixcbiAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IHRoaXMucHJvcHMuaGVpZ2h0ICsgXCJweFwifX0+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjZWxsTnVtYmVyQ2xhc3NOYW1lfT5cbiAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5jZWxsTnVtYmVyfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICB9KTtcbn07XG5cbnZhciBDZWxsU3RyaXBUZW1wbGF0ZSA9IGZ1bmN0aW9uKENlbGxQcmVzZW50ZXIpIHtcbiAgICBDZWxsUHJlc2VudGVyID0gQ2VsbFByZXNlbnRlciB8fCBQbGFpbkNlbGw7XG5cbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXG4gICAgICAgIGdldFNpemU6IGZ1bmN0aW9uKHNvdXJjZSwgaW5kZXgsIHN1YkluZGV4KSB7XG4gICAgICAgICAgICBpZiAoc291cmNlLmNvbnN0cnVjdG9yID09PSBBcnJheSkge1xuICAgICAgICAgICAgICAgIGlmIChzb3VyY2VbaW5kZXhdLmNvbnN0cnVjdG9yID09PSBBcnJheSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc291cmNlW2luZGV4XVtzdWJJbmRleF07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBzb3VyY2VbaW5kZXhdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHNvdXJjZTtcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0V2lkdGg6IGZ1bmN0aW9uKGluZGV4LCBzdWJJbmRleCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0U2l6ZSh0aGlzLnByb3BzLmNlbGxXaWR0aCwgaW5kZXgsIHN1YkluZGV4KTtcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0SGVpZ2h0OiBmdW5jdGlvbihpbmRleCwgc3ViSW5kZXgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdldFNpemUodGhpcy5wcm9wcy5jZWxsSGVpZ2h0LCBpbmRleCwgc3ViSW5kZXgpO1xuICAgICAgICB9LFxuICAgICAgICBnZXREZWZhdWx0UHJvcHM6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBjb250ZXh0OiBudWxsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgICAgICBjbGlja0hhbmRsZXI6IGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgICAgICAgIHZhciBjb250ZXh0ID0gdGhpcy5wcm9wcy5jb250ZXh0O1xuICAgICAgICAgICAgaWYgKGNvbnRleHRcbiAgICAgICAgICAgICAgICAmJiBjb250ZXh0LmNlbGxTdHJpcE93bmVyXG4gICAgICAgICAgICAgICAgJiYgY29udGV4dC5jZWxsU3RyaXBPd25lci5jbGlja0hhbmRsZXIpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgY29udGV4dC5jZWxsU3RyaXBPd25lci5jbGlja0hhbmRsZXIoY29udGV4dCwgaXRlbSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGdldElzU2VsZWN0ZWQ6IGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgICAgICAgIHZhciBjb250ZXh0ID0gdGhpcy5wcm9wcy5jb250ZXh0O1xuICAgICAgICAgICAgaWYgKGNvbnRleHRcbiAgICAgICAgICAgICAgICAmJiBjb250ZXh0LmNlbGxTdHJpcE93bmVyXG4gICAgICAgICAgICAgICAgJiYgY29udGV4dC5jZWxsU3RyaXBPd25lci5nZXRJc1NlbGVjdGVkKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHJldHVybiBjb250ZXh0LmNlbGxTdHJpcE93bmVyLmdldElzU2VsZWN0ZWQoY29udGV4dCwgaXRlbSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH0sXG4gICAgICAgIHJlbmRlckNlbGw6IGZ1bmN0aW9uKGl0ZW1JZCwgaW5kZXgsIHN1YkluZGV4KSB7XG4gICAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICAgIHZhciB3aWR0aCA9IHNlbGYuZ2V0V2lkdGgoaW5kZXgsIHN1YkluZGV4KTtcbiAgICAgICAgICB2YXIgaGVpZ2h0ID0gc2VsZi5nZXRIZWlnaHQoaW5kZXgsIHN1YkluZGV4KTtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPENlbGxQcmVzZW50ZXJcbiAgICAgICAgICAgICAgb25DbGljaz17c2VsZi5jbGlja0hhbmRsZXIuYmluZChzZWxmLCBpdGVtSWQpfVxuICAgICAgICAgICAgICBpc1NlbGVjdGVkPXtzZWxmLmdldElzU2VsZWN0ZWQoaXRlbUlkKX1cbiAgICAgICAgICAgICAgY2VsbE51bWJlcj17aXRlbUlkfSB3aWR0aD17d2lkdGh9IGhlaWdodD17aGVpZ2h0fSAvPlxuICAgICAgICAgICk7XG4gICAgICAgIH0sXG4gICAgICAgIHJlbmRlcjogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB2YXIgaXRlbXMgPSB0aGlzLnByb3BzLmNlbGxOdW1iZXJzO1xuICAgICAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICAgICAgdmFyIGlubmVyQXJlYSA9IG51bGw7XG4gICAgICAgICAgICB2YXIgbGlzdEl0ZW1zID0gaXRlbXMubWFwKGZ1bmN0aW9uKGl0ZW0sIGluZGV4KSB7XG4gICAgICAgICAgICAgIGlmIChpdGVtLmNvbnN0cnVjdG9yID09PSBBcnJheSkge1xuICAgICAgICAgICAgICAgIHZhciBsaXN0U3ViSXRlbXMgPSBpdGVtLm1hcChmdW5jdGlvbihzdWJJdGVtLCBzdWJJbmRleCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17c3ViSXRlbX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2VsbC1zdHJpcC1jb2x1bW4tbGlzdC1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtzZWxmLnJlbmRlckNlbGwoc3ViSXRlbSwgaW5kZXgsIHN1YkluZGV4KX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgaW5uZXJBcmVhID0gKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImNlbGwtc3RyaXAtY29sdW1uLWxpc3RcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAge2xpc3RTdWJJdGVtc31cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICBpbm5lckFyZWEgPSBzZWxmLnJlbmRlckNlbGwoaXRlbSwgaW5kZXgsIG51bGwpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPGxpIGtleT17aXRlbX0gY2xhc3NOYW1lPVwiY2VsbC1zdHJpcC1yb3ctbGlzdC1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgIHtpbm5lckFyZWF9XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB2YXIgcm9vdENsYXNzTmFtZSA9IHRoaXMucHJvcHMuY2xhc3NOYW1lIHx8IFwiXCI7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9e3Jvb3RDbGFzc05hbWUgKyBcIiBjZWxsLXN0cmlwLXJvdy1saXN0XCJ9PlxuICAgICAgICAgICAgICAgICAge2xpc3RJdGVtc31cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgIH0pO1xufTtcblxudmFyIENlbGxTdHJpcCA9IENlbGxTdHJpcFRlbXBsYXRlKFBsYWluQ2VsbChcIlwiLFwiXCIpKTtcblxuZXhwb3J0IHtDZWxsU3RyaXBUZW1wbGF0ZX1cbmV4cG9ydCB7UGxhaW5DZWxsfTtcbmV4cG9ydCB7Q2VsbFN0cmlwfTtcbiJdfQ==
