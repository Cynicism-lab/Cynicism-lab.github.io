(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{422:function(t,o,r){"use strict";r.r(o);var n=r(7),a=Object(n.a)({},(function(){var t=this,o=t._self._c;return o("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[o("h2",{attrs:{id:"_1-springboot自动配置原理"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_1-springboot自动配置原理"}},[t._v("#")]),t._v(" 1. SpringBoot自动配置原理")]),t._v(" "),o("p",[t._v("SpringBoot的自动配置原理的核心是："),o("strong",[t._v("SpringBootApplication")]),t._v("注解，这个注解主要包括以下三个核心注解：")]),t._v(" "),o("ul",[o("li",[o("p",[o("code",[t._v("@SpringBootConfiguration")]),t._v("：这个注解实际上是@Configuration注解，"),o("strong",[t._v("表示SpringBoot启动类是一个配置类")]),t._v("，最终会被注入到Spring容器中")])]),t._v(" "),o("li",[o("p",[o("code",[t._v("@EnableAutoConfiguration")]),t._v("："),o("strong",[t._v("这个注解开启了自动配置功能")]),t._v("。它包含两个重要的注解：")]),t._v(" "),o("ul",[o("li",[t._v("@AutoConfigurationPackage：这个注解会将启动类所在包下的所有子包的组件（"),o("strong",[t._v("@Entity注解")]),t._v("）扫描并注入到Spring容器中，和@ComponentScan扫描的对象不一样")]),t._v(" "),o("li",[t._v("@Import(AutoConfigurationImportSelector.class)：这个注解会通过"),o("strong",[t._v("AutoConfigurationImportSelector")]),t._v("类的getCandidateConfigurations()方法"),o("strong",[t._v("查找位于META-INF/spring.factories文件中的所有自动配置类")]),t._v("（筛选出以EnableAutoConfiguration结尾的key），并加载这些类（不是全都加载），如下图")])])]),t._v(" "),o("li",[o("p",[o("code",[t._v("@ComponentScan")]),t._v("：这个注解会"),o("strong",[t._v("扫描当前类下的package")]),t._v("，将@Controller/@Service/@Component/@Repository等注解加载到IOC容器中")])])]),t._v(" "),o("blockquote",[o("p",[t._v("所以在spring boot中，我们通常将controller、pojo、service、dao等包放在启动类同级目录下的原因。")])]),t._v(" "),o("p",[o("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Cynicism-lab/MyResource/img/QQ%E6%88%AA%E5%9B%BE20240111154906.png",alt:""}})]),t._v(" "),o("p",[t._v("🔎前面加载的所有自动配置类并不是都生效的，每一个xxxAutoConfiguration自动配置类都是在某些特定的条件之下才会生效。这些条件限制是通过@ConditionOnxxx注解实现的。")]),t._v(" "),o("h2",{attrs:{id:"_2-springboot相比于spring的缺点"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_2-springboot相比于spring的缺点"}},[t._v("#")]),t._v(" 2. SpringBoot相比于Spring的缺点")]),t._v(" "),o("p",[t._v("SpringBoot相比于Spring，确实存在一些缺点：")]),t._v(" "),o("ul",[o("li",[t._v("缺少灵活性：由于SpringBoot注重快速搭建项目，因此在某些情况下，它可能缺乏灵活性。例如，如果需要在项目中扩展一些功能，可能就需要手动配置")]),t._v(" "),o("li",[t._v("难以适应较为复杂的场景：SpringBoot主要针对简单的应用程序，一旦项目变得复杂，就需要考虑功能的划分和更加细致的配置")])]),t._v(" "),o("h2",{attrs:{id:"_3-为什么springboot的jar包可以直接运行"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_3-为什么springboot的jar包可以直接运行"}},[t._v("#")]),t._v(" 3. 为什么SpringBoot的jar包可以直接运行")]),t._v(" "),o("p",[t._v("SpringBoot的jar包可以直接运行的原因主要有以下几点：")]),t._v(" "),o("ul",[o("li",[o("p",[t._v("Fat Jar：SpringBoot应用打包后，生成的jar包被称为Fat Jar（"),o("strong",[t._v("即jar包中包含jar")]),t._v("），它包含了应用依赖的所有jar包和Spring Boot loader相关的类")])]),t._v(" "),o("li",[o("p",[t._v("Spring Boot Loader：Spring Boot Loader提供了一套标准用于执行SpringBoot打包出来的jar。当我们使用java -jar执行jar包的时候，"),o("strong",[t._v("会调用Spring Boot Loader中的JarLauncher的Main方法")]),t._v("，而不是我们编写的SpringApplication，其中该Main方法会创建一个LaunchedURLClassLoader来加载依赖的jar包，并以一个新线程启动"),o("strong",[t._v("应用的Main函数")])])])]),t._v(" "),o("h2",{attrs:{id:"_4-springboot可以同时处理多少请求"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_4-springboot可以同时处理多少请求"}},[t._v("#")]),t._v(" 4. SpringBoot可以同时处理多少请求")]),t._v(" "),o("p",[t._v("SpringBoot可以同时处理的请求数量主要取决于以下几个参数：")]),t._v(" "),o("ul",[o("li",[o("p",[t._v("server.tomcat.threads.min-spare："),o("strong",[t._v("最少的工作线程数")]),t._v("，默认大小是10。如果并发请求的数量达不到10，就会依次使用这几个线程去处理请求")])]),t._v(" "),o("li",[o("p",[t._v("server.tomcat.threads.max："),o("strong",[t._v("最多的工作线程数")]),t._v("，默认大小是200。如果并发请求的数量在10到200之间，就会使用这些临时工线程进行处理")])]),t._v(" "),o("li",[o("p",[t._v("server.tomcat.max-connections："),o("strong",[t._v("最大连接数")]),t._v("，默认大小是8192。表示Tomcat可以处理的最大请求数量，超过8192的请求就会被放入到等待队列")])]),t._v(" "),o("li",[o("p",[t._v("server.tomcat.accept-count："),o("strong",[t._v("等待队列的长度")]),t._v("，默认大小是100")])])]),t._v(" "),o("h2",{attrs:{id:"_5-springboot如何优化启动速度"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_5-springboot如何优化启动速度"}},[t._v("#")]),t._v(" 5. SpringBoot如何优化启动速度")]),t._v(" "),o("p",[t._v("SpringBoot的启动速度可以通过以下几种方式进行优化：")]),t._v(" "),o("ul",[o("li",[o("p",[o("strong",[t._v("减少自动配置的类")]),t._v("：SpringBoot的自动配置会加载很多不必要的类，可以通过exclude参数来排除这些类，减少启动时加载的类的数量")])]),t._v(" "),o("li",[o("p",[o("strong",[t._v("懒加载")]),t._v("：SpringBoot 2.2.0版本开始支持懒加载，可以通过在application.properties或者application.yml中设置spring.main.lazy-initialization=true来开启懒加载")])]),t._v(" "),o("li",[o("p",[o("strong",[t._v("减少扫描的包")]),t._v("：通过在@ComponentScan注解中指定需要扫描的包，减少SpringBoot启动时需要扫描的包的数量")])]),t._v(" "),o("li",[o("p",[o("strong",[t._v("优化JVM参数")]),t._v("：可以通过调整JVM的启动参数，如-Xms和-Xmx，来优化内存使用，提高启动速度")])]),t._v(" "),o("li",[o("p",[o("strong",[t._v("异步初始化")]),t._v("：SpringBoot 2.4.0版本开始支持异步初始化，可以通过在application.properties或者application.yml中设置spring.main.lazy-initialization.include=async来开启异步初始化")])]),t._v(" "),o("li",[o("p",[o("strong",[t._v("创建扫描索引")]),t._v("：Spring5提供了spring-Context-indexer，通过在启动类上添加@Indexd注解")])])]),t._v(" "),o("blockquote",[o("p",[t._v("升级jdk17：提供了更优秀的垃圾回收器，和SpringBoot3：本地化机制")])]),t._v(" "),o("h2",{attrs:{id:"_6-springboot解决跨域的方式"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_6-springboot解决跨域的方式"}},[t._v("#")]),t._v(" 6. SpringBoot解决跨域的方式")]),t._v(" "),o("blockquote",[o("p",[t._v("跨域是前端的异常")])]),t._v(" "),o("ul",[o("li",[o("strong",[t._v("通过注解解决跨域")]),t._v("（局部方案）：@CrossOrigin（添加在controller的类或者方法上）")]),t._v(" "),o("li",[o("strong",[t._v("配置 CORS 解决跨域")]),t._v("：实现WebMvcConfigurer接口，重写addCorsMappings方法并设置允许跨域的代码")]),t._v(" "),o("li",[o("strong",[t._v("通过 CorsFilter 解决跨域")]),t._v("：编写过滤器，然后注册过滤器")]),t._v(" "),o("li",[o("strong",[t._v("通过 nginx 配置 CORS 解决跨域")]),t._v("（推荐）：修改NGINX的配置文件即可")])]),t._v(" "),o("h2",{attrs:{id:"_7-springboot获取配置方式"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_7-springboot获取配置方式"}},[t._v("#")]),t._v(" 7. SpringBoot获取配置方式")]),t._v(" "),o("p",[t._v("SpringBoot读取配置的方式主要有以下几种：")]),t._v(" "),o("ul",[o("li",[o("p",[o("code",[t._v("@Value")]),t._v("注解：可以直接在字段上使用@Value注解来读取配置文件中的值")])]),t._v(" "),o("li",[o("p",[o("code",[t._v("Environment对象")]),t._v("：可以注入Environment对象，然后通过getProperty方法来获取配置值，或者实现一个EnvironmentAware接口")])]),t._v(" "),o("li",[o("p",[o("code",[t._v("@ConfigurationProperties")]),t._v("注解：这是一种类型安全的属性绑定机制，可以将配置文件中的属性绑定到一个Bean上。")])])]),t._v(" "),o("div",{staticClass:"language-Java line-numbers-mode"},[o("pre",{pre:!0,attrs:{class:"language-java"}},[o("code",[o("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@ConfigurationProperties")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("prefix "),o("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),o("span",{pre:!0,attrs:{class:"token string"}},[t._v('"config"')]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),o("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),o("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),o("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ConfigProperties")]),t._v(" "),o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),o("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),o("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" key"),o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),o("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// getters and setters")]),t._v("\n"),o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),o("div",{staticClass:"line-numbers-wrapper"},[o("span",{staticClass:"line-number"},[t._v("1")]),o("br"),o("span",{staticClass:"line-number"},[t._v("2")]),o("br"),o("span",{staticClass:"line-number"},[t._v("3")]),o("br"),o("span",{staticClass:"line-number"},[t._v("4")]),o("br"),o("span",{staticClass:"line-number"},[t._v("5")]),o("br")])]),o("ul",[o("li",[o("code",[t._v("@PropertySource")]),t._v("注解：可以用来指定自定义的配置文件(properties文件)，然后结合@Value或者Environment来读取配置值")])]),t._v(" "),o("h2",{attrs:{id:"_8-为什么springboot使用cglib作为默认的aop代理模式"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_8-为什么springboot使用cglib作为默认的aop代理模式"}},[t._v("#")]),t._v(" 8. 为什么springboot使用cglib作为默认的aop代理模式")]),t._v(" "),o("p",[t._v("从SpringBoot 2.x开始，为了解决"),o("strong",[t._v("使用JDK动态代理可能导致的类型转换异常")]),t._v("，SpringBoot选择使用CGLIB。如果需要替换使用JDK动态代理，可以通过配置项"),o("code",[t._v("spring.aop.proxy-target-class=false")]),t._v("来进行修改")]),t._v(" "),o("h2",{attrs:{id:"_9-springboot内置tomcat启动原理"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_9-springboot内置tomcat启动原理"}},[t._v("#")]),t._v(" 9. SpringBoot内置Tomcat启动原理")]),t._v(" "),o("ol",[o("li",[t._v("引入依赖：在pom.xml文件中，我们引入spring-boot-starter-web依赖，这个依赖中包含了spring-boot-starter-tomcat")]),t._v(" "),o("li",[t._v("启动入口：在SpringBoot应用的主类中，我们调用SpringApplication.run()方法来启动应用")]),t._v(" "),o("li",[t._v("创建和刷新ApplicationContext：SpringApplication.run()方法会创建一个ApplicationContext，并进行初始化和刷新操作。在这个过程中，SpringBoot会自动配置Tomcat，并将其作为默认的web服务器")]),t._v(" "),o("li",[t._v("内置Tomcat启动：在ApplicationContext刷新的过程中，SpringBoot会检测到内置的Tomcat，并自动启动它")])]),t._v(" "),o("h2",{attrs:{id:"_10-springboot外部tomcat启动原理"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_10-springboot外部tomcat启动原理"}},[t._v("#")]),t._v(" 10. SpringBoot外部Tomcat启动原理")]),t._v(" "),o("ol",[o("li",[t._v("修改POM文件：首先，我们需要在pom.xml文件中将spring-boot-starter-web依赖更改为spring-boot-starter-web，并排除内置的Tomcat")]),t._v(" "),o("li",[t._v("修改启动类：在SpringBoot应用的主类中，我们需要将其更改为扩展（extends)SpringBootServletInitializer类，这样就可以在外部Tomcat中启动应用")]),t._v(" "),o("li",[t._v("打包为WAR文件：然后，我们需要将应用打包为WAR文件，以便将其部署到外部Tomcat中。这可以通过在pom.xml文件中更改"),o("packaging",[t._v("元素来实现")])],1),t._v(" "),o("li",[t._v("部署到外部Tomcat：最后，我们将生成的WAR文件部署到外部Tomcat的webapps目录下。当Tomcat启动时，它会自动加载并运行所有在webapps目录下的应用。")])]),t._v(" "),o("h2",{attrs:{id:"_11-springboot读取配置文件的原理"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_11-springboot读取配置文件的原理"}},[t._v("#")]),t._v(" 11. SpringBoot读取配置文件的原理")]),t._v(" "),o("blockquote",[o("p",[t._v("通过事件监听的方式读取配置文件：ConfigFileApplicationListener")])]),t._v(" "),o("p",[t._v("加载优先级顺序：")]),t._v(" "),o("ol",[o("li",[t._v("file:./config/")]),t._v(" "),o("li",[t._v("file:./config/任意文件夹或文件")]),t._v(" "),o("li",[t._v("file:./")]),t._v(" "),o("li",[t._v("classpath:/config/")]),t._v(" "),o("li",[t._v("classpath:/")])]),t._v(" "),o("p",[t._v("这5个位置的优先级从高到低排序，也就是说，如果在file:./config/和classpath:/中都有application.properties文件，那么SpringBoot会优先加载file:./config/中的文件")]),t._v(" "),o("h2",{attrs:{id:"_12-springboot默认日志实现框架"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_12-springboot默认日志实现框架"}},[t._v("#")]),t._v(" 12. SpringBoot默认日志实现框架")]),t._v(" "),o("p",[t._v("当你创建一个添加了任何 starter 的 Spring Boot 应用程序时，它们都依赖于 spring-boot-starter，而 spring-boot-starter 又依赖于 spring-boot-starter-logging，这就为日志记录添加了 logback 依赖。")]),t._v(" "),o("p",[o("mark",[t._v("因此，默认情况下，Spring Boot 配置了 Slf4j（日志门面） 和 Logback（日志实现） 来记录日志")])]),t._v(" "),o("p",[o("strong",[t._v("使用 Log4j2 代替 Logback")]),t._v("\n如果你更喜欢使用 Log4j2 而不是 Logback，可以从 spring-boot-starter 中排除 spring-boot-starter-logging，并在 pom.xml 中添加 spring-boot-starter-log4j2 依赖")]),t._v(" "),o("p",[t._v("详情查看：https://www.cnblogs.com/zhaodalei/p/17251028.html")]),t._v(" "),o("blockquote",[o("p",[t._v("切换日志框架就是选择合适的Slf4j的适配器（可选）和桥接器（必选），不兼容才要进行适配")])])])}),[],!1,null,null,null);o.default=a.exports}}]);