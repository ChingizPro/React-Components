(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],{1:function(e,t,n){e.exports={App:"App_App__3LxpD",btn:"App_btn__3owv-",toggler:"App_toggler__3ZE3R",red:"App_red__1ai1-",italic:"App_italic__2D_nz",triple:"App_triple__2FJuP",double:"App_double__3CxET",single:"App_single__1VBY6",bold:"App_bold__1DVFJ",text:"App_text__Q5mEr",person:"App_person__3BDw2"}},16:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var s=n(2),a=n.n(s),i=n(6),r=n.n(i),o=(n(16),n(5)),c=n(10),l=n(7),p=n(8),d=n(11),u=n(9),h=n(1),b=n.n(h),g=n(3),j=n.n(g),_=n(0),m=function(e){if(e)return Object(_.jsx)("p",{children:e})},x=function(e){return Object(_.jsxs)("div",{className:j.a.person,children:[Object(_.jsx)("p",{className:j.a["text-t"],onClick:e.textClick,children:Object(_.jsxs)("i",{children:["I am ",e.name," and I'm ",e.age," years old!"]})}),m(e.children),Object(_.jsx)("input",{className:j.a.input,onChange:e.onChange,value:e.name,disabled:Boolean(!e.onChange)})]})},f=function(e){return e.persons.map((function(t,n){return Object(_.jsx)(x,{textClick:e.clicked.bind(undefined,n),name:t.name,age:t.age,onChange:function(n){e.changed(n,t.id)}},t.id)}))},O=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(l.a)(this,n);for(var s=arguments.length,a=new Array(s),i=0;i<s;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={persons:[{id:"tyuio",name:"John",age:22},{id:"dfghj",name:"Elizabeth",age:18},{id:"cvbmn",name:"Charles",age:16}],otherState:"Some other value",personsVisible:!0},e.inputChangeHandler=function(t,n){var s=e.state.persons.findIndex((function(e){return e.id===n})),a=Object(c.a)({},e.state.persons[s]);a.name=t.target.value;var i=Object(o.a)(e.state.persons);i[s]=a,e.setState({persons:i})},e.togglePersons=function(){var t=!e.state.personsVisible;e.setState({personsVisible:t})},e.deletePerson=function(t){var n=Object(o.a)(e.state.persons);n.splice(t,1),e.setState({persons:n})},e.resetPersons=function(){e.setState({persons:[{id:"tyuio",name:"John",age:22},{id:"dfghj",name:"Elizabeth",age:18},{id:"cvbmn",name:"Charles",age:16}]})},e}return Object(p.a)(n,[{key:"render",value:function(){var e=null,t=[b.a.toggler];this.state.personsVisible&&(e=Object(_.jsx)("div",{children:Object(_.jsx)(f,{persons:this.state.persons,clicked:this.deletePerson,changed:this.inputChangeHandler})}),t.push(b.a.red));var n=[];return n=3===this.state.persons.length?[b.a.bold,b.a.triple]:2===this.state.persons.length?[b.a.bold,b.a.italic,b.a.double]:1===this.state.persons.length?[b.a.bold,b.a.single]:[b.a.text],Object(_.jsxs)("div",{className:b.a.App,children:[Object(_.jsx)("h1",{style:{color:"aqua"},children:"A React App created with Components"}),Object(_.jsx)("p",{className:n.join(" "),style:{fontSize:18},children:"Just some text, nothing more"}),Object(_.jsx)("div",{style:{marginBottom:10},onClick:this.resetPersons,children:Object(_.jsx)("button",{className:b.a.btn,children:"Reset"})}),Object(_.jsx)("div",{children:Object(_.jsx)("button",{className:t.join(" "),onClick:this.togglePersons,children:"Toggle Persons"})}),e]})}}]),n}(s.Component),v=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(t){var n=t.getCLS,s=t.getFID,a=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),s(e),a(e),i(e),r(e)}))};r.a.render(Object(_.jsx)(a.a.StrictMode,{children:Object(_.jsx)(O,{})}),document.getElementById("root")),v()},3:function(e,t,n){e.exports={person:"Person_person__1tH88",input:"Person_input__3a8D0","text-t":"Person_text-t__2bDfe",card:"Person_card__2djYH"}}},[[18,1,2]]]);
//# sourceMappingURL=main.c0782c6c.chunk.js.map