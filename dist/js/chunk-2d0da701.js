(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0da701"],{"6c31":function(v,e,_){"use strict";_.r(e);var o=function(){var v=this;v._self._c;return v._m(0)},d=[function(){var v=this,e=v._self._c;return e("div",[e("h1",[v._v("Render 实例")]),e("p",[e("code",[v._v("render")]),v._v("实例负载整个渲染过程，可通过"),e("code",[v._v("mindMap.renderer")]),v._v("获取到。")]),e("h2",[v._v("属性")]),e("h3",[v._v("activeNodeList")]),e("p",[v._v("获取当前激活的节点列表。")]),e("h3",[v._v("root")]),e("p",[v._v("节点树，也就是思维导图节点实例树。")]),e("h3",[v._v("renderTree")]),e("p",[v._v("渲染树，也就是思维导图的数据树。")]),e("h3",[v._v("layout")]),e("p",[v._v("当前的布局实例。")]),e("h2",[v._v("方法")]),e("h3",[v._v("highlightNode(node, range)")]),e("blockquote",[e("p",[v._v("v0.9.0+")])]),e("ul",[e("li",[e("p",[e("code",[v._v("node")]),v._v("：要高亮的目标节点实例")])]),e("li",[e("p",[e("code",[v._v("range")]),v._v("：可选，Array，一个范围数组，[0, 1]")])])]),e("p",[v._v("高亮节点或子节点。如果"),e("code",[v._v("range")]),v._v("参数没有传递，那么直接高亮指定的"),e("code",[v._v("node")]),v._v("节点，如果"),e("code",[v._v("range")]),v._v("传递了一个要高亮的子节点的范围，那么会高亮该范围的子节点。")]),e("p",[v._v("高亮效果为通过一个矩形框来包裹，矩形的描边和填充样式可以通过"),e("code",[v._v("highlightNodeBoxStyle")]),v._v("实例化选项进行配置。")]),e("h3",[v._v("closeHighlightNode()")]),e("blockquote",[e("p",[v._v("v0.9.0+")])]),e("p",[v._v("隐藏节点高亮框。")]),e("h3",[v._v("setRootNodeCenter()")]),e("blockquote",[e("p",[v._v("v0.8.0+")])]),e("p",[v._v("回到中心主题，即设置根节点到画布中心。")]),e("h3",[v._v("setData(data)")]),e("blockquote",[e("p",[v._v("v0.7.3+")])]),e("p",[v._v("动态设置思维导图数据。")]),e("h3",[v._v("clearActive()")]),e("blockquote",[e("p",[v._v("v0.8.0+已废弃")])]),e("p",[v._v("清除当前激活的节点。")]),e("h3",[v._v("clearAllActive()")]),e("blockquote",[e("p",[v._v("v0.8.0+已废弃")])]),e("p",[v._v("清除当前所有激活节点，并会触发"),e("code",[v._v("node_active")]),v._v("事件 。")]),e("h3",[v._v("clearActiveNode()")]),e("blockquote",[e("p",[v._v("v0.8.0+")])]),e("p",[v._v("清除当前所有激活节点，并会触发"),e("code",[v._v("node_active")]),v._v("事件 。")]),e("h3",[v._v("clearActiveNodeList()")]),e("blockquote",[e("p",[v._v("v0.8.0+")])]),e("p",[v._v("清除当前激活的节点列表。不会触发"),e("code",[v._v("node_active")]),v._v("事件 。")]),e("h3",[v._v("startTextEdit()")]),e("blockquote",[e("p",[v._v("v0.1.6+")])]),e("p",[v._v("若有文字编辑需求可调用该方法，会禁用回车键和删除键相关快捷键防止冲突 。")]),e("h3",[v._v("endTextEdit()")]),e("blockquote",[e("p",[v._v("v0.1.6+")])]),e("p",[v._v("结束文字编辑，会恢复回车键和删除键相关快捷键。")]),e("h3",[v._v("addActiveNode(node)")]),e("blockquote",[e("p",[v._v("v0.8.0+已废弃")])]),e("p",[v._v("添加节点到激活列表里。")]),e("h3",[v._v("addNodeToActiveList(node)")]),e("blockquote",[e("p",[v._v("v0.8.0+")])]),e("p",[v._v("添加节点到激活列表里。")]),e("h3",[v._v("removeActiveNode(node)")]),e("blockquote",[e("p",[v._v("v0.8.0+已废弃")])]),e("p",[v._v("在激活列表里移除某个节点。")]),e("h3",[v._v("removeNodeFromActiveList(node)")]),e("blockquote",[e("p",[v._v("v0.8.0+")])]),e("p",[v._v("在激活列表里移除某个节点。")]),e("h3",[v._v("findActiveNodeIndex(node)")]),e("p",[v._v("检索某个节点在激活列表里的索引。")]),e("h3",[v._v("getNodeIndex(node)")]),e("p",[v._v("获取节点在同级里的位置索引。")]),e("h3",[v._v("setNodeDataRender(node, data, notRender)")]),e("ul",[e("li",[e("code",[v._v("notRender")]),v._v("：v0.6.9+，"),e("code",[v._v("Boolean")]),v._v("，默认为"),e("code",[v._v("false")]),v._v("，是否不要触发渲染。")])]),e("p",[v._v("设置节点数据，即"),e("code",[v._v("data")]),v._v("字段的数据，并会根据节点大小是否变化来判断是否需要重新渲染该节点，"),e("code",[v._v("data")]),v._v("为对象，如："),e("code",[v._v("{text: '我是新文本'}")]),v._v("。")]),e("h3",[v._v("moveNodeTo(node, toNode)")]),e("blockquote",[e("p",[v._v("v0.1.5+")])]),e("p",[v._v("移动一个节点作为另一个节点的子节点。")]),e("h3",[v._v("insertBefore(node, exist)")]),e("blockquote",[e("p",[v._v("v0.1.5+")])]),e("p",[v._v("将节点移动到另一个节点的前面。")]),e("h3",[v._v("insertAfter(node, exist)")]),e("blockquote",[e("p",[v._v("v0.1.5+")])]),e("p",[v._v("将节点移动到另一个节点的后面。")]),e("h3",[v._v("moveNodeToCenter(node)")]),e("blockquote",[e("p",[v._v("v0.2.17+")])]),e("p",[v._v("移动节点到画布中心。")]),e("p",[v._v("目前如果是存在缩放的情况下回到中心会重置缩放。")]),e("h3",[v._v("expandToNodeUid(uid, callback)")]),e("blockquote",[e("p",[v._v("v0.6.7+")])]),e("ul",[e("li",[e("p",[e("code",[v._v("uid")]),v._v("：节点 uid")])]),e("li",[e("p",[e("code",[v._v("callback")]),v._v("：展开完成的回调函数")])])]),e("p",[v._v("展开到指定 uid 的节点。")]),e("h3",[v._v("findNodeByUid(uid)")]),e("blockquote",[e("p",[v._v("v0.6.7+")])]),e("ul",[e("li",[e("code",[v._v("uid")]),v._v("：节点 uid")])]),e("p",[v._v("根据 uid 找到对应的节点实例。")]),e("h3",[v._v("copy()")]),e("blockquote",[e("p",[v._v("v0.6.8+")])]),e("p",[v._v("复制节点，调用该方法后会存储当前激活的节点数据，后续调用"),e("code",[v._v("paste()")]),v._v("方法时可以进行粘贴。")]),e("p",[v._v("如果浏览器及协议（https）支持"),e("code",[v._v("js")]),v._v("操作剪贴板数据，那么复制的节点数据也会同时添加到用户的剪贴板中。")]),e("h3",[v._v("cut()")]),e("blockquote",[e("p",[v._v("v0.6.8+")])]),e("p",[v._v("剪切节点，调用该方法后会剪切当前激活的节点，并且存储该节点数据，后续调用"),e("code",[v._v("paste()")]),v._v("方法时可以进行粘贴。")]),e("p",[v._v("如果浏览器及协议（https）支持"),e("code",[v._v("js")]),v._v("操作剪贴板数据，那么复制的节点数据也会同时添加到用户的剪贴板中。")]),e("h3",[v._v("paste()")]),e("blockquote",[e("p",[v._v("v0.6.8+")])]),e("p",[v._v("粘贴节点，在调用了"),e("code",[v._v("copy()")]),v._v("或"),e("code",[v._v("cut()")]),v._v("方法后可以调用该方法进行粘贴节点。")]),e("p",[v._v("如果浏览器及协议（https）支持"),e("code",[v._v("js")]),v._v("操作剪贴板数据，那么其他地方复制的数据也可以进行粘贴，比如你可以进行跨浏览器粘贴"),e("code",[v._v("simple-mind-map")]),v._v("节点，如果是非"),e("code",[v._v("simple-mind-map")]),v._v("节点数据，那么会提取出剪切板中的文本和图片进行粘贴，文本默认会粘贴为子节点，图片默认会添加到当前的节点中。")]),e("h3",[v._v("clearCache()")]),e("blockquote",[e("p",[v._v("v0.9.2+")])]),e("p",[v._v("清空节点缓存池。")]),e("h3",[v._v("emitNodeActiveEvent(node = null, activeNodeList = [...this.activeNodeList])")]),e("ul",[e("li",[e("p",[e("code",[v._v("node")]),v._v("：本次激活的节点")])]),e("li",[e("p",[e("code",[v._v("activeNodeList")]),v._v("：当前所有激活的节点")])])]),e("p",[v._v("派发节点激活事件，也就是触发"),e("code",[v._v("node_active")]),v._v("事件。")])])}],t={},c=t,p=_("2877"),i=Object(p["a"])(c,o,d,!1,null,null,null);e["default"]=i.exports}}]);