<script>
import Content from "./components/Content.vue";
export default {
  components: {
    Content,
  },
  data() {
    return {
      num: 0,
      uname: "张三",
      htmltag: "<h2>标题</h2>",
      url:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNkbwU1t1XV0BJgu4EHIVClOVUx0H9Xh6LvQ&s",
      attributeName: "id",
      attributeValue: "d1",
      eventName: "click",
      message: "Hello SB",
      user: {
        name: "张三",
        age: 18,
        sex: "男",
      },
      isActive: true,
      error: null,
      activeArray: ["active", "HelloWorld"],
      activeColor: "red",
      font_size: "30px",
      Ok: true,
      id: 1,
      list: 1,
      v_if: true,
      person: ["张三", "李四", "王五"],
      // 数组数据操作方法：push;pop;shift;unshift;splice;sort;reverse;
      personObject: {
        name: "张三",
        age: 18,
        sex: "男",
      },
      arrayList: [1, 2, 3, 4, 5, 6],
      counter: 0,
      subContents: {
        name: "grety",
        sex: "男",
        grade: [86, 96, 78],
        email: "snl1016@163.com",
      },
      fromSubMsg: "",
    };
  },
  computed: {
    // reversedmessage: function () {
    //   console.log("computed");
    //   return this.message.split(' ').reverse().join(' ');
    // }
    reversedmessage: {
      get: function () {
        console.log("computed");
        return this.message.split(" ").reverse().join(" ");
      },
      set: function (newVal) {
        console.log(newVal);
        this.message = newVal;
      },
    },
    classObject: function () {
      //immediate: true;
      return {
        active: this.isActive && !this.error,
      };
    },
  },
  watch: {
    // 每当message发生变化时，就会执行该函数
    // message:function(newValue,oldValue){
    //   console.log(newValue);
    //   console.log(oldValue);
    //   if(newValue > 5 || newValue < 10){
    //     this.message = newValue;
    //   } else {
    //     console.log(newValue +"长度过长或过短");
    //   }
    // watch深度监听
    message: {
      //: true,
      handler: function (newValue) {
        if (newValue.length > 5 && newValue.length < 11) {
          console.log(newValue);
          this.message = newValue;
        }
      },
    },
    // 深度监听对象
    //  user:{
    //   handler:function(newVal){
    //     console.log(newVal.name);
    //   },
    //   deep:true,
    //  }

    // 深度监听对象的属性
    "user.name": {
      //"user.name"
      handler: function (newVal) {
        console.log(newVal);
      },
      deep: true,
    },
  },
  methods: {
    chantgeUname: function () {
      this.uname = "李四";
    },
    changePicture: function () {
      this.url = "https://pic.616pic.com/ys_img/00/03/69/xZYB7unkyE.jpg";
    },
    reversemessage: function () {
      //console.log("methods");
      return this.message.split(" ").reverse().join(" ");
    },
    ChangeMessage: function () {
      this.message = "Hello Rust";
    },
    // addCounter() {
    //   this.counter++;
    // },
    addCounter(e) {
      this.counter++;
      console.log(e);
    },
    plusCounter(number, e) {
      this.counter += number;
      console.log(e);
    },
    getSubMsg(value) {
      this.fromSubMsg = value.name;
    },
  },
};
</script>

