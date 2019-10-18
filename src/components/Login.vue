<template>
  <div class="main">
  <a-form
    id="components-form-demo-normal-login"
    :form="form"
    class="login-form"
    :loading="loading"
    @submit="handleSubmit"
  >
    <a-form-item>
      <a-input
        v-decorator="[
          'username',
          { rules: [{ required: true, message: 'Please input your username!' }] }
        ]"
        placeholder="Username"
      >
        <a-icon
          slot="prefix"
          type="user"
          style="color: rgba(0,0,0,.25)"
        />
      </a-input>
    </a-form-item>
    <a-form-item>
      <a-input
        v-decorator="[
          'password',
          { rules: [{ required: true, message: 'Please input your Password!' }] }
        ]"
        type="password"
        placeholder="Password"
      >
        <a-icon
          slot="prefix"
          type="lock"
          style="color: rgba(0,0,0,.25)"
        />
      </a-input>
    </a-form-item>
    <a-form-item>
      <a-checkbox
        v-decorator="[
          'remember',
          {
            valuePropName: 'checked',
            initialValue: true,
          }
        ]"
      >
        Remember me
      </a-checkbox>
      <a
        class="login-form-forgot"
        href=""
      >
        Forgot password
      </a>
      <a-button
        type="primary"
        html-type="submit"
        class="login-form-button"
      >
        Log in
      </a-button>
      Or <a href="">
      register now!
    </a>
    </a-form-item>
  </a-form>
  </div>
</template>

<script>
import reqwest from 'reqwest'
  export default {
      name: "Login",
    data(){
      return{
        form:this.$form.createForm(this),
        loading:false
      }
    },
    methods: {
      handleSubmit (e) {
        e.preventDefault();
        this.form.validateFields((err, values) => {
          if (!err) {
            console.log('Received values of form: ', values);
            console.log(values.username);
            console.log(values.password);
            this.loading=true;
            reqwest({
              url: 'http://localhost:5460/login',
              method: 'post',
              data: {
                username:values.username,
                password:values.password
              },
              type: 'json',
            }).then((data) => {
              this.loading = false;
              console.log(data);
            });
          }
        });
      },
    },
  };
</script>
<style scoped>
  .main{
    margin-top:15%;
    display: flex;
    align-items: center; /*定义body的元素垂直居中*/
    justify-content: center; /*定义body的里的元素水平居中*/
  }
  #components-form-demo-normal-login .login-form {
    max-width: 300px;
  }
  #components-form-demo-normal-login .login-form-forgot {
    float: right;
  }
  #components-form-demo-normal-login .login-form-button {
    width: 100%;
  }
</style>



