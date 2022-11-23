<template>
  <div className="form card p-4 align-items-end">
    <input type="text"
           className="form-control"
           placeholder="Login"
           v-model="formData.login">
    <input
        type="password"
        className="form-control"
        placeholder="Password"
        v-model="formData.password">
    <button
        type="button"
        className="btn btn-primary w-50"
        @click="Submit"
    >
      Sign in
    </button>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Login",
  data() {
    return {
      formData: {
        login: "",
        password: ""
      }
    }
  },
  methods: {
    async Submit() {
      const response = await axios.post('https://localhost:44365/api/auth/login', {
        username: this.formData.login,
        password: this.formData.password
      });

      const date = new Date();
      date.setDate(date.getDate() + 1);
      document.cookie = `token=${response.data}; expires=` + date;

      this.$router.push({path: '/main'});
    }
  }
}
</script>

<style scoped>
.form {
  width: 400px;
}

.form input {
  margin-bottom: 10px;
}
</style>