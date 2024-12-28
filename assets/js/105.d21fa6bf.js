(window.webpackJsonp=window.webpackJsonp||[]).push([[105],{471:function(a,s,t){"use strict";t.r(s);var n=t(7),e=Object(n.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h2",{attrs:{id:"_1-配置优先级"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-配置优先级"}},[a._v("#")]),a._v(" 1. 配置优先级")]),a._v(" "),s("blockquote",[s("p",[a._v("properties、yaml、yml三种配置文件，优先级最高的是properties")])]),a._v(" "),s("p",[a._v("在SpringBoot项目当中除了以上3种配置文件外，SpringBoot为了增强程序的扩展性，除了支持配置文件的配置方式以外，还支持另外两种常见的配置方式：")]),a._v(" "),s("ol",[s("li",[a._v("Java系统属性配置 （格式： -Dkey=value）"),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-Dserver.port")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("9000")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])])]),a._v(" "),s("li",[a._v("命令行参数 （格式：--key=value）"),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--server.port")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("10010")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])])])]),a._v(" "),s("blockquote",[s("p",[a._v("优先级： 命令行参数 >  系统属性参数 > properties参数 > yml参数 > yaml参数")])]),a._v(" "),s("p",[a._v("思考：如果项目已经打包上线了，这个时候我们又如何来设置Java系统属性和命令行参数呢？")]),a._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("java")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-Dserver.port")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("9000")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-jar")]),a._v(" XXXXX.jar "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--server.port")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("10010")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("h2",{attrs:{id:"_2-bean管理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-bean管理"}},[a._v("#")]),a._v(" 2. Bean管理")]),a._v(" "),s("blockquote",[s("p",[a._v("默认情况下，IOC中的bean对象是单例")])]),a._v(" "),s("h3",{attrs:{id:"_2-1-获取-bean"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-获取-bean"}},[a._v("#")]),a._v(" 2.1 获取 Bean")]),a._v(" "),s("div",{staticClass:"custom-block note"},[s("p",{staticClass:"custom-block-title"},[a._v("依赖注入(默认)")]),a._v(" "),s("p",[a._v("默认情况下，SpringBoot项目在启动的时候会自动的创建IOC容器(也称为Spring容器)，并且在启动的过程当中会自动的将bean对象都创建好，存放在IOC容器当中。应用程序在运行时需要依赖什么bean对象，就直接进行依赖注入就可以了")])]),a._v(" "),s("p",[s("strong",[a._v("主动获取")]),a._v("：")]),a._v(" "),s("ol",[s("li",[s("p",[a._v("根据name获取bean")]),a._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Object")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("getBean")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("String")]),a._v(" name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])])]),a._v(" "),s("li",[s("p",[a._v("根据类型获取bean")]),a._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token generics"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("T")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("T")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("getBean")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Class")]),s("span",{pre:!0,attrs:{class:"token generics"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("T")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v(" requiredType"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])])]),a._v(" "),s("li",[s("p",[a._v("根据name获取bean（带类型转换）")]),a._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token generics"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("T")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("T")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("getBean")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("String")]),a._v(" name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Class")]),s("span",{pre:!0,attrs:{class:"token generics"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("T")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v(" requiredType"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])])])]),a._v(" "),s("p",[a._v("思考：要从IOC容器当中来获取到bean对象，需要先拿到IOC容器对象，怎么样才能拿到IOC容器呢？")]),a._v(" "),s("ul",[s("li",[a._v("想获取到 IOC 容器，直接将"),s("strong",[a._v("IOC容器对象")]),s("mark",[a._v("ApplicationContext")]),s("strong",[a._v("注入")]),a._v("进来就可以了")])]),a._v(" "),s("h3",{attrs:{id:"_2-2-bean-作用域"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-bean-作用域"}},[a._v("#")]),a._v(" 2.2 Bean 作用域")]),a._v(" "),s("blockquote",[s("p",[a._v("在前面我们提到的IOC容器当中，默认bean对象是"),s("strong",[a._v("单例模式")]),a._v("(只有一个实例对象)。那么如何设置bean对象为非单例呢？需要设置bean的作用域。")])]),a._v(" "),s("p",[a._v("在Spring中支持五种作用域，后三种在web环境才生效：")]),a._v(" "),s("table",[s("thead",[s("tr",[s("th",[s("strong",[a._v("作用域")])]),a._v(" "),s("th",[s("strong",[a._v("说明")])])])]),a._v(" "),s("tbody",[s("tr",[s("td",[s("strong",[a._v("singleton")])]),a._v(" "),s("td",[a._v("容器内同名称的bean只有一个实例（单例）（默认）")])]),a._v(" "),s("tr",[s("td",[s("strong",[a._v("prototype")])]),a._v(" "),s("td",[a._v("每次使用该bean时会创建新的实例（非单例）")])]),a._v(" "),s("tr",[s("td",[a._v("request")]),a._v(" "),s("td",[a._v("每个请求范围内会创建新的实例（web环境中，了解）")])]),a._v(" "),s("tr",[s("td",[a._v("session")]),a._v(" "),s("td",[a._v("每个会话范围内会创建新的实例（web环境中，了解）")])]),a._v(" "),s("tr",[s("td",[a._v("application")]),a._v(" "),s("td",[a._v("每个应用范围内会创建新的实例（web环境中，了解）")])])])]),a._v(" "),s("blockquote",[s("p",[a._v("可以借助Spring中的@Scope注解来进行配置作用域")])]),a._v(" "),s("h3",{attrs:{id:"_2-3-第三方-bean"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-第三方-bean"}},[a._v("#")]),a._v(" 2.3 第三方 Bean")]),a._v(" "),s("blockquote",[s("p",[a._v("如果要管理的bean对象来自于第三方（不是自定义的），是无法用@Component 及衍生注解声明bean的，就需要用到 @Bean 注解。")])]),a._v(" "),s("ul",[s("li",[a._v("如果需要定义第三方Bean时， 通常会单独定义一个配置类")])]),a._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@Configuration")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//配置类  (在配置类当中对第三方bean进行集中的配置管理)")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("CommonConfig")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//声明第三方bean")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@Bean")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//将当前方法的返回值对象交给IOC容器管理, 成为IOC容器bean")]),a._v("\n          "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//通过@Bean注解的name/value属性指定bean名称, 如果未指定, 默认是方法名")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("SAXReader")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("reader")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("DeptService")]),a._v(" deptService"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("System")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("out"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("println")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("deptService"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("return")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("SAXReader")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br"),s("span",{staticClass:"line-number"},[a._v("11")]),s("br"),s("span",{staticClass:"line-number"},[a._v("12")]),s("br")])]),s("h2",{attrs:{id:"_3-springboot-原理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-springboot-原理"}},[a._v("#")]),a._v(" 3. SpringBoot 原理")]),a._v(" "),s("h3",{attrs:{id:"_3-1-起步依赖"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-起步依赖"}},[a._v("#")]),a._v(" 3.1 起步依赖")]),a._v(" "),s("p",[a._v("springboot-starter-web，这是web开发的起步依赖，在web开发的起步依赖当中，就集成了web开发中常见的依赖：json、web、webmvc、tomcat等。我们只需要引入这一个起步依赖，其他的依赖都会自动的通过Maven的依赖传递进来。")]),a._v(" "),s("p",[s("strong",[a._v("结论：起步依赖的原理就是Maven的依赖传递。")])]),a._v(" "),s("h3",{attrs:{id:"_3-2-自动配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-自动配置"}},[a._v("#")]),a._v(" 3.2 自动配置")]),a._v(" "),s("div",{staticClass:"custom-block note"},[s("p",{staticClass:"custom-block-title"},[a._v("定义")]),a._v(" "),s("p",[a._v("SpringBoot的自动配置就是当Spring容器启动后，一些"),s("strong",[a._v("配置类")]),a._v("、"),s("strong",[a._v("bean对象")]),a._v("就自动存入到了IOC容器中，不需要我们手动去声明，从而简化了开发，省去了繁琐的配置操作。")])]),a._v(" "),s("h4",{attrs:{id:"_3-2-1-第三方依赖导入"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-1-第三方依赖导入"}},[a._v("#")]),a._v(" 3.2.1 第三方依赖导入")]),a._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Cynicism-lab/MyResource@gh-pages/image/image-20230114224107653.1lpsxy75n1i8.webp",alt:""}})]),a._v(" "),s("p",[a._v("思考：引入进来的第三方依赖当中的bean以及配置类为什么没有生效？")]),a._v(" "),s("ul",[s("li",[a._v("原因在我们之前讲解IOC的时候有提到过，在类上添加@Component注解来声明bean对象时，还需要保证@Component注解能被Spring的组件扫描到。")]),a._v(" "),s("li",[a._v("SpringBoot项目中的@SpringBootApplication注解，具有包扫描的作用，但是它只会扫描启动类所在的当前包以及子包。")]),a._v(" "),s("li",[a._v("当前包：com.itheima， 第三方依赖中提供的包：com.example（扫描不到）")])]),a._v(" "),s("p",[s("strong",[a._v("解决方案：")])]),a._v(" "),s("ul",[s("li",[a._v("方案1：@ComponentScan 组件扫描（不采用）")]),a._v(" "),s("li",[a._v("方案2：@Import 导入（使用@Import导入的类会被Spring加载到IOC容器中）")])]),a._v(" "),s("p",[s("strong",[a._v("使用第三方依赖提供的 @EnableXxxxx注解")]),a._v("（Springboot使用）")]),a._v(" "),s("ul",[s("li",[a._v("第三方依赖中提供的注解")])]),a._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@Retention")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("RetentionPolicy")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token constant"}},[a._v("RUNTIME")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@Target")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("ElementType")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token constant"}},[a._v("TYPE")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@Import")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("MyImportSelector")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//指定要导入哪些bean对象或配置类")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@interface")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("EnableHeaderConfig")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v(" \n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br")])]),s("ul",[s("li",[a._v("在使用时只需在启动类上加上@EnableXxxxx注解即可")])]),a._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@EnableHeaderConfig")]),a._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//使用第三方依赖提供的Enable开头的注解")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@SpringBootApplication")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("SpringbootWebConfig2Application")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("static")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("void")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("main")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("String")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" args"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("SpringApplication")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("run")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("SpringbootWebConfig2Application")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" args"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br")])]),s("h4",{attrs:{id:"_3-2-2-原理分析"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-2-原理分析"}},[a._v("#")]),a._v(" 3.2.2 原理分析")]),a._v(" "),s("blockquote",[s("p",[a._v("其实分析自动配置原理就是来解析在SpringBoot项目中，在引入依赖之后是如何将依赖jar包当中所定义的配置类以及bean加载到SpringIOC容器中的。")])]),a._v(" "),s("p",[s("strong",[a._v("自动配置源码小结")]),s("br"),a._v("\n自动配置原理源码入口就是"),s("code",[a._v("@SpringBootApplication")]),a._v("注解，在这个注解中封装了3个注解，分别是：")]),a._v(" "),s("ul",[s("li",[a._v("@SpringBootConfiguration\n"),s("ul",[s("li",[a._v("声明当前类是一个配置类")])])]),a._v(" "),s("li",[a._v("@ComponentScan\n"),s("ul",[s("li",[a._v("进行组件扫描（SpringBoot中默认扫描的是启动类所在的当前包及其子包）")])])]),a._v(" "),s("li",[a._v("@"),s("strong",[a._v("EnableAutoConfiguration")]),a._v(" "),s("ul",[s("li",[a._v("封装了@Import注解（Import注解中指定了一个ImportSelector接口的实现类）\n"),s("ul",[s("li",[a._v("在实现类重写的"),s("strong",[a._v("selectImports")]),a._v("()方法，读取当前项目下所有依赖jar包中META-INF/spring.factories、META-INF/spring/org.springframework.boot.autoconfigure.AutoConfiguration.imports两个文件里面定义的配置类（配置类中定义了@Bean注解标识的方法）。")])])])])])]),a._v(" "),s("p",[a._v("当SpringBoot程序启动时，就会加载配置文件当中所定义的配置类，并将这些配置类信息(类的全限定名)封装到String类型的数组中，最终通过@Import注解将这些配置类全部加载到Spring的IOC容器中，交给IOC容器管理")]),a._v(" "),s("h4",{attrs:{id:"_3-2-3-conditional"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-3-conditional"}},[a._v("#")]),a._v(" 3.2.3 @Conditional")]),a._v(" "),s("blockquote",[s("p",[a._v("思考？在META-INF/spring/org.springframework.boot.autoconfigure.AutoConfiguration.imports文件中定义的配置类非常多，而且每个配置类中又可以定义很多的bean，那这些bean都会注册到Spring的IOC容器中吗？")])]),a._v(" "),s("blockquote",[s("p",[a._v("答案：并不是。 在声明bean对象时，上面有加一个以"),s("code",[a._v("@Conditional")]),a._v("开头的注解，这种注解的作用就是按照条件进行装配，只有满足条件之后，才会将bean注册到Spring的IOC容器中（下面会详细来讲解）")])]),a._v(" "),s("p",[s("strong",[a._v("@Conditional注解：")])]),a._v(" "),s("ul",[s("li",[a._v("作用：按照一定的条件进行判断，在满足给定条件后才会注册对应的bean对象到Spring的IOC容器中。")]),a._v(" "),s("li",[a._v("位置：方法、类")]),a._v(" "),s("li",[s("code",[a._v("@Conditional")]),a._v("本身是一个父注解，派生出大量的子注解：\n"),s("ul",[s("li",[s("code",[a._v("@ConditionalOnClass")]),a._v("：判断环境中有对应字节码文件，才注册bean到IOC容器。")]),a._v(" "),s("li",[s("code",[a._v("@ConditionalOnMissingBean")]),a._v("：判断环境中没有对应的bean(类型或名称)，才注册bean到IOC容器。")]),a._v(" "),s("li",[s("code",[a._v("@ConditionalOnProperty")]),a._v("：判断配置文件中有对应属性和值，才注册bean到IOC容器。")])])])])])}),[],!1,null,null,null);s.default=e.exports}}]);