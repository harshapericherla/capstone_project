(window.webpackJsonp=window.webpackJsonp||[]).push([[0],Array(19).concat([function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.FETCH_JOBS="fetch_jobs",t.FETCH_PAGINATION="fetch_pagination",t.SEARCH_FILTER="search_filter",t.SELECT_JOB="select_job",t.IS_LOGGED_IN="logged_in"},,,,,function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.GET_APPLICANTS=t.JOBS_POSTED=t.JOBS_APPLIED=t.JOB_APPLIED=t.GET_JOBS=void 0;var n,l=d(["\nquery jobQuery(\n  $searchInput:JobInput\n){\n  jobs(searchInput:$searchInput){\n     jobs {\n      _id\n      name\n      location\n      type\n      description\n      companyName\n      roles\n      responsibilities\n      posted_by\n      {\n        _id\n        name\n      }\n      postedDate\n    }\n    pages\n  }\n}\n"],["\nquery jobQuery(\n  $searchInput:JobInput\n){\n  jobs(searchInput:$searchInput){\n     jobs {\n      _id\n      name\n      location\n      type\n      description\n      companyName\n      roles\n      responsibilities\n      posted_by\n      {\n        _id\n        name\n      }\n      postedDate\n    }\n    pages\n  }\n}\n"]),r=d(["\nquery jobApplied(\n  $jobId:String!\n){\n  jobApplied(jobId:$jobId){\n    isApplied\n  }\n}\n"],["\nquery jobApplied(\n  $jobId:String!\n){\n  jobApplied(jobId:$jobId){\n    isApplied\n  }\n}\n"]),o=d(["\nquery jobsApplied{\n  appliedJobs{\n    jobs\n    {\n      _id\n      resumeLink\n      job{\n        _id\n        name\n        location\n        type\n        description\n        companyName\n        roles\n        responsibilities\n        postedDate\n      }\n      appliedDate\n    }\n  }\n}\n"],["\nquery jobsApplied{\n  appliedJobs{\n    jobs\n    {\n      _id\n      resumeLink\n      job{\n        _id\n        name\n        location\n        type\n        description\n        companyName\n        roles\n        responsibilities\n        postedDate\n      }\n      appliedDate\n    }\n  }\n}\n"]),u=d(["\nquery jobsPosted{\n  jobsPosted{\n    jobs\n    {\n        _id\n        name\n        location\n        type\n        description\n        companyName\n        postedDate\n    }\n  }\n}\n"],["\nquery jobsPosted{\n  jobsPosted{\n    jobs\n    {\n        _id\n        name\n        location\n        type\n        description\n        companyName\n        postedDate\n    }\n  }\n}\n"]),i=d(["\nquery getapplciants($jobId:String!){\n  postedJobsUsers(jobId:$jobId){\n    users\n    {\n        user{\n          _id\n          name\n          email\n        }\n        resumeLink\n    }\n  }\n}\n"],["\nquery getapplciants($jobId:String!){\n  postedJobsUsers(jobId:$jobId){\n    users\n    {\n        user{\n          _id\n          name\n          email\n        }\n        resumeLink\n    }\n  }\n}\n"]),s=a(57),c=(n=s)&&n.__esModule?n:{default:n};function d(e,t){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}t.GET_JOBS=(0,c.default)(l),t.JOB_APPLIED=(0,c.default)(r),t.JOBS_APPLIED=(0,c.default)(o),t.JOBS_POSTED=(0,c.default)(u),t.GET_APPLICANTS=(0,c.default)(i)},,,,,,,,,,,,,,function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.APPLY_JOB=t.CREATE_JOB=t.LOGIN_USER=t.REGISTER_USER=void 0;var n,l=c(["\n    mutation registerUser($userInput: UserInput){\n        register(userInput:$userInput){\n            isRegistered\n        }\n    }\n"],["\n    mutation registerUser($userInput: UserInput){\n        register(userInput:$userInput){\n            isRegistered\n        }\n    }\n"]),r=c(["\nmutation loginUser($userInput: UserInput){\n    login(userInput:$userInput){\n        token\n    }\n}\n"],["\nmutation loginUser($userInput: UserInput){\n    login(userInput:$userInput){\n        token\n    }\n}\n"]),o=c(["\nmutation createJobMutation($createJobInput: CreateJobInput){\n    createJob(createJobInput:$createJobInput){\n        success\n    }\n}\n"],["\nmutation createJobMutation($createJobInput: CreateJobInput){\n    createJob(createJobInput:$createJobInput){\n        success\n    }\n}\n"]),u=c(["\nmutation applyJobMutation($file: Upload!,$jobId: String!){\n    applyJob(file:$file,jobId:$jobId){\n        success\n    }\n}\n"],["\nmutation applyJobMutation($file: Upload!,$jobId: String!){\n    applyJob(file:$file,jobId:$jobId){\n        success\n    }\n}\n"]),i=a(57),s=(n=i)&&n.__esModule?n:{default:n};function c(e,t){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}t.REGISTER_USER=(0,s.default)(l),t.LOGIN_USER=(0,s.default)(r),t.CREATE_JOB=(0,s.default)(o),t.APPLY_JOB=(0,s.default)(u)},,,,,,,,,,,,function(e,t,a){},,,,,,,,,function(e,t,a){},,,,,,,function(e,t,a){"use strict";var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e};a(67);var l=v(a(1)),r=v(a(48)),o=a(26),u=a(115),i=a(74),s=a(12),c=a(21),d=a(42),f=v(a(78)),p=v(a(84)),m=v(a(85)),E=a(109);function v(e){return e&&e.__esModule?e:{default:e}}var b=new u.InMemoryCache,y=new E.createUploadLink({uri:"/graphql"}),h=(0,i.setContext)((function(e,t){var a=t.headers,l=localStorage.getItem("token");return{headers:n({},a,{authorization:l?"Bearer "+l:""})}})),g=new o.ApolloClient({link:h.concat(y),cache:b}),_=(0,d.createStore)(f.default,{},(0,d.applyMiddleware)(p.default));r.default.render(l.default.createElement(c.Provider,{store:_},l.default.createElement(s.ApolloProvider,{client:g},l.default.createElement(m.default,null))),document.getElementById("root"))},function(e,t,a){},,,,,,,,,,,function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(42),l=s(a(79)),r=s(a(80)),o=s(a(81)),u=s(a(82)),i=s(a(83));function s(e){return e&&e.__esModule?e:{default:e}}t.default=(0,n.combineReducers)({auth:i.default,jobs:l.default,pagination:r.default,searchFilter:o.default,selectJob:u.default})},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments[1];switch(t.type){case n.FETCH_JOBS:return t.payload||!1;default:return e}};var n=a(19)},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments[1];switch(t.type){case n.FETCH_PAGINATION:return t.payload||!1;default:return e}};var n=a(19)},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments[1];switch(t.type){case n.SEARCH_FILTER:return t.payload||!1;default:return e}};var n=a(19)},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments[1];switch(t.type){case n.SELECT_JOB:return t.payload||!1;default:return e}};var n=a(19)},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments[1];switch(t.type){case n.IS_LOGGED_IN:return t.payload||!1;default:return e}};var n=a(19)},,function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),l=a(86),r=a(98),o=a(1),u=v(o),i=a(39),s=v(a(99)),c=v(a(101)),d=a(102),f=a(103),p=a(105),m=a(106),E=a(107);function v(e){return e&&e.__esModule?e:{default:e}}function b(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function y(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var h=function(e){function t(){return b(this,t),y(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),n(t,[{key:"render",value:function(){return u.default.createElement("div",null,u.default.createElement(i.BrowserRouter,null,u.default.createElement(o.Fragment,null,u.default.createElement(s.default,null),u.default.createElement(i.Route,{exact:!0,path:"/login",component:c.default}),u.default.createElement(i.Route,{exact:!0,path:"/applyjob",component:f.ApplyJob}),u.default.createElement(i.Route,{exact:!0,path:"/createjob",component:r.CreateJob}),u.default.createElement(i.Route,{exact:!0,path:"/appliedjobs",component:p.JobsApplied}),u.default.createElement(i.Route,{exact:!0,path:"/jobsPosted",component:m.JobsPosted}),u.default.createElement(i.Route,{exact:!0,path:"/",component:l.Jobs}),u.default.createElement(i.Route,{exact:!0,path:"/register",component:d.Register}),u.default.createElement(i.Route,{exact:!0,path:"/listofapplicants/:jobId",component:E.ShowApplicants}))))}}]),t}(o.Component);t.default=h},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Jobs=void 0,a(50),a(87),a(88);var n,l=a(89),r=a(91),o=a(1),u=(n=o)&&n.__esModule?n:{default:n},i=a(92),s=a(94),c=a(58),d=a(21),f=a(19);t.Jobs=function(e){var t=(0,d.useDispatch)();return(0,o.useLayoutEffect)((function(){var a=void 0;if(e.location.search&&(a=(0,c.parse)(e.location.search)).token){var n=decodeURIComponent(a.token);localStorage.setItem("token",n)}var l=localStorage.getItem("token");l&&l.length>0&&(t({type:f.IS_LOGGED_IN,payload:{isLoggedIn:!0}}),e.history.push("/")),t({type:f.SELECT_JOB,payload:{}})}),[]),u.default.createElement(o.Fragment,null,u.default.createElement(i.Search,null),u.default.createElement("div",{id:"flexContent"},u.default.createElement("div",{class:"flexRow"},u.default.createElement("div",{id:"pagination"},u.default.createElement(r.JobsList,e)),u.default.createElement(l.JobDetails,null)),u.default.createElement("div",{id:"pagination",class:"abc"},u.default.createElement(s.JobsPagination,null))))}},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.JobDetails=void 0;var n,l=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var a=[],n=!0,l=!1,r=void 0;try{for(var o,u=e[Symbol.iterator]();!(n=(o=u.next()).done)&&(a.push(o.value),!t||a.length!==t);n=!0);}catch(e){l=!0,r=e}finally{try{!n&&u.return&&u.return()}finally{if(l)throw r}}return a}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")},r=a(1),o=(n=r)&&n.__esModule?n:{default:n},u=a(21),i=a(39),s=a(24),c=a(12);t.JobDetails=function(){var e=(0,i.useHistory)(),t=(0,u.useSelector)((function(e){return e.selectJob})),a=(0,c.useLazyQuery)(s.JOB_APPLIED,{fetchPolicy:"no-cache"}),n=l(a,2),d=n[0],f=n[1].data,p=(0,r.useState)(""),m=l(p,2),E=m[0],v=m[1];(0,r.useLayoutEffect)((function(){v("")}),[]),t&&t._id&&t._id!=E&&(d({variables:{jobId:t._id}}),v(t._id));var b="";return b=f&&f.jobApplied&&f.jobApplied.isApplied?o.default.createElement("button",{type:"button"},"Applied"):o.default.createElement("button",{type:"button",onClick:function(){var t=localStorage.getItem("token");t&&t.length>0?e.push("/applyjob"):e.push("/login?redirectUrl=applyjob")}},"Apply Now"),t&&Object.keys(t).length>0?o.default.createElement("div",{class:"showJobContent"},o.default.createElement("div",{id:"stickyContent"},o.default.createElement("span",{class:"jobName"},o.default.createElement("h1",null,t.name)),o.default.createElement("span",{class:"companyName"},o.default.createElement("p",null,t.companyName)),o.default.createElement("span",{class:"location"},o.default.createElement("span",{class:"fa fa-map-marker"}),o.default.createElement("p",null,t.location))),o.default.createElement("div",{id:"content2"},o.default.createElement("h2",null,"Job Details"),o.default.createElement("h3",null,"Job Type"),o.default.createElement("span",{class:"jobType"},o.default.createElement("p",null,t.type))),o.default.createElement("hr",null),o.default.createElement("h3",null,"Full Job Description"),o.default.createElement("p",null,t.description),o.default.createElement("h3",null,"Responsibiltes:"),o.default.createElement("ul",null,t.responsibilities&&t.responsibilities.length>0&&t.responsibilities.map((function(e){return o.default.createElement("li",null,e)}))),o.default.createElement("h3",null,"Skills and Qualifications:"),o.default.createElement("ul",null,t.roles&&t.roles.length>0&&t.roles.map((function(e){return o.default.createElement("li",null,e)}))),o.default.createElement("div",{class:"stickyContent"},b)):o.default.createElement("div",null)}},,function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.JobsList=void 0;var n,l=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var a=[],n=!0,l=!1,r=void 0;try{for(var o,u=e[Symbol.iterator]();!(n=(o=u.next()).done)&&(a.push(o.value),!t||a.length!==t);n=!0);}catch(e){l=!0,r=e}finally{try{!n&&u.return&&u.return()}finally{if(l)throw r}}return a}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")},r=a(1),o=(n=r)&&n.__esModule?n:{default:n},u=a(12),i=a(24),s=a(21),c=a(19);t.JobsList=function(){var e=(0,r.useState)(!1),t=l(e,2),a=t[0],n=t[1],d=(0,s.useSelector)((function(e){return e.jobs})).jobs,f=(0,s.useDispatch)(),p=parseInt("5"),m=(0,u.useLazyQuery)(i.GET_JOBS,{fetchPolicy:"no-cache"}),E=l(m,2),v=E[0],b=E[1].data;(0,r.useLayoutEffect)((function(){f({type:c.SEARCH_FILTER,payload:{filter:{}}}),f({type:c.SELECT_JOB,payload:{}}),v({variables:{searchInput:{pageNum:1,pageLimit:p,searchTxt:""}}})}),[]),!a&&b&&b.jobs&&(n(!0),f({type:c.FETCH_JOBS,payload:b.jobs}),f({type:c.FETCH_PAGINATION,payload:{pagination:b.jobs.pages}}));var y=["#CD5C5C","#90EE90","#FFA07A","#778899","#BA55D3","#7B68EE","#9370DB","#C71585","#191970","#6B8E23","#DB7093","#FA8072"];return o.default.createElement(r.Fragment,null,o.default.createElement("div",null,d&&d.map((function(e){return o.default.createElement("div",{class:"listContent",onClick:function(){return f({type:c.SELECT_JOB,payload:e})}},o.default.createElement("div",{id:"cards"},o.default.createElement("div",{class:"flex-card"},o.default.createElement("div",{id:"circle"},o.default.createElement("div",{class:"circle",style:{"background-color":(t=e.companyName.charCodeAt(0),a=e.companyName.charCodeAt(1),y[(t+a)%y.length-1])}},o.default.createElement("span",null,e.companyName.substring(0,1).toUpperCase())),o.default.createElement("div",{class:"name"},o.default.createElement("p",null,e.companyName),o.default.createElement("div",{class:"location"},o.default.createElement("span",{class:"fa fa-location-arrow"}),o.default.createElement("p",null,e.location)))),o.default.createElement("div",{class:"short-description"},o.default.createElement("span",{class:"role"},e.name),o.default.createElement("span",{class:"desc"},e.description)),o.default.createElement("hr",null),o.default.createElement("div",{class:"type"},o.default.createElement("span",{class:"fa fa-suitcase"}),o.default.createElement("span",{class:"jobtype"},e.type),o.default.createElement("span",{class:"fa fa-clock-o"}),o.default.createElement("span",{class:"time"},function(e){var t=new Date,a=new Date(e);if(e){var n=Math.abs(t-a),l=Math.floor(n/6e4);if(l>=60){var r=Math.floor(l/60);if(r>=24){var o=Math.floor(r/24);return 1==o?"Posted "+o+" day ago":"Posted "+o+" days ago"}return 1==r?"Posted "+r+" hour ago":"Posted "+r+" hours ago"}return l<1?"Posted "+Math.floor(n/1e3)+" seconds ago":1==l?"Posted "+l+" minute ago":"Posted "+l+" minutes ago"}return" "}(e.postedDate))))));var t,a}))))}},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Search=void 0;var n,l=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var a=[],n=!0,l=!1,r=void 0;try{for(var o,u=e[Symbol.iterator]();!(n=(o=u.next()).done)&&(a.push(o.value),!t||a.length!==t);n=!0);}catch(e){l=!0,r=e}finally{try{!n&&u.return&&u.return()}finally{if(l)throw r}}return a}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")},r=a(1),o=(n=r)&&n.__esModule?n:{default:n},u=a(40),i=a(19),s=a(21),c=a(24);t.Search=function(){var e=parseInt("5"),t=(0,r.useState)(""),a=l(t,2),n=a[0],d=a[1],f=(0,r.useState)(""),p=l(f,2),m=p[0],E=p[1],v=(0,r.useState)(!1),b=l(v,2),y=b[0],h=b[1],g=(0,u.useLazyQuery)(c.GET_JOBS,{fetchPolicy:"no-cache"}),_=l(g,2),j=_[0],I=_[1].data,P=(0,s.useDispatch)();return y!=I&&I&&I.jobs&&(h(I),P({type:i.FETCH_JOBS,payload:I.jobs}),P({type:i.FETCH_PAGINATION,payload:{pagination:I.jobs.pages,pageActive:1}}),P({type:i.SEARCH_FILTER,payload:{filter:{searchValue:n,searchLocation:m}}}),P({type:i.SELECT_JOB,payload:{}})),o.default.createElement("div",{id:"search"},o.default.createElement("div",{class:"search"},o.default.createElement("h2",null,"What"),o.default.createElement("h4",null,"job title,company or keywords"),o.default.createElement("span",{class:"fa fa-search"}),o.default.createElement("input",{type:"text",name:"search",autocomplete:"off",onChange:function(e){return d(e.target.value)},value:n,placeholder:"job title,company or keywords"})),o.default.createElement("div",{class:"search"},o.default.createElement("h2",null,"Where"),o.default.createElement("h4",null,"city or province"),o.default.createElement("span",{class:"fa fa-map-marker"}),o.default.createElement("input",{type:"text",name:"search",autocomplete:"off",placeholder:"city or province",onChange:function(e){return E(e.target.value)},value:m})),o.default.createElement("button",{type:"button",onClick:function(){return j({variables:{searchInput:{pageNum:1,pageLimit:e,searchTxt:n,searchLocation:m}}}),void h({})}},"Find Jobs"))}},,function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.JobsPagination=void 0;var n,l=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var a=[],n=!0,l=!1,r=void 0;try{for(var o,u=e[Symbol.iterator]();!(n=(o=u.next()).done)&&(a.push(o.value),!t||a.length!==t);n=!0);}catch(e){l=!0,r=e}finally{try{!n&&u.return&&u.return()}finally{if(l)throw r}}return a}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")},r=a(1),o=(n=r)&&n.__esModule?n:{default:n},u=a(21),i=a(12),s=a(24),c=a(19);t.JobsPagination=function(){var e=(0,r.useState)(!1),t=l(e,2),a=t[0],n=t[1],d=parseInt("5"),f=(0,u.useSelector)((function(e){return e.pagination})),p=f.pagination,m=f.pageActive,E=(0,u.useSelector)((function(e){return e.searchFilter})).filter,v=(0,u.useDispatch)(),b=(0,i.useLazyQuery)(s.GET_JOBS,{fetchPolicy:"no-cache"}),y=l(b,2),h=y[0],g=y[1].data,_=function(e,t){e.preventDefault();var a=m||1,n=void 0;"left"===t&&a>0?n=a-1:"right"===t&&a<p&&(n=a+1),n&&n!=a&&j(e,n)},j=function(e,t){var a=E.searchValue,l=E.searchLocation;n({}),v({type:c.FETCH_PAGINATION,payload:{pagination:p,pageActive:t}}),h({variables:{searchInput:{pageNum:t,pageLimit:d,searchTxt:a=a||"",searchLocation:l=l||""}}})};g!=a&&g&&g.jobs&&(n(g),v({type:c.FETCH_JOBS,payload:g.jobs}),v({type:c.SELECT_JOB,payload:{}}));var I=[],P=m||1;if(p)for(var S=function(e){I.push(o.default.createElement("a",{href:"#",className:P==e?"active":"",onClick:function(t){return j(t,e)}},e))},w=1;w<=p;w++)S(w);return o.default.createElement("div",{class:"pagination"},o.default.createElement("a",{href:"#",onClick:function(e){return _(e,"left")}},"«"),I,o.default.createElement("a",{href:"#",onClick:function(e){return _(e,"right")}},"»"))}},,,,function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CreateJob=void 0;var n,l=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var a=[],n=!0,l=!1,r=void 0;try{for(var o,u=e[Symbol.iterator]();!(n=(o=u.next()).done)&&(a.push(o.value),!t||a.length!==t);n=!0);}catch(e){l=!0,r=e}finally{try{!n&&u.return&&u.return()}finally{if(l)throw r}}return a}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")},r=a(1),o=(n=r)&&n.__esModule?n:{default:n},u=a(38),i=a(40);t.CreateJob=function(e){var t=(0,i.useMutation)(u.CREATE_JOB),a=l(t,2),n=a[0],s=a[1].data,c=(0,r.useState)(""),d=l(c,2),f=d[0],p=d[1],m=(0,r.useRef)(""),E=(0,r.useRef)(""),v=(0,r.useRef)(""),b=(0,r.useRef)(""),y=(0,r.useRef)(""),h=(0,r.useRef)(""),g=(0,r.useRef)(""),_=(0,r.useState)(!1),j=l(_,2),I=j[0],P=j[1],S=function(e,t,a,n,l,r,u){var i=[];return e&&""!=e.trim()||i.push(o.default.createElement("div",{className:"validation"},"Please enter name")),t&&""!=t.trim()||i.push(o.default.createElement("div",{className:"validation"},"Please enter location")),a&&""!=a.trim()||i.push(o.default.createElement("div",{className:"validation"},"Please enter type")),n&&""!=n.trim()||i.push(o.default.createElement("div",{className:"validation"},"Please enter description")),l&&""!=l.trim()||i.push(o.default.createElement("div",{className:"validation"},"Please enter company name")),r&&""!=r.trim()||i.push(o.default.createElement("div",{className:"validation"},"Please enter roles")),u&&""!=u.trim()||i.push(o.default.createElement("div",{className:"validation"},"Please enter responsibilities")),i};return s&&s!=I&&(P(s),e.history.push("/")),o.default.createElement("div",{class:"welcome"},o.default.createElement("div",{class:"validation-message"},f),o.default.createElement("div",{id:"box"},o.default.createElement("h1",null,"Post a Job"),o.default.createElement("div",{class:"form_details"},o.default.createElement("div",{class:"group"},o.default.createElement("input",{type:"text",id:"form_control",name:"name",ref:m}),o.default.createElement("label",{for:"name"},"Name")),o.default.createElement("div",{class:"group"},o.default.createElement("input",{type:"text",id:"form_control",name:"location",ref:E}),o.default.createElement("label",{for:"location"},"Location")),"Type: ",o.default.createElement("select",{ref:v},o.default.createElement("option",{value:"Part Time"},"Part Time"),o.default.createElement("option",{value:"Full Time"},"Full Time"))," ",o.default.createElement("br",null),o.default.createElement("div",{class:"group"},o.default.createElement("textarea",{id:"form_control",name:"desc",rows:"4",cols:"50",ref:b}),o.default.createElement("label",{for:"desc"},"Description")),o.default.createElement("div",{class:"group"},o.default.createElement("input",{type:"text",id:"form_control",name:"companyname",ref:y}),o.default.createElement("label",{for:"companyname"},"Company")),o.default.createElement("div",{class:"group"},o.default.createElement("textarea",{id:"form_control",name:"roles",rows:"4",cols:"50",ref:h}),o.default.createElement("label",{for:"roles"},"Roles")),o.default.createElement("div",{class:"group"},o.default.createElement("textarea",{id:"form_control",name:"responsibiltes",rows:"4",cols:"50",ref:g}),o.default.createElement("label",{for:"responsibiltes"},"Responsibilities")),o.default.createElement("br",null),o.default.createElement("button",{onClick:function(){var e=m.current.value,t=E.current.value,a=v.current.value,l=b.current.value,r=y.current.value,o=h.current.value,u=g.current.value,i=S(e,t,a,l,r,o,u);i.length>0?p(i):n({variables:{createJobInput:{name:e,location:t,type:a,description:l,companyName:r,roles:o,responsibilities:u}}})}},"submit"))))}},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=(0,u.useDispatch)(),a=(0,u.useSelector)((function(e){return e.auth})).isLoggedIn,n="";n=a?o.default.createElement(r.Fragment,null,o.default.createElement("div",{class:"head"},o.default.createElement("h1",null,"Jobs Board"),o.default.createElement("div",{class:"nav"},o.default.createElement(l.NavLink,{to:"/"},"Home"),o.default.createElement(l.NavLink,{to:"/createjob"},"Post a Job"),o.default.createElement(l.NavLink,{to:"/appliedjobs"},"Applied Jobs"),o.default.createElement(l.NavLink,{to:"/jobsPosted"},"Jobs Posted")),o.default.createElement("button",{id:"btn",onClick:function(){localStorage.removeItem("token"),t({type:i.IS_LOGGED_IN,payload:{isLoggedIn:!1}}),t({type:i.SELECT_JOB,payload:{}}),window.location.href="/"}},"Logout"))):o.default.createElement(r.Fragment,null,o.default.createElement("div",{class:"head"},o.default.createElement("h1",null,"Jobs Board"),o.default.createElement("div",{class:"nav"},o.default.createElement(l.NavLink,{to:"/"},"Home"),o.default.createElement(l.NavLink,{to:"/login"},"Login"),o.default.createElement(l.NavLink,{to:"/register"},"Register"))));return o.default.createElement("div",null,n)};var n,l=a(39),r=a(1),o=(n=r)&&n.__esModule?n:{default:n},u=a(21),i=a(19);a(100)},function(e,t,a){},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var a=[],n=!0,l=!1,r=void 0;try{for(var o,u=e[Symbol.iterator]();!(n=(o=u.next()).done)&&(a.push(o.value),!t||a.length!==t);n=!0);}catch(e){l=!0,r=e}finally{try{!n&&u.return&&u.return()}finally{if(l)throw r}}return a}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")};t.default=function(e){var t=(0,s.useDispatch)(),a=(0,r.useState)(""),l=n(a,2),f=l[0],p=l[1],m=(0,i.useMutation)(u.LOGIN_USER),E=n(m,2),v=E[0],b=E[1].data,y=(0,r.useState)(""),h=n(y,2),g=h[0],_=h[1],j=(0,r.useRef)(""),I=(0,r.useRef)(""),P=(0,r.useState)(!1),S=n(P,2),w=S[0],J=S[1];if((0,r.useLayoutEffect)((function(){var t=(0,d.parse)(e.location.search);t.redirectUrl&&p(t.redirectUrl),t.message&&"registerSuccess"==t.message&&_("Registration Successful, Login with new credentials")}),[]),b&&b.login&&b!=w){J(b);var A=b.login.token;A.length>0?(localStorage.setItem("token",A),t({type:c.IS_LOGGED_IN,payload:{isLoggedIn:!0}}),window.location.href="/"):_("The username or password you have entered is invalid")}return o.default.createElement("div",{class:"welcome"},o.default.createElement("div",{class:"validation-message"},g),o.default.createElement("div",{id:"box"},o.default.createElement("h1",null,"Sign In"),o.default.createElement("div",{class:"form_details"},o.default.createElement("div",{class:"group"},o.default.createElement("input",{type:"email",id:"form_control",name:"email",ref:I}),o.default.createElement("label",{for:"email"},"Email")),o.default.createElement("div",{class:"group"},o.default.createElement("input",{type:"password",id:"form_control",name:"password",ref:j}),o.default.createElement("label",{for:"password"},"Password")),o.default.createElement("br",null),o.default.createElement("input",{type:"submit",id:"button",value:"Submit",onClick:function(){var e=j.current.value,t=I.current.value,a=[];t&&""!=t.trim()||a.push(o.default.createElement("div",{className:"validation"},"Please enter email to login")),e&&""!=e.trim()||a.push(o.default.createElement("div",{className:"validation"},"Please enter password to login")),a&&a.length>0?_(a):v({variables:{userInput:{password:e,email:t}}})}}))),o.default.createElement("input",{type:"submit",class:"fa fa-google",value:"Sign in with google",onClick:function(e){return function(e){e.preventDefault();var t=f.length>0?"/auth/google?redirectUrl="+f:"/auth/google/";window.location.href=t}(e)}}))};var l,r=a(1),o=(l=r)&&l.__esModule?l:{default:l},u=a(38),i=a(12),s=a(21),c=a(19),d=a(58);a(59)},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Register=void 0;var n,l=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var a=[],n=!0,l=!1,r=void 0;try{for(var o,u=e[Symbol.iterator]();!(n=(o=u.next()).done)&&(a.push(o.value),!t||a.length!==t);n=!0);}catch(e){l=!0,r=e}finally{try{!n&&u.return&&u.return()}finally{if(l)throw r}}return a}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")},r=a(1),o=(n=r)&&n.__esModule?n:{default:n},u=a(38),i=a(12);a(59);t.Register=function(e){var t=(0,i.useMutation)(u.REGISTER_USER),a=l(t,2),n=a[0],s=a[1].data,c=(0,r.useState)(!1),d=l(c,2),f=d[0],p=d[1],m=(0,r.useState)(""),E=l(m,2),v=E[0],b=E[1],y=(0,r.useRef)(""),h=(0,r.useRef)(""),g=(0,r.useRef)(""),_=(0,r.useRef)(""),j=function(e,t,a,n){var l=[];return e&&""!=e.trim()||l.push(o.default.createElement("div",{className:"validation"},"Please enter name")),t&&""!=t.trim()||l.push(o.default.createElement("div",{className:"validation"},"Please enter email")),t&&!/\S+@\S+\.\S+/.test(t)&&l.push(o.default.createElement("div",{className:"validation"},"Please enter valid email format Ex: xxxx@xxx.xxx")),a&&""!=a.trim()||l.push(o.default.createElement("div",{className:"validation"},"Please enter password")),a&&a!==n&&l.push(o.default.createElement("div",{className:"validation"},"Please make sure that password and confirm password match")),l};return s&&s.register&&s!=f&&(p(s),s.register.isRegistered?e.history.push("/login?message=registerSuccess"):b("User with this email is already registered")),o.default.createElement("div",{class:"welcome"},o.default.createElement("div",{class:"validation-message"},v),o.default.createElement("div",{id:"box"},o.default.createElement("h1",null,"Register"),o.default.createElement("div",{class:"form_details"},o.default.createElement("div",{class:"group"},o.default.createElement("input",{type:"text",id:"form_control",name:"name",ref:y}),o.default.createElement("label",{for:"name"},"FullName")),o.default.createElement("div",{class:"group"},o.default.createElement("input",{type:"email",id:"form_control",name:"email",ref:_}),o.default.createElement("label",{for:"email"},"Email")),o.default.createElement("div",{class:"group"},o.default.createElement("input",{type:"password",id:"form_control",name:"password",ref:h}),o.default.createElement("label",{for:"password"},"Password")),o.default.createElement("div",{class:"group"},o.default.createElement("input",{type:"password",id:"form_control",name:"confirm password",ref:g}),o.default.createElement("label",{for:"confirm password"},"Confirm Password")),o.default.createElement("br",null),o.default.createElement("input",{type:"submit",id:"button",value:"Submit",onClick:function(e){return function(e){e.preventDefault();var t=y.current.value,a=h.current.value,l=g.current.value,r=_.current.value,o=j(t,r,a,l);o&&o.length>0?b(o):n({variables:{userInput:{name:t,password:a,email:r}}})}(e)}}))))}},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ApplyJob=void 0;var n,l=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var a=[],n=!0,l=!1,r=void 0;try{for(var o,u=e[Symbol.iterator]();!(n=(o=u.next()).done)&&(a.push(o.value),!t||a.length!==t);n=!0);}catch(e){l=!0,r=e}finally{try{!n&&u.return&&u.return()}finally{if(l)throw r}}return a}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")},r=a(1),o=(n=r)&&n.__esModule?n:{default:n},u=a(21),i=a(38),s=a(40),c=a(19);a(104);t.ApplyJob=function(e){var t=(0,s.useMutation)(i.APPLY_JOB),a=l(t,2),n=a[0],d=a[1].data,f=(0,r.useState)(""),p=l(f,2),m=p[0],E=p[1],v=(0,u.useSelector)((function(e){return e.selectJob})),b=(0,r.useRef)(),y=(0,r.useState)(null),h=l(y,2),g=h[0],_=h[1],j=(0,u.useDispatch)(),I=function(e){var t=[];return e||t.push("Please upload a file"),e&&e.size>3e4&&t.push("Please enter file size below 30kb"),t};return d&&d!=g&&(_(d),j({type:c.SELECT_JOB,payload:{}}),e.history.push("/")),o.default.createElement("div",{class:"flex-body"},o.default.createElement("div",{class:"validation-message"},m),o.default.createElement("div",{class:"apply-flex"},o.default.createElement("div",{class:"flex-group"},o.default.createElement("p",null,"Job Name: "),o.default.createElement("span",null,v.name," ")),o.default.createElement("div",{class:"flex-group"},o.default.createElement("p",null,"Job Location: "),o.default.createElement("span",null,v.location)),o.default.createElement("div",{class:"flex-group"},o.default.createElement("p",null,"Job Type: "),o.default.createElement("span",null,v.type)),o.default.createElement("input",{type:"file",id:"btn1",ref:b})),o.default.createElement("div",{class:"btn1"},o.default.createElement("button",{id:"btn1",onClick:function(){var e=b.current.files[0],t=I(e);t.length>0?E(t):n({variables:{file:e,jobId:v._id}})}},"Apply Job")))}},function(e,t,a){},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.JobsApplied=void 0;var n,l=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var a=[],n=!0,l=!1,r=void 0;try{for(var o,u=e[Symbol.iterator]();!(n=(o=u.next()).done)&&(a.push(o.value),!t||a.length!==t);n=!0);}catch(e){l=!0,r=e}finally{try{!n&&u.return&&u.return()}finally{if(l)throw r}}return a}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")},r=a(1),o=(n=r)&&n.__esModule?n:{default:n},u=a(24),i=a(12);a(50);t.JobsApplied=function(){var e=(0,i.useLazyQuery)(u.JOBS_APPLIED,{fetchPolicy:"no-cache"}),t=l(e,2),a=t[0],n=t[1].data;(0,r.useLayoutEffect)((function(){a({variables:{}})}),[]);var s="",c=["#CD5C5C","#90EE90","#FFA07A","#778899","#BA55D3","#7B68EE","#9370DB","#C71585","#191970","#6B8E23","#DB7093","#FA8072"];return n&&n.appliedJobs&&n.appliedJobs.jobs&&n.appliedJobs.jobs.length>0?(s=[]).push(n.appliedJobs.jobs.map((function(e){return o.default.createElement("div",null,o.default.createElement("div",{class:"listContent"},o.default.createElement("div",{id:"cards1"},o.default.createElement("div",{class:"flex-card1"},o.default.createElement("div",{id:"circle"},o.default.createElement("div",{class:"circle",style:{"background-color":(t=e.job.companyName.charCodeAt(0),a=e.job.companyName.charCodeAt(1),c[(t+a)%c.length-1])}},o.default.createElement("span",null,e.job.companyName.substring(0,1))),o.default.createElement("div",{class:"name"},o.default.createElement("p",null,e.job.companyName),o.default.createElement("div",{class:"location"},o.default.createElement("span",{class:"fa fa-location-arrow"}),o.default.createElement("p",null,e.job.location)))),o.default.createElement("div",{class:"short-description"},o.default.createElement("span",{class:"role"},e.job.name),o.default.createElement("span",{class:"desc"},e.job.description)),o.default.createElement("hr",null),o.default.createElement("div",{class:"type"},o.default.createElement("span",{class:"fa fa-suitcase"}),o.default.createElement("span",{class:"jobtype"},e.job.type),o.default.createElement("span",{class:"fa fa-clock-o"}),o.default.createElement("span",{class:"time"},function(e){var t=new Date,a=new Date(e);if(e){var n=Math.abs(t-a),l=Math.floor(n/6e4);if(l>=60){var r=Math.floor(l/60);if(r>=24){var o=Math.floor(r/24);return 1==o?"Applied "+o+" day ago":"Applied "+o+" days ago"}return 1==r?"Applied "+r+" hour ago":"Applied "+r+" hours ago"}return l<1?"Applied "+Math.floor(n/1e3)+" seconds ago":1==l?"Applied "+l+" minute ago":"Applied "+l+" minutes ago"}return" "}(e.appliedDate)))))));var t,a}))):s=n&&n.appliedJobs&&0==n.appliedJobs.jobs.length?"No jobs applied":"Loading...",o.default.createElement("div",{id:"heading"},s)}},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.JobsPosted=void 0;var n,l=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var a=[],n=!0,l=!1,r=void 0;try{for(var o,u=e[Symbol.iterator]();!(n=(o=u.next()).done)&&(a.push(o.value),!t||a.length!==t);n=!0);}catch(e){l=!0,r=e}finally{try{!n&&u.return&&u.return()}finally{if(l)throw r}}return a}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")},r=a(1),o=(n=r)&&n.__esModule?n:{default:n},u=a(24),i=a(12);a(50);var s=a(39);t.JobsPosted=function(){var e=(0,s.useHistory)(),t=(0,i.useLazyQuery)(u.JOBS_POSTED,{fetchPolicy:"no-cache"}),a=l(t,2),n=a[0],c=a[1].data;(0,r.useLayoutEffect)((function(){n({variables:{}})}),[]);var d="",f=["#CD5C5C","#90EE90","#FFA07A","#778899","#BA55D3","#7B68EE","#9370DB","#C71585","#191970","#6B8E23","#DB7093","#FA8072"];return c&&c.jobsPosted.jobs&&c.jobsPosted.jobs.length>0?(d=[]).push(c.jobsPosted.jobs.map((function(t){return o.default.createElement("div",null,o.default.createElement("div",{class:"listContent"},o.default.createElement("div",{id:"cards1"},o.default.createElement("div",{class:"flex-card1"},o.default.createElement("div",{id:"circle"},o.default.createElement("div",{class:"circle",style:{"background-color":(a=t.companyName.charCodeAt(0),n=t.companyName.charCodeAt(1),f[(a+n)%f.length-1])}},o.default.createElement("span",null,t.companyName.substring(0,1))),o.default.createElement("div",{class:"name"},o.default.createElement("p",null,t.companyName),o.default.createElement("div",{class:"location"},o.default.createElement("span",{class:"fa fa-location-arrow"}),o.default.createElement("p",null,t.location)))),o.default.createElement("div",{class:"short-description"},o.default.createElement("span",{class:"role"},t.name),o.default.createElement("span",{class:"desc"},t.description)),o.default.createElement("hr",null),o.default.createElement("div",{class:"type"},o.default.createElement("span",{class:"fa fa-suitcase"}),o.default.createElement("span",{class:"jobtype"},t.type),o.default.createElement("span",{class:"fa fa-clock-o"}),o.default.createElement("span",{class:"time"},function(e){var t=new Date,a=new Date(e);if(e){var n=Math.abs(t-a),l=Math.floor(n/6e4);if(l>=60){var r=Math.floor(l/60);if(r>=24){var o=Math.floor(r/24);return 1==o?"Posted "+o+" day ago":"Posted "+o+" days ago"}return 1==r?"Posted "+r+" hour ago":"Posted "+r+" hours ago"}return l<1?"Posted "+Math.floor(n/1e3)+" seconds ago":1==l?"Posted "+l+" minute ago":"Posted "+l+" minutes ago"}return" "}(t.postedDate))),o.default.createElement("div",{id:"applicantsBtn",onClick:function(){return a=t._id,void e.push("/listofapplicants/"+a);var a}},o.default.createElement("span",null,"Show Applicants"))))));var a,n}))):d=c&&c.jobsPosted&&0==c.jobsPosted.jobs.length?"No jobs Posted":"Loading...",o.default.createElement("div",{id:"heading"},d)}},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ShowApplicants=void 0;var n,l=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var a=[],n=!0,l=!1,r=void 0;try{for(var o,u=e[Symbol.iterator]();!(n=(o=u.next()).done)&&(a.push(o.value),!t||a.length!==t);n=!0);}catch(e){l=!0,r=e}finally{try{!n&&u.return&&u.return()}finally{if(l)throw r}}return a}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")},r=a(1),o=(n=r)&&n.__esModule?n:{default:n},u=a(24),i=a(40);a(108);t.ShowApplicants=function(e){var t=(0,i.useLazyQuery)(u.GET_APPLICANTS,{fetchPolicy:"no-cache"}),a=l(t,2),n=a[0],s=a[1].data;(0,r.useLayoutEffect)((function(){var t=e.match.params.jobId;n({variables:{jobId:t}})}),[]);var c="";if(s&&s.postedJobsUsers&&s.postedJobsUsers.users&&s.postedJobsUsers.users.length>0){var d=[];d.push(s.postedJobsUsers.users.map((function(e){return o.default.createElement(o.default.Fragment,null,o.default.createElement("tr",null,o.default.createElement("td",null,e.user.name),o.default.createElement("td",null,e.user.email),o.default.createElement("td",null,o.default.createElement("a",{href:"/download?fileName="+e.resumeLink,target:"_blank"},"Download"))))}))),c=o.default.createElement("div",null,o.default.createElement("table",null,o.default.createElement("tr",null,o.default.createElement("th",null,"Name"),o.default.createElement("th",null,"Email"),o.default.createElement("th",null,"Resume")),d))}else c=s&&s.postedJobsUsers&&0==s.postedJobsUsers.users.length?"No Applicants":"Loading...";return o.default.createElement("div",null,c)}},function(e,t,a){}]),[[66,1,2]]]);