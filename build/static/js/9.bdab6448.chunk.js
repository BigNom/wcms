webpackJsonp([9],{513:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function o(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var c=n(0),l=n.n(c),i=n(576),u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),h=function(e){function t(){return r(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return o(t,e),u(t,[{key:"render",value:function(){var e=this.props.category;return l.a.createElement("tr",null,l.a.createElement("th",{colSpan:"2"},e))}}]),t}(l.a.Component),s=function(e){function t(){return r(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return o(t,e),u(t,[{key:"render",value:function(){var e=this.props.product,t=e.stocked?e.name:l.a.createElement("span",{style:{color:"red"}},e.name);return l.a.createElement("tr",null,l.a.createElement("td",null,t),l.a.createElement("td",null,e.price))}}]),t}(l.a.Component),p=function(e){function t(){return r(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return o(t,e),u(t,[{key:"render",value:function(){var e=this.props.filterText,t=this.props.inStockOnly,n=[],r=null;return this.props.products.forEach(function(a){-1!==a.name.indexOf(e)&&(t&&!a.stocked||(a.category!==r&&n.push(l.a.createElement(h,{category:a.category,key:a.category})),n.push(l.a.createElement(s,{product:a,key:a.name})),r=a.category))}),l.a.createElement("table",null,l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Name"),l.a.createElement("th",null,"Price"))),l.a.createElement("tbody",null,n))}}]),t}(l.a.Component),f=function(e){function t(e){r(this,t);var n=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.handleFilterTextChange=n.handleFilterTextChange.bind(n),n.handleInStockChange=n.handleInStockChange.bind(n),n}return o(t,e),u(t,[{key:"handleFilterTextChange",value:function(e){this.props.onFilterTextChange(e.target.value)}},{key:"handleInStockChange",value:function(e){this.props.onInStockChange(e.target.checked)}},{key:"render",value:function(){return l.a.createElement("form",null,l.a.createElement("input",{type:"text",placeholder:"Search...",value:this.props.filterText,onChange:this.handleFilterTextChange}),l.a.createElement("p",null,l.a.createElement("input",{type:"checkbox",checked:this.props.inStockOnly,onChange:this.handleInStockChange})," ","Only show products in stock"))}}]),t}(l.a.Component),y=function(e){function t(e){r(this,t);var n=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={filterText:"",inStockOnly:!1},n.handleFilterTextChange=n.handleFilterTextChange.bind(n),n.handleInStockChange=n.handleInStockChange.bind(n),n}return o(t,e),u(t,[{key:"handleFilterTextChange",value:function(e){this.setState({filterText:e})}},{key:"handleInStockChange",value:function(e){this.setState({inStockOnly:e})}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(f,{filterText:this.state.filterText,inStockOnly:this.state.inStockOnly,onFilterTextChange:this.handleFilterTextChange,onInStockChange:this.handleInStockChange}),l.a.createElement(p,{products:this.props.products,filterText:this.state.filterText,inStockOnly:this.state.inStockOnly}))}}]),t}(l.a.Component),d=function(e){function t(){return r(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return o(t,e),u(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("h1",null,"Poultry"),l.a.createElement(y,{products:i.a}))}}]),t}(c.Component);t.default=d},576:function(e,t,n){"use strict";var r=[{category:"POULTRY",name:"Chicken Drums",price:"50",stocked:"true"},{category:"POULTRY",name:"Chicken Breast",price:"8",stocked:"true"},{category:"POULTRY",name:"Chicken Whole",price:"8 per bird",stocked:"true"},{category:"POULTRY",name:"Chicken Wings",price:"4",stocked:"true"},{category:"POULTRY",name:"Chicken Thigh",price:"10.5",stocked:"true"},{category:"POULTRY",name:"Chicken Frames",price:"4 3 per bag",stocked:"true"},{category:"POULTRY",name:"Chicken Maryland",price:"8.5",stocked:"true"}];t.a=r}});
//# sourceMappingURL=9.bdab6448.chunk.js.map