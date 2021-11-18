(self.webpackChunkionic_docs=self.webpackChunkionic_docs||[]).push([[13903],{16239:function(e,n,t){"use strict";t.d(n,{Z:function(){return c}});var o=t(22122),i=t(19756),s=t(86010),a=t(67294),r="docsButton_2Emz",p="docsButtonRound_3i9G";function c(e){var n,t=e.href,c=e.round,u=void 0!==c&&c,l=(0,i.Z)(e,["href","round"]);return l.className=(0,s.Z)(((n={})[l.className]=Boolean(l.className),n[r]=!0,n["docs-button"]=!0,n[p]=u,n["docs-button--round"]=u,n)),t?a.createElement("a",(0,o.Z)({href:t,className:"docsButton"},l),l.children):a.createElement("button",(0,o.Z)({className:"docsButton"},l),l.children)}},72514:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return l},metadata:function(){return h},toc:function(){return d},default:function(){return g}});var o=t(22122),i=t(19756),s=(t(67294),t(3905)),a=t(28312),r=t(16239),p=t(41395),c=t(58215),u=t(81840),l={title:"Push"},h={unversionedId:"native/plugins/push",id:"native/plugins/push",isDocsHomePage:!1,title:"Push",description:"Register and receive push notifications.",source:"@site/docs/native/plugins/push.md",sourceDirName:"native/plugins",slug:"/native/plugins/push",permalink:"/docs/native/plugins/push",editUrl:"https://github.com/ionic-team/ionic-docs/edit/main/docs/native/plugins/push.md",version:"current",frontMatter:{title:"Push"},sidebar:"native",previous:{title:"Purchases",permalink:"/docs/native/plugins/purchases"},next:{title:"PushapePush",permalink:"/docs/native/plugins/pushape-push"}},d=[{value:"Supported Platforms",id:"supported-platforms",children:[]},{value:"Usage",id:"usage",children:[{value:"React",id:"react",children:[]},{value:"Angular",id:"angular",children:[]}]}],m={toc:d};function g(e){var n=e.components,t=(0,i.Z)(e,["components"]);return(0,s.kt)("wrapper",(0,o.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Register and receive push notifications."),(0,s.kt)("p",null,"Requires Cordova plugin: ",(0,s.kt)("inlineCode",{parentName:"p"},"phonegap-plugin-push"),". For more info, please see the ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/phonegap/phonegap-plugin-push"},"Push plugin docs"),"."),(0,s.kt)("p",null,"For TypeScript users, see the ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/phonegap/phonegap-plugin-push/blob/master/docs/TYPESCRIPT.md"},"Push plugin docs about using TypeScript for custom notifications"),"."),(0,s.kt)("p",null,(0,s.kt)("a",{href:"https://github.com/phonegap/phonegap-plugin-push",target:"_blank",rel:"noopener",className:"git-link"},(0,s.kt)("svg",{viewBox:"0 0 512 512"},(0,s.kt)("path",{d:"M416 160c0-35.3-28.7-64-64-64s-64 28.7-64 64c0 23.7 12.9 44.3 32 55.4v8.6c0 19.9-7.8 33.7-25.3 44.9-15.4 9.8-38.1 17.1-67.5 21.5-14 2.1-25.7 6-35.2 10.7V151.4c19.1-11.1 32-31.7 32-55.4 0-35.3-28.7-64-64-64S96 60.7 96 96c0 23.7 12.9 44.3 32 55.4v209.2c-19.1 11.1-32 31.7-32 55.4 0 35.3 28.7 64 64 64s64-28.7 64-64c0-16.6-6.3-31.7-16.7-43.1 1.9-4.9 9.7-16.3 29.4-19.3 38.8-5.8 68.9-15.9 92.3-30.8 36-22.8 55-57 55-98.8v-8.6c19.1-11.1 32-31.7 32-55.4zM160 56c22.1 0 40 17.9 40 40s-17.9 40-40 40-40-17.9-40-40 17.9-40 40-40zm0 400c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40zm192-256c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40z"}))," https://github.com/phonegap/phonegap-plugin-push")),(0,s.kt)("h2",null,"Stuck on a Cordova issue?"),(0,s.kt)(a.Z,{className:"cordova-ee-card",header:"Don't waste precious time on plugin issues.",href:"https://ionicframework.com/sales?product_of_interest=Ionic%20Native",mdxType:"DocsCard"},(0,s.kt)("div",null,(0,s.kt)("img",{src:"/docs/icons/native-cordova-bot.png",class:"cordova-ee-img"}),(0,s.kt)("p",null,"If you're building a serious project, you can't afford to spend hours troubleshooting. Ionic\u2019s experts offer premium advisory services for both community plugins and premier plugins."),(0,s.kt)(r.Z,{className:"native-ee-detail",mdxType:"DocsButton"},"Contact Us Today!"))),(0,s.kt)("h2",{id:"installation"},(0,s.kt)("a",{href:"#installation"},"Installation")),(0,s.kt)(p.Z,{defaultValue:"Capacitor",values:[{value:"Capacitor",label:"Capacitor"},{value:"Cordova",label:"Cordova"},{value:"Enterprise",label:"Enterprise"}],mdxType:"Tabs"},(0,s.kt)(c.Z,{value:"Capacitor",mdxType:"TabItem"},(0,s.kt)(u.Z,{className:"language-shell",mdxType:"CodeBlock"},"$ npm install phonegap-plugin-push ","\n","$ npm install @ionic-native/push ","\n","$ ionic cap sync")),(0,s.kt)(c.Z,{value:"Cordova",mdxType:"TabItem"},(0,s.kt)(u.Z,{className:"language-shell",mdxType:"CodeBlock"},"$ ionic cordova plugin add phonegap-plugin-push ","\n","$ npm install @ionic-native/push ","\n")),(0,s.kt)(c.Z,{value:"Enterprise",mdxType:"TabItem"},(0,s.kt)("blockquote",null,"Ionic Enterprise comes with fully supported and maintained plugins from the Ionic Team. \xa0",(0,s.kt)("a",{class:"btn",href:"https://ionic.io/docs/premier-plugins"},"Learn More")," or if you're interested in an enterprise version of this plugin ",(0,s.kt)("a",{class:"btn",href:"https://ionicframework.com/sales?product_of_interest=Ionic%20Enterprise%20Engine"},"Contact Us")))),(0,s.kt)("h2",{id:"supported-platforms"},"Supported Platforms"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Android"),(0,s.kt)("li",{parentName:"ul"},"Browser"),(0,s.kt)("li",{parentName:"ul"},"iOS"),(0,s.kt)("li",{parentName:"ul"},"Windows")),(0,s.kt)("h2",{id:"usage"},"Usage"),(0,s.kt)("h3",{id:"react"},"React"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"/docs/native/community#react"},"Learn more about using Ionic Native components in React")),(0,s.kt)("h3",{id:"angular"},"Angular"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Push, PushObject, PushOptions } from '@ionic-native/push/ngx';\n\nconstructor(private push: Push) { }\n\n...\n\n\n// to check if we have permission\nthis.push.hasPermission()\n  .then((res: any) => {\n\n    if (res.isEnabled) {\n      console.log('We have permission to send push notifications');\n    } else {\n      console.log('We do not have permission to send push notifications');\n    }\n\n  });\n\n// Create a channel (Android O and above). You'll need to provide the id, description and importance properties.\nthis.push.createChannel({\n id: \"testchannel1\",\n description: \"My first test channel\",\n // The importance property goes from 1 = Lowest, 2 = Low, 3 = Normal, 4 = High and 5 = Highest.\n importance: 3,\n //badge is used to if badge appears on the app icon see https://developer.android.com/reference/android/app/NotificationChannel.html#setShowBadge(boolean).\n //false = no badge on app icon.\n //true = badge on app icon\n badge: false\n}).then(() => console.log('Channel created'));\n\n// Delete a channel (Android O and above)\nthis.push.deleteChannel('testchannel1').then(() => console.log('Channel deleted'));\n\n// Return a list of currently configured channels\nthis.push.listChannels().then((channels) => console.log('List of channels', channels))\n\n// to initialize push notifications\n\nconst options: PushOptions = {\n   android: {},\n   ios: {\n       alert: 'true',\n       badge: true,\n       sound: 'false'\n   },\n   windows: {},\n   browser: {\n       pushServiceURL: 'http://push.api.phonegap.com/v1/push'\n   }\n}\n\nconst pushObject: PushObject = this.push.init(options);\n\n\npushObject.on('notification').subscribe((notification: any) => console.log('Received a notification', notification));\n\npushObject.on('registration').subscribe((registration: any) => console.log('Device registered', registration));\n\npushObject.on('error').subscribe(error => console.error('Error with Push plugin', error));\n\n\n")))}g.isMDXComponent=!0}}]);