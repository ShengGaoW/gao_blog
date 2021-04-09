(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{386:function(o,t,i){"use strict";i.r(t);var e=i(19),a=Object(e.a)({},(function(){var o=this,t=o.$createElement,i=o._self._c||t;return i("ContentSlotsDistributor",{attrs:{"slot-key":o.$parent.slotKey}},[i("h1",{attrs:{id:"深入理解css外边距折叠-margin-collapse"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#深入理解css外边距折叠-margin-collapse"}},[o._v("#")]),o._v(" 深入理解CSS外边距折叠（margin collapse）")]),o._v(" "),i("h2",{attrs:{id:"概念"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#概念"}},[o._v("#")]),o._v(" 概念")]),o._v(" "),i("blockquote",[i("p",[o._v("In CSS, the adjoining margins of two or more boxes (which might or might not be siblings) can combine to form a single margin. Margins that combine this way are said to collapse, and the resulting combined margin is called a collapsed margin.")])]),o._v(" "),i("blockquote",[i("p",[o._v("在 css 中，两个或多个毗邻的普通流中的盒子（可能是父元素，也可能是兄弟元素）在垂直方向上的外边距会发生叠加，这种形成的外边距称之为"),i("strong",[o._v("外边距叠加")]),o._v("。")])]),o._v(" "),i("blockquote",[i("p",[o._v("关键字：毗邻、两个或多个、普通流、垂直方向")])]),o._v(" "),i("h3",{attrs:{id:"毗邻"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#毗邻"}},[o._v("#")]),o._v(" 毗邻")]),o._v(" "),i("blockquote",[i("p",[o._v("毗邻说明了他们的位置关系，没有被padding、border、clear和line box分隔开。")])]),o._v(" "),i("h3",{attrs:{id:"两个或多个"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#两个或多个"}},[o._v("#")]),o._v(" 两个或多个")]),o._v(" "),i("blockquote",[i("p",[o._v("两个或多个盒子是指元素之间的相互影响，单个元素不会存在外边距叠加的情况。")])]),o._v(" "),i("h3",{attrs:{id:"垂直方向"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#垂直方向"}},[o._v("#")]),o._v(" 垂直方向")]),o._v(" "),i("blockquote",[i("p",[o._v("只有垂直方向的外边距会发生外边距叠加。水平方向的外边距不存在叠加的情况。")])]),o._v(" "),i("h3",{attrs:{id:"普通流-in-flow"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#普通流-in-flow"}},[o._v("#")]),o._v(" 普通流（in flow）")]),o._v(" "),i("blockquote",[i("p",[o._v("out of flow 的解释\nAn element is called out of flow if it is floated, absolutely positioned, or is the root element.An element is called in-flow if it is not out-of-flow.\n"),i("strong",[o._v("只要不是float、absolutely positioned和root element时就是in flow。")])])]),o._v(" "),i("h2",{attrs:{id:"什么时候发生外边距叠加"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#什么时候发生外边距叠加"}},[o._v("#")]),o._v(" 什么时候发生外边距叠加")]),o._v(" "),i("p",[o._v("两种情况")]),o._v(" "),i("ol",[i("li",[o._v("父子外边距叠加。")]),o._v(" "),i("li",[o._v("兄弟外边距叠加。\nw3c 对毗邻的外边距的定义。")])]),o._v(" "),i("blockquote",[i("p",[o._v("Two margins are adjoining if and only if: - both belong to in-flow block-level boxes that participate in the same block formatting context - no line boxes, no clearance, no padding and no border separate them - both belong to vertically-adjacent box edges, i.e. form one of the following pairs:")])]),o._v(" "),i("p",[o._v("符合折叠的情况")]),o._v(" "),i("blockquote",[i("ol",[i("li",[o._v("top margin of a box and top margin of its first in-flow child")]),o._v(" "),i("li",[o._v("bottom margin of box and top margin of its next in-flow following sibling")]),o._v(" "),i("li",[o._v('bottom margin of a last in-flow child and bottom margin of its parent if the parent has "auto" computed height')]),o._v(" "),i("li",[o._v('top and bottom margins of a box that does not establish a new block formatting context and that has zero computed "min-height", zero or "auto" computed "height", and no in-flow children')])])]),o._v(" "),i("p",[o._v("从w3c的解释可以看出，为以下几种情况。")]),o._v(" "),i("ol",[i("li",[o._v("parent 的 marginTop 和他的在文档流中的 firstChild 的marginTop。")]),o._v(" "),i("li",[o._v("box 的 marginBottom 和他在文档流中的下一个 brotherBox 的marginTop。")]),o._v(" "),i("li",[o._v("在文档流中的 lastChild 的 marginBottom 和 parent 的marginBottom。parent的 height 属性为 'auto'。")]),o._v(" "),i("li",[o._v("单独一个 box 的 marginTop 和 marginBottom 的重叠。同时满足以下三个条件。\n"),i("ol",[i("li",[o._v("height 值为 0 或者 auto,或者 minHeight 值为0。")]),o._v(" "),i("li",[o._v("没有建立 BFC 区域。")]),o._v(" "),i("li",[o._v("没有"),i("strong",[o._v("普通流流")]),o._v("的 children。")])])])]),o._v(" "),i("h2",{attrs:{id:"如何避免外边距叠加"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#如何避免外边距叠加"}},[o._v("#")]),o._v(" 如何避免外边距叠加")]),o._v(" "),i("p",[o._v("只要破坏上面讲到的四个条件中的任何一个即可："),i("code",[o._v("毗邻")]),o._v("、"),i("code",[o._v("两个或多个")]),o._v("、"),i("code",[o._v("普通流")]),o._v("和"),i("code",[o._v("垂直方向")])]),o._v(" "),i("p",[o._v("w3c也对此做了总结")]),o._v(" "),i("blockquote",[i("ul",[i("li",[o._v("Margins between a floated box and any other box do not collapse (not even between a float and its in-flow children).")]),o._v(" "),i("li",[o._v('Margins of elements that establish new block formatting contexts (such as floats and elements with "overflow" other than "visible") do not collapse with their in-flow children.')]),o._v(" "),i("li",[o._v("Margins of absolutely positioned boxes do not collapse (not even with their in-flow children).")]),o._v(" "),i("li",[o._v("Margins of inline-block boxes do not collapse (not even with their in-flow children).")]),o._v(" "),i("li",[o._v("The bottom margin of an in-flow block-level element always collapses with the top margin of its next in-flow block-level sibling, unless that sibling has clearance.")]),o._v(" "),i("li",[o._v('The top margin of an in-flow block element collapses with its first in-flow block-level child"s top margin if the element has no top border, no top padding, and the child has no clearance.')]),o._v(" "),i("li",[o._v('The bottom margin of an in-flow block box with a "height" of "auto" and a "min-height" of zero collapses with its last in-flow block-level child"s bottom margin if the box has no bottom padding and no bottom border and the child"s bottom margin does not collapse with a top margin that has clearance.')]),o._v(" "),i("li",[o._v('A box"s own margins collapse if the "min-height" property is zero, and it has neither top or bottom borders nor top or bottom padding, and it has a "height" of either 0 or "auto", and it does not contain a line box, and all of its in-flow children"s margins (if any) collapse.')])])]),o._v(" "),i("p",[o._v("从w3c的解释可以看出，可以用以下几种方式解决。")]),o._v(" "),i("ol",[i("li",[o._v("浮动元素不会与任何元素发生叠加，包括它的子元素。")]),o._v(" "),i("li",[o._v("创建了 BFC 的元素（ overFlow 不为 visible ）不会和他普通流子元素发生重叠。")]),o._v(" "),i("li",[o._v("绝对定位的元素和其他任何元素不发生外边距叠加，也包括他的子元素。")]),o._v(" "),i("li",[o._v("inline-block 元素和其他任何元素之间不发生外边距叠加，也包括它的子元素。")]),o._v(" "),i("li",[o._v("普通流中的块级元素的 margin-bottom 永远和它相邻的下一个块级元素的margin-top 叠加，除非相邻的兄弟元素 clear。")]),o._v(" "),i("li",[o._v("普通流中的块级元素（没有 border-top、没有 padding-top）的 margin-top 和它的第一个普通流中的子元素（没有 clear ）发生margin-top 叠加。")]),o._v(" "),i("li",[o._v("普通流中的块级元素（ height 为 auto、min-height 为0、没有border-bottom、没有 padding-bottom）和它的最后一个普通流中的子元素（没有自身发生 margin 叠加或 clear）发生 margin-bottom 叠加。")]),o._v(" "),i("li",[o._v("普通流中的块级元素（ height 为 auto、min-height 为0、没有border-bottom、没有 padding-bottom）和它的最后一个普通流中的子元素（没有自身发生 margin 叠加或 clear）发生 margin-bottom叠加。")]),o._v(" "),i("li",[o._v("如果一个元素的 min-height为0、没有 border、没有 padding、高度为0或者 auto、不包含子元素，那么它自身的外边距会发生叠加")])])])}),[],!1,null,null,null);t.default=a.exports}}]);