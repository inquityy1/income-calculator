"use strict";(self.webpackChunkmy_project=self.webpackChunkmy_project||[]).push([[565],{565:function(e,t,n){n.r(t),n.d(t,{default:function(){return d}});var l=n(885),a=n(791),s=n(470);function r(e,t){var n,l,a;if("grossIncome"===e)return a=((n=t)-(l=(n-n/100*25).toFixed(2))).toFixed(2),{gross:n=n.toFixed(2),net:l,tax:a};if("netIncome"===e)return a=((n=((l=t)+l/100*25).toFixed(2))-l).toFixed(2),{gross:n,net:l=l.toFixed(2),tax:a};throw Error("wrong type of income")}var o=n(609),c=n(649),i=n(184);function d(){var e=(0,a.useState)(0),t=(0,l.Z)(e,2),n=t[0],d=t[1],m=(0,a.useState)("weekly"),u=(0,l.Z)(m,2),x=u[0],h=u[1],p=(0,a.useState)(void 0),f=(0,l.Z)(p,2),y=f[0],g=f[1],b=(0,a.useState)(""),j=(0,l.Z)(b,2),v=j[0],N=j[1],w=(0,s.s0)(),I=function(){var e,t,l,a,s={};switch(s.frequency=x,s.incomeType=y,s.income=n,x){case"weekly":t=2*n,l=4*n+.025*n,a=12*(e=n),s.weeklyIncome=r(y,e),s.fortnightlyIncome=r(y,t),s.monthlyIncome=r(y,l),s.annuallyIncome=r(y,a);break;case"fortnightly":t=n,l=4*(e=n/2)+.025*e,a=12*e,s.weeklyIncome=r(y,e),s.fortnightlyIncome=r(y,t),s.monthlyIncome=r(y,l),s.annuallyIncome=r(y,a);break;case"monthly":e=n/4+.3,t=n/2+.3,l=n,a=12*n,s.weeklyIncome=r(y,e),s.fortnightlyIncome=r(y,t),s.monthlyIncome=r(y,l),s.annuallyIncome=r(y,a);break;case"annually":e=n/12/4+.3,t=n/12/2+.3,l=n/12,a=n,s.weeklyIncome=r(y,e),s.fortnightlyIncome=r(y,t),s.monthlyIncome=r(y,l),s.annuallyIncome=r(y,a);break;default:s={}}window.localStorage.setItem("salaryTotal",JSON.stringify(s)),s={}};return(0,i.jsx)("div",{className:"w-screen h-screen p-12 flex items-center justify-center bg-gradient-to-r from-pink-400 to-purple-600",children:(0,i.jsxs)("div",{className:"flex flex-col justify-center",children:[(0,i.jsx)(c.w,{}),(0,i.jsxs)("form",{onSubmit:function(e){e.preventDefault(),"grossIncome"===y||"netIncome"===y?(I(),w("/income-details")):N("Please choose the income type")},className:"w-full p-6 max-w-xl mx-auto bg-white rounded-xl shadow-lg flex flex-col ",children:[(0,i.jsx)("div",{className:"flex justify-end",children:(0,i.jsx)("button",{className:"flex justify-center bg-red-500 w-20 text-primary py-3 mb-4 rounded-xl transition delay-50 shadow-xl",onClick:function(e){e.preventDefault(),localStorage.clear(),d(0)},children:"Clear"})}),(0,i.jsx)(o.h,{}),(0,i.jsx)("h3",{className:"mt-5",children:"What is your total income?"}),(0,i.jsxs)("div",{className:"relative mt-3 mb-3 rounded-md shadow-sm",children:[(0,i.jsx)("div",{className:"pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3",children:(0,i.jsx)("span",{className:"text-gray-400 sm:text-sm",children:"$"})}),(0,i.jsx)("input",{className:"block w-full h-10 rounded-md border-gray-300 pl-7 pr-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm",type:"text",name:"income",id:"income",placeholder:"0.00",onChange:function(e){return d(Number(e.target.value))},value:n}),(0,i.jsx)("div",{className:"absolute inset-y-0 right-0 flex items-center",children:(0,i.jsxs)("select",{defaultValue:x,onChange:function(e){return h(e.target.value)},className:"h-full rounded-md border-transparent bg-purple-300 hover:bg-purple-400 py-0 pl-2 pr-7 text-gray-800 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm",children:[(0,i.jsx)("option",{defaultValue:!0,value:"weekly",className:"option",children:"Weekly"}),(0,i.jsx)("option",{value:"fortnightly",className:"option",children:"Fortnightly"}),(0,i.jsx)("option",{value:"monthly",className:"option",children:"Monthly"}),(0,i.jsx)("option",{value:"annually",className:"option",children:"Annually"})]})})]}),(0,i.jsx)("h3",{htmlFor:"price",className:"",children:"Please Choose the income type"}),(0,i.jsxs)("div",{className:"flex md:flex-row w-dull py-2 space-x-2 flex-col centered_inputs",children:[(0,i.jsxs)("div",{className:"relative mb-2 mt-2  ",children:[(0,i.jsx)("input",{type:"radio",name:"incomeType",id:"gross",className:"hidden peer",value:"grossIncome",onClick:function(){return g("grossIncome")}}),(0,i.jsx)("label",{htmlFor:"gross",className:"flex justify-center gap-4 p-4 px-16 rounded-xl bg-lime-400 bg-opacity-90 backdrop-blur-2xl shadow-xl hover:bg-opacity-75 peer-checked:bg-purple-900 peer-checked:text-white cursor-pointer transition",children:(0,i.jsx)("h1",{children:"Gross income"})}),(0,i.jsx)("div",{className:"flex absolute top-0 right-4 bottom-0 w-7 h-7 my-auto rounded-full bg-purple-700 scale-0 peer-checked:scale-100 transition delay-100"})]}),(0,i.jsxs)("div",{className:"relative mt-2 ",children:[(0,i.jsx)("input",{type:"radio",name:"incomeType",id:"net",className:"hidden peer",value:"netIncome",onClick:function(){return g("netIncome")}}),(0,i.jsx)("label",{htmlFor:"net",className:"flex justify-center gap-4 p-4 px-16 rounded-xl bg-lime-400 bg-opacity-90 backdrop-blur-2xl shadow-xl hover:bg-opacity-75 peer-checked:bg-purple-900 peer-checked:text-white cursor-pointer transition",children:(0,i.jsx)("h1",{children:"Net income"})}),(0,i.jsx)("div",{className:"flex absolute top-0 right-4 bottom-0 w-7 h-7 my-auto rounded-full bg-purple-700 scale-0 peer-checked:scale-100 transition delay-100"})]})]}),(0,i.jsx)("div",{className:"h-1 text-red-600 text-center",children:v}),(0,i.jsx)("div",{className:"flex flex-col my-4 mt-10 ",children:(0,i.jsx)("button",{className:"bg-btnbg hover:bg-indigo-800 text-primary px-8 py-3 mb-4 rounded-xl transition delay-50 shadow-xl",children:"Calculate"})})]})]})})}},609:function(e,t,n){n.d(t,{h:function(){return a}});var l=n(184),a=function(){var e=JSON.parse(localStorage.getItem("salaryTotal"));return(0,l.jsxs)("div",{className:"flex text-center justify-between p-5 bg-emerald-200 rounded-xl",children:[(0,l.jsxs)("div",{className:" flex text-center justify-end",children:[(0,l.jsx)("h3",{className:"mr-3 text-orange-900",children:"Income tax calculator"}),(0,l.jsx)("img",{alt:"img",className:"w-8 h-8",src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCw29KqZShHyfOtIW0VI-G9CC97LOKVzrfKQ&usqp=CAU"})]}),e?(0,l.jsx)("button",{className:"hover:bg-green-600 bg-green-500 text-primary px-5 text-sm md:text-md rounded-md transition delay-50 shadow-xl",children:"Download"}):null]})}},649:function(e,t,n){n.d(t,{w:function(){return a}});var l=n(184),a=function(){var e=1;return e="/"===window.location.pathname?1:0,(0,l.jsx)("div",{className:"ml-3",children:(0,l.jsxs)("ul",{className:"flex",children:[(0,l.jsx)("li",{className:"".concat(1===e?"active":"inactive"," mr-5 cursor-pointer rounded-t-lg px-5 text-xl  transition delay-50 shadow-xl"),children:(0,l.jsx)("a",{href:"/",className:"",children:"Income"})}),(0,l.jsx)("li",{className:"".concat(0===e?"active":"inactive"," rounded-t-lg cursor-pointer px-5 text-xl  transition delay-50 shadow-xl"),children:(0,l.jsx)("a",{href:"/income-details",className:"",children:"Income details"})})]})})}}}]);
//# sourceMappingURL=565.a056a778.chunk.js.map