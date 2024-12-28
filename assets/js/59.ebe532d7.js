(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{425:function(a,s,t){"use strict";t.r(s);var n=t(7),e=Object(n.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h2",{attrs:{id:"_1-map中如何清理大对象"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-map中如何清理大对象"}},[a._v("#")]),a._v(" 1. Map中如何清理大对象？")]),a._v(" "),s("ol",[s("li",[a._v("手动删除")])]),a._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[a._v("map"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("remove")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("key"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 删除指定的键值对")]),a._v("\nmap"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("clear")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 清空整个 Map")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br")])]),s("blockquote",[s("p",[a._v("如果Map中存储的是对象的引用（尤其是大对象），那么即使Map被清空，这些对象也不会被立即回收，除非没有其他引用指向它们")])]),a._v(" "),s("ol",{attrs:{start:"2"}},[s("li",[a._v("使用迭代器\n如果Map中存储的是大对象的引用，并且这些对象需要在清空Map后立即被回收，那么可以使用迭代器遍历Map，并显式地将每个元素设为null。这样可以确保对象被立即回收")])]),a._v(" "),s("h2",{attrs:{id:"_2-守护线程不结束怎么办"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-守护线程不结束怎么办"}},[a._v("#")]),a._v(" 2. 守护线程不结束怎么办")]),a._v(" "),s("div",{staticClass:"custom-block note"},[s("p",{staticClass:"custom-block-title"},[a._v("守护线程（Daemon Thread）")]),a._v(" "),s("p",[a._v("它是一种特殊的线程，主要用于为其他线程提供服务，例如垃圾回收线程，守护线程不结束可能是因为非守护线程还在运行")])]),a._v(" "),s("ol",[s("li",[s("p",[a._v("结束所有非守护线程：由于守护线程会在所有非守护线程结束后自动销毁，因此你可以尝试结束所有非守护线程")])]),a._v(" "),s("li",[s("p",[a._v("使用interrupt()方法：你可以尝试使用interrupt()方法来中断守护线程。这个方法会设置线程的中断标志，然后线程可以选择如何响应这个中断。")])]),a._v(" "),s("li",[s("p",[a._v("使用stop()方法：虽然stop()方法已经被弃用，因为它可能会导致对象处于不一致的状态，但在某些情况下，你可能需要使用它来强制结束线程。但请注意，这应该是最后的手段，因为使用stop()方法可能会导致严重的问题。")])])]),a._v(" "),s("h2",{attrs:{id:"_3-threadlocal原理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-threadlocal原理"}},[a._v("#")]),a._v(" 3. ThreadLocal原理")]),a._v(" "),s("p",[a._v("ThreadLocal是Java中的一个特殊变量，它可以"),s("strong",[a._v("为每个线程创建一个独立的变量副本")]),a._v("。以下是ThreadLocal的工作原理：")]),a._v(" "),s("ul",[s("li",[s("p",[a._v("ThreadLocalMap：每个Thread都有一个ThreadLocalMap，它是一个Map型的数据结构，实际的值就是保存在这里面。ThreadLocalMap以ThreadLocal作为key，value就是ThreadLocal的值。")])]),a._v(" "),s("li",[s("p",[a._v("弱引用：ThreadLocalMap中的"),s("strong",[a._v("key是对ThreadLocal的弱引用")]),a._v("。这意味着，如果没有其他强引用指向ThreadLocal对象，那么这个ThreadLocal对象就会被垃圾回收器回收。")])])]),a._v(" "),s("blockquote",[s("p",[a._v("🔎关于ThreadLocal的key被垃圾回收是否会造成内存泄漏，答案是可能的。")])]),a._v(" "),s("p",[a._v("当ThreadLocal对象被垃圾回收器回收后，"),s("strong",[a._v("ThreadLocalMap中对应的key会变为null，但是value还在")]),a._v("，因为它仍然被ThreadLocalMap中的Entry强引用。只有当Thread结束，ThreadLocalMap才会被销毁，value才会被回收。因此，如果Thread一直不结束，这些value就会一直存在，可能会导致内存泄漏。")]),a._v(" "),s("blockquote",[s("p",[a._v("💡为了避免这种情况，最好的做法是每次使用完ThreadLocal后，都调用它的remove()方法，清除当前线程的value。这样可以确保ThreadLocal不再被使用时，不会有value被遗留在ThreadLocalMap中。")])]),a._v(" "),s("h2",{attrs:{id:"_4-线程安全的map"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-线程安全的map"}},[a._v("#")]),a._v(" 4. 线程安全的Map")]),a._v(" "),s("p",[a._v("Java中有几种常见的线程安全的Map：")]),a._v(" "),s("ul",[s("li",[s("p",[a._v("Hashtable：Hashtable是线程安全的，它通过在put、get、containsKey等方法上添加synchronized关键字实现线程安全")])]),a._v(" "),s("li",[s("p",[a._v("SynchronizedMap：Collections类的synchronizedMap方法可以将任何Map转换为线程安全的Map12。它通过在每次操作HashMap时获取一个对象锁来实现线程安全")])]),a._v(" "),s("li",[s("p",[a._v("ConcurrentHashMap：ConcurrentHashMap是一个高效的线程安全的HashMap实现。它通过使用CAS操作、synchronized和volatile关键字，以及分段锁的机制来实现线程安全")])]),a._v(" "),s("li",[s("p",[a._v("ConcurrentSkipListMap：ConcurrentSkipListMap是一个线程安全且有序的Map，它通过跳表的数据结构来实现")])])]),a._v(" "),s("h2",{attrs:{id:"_5-hashmap原理及扩容机制"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-hashmap原理及扩容机制"}},[a._v("#")]),a._v(" 5. HashMap原理及扩容机制")]),a._v(" "),s("p",[a._v("jdk8的"),s("a",{attrs:{href:"https://tech.meituan.com/2016/06/24/java-hashmap.html",target:"_blank"}},[a._v("HashMap原理")]),a._v("点击链接即可：（先插入后判断扩容：数组的长度）")]),a._v(" "),s("p",[a._v("🔎扩容时，想要知道旧Map里的元素在新Map的位置，无需对元素的hash值进行计算，只需要判断新增的高位是1或0即可，是0则无需变动，是1则将旧元素移动旧map的length距离")]),a._v(" "),s("h2",{attrs:{id:"_6-notify-vs-wait"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6-notify-vs-wait"}},[a._v("#")]),a._v(" 6. Notify() vs Wait()")]),a._v(" "),s("ul",[s("li",[a._v("wait() 与 notify/notifyAll() 是Object类的方法，在执行两个方法时，要"),s("strong",[a._v("先获得锁")])]),a._v(" "),s("li",[a._v("当线程执行wait()时，会把"),s("strong",[a._v("当前的锁释放")]),a._v("，然后让出CPU，进入等待状态")]),a._v(" "),s("li",[a._v("当执行notify/notifyAll方法时，会"),s("strong",[a._v("唤醒一个处于等待该 对象锁 的线程")]),a._v("，然后继续往下执行，直到执行完退出对象锁锁住的区域（synchronized修饰的代码块）后再释放锁")])]),a._v(" "),s("blockquote",[s("p",[a._v("sleep()不需要释放锁")])]),a._v(" "),s("h2",{attrs:{id:"_7-双重检验锁创建单例模式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_7-双重检验锁创建单例模式"}},[a._v("#")]),a._v(" 7. 双重检验锁创建单例模式")]),a._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Singleton")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("private")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("volatile")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("static")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Singleton")]),a._v(" uniqueInstance"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("private")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Singleton")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("static")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Singleton")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("getUniqueInstance")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//先判断对象是否已经实例过，没有实例化过才进⼊加锁代码")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("if")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("uniqueInstance "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("synchronized")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Singleton")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n                "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("if")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("uniqueInstance "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n                    uniqueInstance "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Singleton")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n                "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("return")]),a._v(" uniqueInstance"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br"),s("span",{staticClass:"line-number"},[a._v("11")]),s("br"),s("span",{staticClass:"line-number"},[a._v("12")]),s("br"),s("span",{staticClass:"line-number"},[a._v("13")]),s("br"),s("span",{staticClass:"line-number"},[a._v("14")]),s("br"),s("span",{staticClass:"line-number"},[a._v("15")]),s("br"),s("span",{staticClass:"line-number"},[a._v("16")]),s("br"),s("span",{staticClass:"line-number"},[a._v("17")]),s("br"),s("span",{staticClass:"line-number"},[a._v("18")]),s("br")])]),s("blockquote",[s("p",[a._v("只要创建对象的时候需要进行同步，避免了同步开销；volatile防止指令重排序，从而避免获得未经过完整初始化的对象")])]),a._v(" "),s("h2",{attrs:{id:"_7-java中sleep方法会一直占用cpu吗-wait方法会占用cpu吗"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_7-java中sleep方法会一直占用cpu吗-wait方法会占用cpu吗"}},[a._v("#")]),a._v(" 7. Java中sleep方法会一直占用cpu吗？wait方法会占用cpu吗？")]),a._v(" "),s("ul",[s("li",[s("p",[s("strong",[a._v("sleep方法")]),a._v("：当一个线程调用sleep方法时，该线程会暂时让出CPU资源，但不会释放已经占有的锁。这意味着，即使当前线程使用sleep方法让出了CPU，但其他被同步锁挡住了的线程也无法得到执行。因此，sleep方法适用于等待一段时间后再执行下一步操作，"),s("strong",[a._v("不适用于同步场景")])])]),a._v(" "),s("li",[s("p",[s("strong",[a._v("wait方法")]),a._v("：当一个线程调用wait方法时，该线程会进入等待状态，并且会释放所有的锁。在wait期间，该线程不会占用CPU资源，因此能够让其他线程获得锁并执行。wait方法适用于需要等待其他线程执行完某个操作后再执行下一步操作的"),s("strong",[a._v("同步场景")])])])]),a._v(" "),s("h2",{attrs:{id:"_8-往set中存自定义对象需要注意什么"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_8-往set中存自定义对象需要注意什么"}},[a._v("#")]),a._v(" 8. 往set中存自定义对象需要注意什么？")]),a._v(" "),s("p",[a._v("重写equals和hashCode方法：")]),a._v(" "),s("p",[a._v("在Java中，如果你的自定义对象要放入Set，那么必须重写equals和hashCode方法。因为Set是通过equals方法来检查对象是否相等，通过hashCode方法来散列对象")])])}),[],!1,null,null,null);s.default=e.exports}}]);