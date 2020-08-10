<template>
  <div class="home">
    <div id="nav">
      <h2>這裡是後台</h2>
      <router-link to="/">回到前台</router-link> |
      <router-link to="/admin/">後台首頁</router-link> |
      <router-link to="/admin/products">後台產品列表</router-link> |
      <router-link to="/admin/cart">後台購物車</router-link> |
      <router-link to="/admin/coupons">後台優惠卷</router-link>
    </div>
    <hr>
    <router-view :token="token" V-if ="checkSuccess" />
  </div>
</template>

<script>
export default {
  data () {
    return {
      token: '',
      checkSuccess: false
    }
  },
  methods: {
    checkLogin () {
      this.token = document.cookie.replace(/(?:(?:^|.*;\s*)hexHomeToken\s*=\s*([^;]*).*$)|^.*$/, '$1')
      this.$http.defaults.headers.common.Authorization = `Bearer ${this.token}`
      const api = `${process.env.VUE_APP_APIPATH}/api/auth/check`
      this.$http.post(api, { api_token: this.token }).then(res => {
        this.checkSuccess = true
      }).catch(error => {
        console.log(error)
        this.$router.push('/login')
      })
    }
  },
  created () {
    this.checkLogin()
  }
}
</script>