<template>
  <div id="app">
    <!-- Mustache语法 ：即双括号-->
    <p>{{ num }}</p>
    <p>{{ uname }}</p>
    <!-- v-once变量只绑定一次，下次改变不会跟着变 -->
    <p v-once>{{ uname }}</p>
    <!-- v-html:将属性变量的元素替换成当前元素 -->
    <p v-html="htmltag"></p>
    <!-- 表达式用法 -->
    <p>{{ num + 10 }}</p>
    <p>{{ Ok ? "yes" : "no" }}</p>
    <div :id="`list-${id}`">hello world</div>
    <div :class="`list${list}`">hello world</div>
    <!-- @click 等同于 v-on:click -->
    <button @click="chantgeUname">改变名字</button>
    <!-- v-bind可以用于绑定属性值 -->
    <img :src="url" alt="" />
    <button @click="changePicture">改变图片</button>
    <!-- 动态属性及动态属性值 -->
    <p :[attributeName]="attributeValue">动态属性</p>
    <!-- 动态事件属性及属性值 -->
    <button @[eventName]="attributeName = 'class'">改变属性</button>
    <button @click="eventName = 'mouseover'">改变属性</button>
    <!-- 翻转字符串  -->
    <p>翻转前：{{ message }}</p>
    <!-- computed -->
    <p>翻转后：{{ reversedmessage }}</p>
    <p>翻转后：{{ reversedmessage }}</p>
    <p>翻转后：{{ reversedmessage }}</p>
    <!-- methods -->
    <p>翻转后：{{ reversemessage() }}</p>
    <p>翻转后：{{ reversemessage() }}</p>
    <p>翻转后：{{ reversemessage() }}</p>
    <button @click="ChangeMessage">Change Message</button>
    <!-- 用于处理完整的计算属性的seter值修改 -->
    <button @click="reversedmessage = 'Hello Rust'">Change Message</button>
    <input type="text" v-model="message" />
    <!-- 深度监听user.name -->
    <button @click="user.name = '王五'">改变名字</button>

    <!-- class样式 -->
    <!-- 直接在标签中使用字符属性 -->
    <p class="active">Hello</p>
    <!-- 使用对象属性  -->
    <p :class="classObject" class="HelloWorld">Hello from object</p>
    <!-- //类属性是可以叠加配置的，会合并两个class类 -->
    <button @click="isActive = !isActive">改变isActive属性值</button>
    <p :class="activeArray">样式来源于数组</p>

    <!-- style内联样式 -->
    <p :style="{ color: activeColor, fontSize: font_size }">内联样式</p>

    <p class="testClass" id="testid">测试元素+类名</p>
    <span class="testClass">测试元素+类名</span>

    <p v-if="v_if">v_if为true时显示</p>
    <button @click="v_if = !v_if">切换v_if的值</button>
    <!-- 无下标 -->
    <u class="no-underline">
      <li v-for="item in person" :key="item">{{ item }}</li>
    </u>
    <!-- 带下标 -->
    <u class="no-underline">
      <li v-for="(item, index) in person" :key="index">{{ item }}--{{ index }}</li>
    </u>
    <!-- 对象形式 -->
    <u class="no-underline">
      <li v-for="(value, key, index) in personObject" :key="index">
        {{ value }}-----{{ key }}--{{ index }}
      </li>
    </u>

    <!-- 数组的操作 -->
    <u class="no-underline">
      <li v-for="(item, index) in arrayList" :key="index">{{ item }}</li>
    </u>

    <button @click="addCounter">counter is:{{ counter }}</button>
    <button @click="plusCounter(5, $event)">counter is:{{ counter }}</button>
    <button @click="plusCounter(5, $event), addCounter($event)">
      counter is:{{ counter }}
    </button>

    <!-- 事件修饰符
    .stop .prevent .self .capture .once .passive 事件修饰符
    -->
    <div @click="console.log('from div')">
      <button @click.stop="console.log('from button')">点击我</button>
    </div>
    <!-- :subContents是父组件传递给子组件，@sendMsg是子组件通过事件形式传递给父组件 -->
    <Content :subContents="subContents" @sendMsg="getSubMsg"></Content>
    <p>{{ fromSubMsg }}</p>
  </div>
</template>

<style scoped>
.no-underline {
  text-decoration: none;
}
#list-1 {
  color: red;
}

.list1 {
  color: blue;
}

#testid.testClass {
  font-size: 25px;
}

p.testClass {
  color: red;
}

.active {
  font-size: 20px;
  color: blue;
}

.HelloWorld {
  background-color: aqua;
}

#d1 {
  color: red;
}

.d1 {
  color: blue;
}

.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
