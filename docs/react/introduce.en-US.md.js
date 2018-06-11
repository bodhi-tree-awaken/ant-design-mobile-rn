webpackJsonp([44],{1187:function(t,n){t.exports={content:["article",["p",["code","antd-mobile-rn"]," is the React implementation of the ",["a",{title:null,href:"http://ant.design"},"Ant Design"],"'s mobile specification, serving the ant and koubei wireless service."],["div",{class:"pic-plus"},["img",{width:"160",src:"https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"}],["span","+"],["img",{width:"160",src:"https://t.alipayobjects.com/images/rmsweb/T16xRhXkxbXXXXXXXX.svg"}]],["style","\n.pic-plus > * {\n  display: inline-block;\n  vertical-align: middle;\n}\n.pic-plus {\n  margin: 40px 0;\n}\n.pic-plus span {\n  font-size: 30px;\n  color: #aaa;\n  margin: 0 40px;\n}\n"],["h2","Features and Advantages"],["ul",["li",["p","The UI is fully Configurable and Scalable, easily adapt to all kinds of product style."]],["li",["p","Support Web / iOS / Android platform (Based on React Native), has a wealth of components, can fully cover all kinds of scenes. (antd-mobile)"]],["li",["p",'Provide "Components are loaded on demand" / "Web page HD display" / "SVG Icon" optimization features, integrated development.']],["li",["p","Use TypeScript to develop, provide type definition files, support type and attribute smart tips for easy business development."]],["li",["p","Fully compatible with react / preact."]]],["h2","Applicable Scenes"],["ul",["li",["p","Medium-sized and large-scale applications."]],["li",["p","Multi-terminal applications based on react / preact / react-native."]],["li",["p","Custom UI-style applications."]]],["h2","Getting Started"],["blockquote",["p","Before delving into Ant Design React, a good knowledge of ",["a",{title:null,href:"http://facebook.github.io/react/"},"React"]," and ",["a",{title:null,href:"http://babeljs.io/docs/learn-es2015/"},"ES2015"]," is needed."],["p","Make sure that you had installed ",["a",{title:null,href:"https://nodejs.org/en/"},"Node.js"],"(> v4.x) correctly."]],["h3","1. Create a New Project"],["p","Can be an existing project, or a newly created empty project with create-react-native-app, you can also copy and modify from the official example ",["a",{title:null,href:"https://github.com/ant-design/antd-mobile-samples/tree/master/rn-web"},"scaffolding"],"."],["blockquote",["p","More official ",["a",{title:null,href:"https://github.com/ant-design/antd-mobile-samples"},"examples"],".\nAlso, you can use any ",["a",{title:null,href:"https://github.com/enaqx/awesome-react#boilerplates"},"scaffold"]," available in React ecosystem."]],["p","The complete procedure please check the document here: ",["a",{title:null,href:"https://github.com/ant-design/antd-mobile-samples/tree/master/create-react-native-app"},"antd-mobile-sample/create-react-native-app"]],["h3","2. Installation"],["pre",{lang:"bash",highlighted:'$ <span class="token function">npm</span> <span class="token function">install</span> antd-mobile-rn --save'},["code","$ npm install antd-mobile-rn --save"]],["h3","3. Usage"],["p","Example of usage:"],["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> Component <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'react\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> AppRegistry <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'react-native\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> Button <span class="token keyword">from</span> <span class="token string">\'antd-mobile-rn/lib/button\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">HelloWorldApp</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span>\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span><span class="token punctuation">></span></span>Start<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\nAppRegistry<span class="token punctuation">.</span><span class="token function">registerComponent</span><span class="token punctuation">(</span><span class="token string">\'HelloWorldApp\'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> HelloWorldApp<span class="token punctuation">)</span><span class="token punctuation">;</span>'},["code","import React, { Component } from 'react';\nimport { AppRegistry } from 'react-native';\nimport Button from 'antd-mobile-rn/lib/button';\n\nclass HelloWorldApp extends Component {\n  render() {\n    return <Button>Start</Button>;\n  }\n}\n\nAppRegistry.registerComponent('HelloWorldApp', () => HelloWorldApp);"]],["h5","Use modularized antd-mobile-rn"],["p","The following two ways used to load the ",["strong","only components you used"],", select one of the ways you like."],["ul",["li",["p","Use ",["a",{title:null,href:"https://github.com/ant-design/babel-plugin-import"},"babel-plugin-import"]," (Recommended)"],["pre",{lang:"js",highlighted:'<span class="token comment" spellcheck="true">// .babelrc or babel-loader option</span>\n<span class="token punctuation">{</span>\n  <span class="token string">"plugins"</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>\n    <span class="token punctuation">[</span><span class="token string">"import"</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> libraryName<span class="token punctuation">:</span> <span class="token string">"antd-mobile-rn"</span> <span class="token punctuation">}</span><span class="token punctuation">]</span> <span class="token comment" spellcheck="true">// The difference with the Web platform is that you do not need to set the style</span>\n  <span class="token punctuation">]</span>\n<span class="token punctuation">}</span>'},["code",'// .babelrc or babel-loader option\n{\n  "plugins": [\n    ["import", { libraryName: "antd-mobile-rn" }] // The difference with the Web platform is that you do not need to set the style\n  ]\n}']],["p"," Then just change the way of import modules from antd-mobile-rn."],["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Button <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'antd-mobile-rn\'</span><span class="token punctuation">;</span>'},["code","import { Button } from 'antd-mobile-rn';"]],["blockquote",["p","Note: Some people reflected that it would be ",["a",{title:null,href:"https://github.com/ant-design/ant-design-mobile/issues/2054"},"unable to resolve module ",["code","react-dom"]]," in a project created with ",["code","react-native init"],". If you encounter the same problem, you might try to install ",["a",{title:null,href:"https://www.npmjs.com/package/babel-plugin-module-resolver"},"babel-plugin-module-resolver"],"."]]],["li",["p","Manually import"],["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> Button <span class="token keyword">from</span> <span class="token string">\'antd-mobile-rn/lib/button\'</span><span class="token punctuation">;</span>'},["code","import Button from 'antd-mobile-rn/lib/button';"]]]],["h5","More enhanced (optional):"],["blockquote",["p",["a",{title:null,href:"https://github.com/ant-design/antd-mobile-samples/tree/master/rn-custom-ui#antd-mobile-with-rn-custom-ui"},"Custom theme and single component style"],"\nLike ",["a",{title:null,href:"https://github.com/ant-design/ant-design-mobile/issues/1853"},"#1853"]]],["h2","Version"],["ul",["li",["p","Stable: ",["a",{title:null,href:"http://npmjs.com/package/antd-mobile-rn"},["img",{title:null,src:"http://img.shields.io/npm/v/antd-mobile-rn.svg?style=flat-square",alt:"npm package"}]]]],["li",["p","Next: ",["a",{title:null,href:"http://npmjs.com/package/antd-mobile-rn"},["img",{title:null,src:"https://img.shields.io/npm/v/antd-mobile-rn/next.svg",alt:"npm package"}]]]]],["h2","Links"],["ul",["li",["p",["a",{title:null,href:"https://rn.mobile.ant.design/"},"Home Page"]]],["li",["p",["a",{title:null,href:"http://github.com/ant-design/ant-design-mobile-rn/blob/master/development.en-US.md"},"Developer Instruction"]]],["li",["p",["a",{title:null,href:"http://github.com/react-component"},"React components"]]]],["h2","Contributing"],["p","Please read our ",["a",{title:null,href:"https://github.com/ant-design/ant-design-mobile-rn/blob/master/.github/CONTRIBUTING.md"},"CONTRIBUTING.md"]," first."],["p","If you'd like to help us improve antd-mobile-rn, just create a ",["a",{title:null,href:"https://github.com/ant-design/ant-design-mobile-rn/pulls"},"Pull Request"],". Feel free to report bugs and issues ",["a",{title:null,href:"https://github.com/ant-design/ant-design-mobile-rn/issues/new"},"here"],"."],["blockquote",["p","If you're new to posting issues, we ask that you read ",["a",{title:null,href:"http://www.catb.org/~esr/faqs/smart-questions.html"},["em","How To Ask Questions The Smart Way"]]," and ",["a",{title:null,href:"https://github.com/seajs/seajs/issues/545"},"How to Ask a Question in Open Source Community"]," and ",["a",{title:null,href:"http://www.chiark.greenend.org.uk/~sgtatham/bugs.html"},"How to Report Bugs Effectively"]," prior to posting. Well written bug reports help us help you!"]],["h2","Need Help?"],["p","For questions on how to use antd, please post questions to ",["a",{title:null,href:"http://stackoverflow.com/questions/tagged/antd"},"stackoverflow"]," using the ",["code","antd"],"/",["code","antd-mobile-rn"]," tag. If you're not finding what you need on stackoverflow, you can find us on ",["a",{title:null,href:"https://gitter.im/ant-design/ant-design-english?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge"},"gitter"]," as well."],["p","As always, we encourage experienced users to help those who are not familiar with ",["code","antd"],"!"],["ol",["li",["p",["a",{title:null,href:"http://stackoverflow.com/questions/tagged/antd"},"Stack Overflow"]]],["li",["p",["a",{title:null,href:"https://segmentfault.com/t/antd"},"Segment Fault"]]],["li",["p",["a",{title:null,href:"https://gitter.im/ant-design/ant-design?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge"},["img",{title:null,src:"https://badges.gitter.im/Join%20Chat.svg",alt:"Join the chat at https://gitter.im/ant-design/ant-design"}]]]]]],meta:{order:0,title:"Ant Design Mobile RN of React",filename:"docs/react/introduce.en-US.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#Features-and-Advantages",title:"Features and Advantages"},"Features and Advantages"]],["li",["a",{className:"bisheng-toc-h2",href:"#Applicable-Scenes",title:"Applicable Scenes"},"Applicable Scenes"]],["li",["a",{className:"bisheng-toc-h2",href:"#Getting-Started",title:"Getting Started"},"Getting Started"]],["li",["a",{className:"bisheng-toc-h2",href:"#Version",title:"Version"},"Version"]],["li",["a",{className:"bisheng-toc-h2",href:"#Links",title:"Links"},"Links"]],["li",["a",{className:"bisheng-toc-h2",href:"#Contributing",title:"Contributing"},"Contributing"]],["li",["a",{className:"bisheng-toc-h2",href:"#Need-Help?",title:"Need Help?"},"Need Help?"]]]}}});