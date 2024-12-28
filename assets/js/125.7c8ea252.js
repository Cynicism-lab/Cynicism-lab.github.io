(window.webpackJsonp=window.webpackJsonp||[]).push([[125],{491:function(_,v,t){"use strict";t.r(v);var a=t(7),e=Object(a.a)({},(function(){var _=this,v=_._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[v("blockquote",[v("p",[_._v("消息队列在使用过程中，面临着很多实际问题需要思考：")])]),_._v(" "),v("p",[v("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Cynicism-lab/MyResource@gh-pages/image/image-20210718155003157.61p28hvr7uv4.webp",alt:""}})]),_._v(" "),v("h2",{attrs:{id:"_1-消息可靠性"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-消息可靠性"}},[_._v("#")]),_._v(" 1. 消息可靠性")]),_._v(" "),v("p",[_._v("消息从发送，到消费者接收，会经理多个过程, 其中的每一步都可能导致消息丢失，常见的丢失原因包括：")]),_._v(" "),v("ul",[v("li",[_._v("发送时丢失：\n"),v("ul",[v("li",[_._v("生产者发送的消息未送达exchange")]),_._v(" "),v("li",[_._v("消息到达exchange后未到达queue")])])]),_._v(" "),v("li",[_._v("MQ宕机，queue将消息丢失")]),_._v(" "),v("li",[_._v("consumer接收到消息后未消费就宕机")])]),_._v(" "),v("p",[_._v("针对这些问题，RabbitMQ分别给出了解决方案：")]),_._v(" "),v("ul",[v("li",[_._v("生产者确认机制")]),_._v(" "),v("li",[_._v("mq持久化")]),_._v(" "),v("li",[_._v("消费者确认机制")]),_._v(" "),v("li",[_._v("失败重试机制")])]),_._v(" "),v("h3",{attrs:{id:"_1-1-生产者消息确认"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-生产者消息确认"}},[_._v("#")]),_._v(" 1.1 生产者消息确认")]),_._v(" "),v("p",[_._v("RabbitMQ提供了"),v("strong",[_._v("publisher confirm")]),_._v("机制来避免消息发送到MQ过程中丢失。这种机制必须给每个消息指定一个唯一ID。消息发送到MQ以后，会返回一个结果给发送者，表示消息是否处理成功。")]),_._v(" "),v("p",[_._v("返回结果有两种方式：")]),_._v(" "),v("ul",[v("li",[_._v("publisher-confirm，发送者确认\n"),v("ul",[v("li",[_._v("消息成功投递到交换机，返回ack")]),_._v(" "),v("li",[_._v("消息未投递到交换机，返回nack")])])]),_._v(" "),v("li",[_._v("publisher-return，发送者回执\n"),v("ul",[v("li",[_._v("消息投递到交换机了，但是没有路由到队列。返回ACK，及路由失败原因。")])])])]),_._v(" "),v("p",[v("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Cynicism-lab/MyResource@gh-pages/image/image-20210718161707992.1cku379oy4hs.webp",alt:""}})]),_._v(" "),v("h3",{attrs:{id:"_1-2-消息持久化"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-消息持久化"}},[_._v("#")]),_._v(" 1.2 消息持久化")]),_._v(" "),v("blockquote",[v("p",[_._v("生产者确认可以确保消息投递到RabbitMQ的队列中，但是消息发送到RabbitMQ以后，如果突然宕机，也可能导致消息丢失。")])]),_._v(" "),v("p",[_._v("要想确保消息在RabbitMQ中安全保存，必须开启消息持久化机制。")]),_._v(" "),v("ul",[v("li",[_._v("交换机持久化")]),_._v(" "),v("li",[_._v("队列持久化")]),_._v(" "),v("li",[_._v("消息持久化")])]),_._v(" "),v("p",[v("mark",[_._v("默认情况下，由SpringAMQP声明的交换机、队列、消息都是持久化的")])]),_._v(" "),v("h3",{attrs:{id:"_1-3-消费者消息确认"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-消费者消息确认"}},[_._v("#")]),_._v(" 1.3 消费者消息确认")]),_._v(" "),v("p",[_._v("RabbitMQ是"),v("strong",[_._v("阅后即焚")]),_._v("机制，RabbitMQ确认消息被消费者消费后会立刻删除。")]),_._v(" "),v("p",[_._v("而RabbitMQ是通过"),v("strong",[_._v("消费者回执")]),_._v("来确认消费者是否成功处理消息的：消费者获取消息后，应该向RabbitMQ发送"),v("code",[_._v("ACK")]),_._v("回执，表明自己已经处理消息")]),_._v(" "),v("p",[_._v("SpringAMQP则允许配置三种确认模式：")]),_._v(" "),v("ul",[v("li",[v("strong",[_._v("manual")]),_._v("：手动ack，需要在业务代码结束后，调用api发送ack。")]),_._v(" "),v("li",[v("strong",[_._v("auto")]),_._v("：自动ack，由spring监测listener代码是否出现异常，没有异常则返回ack；抛出异常则返回nack")]),_._v(" "),v("li",[v("strong",[_._v("none")]),_._v("：关闭ack，MQ假定消费者获取消息后会成功处理，因此消息投递后立即被删除")])]),_._v(" "),v("h3",{attrs:{id:"_1-4-消费失败重试机制"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-4-消费失败重试机制"}},[_._v("#")]),_._v(" 1.4 消费失败重试机制")]),_._v(" "),v("blockquote",[v("p",[_._v("当消费者出现异常后，消息会不断requeue（重入队）到队列，再重新发送给消费者，然后再次异常，再次requeue，无限循环，导致mq的消息处理飙升，带来不必要的压力")])]),_._v(" "),v("h4",{attrs:{id:"_1-4-1-本地重试"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-4-1-本地重试"}},[_._v("#")]),_._v(" 1.4.1 本地重试")]),_._v(" "),v("p",[_._v("利用Spring的retry机制，在消费者出现异常时利用本地重试，而不是无限制的requeue到mq队列")]),_._v(" "),v("ul",[v("li",[_._v("开启本地重试时，消息处理过程中抛出异常，不会requeue到队列，而是在消费者本地重试")]),_._v(" "),v("li",[_._v("重试达到最大次数后，Spring会返回ack，消息会被丢弃")])]),_._v(" "),v("h4",{attrs:{id:"_1-4-2-失败策略"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-4-2-失败策略"}},[_._v("#")]),_._v(" 1.4.2 失败策略")]),_._v(" "),v("p",[_._v("在本地重试中，达到最大重试次数后，消息会被丢弃，这是由Spring内部机制决定的。")]),_._v(" "),v("p",[_._v("在开启重试模式后，重试次数耗尽，如果消息依然失败，则需要有MessageRecovery接口来处理，它包含三种不同的实现：")]),_._v(" "),v("ul",[v("li",[v("code",[_._v("RejectAndDontRequeueRecoverer")]),_._v("：重试耗尽后，直接reject，丢弃消息。"),v("strong",[_._v("默认")]),_._v("就是这种方式")]),_._v(" "),v("li",[v("code",[_._v("ImmediateRequeueMessageRecoverer")]),_._v("：重试耗尽后，返回nack，消息重新入队")]),_._v(" "),v("li",[v("code",[_._v("RepublishMessageRecoverer")]),_._v("：重试耗尽后，将失败消息投递到指定的交换机")])]),_._v(" "),v("blockquote",[v("p",[_._v("比较优雅的一种处理方案是RepublishMessageRecoverer，失败后将消息投递到一个指定的，专门存放异常消息的队列，后续由人工集中处理。")])]),_._v(" "),v("h2",{attrs:{id:"_2-死信交换机"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-死信交换机"}},[_._v("#")]),_._v(" 2. 死信交换机")]),_._v(" "),v("h3",{attrs:{id:"_2-1-初识死信交换机"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-初识死信交换机"}},[_._v("#")]),_._v(" 2.1 初识死信交换机")]),_._v(" "),v("p",[_._v("当一个队列中的消息满足下列情况之一时，可以成为死信（dead letter）：")]),_._v(" "),v("ul",[v("li",[_._v("消费者使用basic.reject或 basic.nack声明消费失败，并且消息的requeue参数设置为false")]),_._v(" "),v("li",[_._v("消息是一个过期消息，超时无人消费")]),_._v(" "),v("li",[_._v("要投递的队列消息满了，无法投递")])]),_._v(" "),v("p",[_._v("如果这个包含死信的队列配置了"),v("code",[_._v("dead-letter-exchange")]),_._v("属性，指定了一个交换机，那么队列中的死信就会投递到这个交换机中，而这个交换机称为"),v("strong",[_._v("死信交换机")]),_._v("（Dead Letter Exchange，检查DLX）。")]),_._v(" "),v("h3",{attrs:{id:"_2-2-ttl"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-ttl"}},[_._v("#")]),_._v(" 2.2 TTL")]),_._v(" "),v("p",[_._v("一个队列中的消息如果超时未消费，则会变为死信，超时分为两种情况：")]),_._v(" "),v("ul",[v("li",[_._v("消息所在的队列设置了超时时间")]),_._v(" "),v("li",[_._v("消息本身设置了超时时间")])]),_._v(" "),v("h3",{attrs:{id:"_2-3-延迟队列"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-延迟队列"}},[_._v("#")]),_._v(" 2.3 延迟队列")]),_._v(" "),v("blockquote",[v("p",[_._v("利用TTL结合死信交换机，我们实现了消息发出后，消费者延迟收到消息的效果。这种消息模式就称为延迟队列（Delay Queue）模式。")])]),_._v(" "),v("p",[v("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Cynicism-lab/MyResource@gh-pages/image/image-20210718182643311.7ii7dtdc13wg.webp",alt:""}}),_._v("\n延迟队列的使用场景包括：")]),_._v(" "),v("ul",[v("li",[_._v("延迟发送短信")]),_._v(" "),v("li",[_._v("用户下单，如果用户在15 分钟内未支付，则自动取消")]),_._v(" "),v("li",[_._v("预约工作会议，20分钟后自动通知所有参会人员")])]),_._v(" "),v("h2",{attrs:{id:"_3-惰性队列"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-惰性队列"}},[_._v("#")]),_._v(" 3. 惰性队列")]),_._v(" "),v("h3",{attrs:{id:"_3-1-消息堆积问题"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-消息堆积问题"}},[_._v("#")]),_._v(" 3.1 消息堆积问题")]),_._v(" "),v("div",{staticClass:"custom-block tip"},[v("p",{staticClass:"custom-block-title"},[_._v("消息堆积")]),_._v(" "),v("p",[_._v("当生产者发送消息的速度超过了消费者处理消息的速度，就会导致队列中的消息堆积，直到队列存储消息达到上限。之后发送的消息就会成为死信，可能会被丢弃")])]),_._v(" "),v("p",[_._v("解决消息堆积有两种思路：")]),_._v(" "),v("ul",[v("li",[_._v("增加更多消费者，提高消费速度。也就是我们之前说的work queue模式")]),_._v(" "),v("li",[_._v("扩大队列容积，提高堆积上限")])]),_._v(" "),v("blockquote",[v("p",[_._v("要提升队列容积，把消息保存在内存中显然是不行的。")])]),_._v(" "),v("h3",{attrs:{id:"_3-2-惰性队列"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-惰性队列"}},[_._v("#")]),_._v(" 3.2 惰性队列")]),_._v(" "),v("blockquote",[v("p",[_._v("从RabbitMQ的3.6.0版本开始，就增加了Lazy Queues的概念，也就是惰性队列。")])]),_._v(" "),v("p",[v("strong",[_._v("惰性队列的特征如下：")])]),_._v(" "),v("ul",[v("li",[_._v("接收到消息后直接存入磁盘而非内存")]),_._v(" "),v("li",[_._v("消费者要消费消息时才会从磁盘中读取并加载到内存")]),_._v(" "),v("li",[_._v("支持数百万条的消息存储")])]),_._v(" "),v("p",[v("strong",[_._v("惰性队列的优点有哪些？")])]),_._v(" "),v("ul",[v("li",[_._v("基于磁盘存储，消息上限高")]),_._v(" "),v("li",[_._v("没有间歇性的page-out，性能比较稳定")])]),_._v(" "),v("p",[v("strong",[_._v("惰性队列的缺点有哪些？")])]),_._v(" "),v("ul",[v("li",[_._v("基于磁盘存储，消息时效性会降低")]),_._v(" "),v("li",[_._v("性能受限于磁盘的IO")])]),_._v(" "),v("h2",{attrs:{id:"_4-mq集群"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4-mq集群"}},[_._v("#")]),_._v(" 4. MQ集群")]),_._v(" "),v("h3",{attrs:{id:"_4-1-集群分类"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-集群分类"}},[_._v("#")]),_._v(" 4.1 集群分类")]),_._v(" "),v("blockquote",[v("p",[_._v("RabbitMQ的是基于Erlang语言编写，而Erlang又是一个面向并发的语言，天然支持集群模式。")])]),_._v(" "),v("p",[_._v("RabbitMQ的集群有两种模式：")]),_._v(" "),v("ul",[v("li",[v("strong",[_._v("普通集群")]),_._v("：是一种分布式集群，将队列分散到集群的各个节点，从而提高整个集群的并发能力。")]),_._v(" "),v("li",[v("strong",[_._v("镜像集群")]),_._v("：是一种主从集群，普通集群的基础上，添加了主从备份功能，提高集群的数据可用性。")])]),_._v(" "),v("p",[_._v("镜像集群虽然支持主从，但主从同步并不是强一致的，某些情况下可能有数据丢失的风险。因此在RabbitMQ的3.8版本以后，推出了新的功能："),v("strong",[_._v("仲裁队列")]),_._v("来代替镜像集群，底层采用Raft协议确保主从的数据一致性")]),_._v(" "),v("h3",{attrs:{id:"_4-2-普通集群"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-普通集群"}},[_._v("#")]),_._v(" 4.2.普通集群")]),_._v(" "),v("p",[_._v("普通集群，或者叫标准集群（classic cluster），具备下列特征：")]),_._v(" "),v("ul",[v("li",[_._v("会在集群的各个节点间共享部分数据，包括：交换机、队列元信息。"),v("strong",[_._v("不包含队列中的消息。")])]),_._v(" "),v("li",[_._v("当访问集群某节点时，如果队列不在该节点，会从数据所在节点传递到当前节点并返回")]),_._v(" "),v("li",[_._v("队列所在节点宕机，队列中的消息就会丢失")])]),_._v(" "),v("p",[v("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Cynicism-lab/MyResource@gh-pages/image/image-20210718220843323.7aeulr13gr9c.webp",alt:""}})]),_._v(" "),v("h3",{attrs:{id:"_4-3-镜像集群"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4-3-镜像集群"}},[_._v("#")]),_._v(" 4.3 镜像集群")]),_._v(" "),v("p",[_._v("镜像集群：本质是主从模式，具备下面的特征：")]),_._v(" "),v("ul",[v("li",[_._v("交换机、队列、队列中的消息会在各个mq的镜像节点之间"),v("strong",[_._v("同步备份")]),_._v("。")]),_._v(" "),v("li",[_._v("创建队列的节点被称为该队列的"),v("strong",[_._v("主节点，"),v("strong",[_._v("备份到的其它节点叫做该队列的")]),_._v("镜像")]),_._v("节点。")]),_._v(" "),v("li",[_._v("一个队列的主节点可能是另一个队列的镜像节点")]),_._v(" "),v("li",[_._v("所有操作都是主节点完成，然后同步给镜像节点")]),_._v(" "),v("li",[_._v("主宕机后，镜像节点会替代成新的主节点")])]),_._v(" "),v("p",[v("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Cynicism-lab/MyResource@gh-pages/image/image-20210718221039542.678g9fgir3eo.webp",alt:""}})]),_._v(" "),v("h3",{attrs:{id:"_4-4-仲裁队列"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4-4-仲裁队列"}},[_._v("#")]),_._v(" 4.4.仲裁队列")]),_._v(" "),v("p",[_._v("仲裁队列：仲裁队列是3.8版本以后才有的新功能，用来替代镜像队列，具备下列特征：")]),_._v(" "),v("ul",[v("li",[_._v("与镜像队列一样，都是主从模式，支持主从数据同步")]),_._v(" "),v("li",[_._v("使用非常简单，没有复杂的配置")]),_._v(" "),v("li",[_._v("主从同步基于Raft协议，强一致")])])])}),[],!1,null,null,null);v.default=e.exports}}]);