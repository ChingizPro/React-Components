(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],{12:function(e,t,n){e.exports={App:"App_App__3LxpD",btn:"App_btn__3owv-",person:"App_person__3BDw2"}},17:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var o=n(1),r=n.n(o),s=n(11),c=n.n(s),i=(n(17),n(10)),a=n(7),p=n(3),l=n(4),d=n(6),u=n(5),b=n(12),g=n.n(b),h=n(8),j=n.n(h),x=function(e){return e.children},f=n(0),m=function(e,t){return function(n){return Object(f.jsx)("div",{className:t,children:Object(f.jsx)(e,Object(a.a)({},n))})}},k=function(e){if(e)return Object(f.jsx)("p",{children:e})},_=m(function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(e){var o;return Object(p.a)(this,n),(o=t.call(this,e)).inputElRef=r.a.createRef(),o}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.inputElRef.current.focus()}},{key:"render",value:function(){return console.log("%c [Person.js] render()","color: #0ff; background-color: #000; padding: 3px 5px; border-radius: 3px;"),Object(f.jsxs)(x,{children:[Object(f.jsx)("p",{className:j.a["text-t"],onClick:this.props.textClick,children:Object(f.jsxs)("i",{children:["I am ",this.props.name," and I'm ",this.props.age," years old!"]})}),k(this.props.children),Object(f.jsx)("input",{className:j.a.input,onChange:this.props.onChange,value:this.props.name,disabled:Boolean(!this.props.onChange),ref:this.inputElRef})]})}}]),n}(o.Component),j.a.person),v=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){return Object(p.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e=this;return console.log("%c [Persons.js] render()","color: #0ff; background-color: #000; padding: 3px 5px; border-radius: 3px;"),this.props.persons.map((function(t,n){return Object(f.jsx)(_,{textClick:e.props.clicked.bind(e,n),name:t.name,age:t.age,onChange:function(n){e.props.changed(n,t.id)}},t.id)}))}}]),n}(o.PureComponent),C=n(2),O=n.n(C),P=function(e){Object(o.useEffect)((function(){return setTimeout((function(){alert("[Cockpit.js] useEffect()")}),1e3),function(){console.log("%c [Cockpit.js] cleaning process in useState()","color: #f00; background: #300; font-weight: bold; padding: 3px 5px; border-radius: 3px;")}}),[]),console.log("%c [Cockpit.js] render()","color: #f0f; background-color: #000; padding: 3px 5px; border-radius: 3px;");var t=[];t=3===e.personsLength?[O.a.bold,O.a.triple]:2===e.personsLength?[O.a.bold,O.a.italic,O.a.double]:1===e.personsLength?[O.a.bold,O.a.single]:[O.a.text];var n=[O.a.toggler];return e.visible&&n.push(O.a.red),Object(f.jsxs)(x,{children:[Object(f.jsx)("h1",{style:{color:"aqua"},children:"A React App created with Components"},"el1"),Object(f.jsx)("p",{className:t.join(" "),style:{fontSize:18},children:"Just some text, nothing more"},"el2"),Object(f.jsx)("div",{style:{marginBottom:10},onClick:e.resetPersons,children:Object(f.jsx)("button",{className:O.a.btn,children:"Reset"})},"el3"),Object(f.jsx)("div",{children:Object(f.jsx)("button",{onClick:e.togglePersons,className:n.join(" "),children:"Toggle Persons"})},"el4")]})},y=r.a.memo(P),A=m(function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(e){var o;return Object(p.a)(this,n),(o=t.call(this,e)).state={persons:[{id:"tyuio",name:"John",age:22},{id:"dfghj",name:"Elizabeth",age:18},{id:"cvbmn",name:"Charles",age:16,ref:"focusedInput"}],otherState:"Some other value",personsVisible:!0,showCockpit:!0},o.inputChangeHandler=function(e,t){var n=o.state.persons.findIndex((function(e){return e.id===t})),r=Object(a.a)({},o.state.persons[n]);r.name=e.target.value;var s=Object(i.a)(o.state.persons);s[n]=r,o.setState({persons:s})},o.togglePersons=function(){var e=!o.state.personsVisible;o.setState({personsVisible:e})},o.deletePerson=function(e){var t=Object(i.a)(o.state.persons);t.splice(e,1),o.setState({persons:t})},o.resetPersons=function(){o.setState({persons:[{id:"tyuio",name:"John",age:22},{id:"dfghj",name:"Elizabeth",age:18},{id:"cvbmn",name:"Charles",age:16}]})},console.log("%c [App.js] constructor()","color: lime; background-color: #000; padding: 3px 5px; border-radius: 3px;"),o}return Object(l.a)(n,[{key:"componentDidMount",value:function(){console.log("%c [App.js] componentDidMount()","color: lime; background-color: #000; padding: 3px 5px; border-radius: 3px;")}},{key:"shouldComponentUpdate",value:function(){return console.log("%c [App.js] shouldComponentUpdate()","color: lime; background-color: #000; padding: 3px 5px; border-radius: 3px;"),!0}},{key:"getSnapshotBeforeUpdate",value:function(e,t){return console.log("%c [App.js] getSnapshotBeforeUpdate()","color: lime; background-color: #000; padding: 3px 5px; border-radius: 3px;"),null}},{key:"componentDidUpdate",value:function(){console.log("%c [App.js] componentDidUpdate()","color: lime; background-color: #000; padding: 3px 5px; border-radius: 3px;")}},{key:"componentWillUnmount",value:function(){console.log("%c [App.js] componentWillUnmount()","color: lime; background-color: #000; padding: 3px 5px; border-radius: 3px;")}},{key:"render",value:function(){var e=this;console.log("%c [App.js] render()","color: lime; background-color: #000; padding: 3px 5px; border-radius: 3px;");var t=null;return this.state.personsVisible&&(t=Object(f.jsx)("div",{children:Object(f.jsx)(v,{persons:this.state.persons,clicked:this.deletePerson,changed:this.inputChangeHandler})})),Object(f.jsxs)(x,{children:[Object(f.jsx)("button",{onClick:function(){e.setState({showCockpit:!1})},style:{backgroundColor:"red",color:"white",fontWeight:"bold",fontSize:18},children:"Remove Cockpit"}),this.state.showCockpit?Object(f.jsx)(y,{personsLength:this.state.persons.length,visible:this.state.personsVisible,resetPersons:this.resetPersons,togglePersons:this.togglePersons}):null,t]})}}],[{key:"getDerivedStateFromProps",value:function(e,t){return console.log("%c [App.js] getDerivedStateFromProps()","color: lime; background-color: #000; padding: 3px 5px; border-radius: 3px;"),null}}]),n}(o.Component),g.a.App),S=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,20)).then((function(t){var n=t.getCLS,o=t.getFID,r=t.getFCP,s=t.getLCP,c=t.getTTFB;n(e),o(e),r(e),s(e),c(e)}))};c.a.render(Object(f.jsx)(r.a.StrictMode,{children:Object(f.jsx)(A,{})}),document.getElementById("root")),S()},2:function(e,t,n){e.exports={toggler:"Cockpit_toggler__3Zskr",red:"Cockpit_red__ku-9w",btn:"Cockpit_btn__3CDvB",italic:"Cockpit_italic__3hRW0",triple:"Cockpit_triple__2dZ4e",double:"Cockpit_double__2R4xi",single:"Cockpit_single__3R26K",bold:"Cockpit_bold__rGy58",text:"Cockpit_text__3ZUqo"}},8:function(e,t,n){e.exports={person:"Person_person__1tH88",input:"Person_input__3a8D0","text-t":"Person_text-t__2bDfe",card:"Person_card__2djYH"}}},[[19,1,2]]]);
//# sourceMappingURL=main.7cbbf9cc.chunk.js.map