<template>
  <div class="auth-page">
    <div class="container page">
      <div class="row">
        <div class="col-md-6 offset-md-3 col-xs-12">
          <h1 class="text-xs-center">{{ isLogin ? "Sign in" : "Sign up" }}</h1>
          <p class="text-xs-center">
            <nuxt-link v-if="isLogin" to="/register"
              >Need an account?</nuxt-link
            >
            <nuxt-link v-else to="/login">Have an account?</nuxt-link>
          </p>

          <ul class="error-messages">
            <template v-for="(messages, field) in errors">
              <li v-for="(message, index) in messages" :key="index">
                {{ field }} {{ message }}
              </li>
            </template>
          </ul>

          <form @submit.prevent="onSubmit">
            <fieldset class="form-group" v-if="!isLogin">
              <input
                class="form-control form-control-lg"
                type="text"
                placeholder="Your Name"
                v-model="user.username"
                required
              />
            </fieldset>
            <fieldset class="form-group">
              <input
                class="form-control form-control-lg"
                type="email"
                placeholder="Email"
                v-model="user.email"
                required
              />
            </fieldset>
            <fieldset class="form-group">
              <input
                class="form-control form-control-lg"
                type="password"
                placeholder="Password"
                v-model="user.password"
                required
                minlength="8"
              />
            </fieldset>
            <button class="btn btn-lg btn-primary pull-xs-right">
              {{ isLogin ? "Sign in" : "Sign up" }}
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { login, register } from "@/apis/user";
// 仅在客户端加载 js-cookie 包
const Cookie = process.client ? require("js-cookie") : undefined;

export default {
  middleware: 'notAuthenticated',
  name: "Login",
  computed: {
    isLogin() {
      return this.$route.name === "login";
    },
  },
  data() {
    return {
      user: {
        username: "",
        email: "",
        password: "",
      },
      errors: {}, // 错误信息
    };
  },
  methods: {
    // 提交表单登陆/注册
    async onSubmit() {
      try {
        const { user } = this;
        const { data } = this.isLogin
          ? await login({ user })
          : await register({ user });

        // TODO: 保存用户状态
        this.$store.commit("setUser", data.user);

        // 为了防止页面刷新造成数据丢失，需做数据持久化
        Cookie.set("user", data.user);

        // 跳转首页
        this.$router.push("/");
      } catch (error) {
        console.dir(error);
        const { data } = error.response;
        this.errors = data.errors;
      }
    },
  },
};
</script>