<template>
  <div class="form card p-4 align-items-end">
    <input
        type="text"
        class="form-control"
        placeholder="Your full name"
        v-model="formData.name"
    >
    <input
        type="text"
        class="form-control"
        placeholder="Your phone"
        v-model="formData.phone">
    <input type="text"
           class="form-control"
           placeholder="Login"
           v-model="formData.login">
    <input
        type="password"
        class="form-control"
        placeholder="Password"
        v-model="formData.password">
    <button
        type="button"
        class="btn btn-primary w-50"
        @click="Submit"
    >
      Sign up
    </button>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Registration",
  data() {
    return {
      formData: {
        name: "",
        phone: "",
        login: "",
        password: ""
      }
    }
  },
  methods: {
    async Submit() {
      const response2 = await axios.post('https://localhost:44365/api/auth/register', {
        username: this.formData.login,
        password: this.formData.password
      });

      this.$router.push({path: '/auth/login'});
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