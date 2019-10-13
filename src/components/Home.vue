<template>
    <div>
      <div>{{msg}}</div>
      <hr>
      <ul>
        <li v-for="(item,key) in list" :key="item.id">
          {{key}}--{{item.name}}
        </li>
      </ul>
      <hr>

      <div v-show="isshow">v-show,不管isshow是否为true,都会渲染</div>
      <div  v-show="secshow">

          <p>show 1号</p>
          <p>show 1号</p>
          <p>show 1号</p>

      </div>
      <div v-if="isshow">v-if,isshow为false时,不会渲染,v-if指令控制元素显示或隐藏</div>
      <div v-else>v-else,isshow为false,我就出现了,和v-if必须成对出现</div>
      <div>
        <template v-if="istemplate">
          <p>我是template1号</p>
          <p>我是template1号</p>
          <p>我是template1号</p>
        </template>
      </div>
      <input type="text" v-model="inputVal"/>
      <p>你的输入是,{{inputVal | toUpperCase}}</p>
      <div v-text="explain"></div>
      <div v-html="tagValue"></div>
      <div v-bind:id="divid">绑定id,v-bind</div>
      <div v-on:click="action">绑定事件v-on</div>
      <hr>
      <input type="checkbox" name="check1" value="c1" v-model="ischeck"/>
      <input type="checkbox" name="check2" value="c2" v-model="ischeck"/>
      <input type="checkbox" name="check3" value="c3" v-model="ischeck"/>
      <div>{{ischeck}}</div>

      <input type="radio" name="man" value="man" v-model="sex"/>
      <input type="radio" name="women" value="women" v-model="sex"/>
      <div>{{sex}}</div>

      <select v-model="st" multiple>
        <option value="p1" selected>p1</option>
        <option value="p2">p2</option>
        <option value="p3">p3</option>
      </select>

      <div>{{st}}</div>

      <hr>
      <img v-bind:src="imgsrc"/>

      <div v-on:keydown.enter="keyEsc($event)">按下esc</div>

      <div>v-ref为子组件索引</div>
      <div>v-el 为dom元素索引</div>

      <div v-action:add>测试指令</div>
    </div>
</template>

<script>
  var MyHello = {
    template:"<div>这是子元素</div>"
  }

    export default {

        name: "Home",
      components:{
          MyHello
      },
      directives:{
        action:{
          bind(el,binding,vnode,oldVnode){
            var s = JSON.stringify
            el.innerHTML =
              'name: '       + s(binding.name) + '<br>' +
              'value: '      + s(binding.value) + '<br>' +
              'expression: ' + s(binding.expression) + '<br>' +
              'argument: '   + s(binding.arg) + '<br>' +
              'modifiers: '  + s(binding.modifiers) + '<br>' +
              'vnode keys: ' + Object.keys(vnode).join(', ') + '<br>' +
              'vnode context:' + s(vnode.context.$route.meta)
          },
          inserted(el,binding,vnode,oldVnode){
            console.log(el);
          },
          update(el,binding,vnode,oldVnode){
            console.log(el);
          },
          unbind(){

          }
        }
      },
      data(){
          return{
            imgsrc:"",
            st:[],
            sex:"",
            ischeck:[],
            isshow:false,
            istemplate:true,
            secshow:false,
            explain:'Vue2.0 Vue.filter自定义过滤器',
            inputVal:'',
            msg:'hello world',
            title:'{{msg}},插值表达式',
            list:[
                {id:1,name:'v-show'},
                {id:2,name:'v-if'},
                {id:3,name:'v-model'},
                {id:4,name:'v-for'},
                {id:5,name:'v-text'},
                {id:6,name:'v-html'},
                {id:7,name:'v-bind'},
                {id:8,name:'v-on'},
                {id:9,name:'v-ref'},
              ],
            tagValue:'<h1>一级标题</h1>',
            divid:'id-1'
          }
      },
      methods:{
          keyEsc(event){
            console.log(event);
            alert("esc");
          },
          action(){
            alert('我被点击了');
          }
      }
    }
</script>

<style scoped>

</style>
