(window.webpackJsonp=window.webpackJsonp||[]).push([[214],{579:function(a,t,s){"use strict";s.r(t);var e=s(7),r=Object(e.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h2",{attrs:{id:"_1-spring-cache"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-spring-cache"}},[a._v("#")]),a._v(" 1. Spring Cache")]),a._v(" "),t("h3",{attrs:{id:"_1-1-概述"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-概述"}},[a._v("#")]),a._v(" 1.1 概述")]),a._v(" "),t("div",{staticClass:"custom-block note"},[t("p",{staticClass:"custom-block-title"},[a._v("笔记")]),a._v(" "),t("p",[a._v("Spring Cache是一个框架，实现了基于注解的缓存功能。Spring Cache提供了-层抽象，底层可以切换不同的cache实现。具体就是通过CacheManager接口来统一不同的缓存技术。CacheManager是Spring提供的各种缓存技术抽象接口")])]),a._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Cynicism-lab/MyResource@gh-pages/92280e9c4d21489f8db5681cef3d048c.3kiu8ugez1j4.webp",alt:""}})]),a._v(" "),t("h3",{attrs:{id:"_1-2-常用注解"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-常用注解"}},[a._v("#")]),a._v(" 1.2 常用注解")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Cynicism-lab/MyResource@gh-pages/46cf2fc2bb1248fd82435f5db05e80f7.z5a1nm5s7dc.webp",alt:""}})]),a._v(" "),t("p",[a._v("在spring boot项目中，"),t("mark",[a._v("使用缓存技术只需在项目中导入相关缓存技术的依赖包")]),a._v("，并在启动类上使用@EnableCaching开启缓存支持即可。")]),a._v(" "),t("blockquote",[t("p",[a._v("例如，使用Redis作为缓存技术，只需要导入Spring data Redis的maven坐标即可")])]),a._v(" "),t("h2",{attrs:{id:"_2-mysql主从复制"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-mysql主从复制"}},[a._v("#")]),a._v(" 2. MySQL主从复制")]),a._v(" "),t("h3",{attrs:{id:"_2-1-概述"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-概述"}},[a._v("#")]),a._v(" 2.1 概述")]),a._v(" "),t("p",[a._v("MySQL主从复制是一个异步的复制过程，底层是基于Mysql数据库自带的 二进制日志 功能。就是一台或多台MySQL数据库（slave，即从库）从另一台MySQL数据库（master，即主库）进行日志的复制，然后再解析日志并应用到自身，最终实现 从库 的数据和 主库 的数据保持一致。MySQL主从复制是MySQL数据库自带功能，无需借助第三方工具")]),a._v(" "),t("div",{staticClass:"custom-block note"},[t("p",{staticClass:"custom-block-title"},[a._v("二进制日志")]),a._v(" "),t("p",[a._v("二进制日志（BINLOG）记录了所有的 DDL（数据定义语言）语句和 DML（数据操纵语言）语句，但是不包括数据查询语句。此日志对于灾难时的数据恢复起着极其重要的作用，MySQL的主从复制， 就是通过该binlog实现的。默认MySQL是未开启该日志的。")])]),a._v(" "),t("h3",{attrs:{id:"_2-2-原理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-原理"}},[a._v("#")]),a._v(" 2.2 原理")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Cynicism-lab/MyResource@gh-pages/be83d77cdaf853df40860a9941c3ca03.5wbvix7bf7gg.webp",alt:""}})]),a._v(" "),t("p",[a._v("MySQL复制过程分成三步：")]),a._v(" "),t("p",[a._v("1). MySQL master 将数据变更写入二进制日志( binary log)")]),a._v(" "),t("p",[a._v("2). slave将master的binary log拷贝到它的中继日志（relay log）")]),a._v(" "),t("p",[a._v("3). slave重做中继日志中的事件，将数据变更反映它自己的数据")]),a._v(" "),t("h2",{attrs:{id:"_3-读写分离"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-读写分离"}},[a._v("#")]),a._v(" 3. 读写分离")]),a._v(" "),t("h3",{attrs:{id:"_3-1-概述"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-概述"}},[a._v("#")]),a._v(" 3.1 概述")]),a._v(" "),t("blockquote",[t("p",[a._v("背景：面对日益增加的系统访问量，数据库的吞吐量面临着巨大瓶颈。 对于同一时刻有大量并发读操作和较少写操作类型的应用系统来说，将数据库拆分为主库和从库，主库负责处理事务性的增删改操作，从库负责处理查询操作，能够有效的避免由数据更新导致的行锁，使得整个系统的查询性能得到极大的改善")])]),a._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Cynicism-lab/MyResource@gh-pages/336feb591582ec2bb4fcf737d6a5ecfa.5sgg8307w7ls.webp",alt:""}})]),a._v(" "),t("p",[t("mark",[a._v("通过读写分离,就可以降低单台数据库的访问压力, 提高访问效率，也可以避免单机故障。")])]),a._v(" "),t("h3",{attrs:{id:"_3-2-shardingjdbc"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-shardingjdbc"}},[a._v("#")]),a._v(" 3.2 ShardingJDBC")]),a._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[a._v("介绍")]),a._v(" "),t("p",[a._v("Sharding-JDBC定位为轻量级Java框架，在Java的JDBC层提供的额外服务。 它使用客户端直连数据库，以jar包形式提供服务，无需额外部署和依赖，可理解为增强版的JDBC驱动，完全兼容JDBC和各种ORM框架")])]),a._v(" "),t("p",[t("mark",[a._v("使用Sharding-JDBC可以在程序中轻松的实现数据库读写分离")])]),a._v(" "),t("p",[t("strong",[a._v("配置相关介绍")]),a._v("：\n"),t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Cynicism-lab/MyResource@gh-pages/77e41843d7bf9c67a519da2f36e03797.3je9tsl2o9z4.webp",alt:""}})])])}),[],!1,null,null,null);t.default=r.exports}}]);