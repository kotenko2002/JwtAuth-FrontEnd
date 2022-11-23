<template>
  <div class="d-flex flex-column align-items-center">
    <h1>Типо загерался</h1>
    <button
        type="button"
        class="btn btn-primary w-50 mb-2"
        @click="Submit"
    >
      Make request
    </button>
    <img
        style="height: 600px"
        src="https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781974709939/chainsaw-man-vol-1-9781974709939_hr.jpg" alt="">
  </div>
</template>

<script>
import axios from "axios";

export default {
  methods: {
    async Submit() {
      const token = this.getCookie('token');
      const response = await axios.get('https://localhost:44365/WeatherForecast/private',
          {
            headers: {"Authorization" : `Bearer ${token}`}
          });

      console.log(response.data)
    },
    getCookie(name) {
      const matches = document.cookie.match(new RegExp(
          "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
      ));
      return matches ? decodeURIComponent(matches[1]) : undefined;
    }
  }
}
</script>

<style scoped>

</style>