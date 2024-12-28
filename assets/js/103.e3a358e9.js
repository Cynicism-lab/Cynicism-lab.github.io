(window.webpackJsonp=window.webpackJsonp||[]).push([[103],{468:function(t,s,e){"use strict";e.r(s);var a=e(7),_=Object(a.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"_1-概述"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-概述"}},[t._v("#")]),t._v(" 1. 概述")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Cynicism-lab/MyResource@gh-pages/image/image-20230105194710533.5ormf0bo48sg.webp",alt:""}})]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("HTTP无状态协议")]),t._v(" "),s("p",[t._v("无状态，指的是每一次请求都是独立的，下一次请求并不会携带上一次请求的数据。")])]),t._v(" "),s("blockquote",[s("p",[t._v("那应该怎么来实现登录校验的操作呢？具体的实现思路可以分为两部分：")])]),t._v(" "),s("ol",[s("li",[t._v("在员工登录成功后，需要将用户登录成功的信息存起来，"),s("strong",[t._v("记录")]),t._v("用户已经登录成功的"),s("strong",[t._v("标记")]),t._v("。")]),t._v(" "),s("li",[t._v("在浏览器发起请求时，需要在服务端进行"),s("strong",[t._v("统一拦截")]),t._v("，拦截后进行登录校验。")])]),t._v(" "),s("h2",{attrs:{id:"_2-会话技术"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-会话技术"}},[t._v("#")]),t._v(" 2. 会话技术")]),t._v(" "),s("blockquote",[s("p",[t._v("在web开发当中，会话指的就是浏览器与服务器之间的一次连接，我们就称为一次会话,一次会话可以包含多次请求和响应的。")])]),t._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Cynicism-lab/MyResource@gh-pages/image/image-20230105203827355.66thgpr309kw.webp",alt:""}})]),t._v(" "),s("h3",{attrs:{id:"_2-1-会话跟踪"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-会话跟踪"}},[t._v("#")]),t._v(" 2.1 会话跟踪")]),t._v(" "),s("blockquote",[s("p",[t._v("会话跟踪：一种维护浏览器状态的方法，服务器需要识别多次请求是否来自于同一浏览器，以便在"),s("strong",[t._v("同一次会话的多次请求间共享数据")]),t._v(" (HTTP无状态）")])]),t._v(" "),s("h4",{attrs:{id:"_2-1-1-cookie-客户端会话跟踪技术"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-1-cookie-客户端会话跟踪技术"}},[t._v("#")]),t._v(" 2.1.1 Cookie（客户端会话跟踪技术）")]),t._v(" "),s("p",[s("strong",[t._v("流程：")])]),t._v(" "),s("ul",[s("li",[t._v("服务器会 "),s("strong",[t._v("自动")]),t._v(" 的将生成的 cookie 响应给浏览器。")]),t._v(" "),s("li",[t._v("浏览器接收到响应回来的数据之后，会 "),s("strong",[t._v("自动")]),t._v(" 的将 cookie 存储在"),s("strong",[t._v("浏览器")]),t._v("本地。")]),t._v(" "),s("li",[t._v("在后续的请求当中，浏览器会 "),s("strong",[t._v("自动")]),t._v(" 的将 cookie 携带到服务器端。")])]),t._v(" "),s("p",[s("strong",[t._v("为什么这一切都是自动化进行的？")]),s("br"),t._v("\n是因为 cookie 它是 HTP 协议当中所支持的技术，而各大浏览器厂商都支持了这一标准。在 HTTP 协议官方给我们提供了一个响应头和请求头：")]),t._v(" "),s("ul",[s("li",[t._v("响应头 Set-Cookie ：设置Cookie数据的")]),t._v(" "),s("li",[t._v("请求头 Cookie：携带Cookie数据的")])]),t._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Cynicism-lab/MyResource@gh-pages/image/image-20230112101804878.705lylic3vuo.webp",alt:""}})]),t._v(" "),s("p",[s("strong",[t._v("优缺点")])]),t._v(" "),s("ul",[s("li",[t._v("优点：HTTP协议中支持的技术（像Set-Cookie 响应头的解析以及 Cookie 请求头数据的携带，都是浏览器自动进行的，是无需我们手动操作的）")]),t._v(" "),s("li",[t._v("缺点：\n"),s("ul",[s("li",[t._v("移动端APP(Android、IOS)中无法使用Cookie")]),t._v(" "),s("li",[t._v("不安全，用户可以自己禁用Cookie")]),t._v(" "),s("li",[t._v("Cookie不能跨域")])])])]),t._v(" "),s("blockquote",[s("p",[t._v("只要访问的URL中的"),s("strong",[t._v("协议")]),t._v("、"),s("strong",[t._v("IP")]),t._v("、"),s("strong",[t._v("端口")]),t._v("有任何一个维度不同，那就是跨域操作")])]),t._v(" "),s("h4",{attrs:{id:"_2-1-2-session-服务端会话跟踪技术"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-2-session-服务端会话跟踪技术"}},[t._v("#")]),t._v(" 2.1.2 Session（服务端会话跟踪技术）")]),t._v(" "),s("p",[s("strong",[t._v("流程：")]),s("br"),t._v("\n① "),s("strong",[t._v("获取session")]),t._v("：浏览器在第一次请求服务器的时候，直接在服务器当中来获取到会话对象Session，具有一个 "),s("strong",[t._v("ID")]),t._v(" 属性"),s("br"),t._v("\n② "),s("strong",[t._v("响应Cookie (JSESSIONID)")]),t._v("：服务器端在给浏览器响应数据的时候，它会将 Session 的 ID 通过 Cookie 响应给浏览器（Set-Cookie 响应头），浏览器会自动识别这个响应头，然后自动将Cookie存储在浏览器本地。"),s("br"),t._v("\n③ "),s("strong",[t._v("查找session")]),t._v("：后续的请求都会将 Cookie 的数据获取出来，并且携带到服务端。服务器拿到JSESSIONID这个 Cookie 的值，也就是 Session 的ID。拿到 ID 之后，就会从众多的 Session 当中来找到当前请求对应的会话对象Session")]),t._v(" "),s("p",[s("strong",[t._v("优缺点")])]),t._v(" "),s("ul",[s("li",[t._v("优点：Session是存储在服务端的，安全")]),t._v(" "),s("li",[t._v("缺点：\n"),s("ul",[s("li",[t._v("服务器集群环境下无法直接使用Session")]),t._v(" "),s("li",[t._v("移动端APP(Android、IOS)中无法使用Cookie")]),t._v(" "),s("li",[t._v("用户可以自己禁用Cookie")]),t._v(" "),s("li",[t._v("Cookie不能跨域\n"),s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Cynicism-lab/MyResource@gh-pages/image/image-20230112113558810.1h8iptx60u8w.webp",alt:""}})])])])]),t._v(" "),s("blockquote",[s("p",[t._v("PS：Session 底层是基于Cookie实现的会话跟踪，如果Cookie不可用，则该方案，也就失效了。")])]),t._v(" "),s("h4",{attrs:{id:"_2-1-3-令牌技术"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-3-令牌技术"}},[t._v("#")]),t._v(" 2.1.3 令牌技术")]),t._v(" "),s("p",[s("strong",[t._v("流程")]),t._v("："),s("br"),t._v("\n① 浏览器发起请求登录，如果登录成功，生成一个令牌，令牌就是用户的合法身份凭证。接下来我在响应数据的时候，我就可以直接将令牌响应给前端。"),s("br"),t._v("\n② 前端程序当中接收到令牌之后，就需要将这个令牌存储起来。这个存储可以存储在 cookie 当中，也可以存储在其他的存储空间(比如：localStorage)当中。"),s("br"),t._v("\n③ 后续的每一次请求，都需要将令牌携带到服务端。携带到服务端之后，再校验令牌的有效性。")]),t._v(" "),s("blockquote",[s("p",[t._v("此时，如果是在同一次会话的多次请求之间，我们想共享数据，我们就可以将共享的数据存储在令牌当中就可以了。")])]),t._v(" "),s("p",[s("strong",[t._v("优缺点")])]),t._v(" "),s("ul",[s("li",[t._v("优点：\n"),s("ul",[s("li",[t._v("支持PC端、移动端")]),t._v(" "),s("li",[t._v("解决集群环境下的认证问题")]),t._v(" "),s("li",[t._v("减轻服务器的存储压力（无需在服务器端存储）")])])]),t._v(" "),s("li",[t._v("缺点：需要自己实现（包括令牌的生成、令牌的传递、令牌的校验）")])]),t._v(" "),s("h4",{attrs:{id:"_2-1-4-jwt-令牌"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-4-jwt-令牌"}},[t._v("#")]),t._v(" 2.1.4 JWT 令牌")]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("JWT全称：JSON Web Token")]),t._v(" "),s("ul",[s("li",[t._v("定义了一种"),s("strong",[t._v("简洁")]),t._v("的、"),s("strong",[t._v("自包含")]),t._v("的格式，用于在通信双方以json数据格式"),s("strong",[t._v("安全的传输")]),t._v("信息。由于数字签名的存在，这些信息是可靠的。\n① 简洁：是指jwt就是一个简单的字符串。可以在请求参数或者是请求头当中直接传递。\n② 自包含：指的是jwt令牌，看似是一个随机的字符串，但是我们是可以根据自身的需求在jwt令牌中存储自定义的数据内容。如：可以直接在jwt令牌中存储用户的相关信息")])])]),t._v(" "),s("blockquote",[s("p",[t._v("官网：https://jwt.io/")])]),t._v(" "),s("p",[s("strong",[t._v("JWT的组成")]),t._v("：")]),t._v(" "),s("ul",[s("li",[s("p",[t._v('第一部分：Header(头）， 记录令牌类型、签名算法等。 例如：      {"alg":"HS256","type":"JWT"}')])]),t._v(" "),s("li",[s("p",[t._v('第二部分：Payload(有效载荷），携带一些自定义信息、默认信息等。 例如：{"id":"1","username":"Tom"}')])]),t._v(" "),s("li",[s("p",[t._v("第三部分：Signature(签名），防止Token被篡改、确保安全性。将header、payload，并加入指定秘钥，通过指定签名算法计算而来。")])])]),t._v(" "),s("blockquote",[s("p",[t._v("生成JWT令牌时，会对JSON格式的数据（前两部分）进行一次编码：进行base64编码")])]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),s("p",[t._v("在后续的请求当中，都会在请求头中携带JWT令牌到服务端，而服务端需要统一拦截所有的请求，从而判断是否携带的有合法的JWT令牌。")])]),t._v(" "),s("h2",{attrs:{id:"_3-过滤器-filter"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-过滤器-filter"}},[t._v("#")]),t._v(" 3. 过滤器 Filter")]),t._v(" "),s("h3",{attrs:{id:"_3-1-定义"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-定义"}},[t._v("#")]),t._v(" 3.1 定义")]),t._v(" "),s("blockquote",[s("p",[t._v("Filter的配置非常简单，只需要在Filter类上添加一个注解：@WebFilter，并指定属性urlPatterns，通过这个属性指定过滤器要拦截哪些请求\n还需要在启动类上面加上一个注解@ServletComponentScan，通过这个@ServletComponentScan注解来开启SpringBoot项目对于Servlet组件的支持。")])]),t._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Cynicism-lab/MyResource@gh-pages/image/image-20230112120955145.1mlpfdhpt528.webp",alt:""}})]),t._v(" "),s("ul",[s("li",[t._v("过滤器可以把对资源的请求拦截下来，从而实现一些特殊的功能\n"),s("ul",[s("li",[t._v("使用了过滤器之后，要想访问web服务器上的资源，必须先经过滤器，过滤器处理完毕之后，才可以访问对应的资源。")])])]),t._v(" "),s("li",[t._v("过滤器一般完成一些通用的操作，比如："),s("strong",[t._v("登录校验")]),t._v("、统一编码处理、敏感字符处理等。")])]),t._v(" "),s("h3",{attrs:{id:"_3-2-执行流程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-执行流程"}},[t._v("#")]),t._v(" 3.2 执行流程")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Cynicism-lab/MyResource@gh-pages/image/image-20230106222559935.2jommgfdks00.webp",alt:""}}),t._v("\n过滤器当中我们拦截到了请求之后，如果希望继续访问后面的web资源，就要执行放行操作，放行就是调用 FilterChain对象当中的doFilter()方法，在调用doFilter()这个方法之前所编写的代码属于放行之前的逻辑。")]),t._v(" "),s("p",[t._v("在放行后访问完 web 资源之后还会回到过滤器当中，回到过滤器之后如有需求还可以执行放行之后的逻辑，放行之后的逻辑我们写在doFilter()这行代码之后。")]),t._v(" "),s("h3",{attrs:{id:"_3-3-拦截路径"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-拦截路径"}},[t._v("#")]),t._v(" 3.3 拦截路径")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("拦截路径")]),t._v(" "),s("th",[t._v("urlPatterns值")]),t._v(" "),s("th",[t._v("含义")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("拦截具体路径")]),t._v(" "),s("td",[t._v("/login")]),t._v(" "),s("td",[t._v("只有访问 /login 路径时，才会被拦截")])]),t._v(" "),s("tr",[s("td",[t._v("目录拦截")]),t._v(" "),s("td",[t._v("/emps/*")]),t._v(" "),s("td",[t._v("访问/emps下的所有资源，都会被拦截")])]),t._v(" "),s("tr",[s("td",[t._v("拦截所有")]),t._v(" "),s("td",[t._v("/*")]),t._v(" "),s("td",[t._v("访问所有资源，都会被拦截")])])])]),t._v(" "),s("h3",{attrs:{id:"_3-4-过滤器链"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-4-过滤器链"}},[t._v("#")]),t._v(" 3.4 过滤器链")]),t._v(" "),s("blockquote",[s("p",[t._v("过滤器链指的是在一个web应用程序当中，可以配置多个过滤器，多个过滤器就形成了一个过滤器链\n注解方式配置的Filter过滤器，它的执行优先级是按时过滤器类名的自动排序确定的，类名排名越靠前，优先级越高")])]),t._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Cynicism-lab/MyResource@gh-pages/image/image-20230107084730393.4azdpmp4aam8.webp",alt:""}})]),t._v(" "),s("h2",{attrs:{id:"_4-拦截器-interceptor"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-拦截器-interceptor"}},[t._v("#")]),t._v(" 4. 拦截器 Interceptor")]),t._v(" "),s("h3",{attrs:{id:"_4-1-定义"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-定义"}},[t._v("#")]),t._v(" 4.1 定义")]),t._v(" "),s("p",[t._v("什么是拦截器？")]),t._v(" "),s("ul",[s("li",[t._v("是一种动态拦截方法调用的机制，类似于过滤器。")]),t._v(" "),s("li",[t._v("拦截器是Spring框架中提供的，用来动态拦截控制器方法的执行。")])]),t._v(" "),s("p",[t._v("拦截器的作用：")]),t._v(" "),s("ul",[s("li",[t._v("拦截请求，在指定方法调用前后，根据业务需要执行预先设定的代码。")])]),t._v(" "),s("h3",{attrs:{id:"_4-2-拦截路径"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-拦截路径"}},[t._v("#")]),t._v(" 4.2 拦截路径")]),t._v(" "),s("blockquote",[s("p",[t._v("配置拦截器时，不仅可以指定要拦截哪些资源，还可以指定不拦截哪些资源，只需要调用"),s("code",[t._v('excludePathPatterns("不拦截路径")')]),t._v("方法，指定哪些资源不需要拦截")])]),t._v(" "),s("p",[t._v("在拦截器中除了可以设置"),s("code",[t._v("/**")]),t._v("拦截所有资源外，还有一些常见拦截路径设置：")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("拦截路径")]),t._v(" "),s("th",[t._v("含义")]),t._v(" "),s("th",[t._v("举例")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("/*")]),t._v(" "),s("td",[t._v("一级路径")]),t._v(" "),s("td",[t._v("能匹配/depts，/emps，/login，不能匹配 /depts/1")])]),t._v(" "),s("tr",[s("td",[t._v("/**")]),t._v(" "),s("td",[t._v("任意级路径")]),t._v(" "),s("td",[t._v("能匹配/depts，/depts/1，/depts/1/2")])]),t._v(" "),s("tr",[s("td",[t._v("/depts/*")]),t._v(" "),s("td",[t._v("/depts下的一级路径")]),t._v(" "),s("td",[t._v("能匹配/depts/1，不能匹配/depts/1/2，/depts")])]),t._v(" "),s("tr",[s("td",[t._v("/depts/**")]),t._v(" "),s("td",[t._v("/depts下的任意级路径")]),t._v(" "),s("td",[t._v("能匹配/depts，/depts/1，/depts/1/2，不能匹配/emps/1")])])])]),t._v(" "),s("h3",{attrs:{id:"_4-3-对比"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-3-对比"}},[t._v("#")]),t._v(" 4.3 对比")]),t._v(" "),s("ul",[s("li",[t._v("接口规范不同：过滤器需要实现Filter接口，而拦截器需要实现HandlerInterceptor接口。")]),t._v(" "),s("li",[t._v("拦截范围不同：过滤器Filter会拦截所有的资源，而Interceptor只会拦截Spring环境中的资源。")])]),t._v(" "),s("h2",{attrs:{id:"_5-全局异常"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-全局异常"}},[t._v("#")]),t._v(" 5. 全局异常")]),t._v(" "),s("ul",[s("li",[t._v("定义全局异常处理器非常简单，就是定义一个类，在类上加上一个注解"),s("code",[t._v("@RestControllerAdvice")]),t._v("，加上这个注解就代表我们定义了一个全局异常处理器。")]),t._v(" "),s("li",[t._v("在全局异常处理器当中，需要定义一个方法来捕获异常，在这个方法上需要加上注解"),s("code",[t._v("@ExceptionHandler")]),t._v("。通过@ExceptionHandler注解当中的value属性来指定我们要捕获的是哪一类型的异常。")])]),t._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@RestControllerAdvice")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("GlobalExceptionHandler")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//处理异常")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@ExceptionHandler")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Exception")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//指定能够处理的异常类型")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Result")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ex")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Exception")]),t._v(" e"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        e"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("printStackTrace")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//打印堆栈中的异常信息")]),t._v("\n\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//捕获到异常之后，响应一个标准的Result")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Result")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("error")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"对不起,操作失败,请联系管理员"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br")])]),s("blockquote",[s("p",[t._v("@RestControllerAdvice = @ControllerAdvice + @ResponseBody")]),t._v(" "),s("p",[t._v("处理异常的方法返回值会转换为json格式数据后再响应给前端")])])])}),[],!1,null,null,null);s.default=_.exports}}]);