(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],{1:function(e,t,n){e.exports={toggler:"Cockpit_toggler__3Zskr",red:"Cockpit_red__ku-9w",btn:"Cockpit_btn__3CDvB",italic:"Cockpit_italic__3hRW0",triple:"Cockpit_triple__2dZ4e",double:"Cockpit_double__2R4xi",single:"Cockpit_single__3R26K",bold:"Cockpit_bold__rGy58",text:"Cockpit_text__3ZUqo"}},17:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var s=n(2),o=n.n(s),i=n(6),r=n.n(i),a=(n(17),n(5)),c=n(11),l=n(7),p=n(8),d=n(12),u=n(10),b=n(9),h=n.n(b),g=n(3),j=n.n(g),_=n(0),m=function(e){if(e)return Object(_.jsx)("p",{children:e})},x=function(e){return Object(_.jsxs)("div",{className:j.a.person,children:[Object(_.jsx)("p",{className:j.a["text-t"],onClick:e.textClick,children:Object(_.jsxs)("i",{children:["I am ",e.name," and I'm ",e.age," years old!"]})}),m(e.children),Object(_.jsx)("input",{className:j.a.input,onChange:e.onChange,value:e.name,disabled:Boolean(!e.onChange)})]})},f=function(e){return e.persons.map((function(t,n){return Object(_.jsx)(x,{textClick:e.clicked.bind(undefined,n),name:t.name,age:t.age,onChange:function(n){e.changed(n,t.id)}},t.id)}))},v=n(1),C=n.n(v),O=function(e){var t=[];t=3===e.persons.length?[C.a.bold,C.a.triple]:2===e.persons.length?[C.a.bold,C.a.italic,C.a.double]:1===e.persons.length?[C.a.bold,C.a.single]:[C.a.text];var n=[C.a.toggler];return e.visible&&n.push(C.a.red),Object(_.jsxs)("div",{children:[Object(_.jsx)("h1",{style:{color:"aqua"},children:"A React App created with Components"}),Object(_.jsx)("p",{className:t.join(" "),style:{fontSize:18},children:"Just some text, nothing more"}),Object(_.jsx)("div",{style:{marginBottom:10},onClick:e.resetPersons,children:Object(_.jsx)("button",{className:C.a.btn,children:"Reset"})}),Object(_.jsx)("div",{children:Object(_.jsx)("button",{onClick:e.togglePersons,className:n.join(" "),children:"Toggle Persons"})})]})},k=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(l.a)(this,n);for(var s=arguments.length,o=new Array(s),i=0;i<s;i++)o[i]=arguments[i];return(e=t.call.apply(t,[this].concat(o))).state={persons:[{id:"tyuio",name:"John",age:22},{id:"dfghj",name:"Elizabeth",age:18},{id:"cvbmn",name:"Charles",age:16}],otherState:"Some other value",personsVisible:!0},e.inputChangeHandler=function(t,n){var s=e.state.persons.findIndex((function(e){return e.id===n})),o=Object(c.a)({},e.state.persons[s]);o.name=t.target.value;var i=Object(a.a)(e.state.persons);i[s]=o,e.setState({persons:i})},e.togglePersons=function(){var t=!e.state.personsVisible;e.setState({personsVisible:t})},e.deletePerson=function(t){var n=Object(a.a)(e.state.persons);n.splice(t,1),e.setState({persons:n})},e.resetPersons=function(){e.setState({persons:[{id:"tyuio",name:"John",age:22},{id:"dfghj",name:"Elizabeth",age:18},{id:"cvbmn",name:"Charles",age:16}]})},e}return Object(p.a)(n,[{key:"render",value:function(){var e=null;return this.state.personsVisible&&(e=Object(_.jsx)("div",{children:Object(_.jsx)(f,{persons:this.state.persons,clicked:this.deletePerson,changed:this.inputChangeHandler})})),Object(_.jsxs)("div",{className:h.a.App,children:[Object(_.jsx)(O,{persons:this.state.persons,visible:this.state.personsVisible,resetPersons:this.resetPersons,togglePersons:this.togglePersons}),e]})}}]),n}(s.Component),P=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,20)).then((function(t){var n=t.getCLS,s=t.getFID,o=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),s(e),o(e),i(e),r(e)}))};r.a.render(Object(_.jsx)(o.a.StrictMode,{children:Object(_.jsx)(k,{})}),document.getElementById("root")),P()},3:function(e,t,n){e.exports={person:"Person_person__1tH88",input:"Person_input__3a8D0","text-t":"Person_text-t__2bDfe",card:"Person_card__2djYH"}},9:function(e,t,n){e.exports={App:"App_App__3LxpD",btn:"App_btn__3owv-",person:"App_person__3BDw2"}}},[[19,1,2]]]);
//# sourceMappingURL=main.703c1f23.chunk.js.map