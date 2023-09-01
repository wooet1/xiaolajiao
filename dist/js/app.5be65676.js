(function(){"use strict";var e={8635:function(e,t,a){var l=a(6369),i=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},o=[],n={name:"App",components:{}},r=n,s=a(1001),c=(0,s.Z)(r,i,o,!1,null,null,null),u=c.exports,d=a(8499),m=a.n(d),p=a(2631),h=function(){var e=this,t=e._self._c;return t("el-row",[t("el-col",{staticStyle:{"padding-right":"10px"},attrs:{span:8}},[t("el-card",{staticClass:"box-card"},[t("div",{staticClass:"user"},[t("img",{attrs:{src:a(6458),alt:""}}),t("div",{staticClass:"userinfo"},[t("p",{staticClass:"name"},[e._v("Admin")]),t("p",{staticClass:"access"},[e._v("超级管理员")])])]),t("div",{staticClass:"login-info"},[t("p",[e._v("上次登录时间："),t("span",[e._v("2021-7-19")])]),t("p",[e._v("上次登录地点："),t("span",[e._v("武汉")])])])]),t("el-card",{staticStyle:{"margin-top":"20px",height:"460px"}},[t("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData}},e._l(e.tableLabel,(function(e,a){return t("el-table-column",{key:a,attrs:{prop:a,label:e}})})),1)],1)],1),t("el-col",{staticStyle:{"padding-left":"10px"},attrs:{span:16}},[t("div",{staticClass:"num"},e._l(e.countData,(function(a){return t("el-card",{key:a.name,attrs:{"body-style":{display:"flex",padding:0}}},[t("i",{staticClass:"icon",class:`el-icon-${a.icon}`,style:{background:a.color}}),t("div",{staticClass:"detail"},[t("p",{staticClass:"price"},[e._v("￥"+e._s(a.value))]),t("p",{staticClass:"desc"},[e._v(e._s(a.name))])])])})),1),t("el-card",{staticStyle:{height:"280px"}},[t("div",{ref:"echarts1",staticStyle:{height:"280px"}})]),t("div",{staticClass:"graph"},[t("el-card",{staticStyle:{height:"260px"}},[t("div",{ref:"echarts2",staticStyle:{height:"260px"}})]),t("el-card",{staticStyle:{height:"260px"}},[t("div",{ref:"echarts3",staticStyle:{height:"240px"}})])],1)],1)],1)},f=[],g=(a(7658),a(4161));const v=g.Z.create({baseURL:"/api",timeout:"10000"});v.interceptors.request.use((function(e){return e}),(function(e){return Promise.reject(e)})),v.interceptors.response.use((function(e){return e}),(function(e){return Promise.reject(e)}));var b=v;const y=()=>b.get("/home/getData"),A=e=>b.get("/user/getUser",e),C=e=>b.post("/user/add",e),k=e=>b.post("/user/edit",e),x=e=>b.post("/user/del",e),q=e=>b.post("/permission/getMenu",e);var S=a(347),B={name:name,data(){return{tableData:[],tableLabel:{name:"课程",todayBuy:"今日购买",monthBuy:"本月购买",totalBuy:"总购买"},countData:[{name:"今日支付订单",value:1234,icon:"success",color:"#2ec7c9"},{name:"今日收藏订单",value:210,icon:"star-on",color:"#ffb980"},{name:"今日未支付订单",value:1234,icon:"s-goods",color:"#5ab1ef"},{name:"本月支付订单",value:1234,icon:"success",color:"#2ec7c9"},{name:"本月收藏订单",value:210,icon:"star-on",color:"#ffb980"},{name:"本月未支付订单",value:1234,icon:"s-goods",color:"#5ab1ef"}]}},mounted(){y().then((({data:e})=>{const{tableData:t}=e.data;console.log(e.data),this.tableData=t;const a=S.S1(this.$refs.echarts1);var l={};const{orderData:i,userData:o,videoData:n}=e.data,r=Object.keys(i.data[0]),s={data:r};l.xAxis=s,l.yAxis={},l.legend=s,l.series=[],r.forEach((e=>{l.series.push({name:e,data:i.data.map((t=>t[e])),type:"line"})})),console.log(l),a.setOption(l);const c=S.S1(this.$refs.echarts2),u={legend:{textStyle:{color:"#333"}},grid:{left:"20%"},tooltip:{trigger:"axis"},xAxis:{type:"category",data:o.map((e=>e.date)),axisLine:{lineStyle:{color:"#17b3a3"}},axisLabel:{interval:0,color:"#333"}},yAxis:[{type:"value",axisLine:{lineStyle:{color:"#17b3a3"}}}],color:["#2ec7c9","#b6a2de"],series:[{name:"新增用户",data:o.map((e=>e.new)),type:"bar"},{name:"活跃用户",data:o.map((e=>e.active)),type:"bar"}]};c.setOption(u);const d=S.S1(this.$refs.echarts3),m={tooltip:{trigger:"item"},color:["#0f78f4","#dd536b","#9462e5","#a6a6a6","#e1bb22","#39c362","#3ed1cf"],series:[{data:n,type:"pie"}]};d.setOption(m)}))}},D=B,w=(0,s.Z)(D,h,f,!1,null,"34356e7f",null),Q=w.exports,U=function(){var e=this,t=e._self._c;return t("div",{staticClass:"manage"},[t("el-dialog",{attrs:{title:"提示",visible:e.dialogVisible,width:"50%","before-close":e.handleClose},on:{"update:visible":function(t){e.dialogVisible=t}}},[t("el-form",{ref:"form",attrs:{rules:e.rules,inline:!0,model:e.form,"label-width":"80px"}},[t("el-form-item",{attrs:{label:"姓名",prop:"name"}},[t("el-input",{attrs:{placeholder:"这是背景样式"},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),t("el-form-item",{attrs:{label:"年龄",prop:"age"}},[t("el-input",{attrs:{placeholder:"这是背景样式"},model:{value:e.form.age,callback:function(t){e.$set(e.form,"age",t)},expression:"form.age"}})],1),t("el-form-item",{attrs:{label:"性别",prop:"sex"}},[t("el-select",{attrs:{placeholder:"请选择活动区域"},model:{value:e.form.sex,callback:function(t){e.$set(e.form,"sex",t)},expression:"form.sex"}},[t("el-option",{attrs:{label:"武装直升机",value:0}}),t("el-option",{attrs:{label:"椰子",value:1}}),t("el-option",{attrs:{label:"未知",value:"2"}})],1)],1),t("el-form-item",{attrs:{label:"选择日期",prop:"birth"}},[t("el-date-picker",{attrs:{type:"date",placeholder:"选择日期","value-format":"yyyy-MM-DD"},model:{value:e.form.birth,callback:function(t){e.$set(e.form,"birth",t)},expression:"form.birth"}})],1),t("el-form-item",{attrs:{label:"地址",prop:"addr"}},[t("el-input",{attrs:{placeholder:"这是背景样式"},model:{value:e.form.addr,callback:function(t){e.$set(e.form,"addr",t)},expression:"form.addr"}})],1)],1),t("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t("el-button",{on:{click:e.cancel}},[e._v("取 消")]),t("el-button",{attrs:{type:"primary"},on:{click:e.submit}},[e._v("确 定")])],1)],1),t("div",{staticClass:"mangeheader"},[t("el-button",{attrs:{type:"primary"},on:{click:e.handleadd}},[e._v("+添加")])],1),t("el-table",{staticStyle:{width:"100%"},attrs:{height:"90%",data:e.tableData}},[t("el-table-column",{attrs:{prop:"name",label:"姓名"}}),t("el-table-column",{attrs:{prop:"sex",label:"性别"},scopedSlots:e._u([{key:"default",fn:function(a){return[t("span",{staticStyle:{"margin-left":"10px"}},[e._v(e._s(1==a.row.sex?"男":"女"))])]}}])}),t("el-table-column",{attrs:{prop:"age",label:"年龄"}}),t("el-table-column",{attrs:{prop:"birth",label:"出生日期"}}),t("el-table-column",{attrs:{prop:"addr",label:"地址"}}),t("el-table-column",{attrs:{prop:"addr",label:"操作"},scopedSlots:e._u([{key:"default",fn:function(a){return[t("el-button",{attrs:{size:"mini"},on:{click:function(t){return e.handleED(a.row)}}},[e._v("编辑")]),t("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(t){return e.handlede(a.row)}}},[e._v("删除")])]}}])})],1),t("div",[t("el-pagination",{attrs:{layout:"prev, pager, next",total:e.total},on:{"current-change":e.handlepage}})],1)],1)},O=[],E={name:name,data(){return{dialogVisible:!1,form:{name:"",age:"",sex:"",birth:"",addr:""},rules:{name:[{required:!0,message:"请输入活动名称"}],age:[{required:!0,message:"请输入活动名称"}],sex:[{required:!0,message:"请输入活动名称"}],birth:[{required:!0,message:"请输入活动名称"}],addr:[{required:!0,message:"请输入活动名称"}]},tableData:[],moda1type:0,total:0,pageData:{page:1,limit:10}}},methods:{submit(){this.$refs.form.validate((e=>{e&&(0===this.moda1type?C(this.form).then((()=>{this.getList()})):k(this.form).then((()=>{this.getList()})),this.dialogVisible=!1)}))},handleClose(){this.$refs.form.resetFields(),this.dialogVisible=!1},cancel(){this.handleClose()},handleED(e){this.moda1type=1,this.dialogVisible=!0,this.form=JSON.parse(JSON.stringify(e))},handlede(e){this.$confirm("此操作将永久删除该文件, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((()=>{x({id:e.id}).then((()=>{this.$message({type:"success",message:"删除成功!"}),this.getList()}))})).catch((()=>{this.$message({type:"info",message:"已取消删除"})}))},getList(){A({params:this.pageData}).then((({data:e})=>{this.tableData=e.list,this.total=e.count||0}))},handleadd(){this.moda1type=0,this.dialogVisible=!0},handlepage(e){this.pageData.page=e,this.getList()}},mounted(){this.getList()}},P=E,z=(0,s.Z)(P,U,O,!1,null,null,null),J=z.exports,F=function(){var e=this,t=e._self._c;return t("div",[t("el-container",[t("el-aside",{attrs:{width:"auto"}},[t("zhu")],1),t("el-container",[t("el-header",[t("tou")],1),t("el-main",[t("router-view")],1)],1)],1)],1)},I=[],T=function(){var e=this,t=e._self._c;return t("div",[t("el-menu",{staticClass:"el-menu-vertical-demo",attrs:{"default-active":"1-4-1",collapse:e.isCollapse,"background-color":"#545c64","text-color":"#fff","active-text-color":"#ffd04b"},on:{open:e.handleOpen,close:e.handleClose}},[t("div",{staticStyle:{height:"60px",color:"white",display:"flex","align-items":"center","justify-content":"center"}},[t("img",{staticStyle:{width:"40px",height:"40px"},attrs:{src:a(6458),alt:""}}),t("span",[e._v(e._s(e.isCollapse?"":"这是一个管理系统"))])]),e._l(e.nochildren,(function(a){return t("el-menu-item",{key:a.name,attrs:{index:a.name},on:{click:function(t){return e.tiaohome(a)}}},[t("i",{class:`el-icon-${a.icon}`}),t("span",{attrs:{slot:"title"},slot:"title"},[e._v(e._s(a.label))])])})),e._l(e.haschildren,(function(a){return t("el-submenu",{key:a.label,attrs:{index:"item.label"}},[t("template",{slot:"title"},[t("i",{class:`el-icon-${a.icon}`}),t("span",{attrs:{slot:"title"},slot:"title"},[e._v(e._s(a.label))])]),e._l(a.children,(function(a){return t("el-menu-item-group",{key:a.path},[t("el-menu-item",{attrs:{index:a.path},on:{click:function(t){return e.tiaohome(a)}}},[e._v(e._s(a.label))])],1)}))],2)}))],2)],1)},N=[],L={name:name,data(){return{menuData:[{path:"/",name:"home",label:"首页",icon:"s-home",url:"Home/Home"},{path:"/mall",name:"mall",label:"富文本编辑",icon:"video-play",url:"MallManage/MallManage"},{path:"/user",name:"user",label:"用户管理",icon:"user",url:"UserManage/UserManage"},{label:"其他",icon:"location",children:[{path:"/page1",name:"page1",label:"页面1",icon:"setting",url:"Other/PageOne"},{path:"/page2",name:"page2",label:"页面2",icon:"setting",url:"Other/PageTwo"}]}]}},methods:{handleOpen(e,t){console.log(e,t)},handleClose(e,t){console.log(e,t)},tiaohome(e){this.$route.path===e.path||"/home"===this.$route.path&&"/"===e.path||this.$router.push(e.path)}},computed:{nochildren(){return this.menuData.filter((e=>!e.children))},haschildren(){return this.menuData.filter((e=>e.children))},isCollapse(){return this.$store.state.tad.isCollapse}}},Z=L,K=(0,s.Z)(Z,T,N,!1,null,"3af78e1c",null),W=K.exports,H=function(){var e=this,t=e._self._c;return t("div",{staticClass:"header"},[t("div",{staticClass:"l"},[t("el-button",{attrs:{icon:"el-icon-menu",size:"mini"},on:{click:e.shousuo}}),t("span",{staticClass:"mianbao"},[e._v("首页")])],1),t("div",{staticClass:"r"},[t("el-dropdown",{on:{command:e.zhutou}},[t("span",{staticClass:"el-dropdown-link"},[t("img",{staticClass:"tupian",attrs:{src:a(6458),alt:""}})]),t("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[t("el-dropdown-item",[e._v("个人中心")]),t("el-dropdown-item",{attrs:{command:"tuichu"}},[e._v("退出登录")])],1)],1)],1)])},M=[],G=a(680),V=a(3822),R={name:name,methods:{shousuo(){this.$store.commit("collapseMenu")},zhutou(e){"tuichu"===e&&(G.Z.remove("token"),this.$router.push("/login"))}},computed:{...(0,V.rn)({tage:e=>e.tad.tabsList})},mounted(){console.log(this.tage)}},Y=R,X=(0,s.Z)(Y,H,M,!1,null,"85285908",null),j=X.exports,_={name:name,data(){return{}},components:{zhu:W,tou:j}},$=_,ee=(0,s.Z)($,F,I,!1,null,null,null),te=ee.exports,ae=function(){var e=this,t=e._self._c;return t("div",[t("div",[t("quill-editor",{ref:"QuillEditor",staticClass:"editor",attrs:{options:e.editorOption},on:{blur:function(t){return e.onEditorBlur(t)},focus:function(t){return e.onEditorFocus(t)},ready:function(t){return e.onEditorReady(t)}},model:{value:e.formData.content,callback:function(t){e.$set(e.formData,"content",t)},expression:"formData.content"}})],1)])},le=[],ie=a(1672),oe=a(6444),ne=a.n(oe),re=a(1981),se=a(7715),ce=a(9792);ce.register("modules/imageResize",ne()),ce.register("modules/ImageExtend",re.uq),ce.register("modules/imageDrop",ie.c);const ue=[["bold","italic","underline","strike"],["blockquote","code-block"],[{list:"ordered"},{list:"bullet"}],[{indent:"-1"},{indent:"+1"}],[{size:["small",!1,"large","huge"]}],[{header:[1,2,3,4,5,6,!1]}],[{color:[]},{background:[]}],[{font:["SimSun","SimHei","Microsoft-YaHei","KaiTi","FangSong","Arial"]}],[{align:[]}],["clean"],["link","image"],["myButton"]],de=[{Choice:".ql-insertMetric",title:"跳转配置"},{Choice:".ql-bold",title:"加粗"},{Choice:".ql-italic",title:"斜体"},{Choice:".ql-underline",title:"下划线"},{Choice:".ql-header",title:"段落格式"},{Choice:".ql-strike",title:"删除线"},{Choice:".ql-blockquote",title:"块引用"},{Choice:".ql-code",title:"插入代码"},{Choice:".ql-code-block",title:"插入代码段"},{Choice:".ql-font",title:"字体"},{Choice:".ql-size",title:"字体大小"},{Choice:'.ql-list[value="ordered"]',title:"编号列表"},{Choice:'.ql-list[value="bullet"]',title:"项目列表"},{Choice:".ql-direction",title:"文本方向"},{Choice:'.ql-header[value="1"]',title:"h1"},{Choice:'.ql-header[value="2"]',title:"h2"},{Choice:".ql-align",title:"对齐方式"},{Choice:".ql-color",title:"字体颜色"},{Choice:".ql-background",title:"背景颜色"},{Choice:".ql-image",title:"图像"},{Choice:".ql-video",title:"视频"},{Choice:".ql-link",title:"添加链接"},{Choice:".ql-formula",title:"插入公式"},{Choice:".ql-clean",title:"清除字体格式"},{Choice:'.ql-script[value="sub"]',title:"下标"},{Choice:'.ql-script[value="super"]',title:"上标"},{Choice:'.ql-indent[value="-1"]',title:"向左缩进"},{Choice:'.ql-indent[value="+1"]',title:"向右缩进"},{Choice:".ql-header .ql-picker-label",title:"标题大小"},{Choice:'.ql-header .ql-picker-item[data-value="1"]',title:"标题一"},{Choice:'.ql-header .ql-picker-item[data-value="2"]',title:"标题二"},{Choice:'.ql-header .ql-picker-item[data-value="3"]',title:"标题三"},{Choice:'.ql-header .ql-picker-item[data-value="4"]',title:"标题四"},{Choice:'.ql-header .ql-picker-item[data-value="5"]',title:"标题五"},{Choice:'.ql-header .ql-picker-item[data-value="6"]',title:"标题六"},{Choice:".ql-header .ql-picker-item:last-child",title:"标准"},{Choice:'.ql-size .ql-picker-item[data-value="small"]',title:"小号"},{Choice:'.ql-size .ql-picker-item[data-value="large"]',title:"大号"},{Choice:'.ql-size .ql-picker-item[data-value="huge"]',title:"超大号"},{Choice:".ql-size .ql-picker-item:nth-child(2)",title:"标准"},{Choice:".ql-align .ql-picker-item:first-child",title:"居左对齐"},{Choice:'.ql-align .ql-picker-item[data-value="center"]',title:"居中对齐"},{Choice:'.ql-align .ql-picker-item[data-value="right"]',title:"居右对齐"},{Choice:'.ql-align .ql-picker-item[data-value="justify"]',title:"两端对齐"}];var me={name:name,components:{quillEditor:se.quillEditor},data(){return{formData:{content:""},editorOption:{placeholder:"请在这里输入",theme:"snow",modules:{imageDrop:!0,imageResize:{displaySize:!0},history:{delay:1e3,maxStack:50,userOnly:!1},toolbar:{container:ue,handlers:{}}}}}},mounted(){this.initTitle()},methods:{initTitle(){document.getElementsByClassName("ql-editor")[0].dataset.placeholder="";for(let e of de){let t=document.querySelector(".quill-editor "+e.Choice);t&&t.setAttribute("title",e.title)}},onEditorBlur(e){},onEditorFocus(e){},onEditorReady(e){}}},pe=me,he=(0,s.Z)(pe,ae,le,!1,null,null,null),fe=he.exports,ge=function(){var e=this;e._self._c;return e._m(0)},ve=[function(){var e=this,t=e._self._c;return t("div",[t("h2",[e._v("1111111111")])])}],be={},ye=be,Ae=(0,s.Z)(ye,ge,ve,!1,null,null,null),Ce=Ae.exports,ke=function(){var e=this;e._self._c;return e._m(0)},xe=[function(){var e=this,t=e._self._c;return t("div",[t("h2",[e._v("2222222222")])])}],qe={},Se=qe,Be=(0,s.Z)(Se,ke,xe,!1,null,null,null),De=Be.exports,we=function(){var e=this,t=e._self._c;return t("el-form",{ref:"form",staticClass:"login-container",attrs:{"label-width":"70px",inline:!0,model:e.form,rules:e.rules}},[t("h3",{staticClass:"login_title"},[e._v("系统登录")]),t("el-form-item",{attrs:{label:"用户名",prop:"username"}},[t("el-input",{attrs:{placeholder:"请输入账号"},model:{value:e.form.username,callback:function(t){e.$set(e.form,"username",t)},expression:"form.username"}})],1),t("el-form-item",{attrs:{label:"密码",prop:"password"}},[t("el-input",{attrs:{type:"password",placeholder:"请输入密码"},model:{value:e.form.password,callback:function(t){e.$set(e.form,"password",t)},expression:"form.password"}})],1),t("el-form-item",[t("el-button",{staticStyle:{"margin-left":"105px","margin-top":"10px"},attrs:{type:"primary"},on:{click:e.submit}},[e._v("登录")])],1)],1)},Qe=[],Ue={name:name,data(){return{form:{username:"",password:""},rules:{username:[{required:!0,trigger:"blur",message:"请输入用户名"}],password:[{required:!0,trigger:"blur",message:"请输入密码"}]}}},methods:{submit(){this.$refs.form.validate((e=>{e&&q(this.form).then((({data:e})=>{2e4===e.code?(G.Z.set("token",e.data.token),this.$store.commit("setMenu",e.data.menu),this.$router.push("/home")):this.$message.error(e.data.message)}))}))}}},Oe=Ue,Ee=(0,s.Z)(Oe,we,Qe,!1,null,"472da639",null),Pe=Ee.exports;l["default"].use(p.ZP);const ze=[{path:"/",component:te,redirect:"/home",children:[{path:"home",component:Q},{path:"user",component:J},{path:"mall",component:fe},{path:"page1",component:Ce},{path:"page2",component:De}]},{path:"/login",name:"login",component:Pe}],Je=new p.ZP({routes:ze});var Fe=Je,Ie={state:{isCollapse:!1,tabsList:[{path:"/",name:"home",label:"首页",icon:"s-home",url:"Home/Home"}],menu:[]},mutations:{collapseMenu(e){e.isCollapse=!e.isCollapse},setMen(e,t){e.menu=t,G.Z.set("menu",JSON.stringify(t))}}};l["default"].use(V.ZP);var Te=new V.ZP.Store({modules:{tad:Ie}}),Ne=a(7634),Le=a.n(Ne);let Ze=[];var Ke={getStatisticalData:()=>{for(let e=0;e<7;e++)Ze.push(Le().mock({"苹果":Le().Random.float(100,8e3,0,0),vivo:Le().Random.float(100,8e3,0,0),oppo:Le().Random.float(100,8e3,0,0),"魅族":Le().Random.float(100,8e3,0,0),"三星":Le().Random.float(100,8e3,0,0),"小米":Le().Random.float(100,8e3,0,0)}));return{code:2e4,data:{videoData:[{name:"小米",value:2999},{name:"苹果",value:5999},{name:"vivo",value:1500},{name:"oppo",value:1999},{name:"魅族",value:2200},{name:"三星",value:4500}],userData:[{date:"周一",new:5,active:200},{date:"周二",new:10,active:500},{date:"周三",new:12,active:550},{date:"周四",new:60,active:800},{date:"周五",new:65,active:550},{date:"周六",new:53,active:770},{date:"周日",new:33,active:170}],orderData:{date:["20191001","20191002","20191003","20191004","20191005","20191006","20191007"],data:Ze},tableData:[{name:"oppo",todayBuy:500,monthBuy:3500,totalBuy:22e3},{name:"vivo",todayBuy:300,monthBuy:2200,totalBuy:24e3},{name:"苹果",todayBuy:800,monthBuy:4500,totalBuy:65e3},{name:"小米",todayBuy:1200,monthBuy:6500,totalBuy:45e3},{name:"三星",todayBuy:300,monthBuy:2e3,totalBuy:34e3},{name:"魅族",todayBuy:350,monthBuy:3e3,totalBuy:22e3}]}}}};function We(e){const t=e.split("?")[1];return t?JSON.parse('{"'+decodeURIComponent(t).replace(/"/g,'\\"').replace(/&/g,'","').replace(/=/g,'":"')+'"}'):{}}let He=[];const Me=200;for(let Re=0;Re<Me;Re++)He.push(Le().mock({id:Le().Random.guid(),name:Le().Random.cname(),addr:Le().mock("@county(true)"),"age|18-60":1,birth:Le().Random.date(),sex:Le().Random.integer(0,1)}));var Ge={getUserList:e=>{const{name:t,page:a=1,limit:l=20}=We(e.url);console.log("name:"+t,"page:"+a,"分页大小limit:"+l);const i=He.filter((e=>!t||-1!==e.name.indexOf(t)||-1!==e.addr.indexOf(t))),o=i.filter(((e,t)=>t<l*a&&t>=l*(a-1)));return{code:2e4,count:i.length,list:o}},createUser:e=>{const{name:t,addr:a,age:l,birth:i,sex:o}=JSON.parse(e.body);return console.log(JSON.parse(e.body)),He.unshift({id:Le().Random.guid(),name:t,addr:a,age:l,birth:i,sex:o}),{code:2e4,data:{message:"添加成功"}}},deleteUser:e=>{const{id:t}=JSON.parse(e.body);return t?(He=He.filter((e=>e.id!==t)),{code:2e4,message:"删除成功"}):{code:-999,message:"参数不正确"}},batchremove:e=>{let{ids:t}=We(e.url);return t=t.split(","),He=He.filter((e=>!t.includes(e.id))),{code:2e4,data:{message:"批量删除成功"}}},updateUser:e=>{const{id:t,name:a,addr:l,age:i,birth:o,sex:n}=JSON.parse(e.body),r=parseInt(n);return He.some((e=>{if(e.id===t)return e.name=a,e.addr=l,e.age=i,e.birth=o,e.sex=r,!0})),{code:2e4,data:{message:"编辑成功"}}}},Ve={getMenu:e=>{const{username:t,password:a}=JSON.parse(e.body);return"admin"===t&&"admin"===a?{code:2e4,data:{menu:[{path:"/home",name:"home",label:"首页",icon:"s-home",url:"Home.vue"},{path:"/mall",name:"mall",label:"商品管理",icon:"video-play",url:"Mall.vue"},{path:"/user",name:"user",label:"用户管理",icon:"user",url:"User.vue"},{label:"其他",icon:"location",children:[{path:"/page1",name:"page1",label:"页面1",icon:"setting",url:"PageOne.vue"},{path:"/page2",name:"page2",label:"页面2",icon:"setting",url:"PageTwo.vue"}]}],token:Le().Random.guid(),message:"获取成功"}}:"xiaoxiao"===t&&"xiaoxiao"===a?{code:2e4,data:{menu:[{path:"/home",name:"home",label:"首页",icon:"s-home",url:"Home.vue"},{path:"/video",name:"video",label:"商品管理",icon:"video-play",url:"Mall.vue"}],token:Le().Random.guid(),message:"获取成功"}}:{code:-999,data:{message:"密码错误"}}}};Le().mock("/api/home/getData",Ke.getStatisticalData),Le().mock("/api/user/add",Ge.createUser),Le().mock("/api/user/edit",Ge.updateUser),Le().mock("/api/user/del",Ge.deleteUser),Le().mock(/api\/user\/getUser/,Ge.getUserList),Le().mock(/api\/permission\/getMenu/,Ve.getMenu),l["default"].config.productionTip=!1,l["default"].use(m()),Fe.beforeEach(((e,t,a)=>{const l=G.Z.get("token");l||"login"===e.name?l&&"login"===e.name?a({name:"home"}):a():a({name:"login"})})),new l["default"]({router:Fe,store:Te,render:e=>e(u)}).$mount("#app")},6458:function(e){e.exports="data:image/png;base64,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"}},t={};function a(l){var i=t[l];if(void 0!==i)return i.exports;var o=t[l]={id:l,loaded:!1,exports:{}};return e[l].call(o.exports,o,o.exports,a),o.loaded=!0,o.exports}a.m=e,function(){a.amdO={}}(),function(){var e=[];a.O=function(t,l,i,o){if(!l){var n=1/0;for(u=0;u<e.length;u++){l=e[u][0],i=e[u][1],o=e[u][2];for(var r=!0,s=0;s<l.length;s++)(!1&o||n>=o)&&Object.keys(a.O).every((function(e){return a.O[e](l[s])}))?l.splice(s--,1):(r=!1,o<n&&(n=o));if(r){e.splice(u--,1);var c=i();void 0!==c&&(t=c)}}return t}o=o||0;for(var u=e.length;u>0&&e[u-1][2]>o;u--)e[u]=e[u-1];e[u]=[l,i,o]}}(),function(){a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,{a:t}),t}}(),function(){a.d=function(e,t){for(var l in t)a.o(t,l)&&!a.o(e,l)&&Object.defineProperty(e,l,{enumerable:!0,get:t[l]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){a.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e}}(),function(){var e={143:0};a.O.j=function(t){return 0===e[t]};var t=function(t,l){var i,o,n=l[0],r=l[1],s=l[2],c=0;if(n.some((function(t){return 0!==e[t]}))){for(i in r)a.o(r,i)&&(a.m[i]=r[i]);if(s)var u=s(a)}for(t&&t(l);c<n.length;c++)o=n[c],a.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return a.O(u)},l=self["webpackChunkrun"]=self["webpackChunkrun"]||[];l.forEach(t.bind(null,0)),l.push=t.bind(null,l.push.bind(l))}();var l=a.O(void 0,[998],(function(){return a(8635)}));l=a.O(l)})();
//# sourceMappingURL=app.5be65676.js.map