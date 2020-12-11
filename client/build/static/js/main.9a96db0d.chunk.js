(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{23:function(e,a,t){e.exports=t(49)},49:function(e,a,t){"use strict";t.r(a);var n=t(0),o=t.n(n),l=t(20),r=t.n(l),c=t(5),s=t(6),i=t(8),m=t(7),u=t(9),d=t(52),h=t(54),v=t(53),E=t(51);var p=function(){return o.a.createElement("div",null,o.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light"},o.a.createElement("h1",{className:"navbar-brand"},"Google Books"),o.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},o.a.createElement("span",{className:"navbar-toggler-icon"})),o.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},o.a.createElement("ul",{className:"navbar-nav mr-auto"},o.a.createElement("li",{className:"/search"===window.location.pathname?"active":""},o.a.createElement(E.a,{className:"nav-link",to:"/search"},"Search")),o.a.createElement("li",{className:"/"===window.location.pathname?"active":""},o.a.createElement(E.a,{className:"nav-link",to:"/"},"Saved"))),o.a.createElement("br",null))))};var b=function(){return o.a.createElement("div",{className:"row "},o.a.createElement("div",{className:"col-md-8 mx-auto"},o.a.createElement("div",{className:"jumbotron"},o.a.createElement("h1",{className:"display-4"},"(React) Google Book Search"),o.a.createElement("p",{className:"lead"},"Search for and Save Books of Interest"))))},f=t(10),k=t.n(f),g={search:function(e){return k.a.get("https://www.googleapis.com/books/v1/volumes?q="+e)},save:function(e){return console.log("bookData below"),console.log(e.title),k.a.post("/api/books",e)},getBooks:function(){return console.log("getBooks from API.js"),k.a.get("/api/books")},deleteBook:function(e){return console.log(e.id),k.a.delete("/api/books/"+e.id)}};var N=function(e){return o.a.createElement("div",{className:"card",key:e.id},o.a.createElement("div",{className:"card-body"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-md-9"},o.a.createElement("h1",{className:"card-title"},e.title),o.a.createElement("h3",{className:"card-subtitle mb-2 text-muted"},"by ",e.author)),o.a.createElement("div",{className:"col-md-3"},o.a.createElement("img",{src:e.img,alt:e.title}))),o.a.createElement("hr",null),o.a.createElement("div",{className:"row"},o.a.createElement("p",{className:"card-text"},e.synopsis)),o.a.createElement("a",{href:e.link,className:"card-text"},"Preview"),o.a.createElement("br",null),o.a.createElement("button",{className:"card-link",onClick:function(){return e.deleteBook(e)}},"Delete")))},w=function(e){function a(){var e,t;Object(c.a)(this,a);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(t=Object(i.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(o)))).state={books:[],title:"",author:"",synopsis:""},t.loadBooks=function(){g.getBooks().then(function(e){return t.setState({books:e.data,title:"",author:"",synopsis:""})}).catch(function(e){return console.log(e)})},t.deleteBook=function(e){console.log(e),g.deleteBook(e).then(function(e){return t.loadBooks()}).catch(function(e){return console.log(e)})},t}return Object(u.a)(a,e),Object(s.a)(a,[{key:"componentDidMount",value:function(){this.loadBooks()}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-md-9 mx-auto"},o.a.createElement("h1",null,"Saved Books"),this.state.books.map(function(a){return o.a.createElement("div",{className:"row",key:a._id},o.a.createElement("div",{className:"col-md-12 mx-auto"},o.a.createElement("br",null),o.a.createElement(N,{title:a.title,author:a.author,synopsis:a.synopsis,id:a._id,link:a.link,img:a.img,deleteBook:e.deleteBook})))})))}}]),a}(o.a.Component);var y=function(e){return o.a.createElement("div",{className:"card",key:e.id},o.a.createElement("div",{className:"card-body"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-md-9"},o.a.createElement("h1",{className:"card-title"},e.title),o.a.createElement("h3",{className:"card-subtitle mb-2 text-muted"},"by ",e.author)),o.a.createElement("div",{className:"col-md-3"},o.a.createElement("img",{src:e.img,alt:e.title}))),o.a.createElement("hr",null),o.a.createElement("div",{className:"row"},o.a.createElement("p",{className:"card-text"},e.synopsis)),o.a.createElement("a",{href:e.link,className:"card-text"},"Preview"),o.a.createElement("br",null),o.a.createElement("button",{className:"card-link",onClick:function(){return e.saveBook(e)}},"Save")))},B=function(e){function a(){var e,t;Object(c.a)(this,a);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(t=Object(i.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(o)))).state={search:"",books:[],title:"",author:"",synopsis:"",error:""},t.searchBooks=function(e){g.search(e).then(function(e){return t.setState({result:e.data})}).catch(function(e){return console.log(e)})},t.handleInputChange=function(e){t.setState({search:e.target.value}),console.log(t.state.search)},t.saveBook=function(e){g.save({title:e.title,author:e.author,synopsis:e.synopsis,link:e.link,img:e.img}).then(function(e){if(console.log(e.data.config),"error"===e.data.status)throw new Error(e.data.message);console.log("what now?"),console.log(e.data.config)}).catch(function(e){return console.log(e.response)})},t.handleFormSubmit=function(e){e.preventDefault(),g.search(t.state.search).then(function(e){if("error"===e.data.status)throw new Error(e.data.message);t.setState({books:e.data.items})}).catch(function(e){return t.setState({error:e.message})})},t}return Object(u.a)(a,e),Object(s.a)(a,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this;return o.a.createElement("div",null,o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-md-9 mx-auto"},o.a.createElement("h1",null,"Search Books by Title"),o.a.createElement("form",null,o.a.createElement("div",{className:"form-group"},o.a.createElement("input",{type:"text",className:"form-control",id:"titleSearch",placeholder:"Title",onChange:this.handleInputChange})),o.a.createElement("button",{type:"submit",className:"btn btn-primary",onClick:this.handleFormSubmit},"Submit")))),this.state.books.map(function(a){return o.a.createElement("div",{className:"row",key:a.id},o.a.createElement("div",{className:"col-md-6 mx-auto"},o.a.createElement("br",null),o.a.createElement(y,{title:a.volumeInfo.title,author:a.volumeInfo.authors,key:a.id,id:a.id,synopsis:a.volumeInfo.description,link:a.volumeInfo.previewLink,img:a.volumeInfo.imageLinks.thumbnail,saveBook:e.saveBook})))}))}}]),a}(o.a.Component);var S=function(){return o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-md-9"},o.a.createElement("h1",null,"No Match")))},x=function(e){function a(){return Object(c.a)(this,a),Object(i.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return o.a.createElement(d.a,null,o.a.createElement("div",{className:"container.fluid"},o.a.createElement(p,null),o.a.createElement(b,null),o.a.createElement(h.a,null,o.a.createElement(v.a,{exact:!0,path:"/",component:w}),o.a.createElement(v.a,{exact:!0,path:"/books",component:w}),o.a.createElement(v.a,{exact:!0,path:"/search",component:B}),o.a.createElement(v.a,{component:S}))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(x,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[23,1,2]]]);
//# sourceMappingURL=main.9a96db0d.chunk.js.map