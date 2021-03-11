(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],{1:function(e,o,n){e.exports={toggler:"Cockpit_toggler__3Zskr",red:"Cockpit_red__ku-9w",btn:"Cockpit_btn__3CDvB",italic:"Cockpit_italic__3hRW0",triple:"Cockpit_triple__2dZ4e",double:"Cockpit_double__2R4xi",single:"Cockpit_single__3R26K",bold:"Cockpit_bold__rGy58",text:"Cockpit_text__3ZUqo"}},17:function(e,o,n){},19:function(e,o,n){"use strict";n.r(o);var t=n(2),s=n.n(t),r=n(6),c=n.n(r),i=(n(17),n(5)),a=n(11),l=n(7),p=n(8),d=n(12),u=n(10),g=n(9),b=n.n(g),x=n(3),h=n.n(x),j=n(0),f=function(e){if(e)return Object(j.jsx)("p",{children:e})},m=function(e){return console.log("%c [Person.js] render()","color: #0ff; background-color: #000; padding: 3px 5px; border-radius: 3px;"),Object(j.jsxs)("div",{className:h.a.person,children:[Object(j.jsx)("p",{className:h.a["text-t"],onClick:e.textClick,children:Object(j.jsxs)("i",{children:["I am ",e.name," and I'm ",e.age," years old!"]})}),f(e.children),Object(j.jsx)("input",{className:h.a.input,onChange:e.onChange,value:e.name,disabled:Boolean(!e.onChange)})]})},k=function(e){return console.log("%c [Persons.js] render()","color: #0ff; background-color: #000; padding: 3px 5px; border-radius: 3px;"),e.persons.map((function(o,n){return Object(j.jsx)(m,{textClick:e.clicked.bind(undefined,n),name:o.name,age:o.age,onChange:function(n){e.changed(n,o.id)}},o.id)}))},_=n(1),C=n.n(_),v=function(e){Object(t.useEffect)((function(){return setTimeout((function(){alert("[Cockpit.js] useEffect()")}),1e3),function(){console.log("%c [Cockpit.js] cleaning process in useState()","color: #f00; background: #300; font-weight: bold; padding: 3px 5px; border-radius: 3px;")}}),[]),Object(t.useEffect)((function(){return setTimeout((function(){alert("[Cockpit.js] 2nd useEffect()")}),1e3),function(){console.log("%c [Cockpit.js] 2nd cleaning process in useState()","color: #297; background: #010; font-weight: bold; padding: 3px 5px; border-radius: 3px;")}}),[e.persons]),console.log("%c [Cockpit.js] render()","color: #f0f; background-color: #000; padding: 3px 5px; border-radius: 3px;");var o=[];o=3===e.persons.length?[C.a.bold,C.a.triple]:2===e.persons.length?[C.a.bold,C.a.italic,C.a.double]:1===e.persons.length?[C.a.bold,C.a.single]:[C.a.text];var n=[C.a.toggler];return e.visible&&n.push(C.a.red),Object(j.jsxs)("div",{children:[Object(j.jsx)("h1",{style:{color:"aqua"},children:"A React App created with Components"}),Object(j.jsx)("p",{className:o.join(" "),style:{fontSize:18},children:"Just some text, nothing more"}),Object(j.jsx)("div",{style:{marginBottom:10},onClick:e.resetPersons,children:Object(j.jsx)("button",{className:C.a.btn,children:"Reset"})}),Object(j.jsx)("div",{children:Object(j.jsx)("button",{onClick:e.togglePersons,className:n.join(" "),children:"Toggle Persons"})})]})},O=function(e){Object(d.a)(n,e);var o=Object(u.a)(n);function n(e){var t;return Object(l.a)(this,n),(t=o.call(this,e)).state={persons:[{id:"tyuio",name:"John",age:22},{id:"dfghj",name:"Elizabeth",age:18},{id:"cvbmn",name:"Charles",age:16}],otherState:"Some other value",personsVisible:!0,showCockpit:!0},t.inputChangeHandler=function(e,o){var n=t.state.persons.findIndex((function(e){return e.id===o})),s=Object(a.a)({},t.state.persons[n]);s.name=e.target.value;var r=Object(i.a)(t.state.persons);r[n]=s,t.setState({persons:r})},t.togglePersons=function(){var e=!t.state.personsVisible;t.setState({personsVisible:e})},t.deletePerson=function(e){var o=Object(i.a)(t.state.persons);o.splice(e,1),t.setState({persons:o})},t.resetPersons=function(){t.setState({persons:[{id:"tyuio",name:"John",age:22},{id:"dfghj",name:"Elizabeth",age:18},{id:"cvbmn",name:"Charles",age:16}]})},console.log("%c [App.js] constructor()","color: lime; background-color: #000; padding: 3px 5px; border-radius: 3px;"),t}return Object(p.a)(n,[{key:"componentDidMount",value:function(){console.log("%c [App.js] componentDidMount()","color: lime; background-color: #000; padding: 3px 5px; border-radius: 3px;")}},{key:"shouldComponentUpdate",value:function(){return console.log("%c [App.js] shouldComponentUpdate()","color: lime; background-color: #000; padding: 3px 5px; border-radius: 3px;"),!0}},{key:"getSnapshotBeforeUpdate",value:function(e,o){return console.log("%c [App.js] getSnapshotBeforeUpdate()","color: lime; background-color: #000; padding: 3px 5px; border-radius: 3px;"),null}},{key:"componentDidUpdate",value:function(){console.log("%c [App.js] componentDidUpdate()","color: lime; background-color: #000; padding: 3px 5px; border-radius: 3px;")}},{key:"render",value:function(){var e=this;console.log("%c [App.js] render()","color: lime; background-color: #000; padding: 3px 5px; border-radius: 3px;");var o=null;return this.state.personsVisible&&(o=Object(j.jsx)("div",{children:Object(j.jsx)(k,{persons:this.state.persons,clicked:this.deletePerson,changed:this.inputChangeHandler})})),Object(j.jsxs)("div",{className:b.a.App,children:[Object(j.jsx)("button",{onClick:function(){e.setState({showCockpit:!1})},style:{backgroundColor:"red",color:"white",fontWeight:"bold",fontSize:18},children:"Remove Cockpit"}),this.state.showCockpit?Object(j.jsx)(v,{persons:this.state.persons,visible:this.state.personsVisible,resetPersons:this.resetPersons,togglePersons:this.togglePersons}):null,o]})}}],[{key:"getDerivedStateFromProps",value:function(e,o){return console.log("%c [App.js] getDerivedStateFromProps()","color: lime; background-color: #000; padding: 3px 5px; border-radius: 3px;"),null}}]),n}(t.Component),P=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,20)).then((function(o){var n=o.getCLS,t=o.getFID,s=o.getFCP,r=o.getLCP,c=o.getTTFB;n(e),t(e),s(e),r(e),c(e)}))};c.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(O,{})}),document.getElementById("root")),P()},3:function(e,o,n){e.exports={person:"Person_person__1tH88",input:"Person_input__3a8D0","text-t":"Person_text-t__2bDfe",card:"Person_card__2djYH"}},9:function(e,o,n){e.exports={App:"App_App__3LxpD",btn:"App_btn__3owv-",person:"App_person__3BDw2"}}},[[19,1,2]]]);
//# sourceMappingURL=main.5332e6e0.chunk.js.map