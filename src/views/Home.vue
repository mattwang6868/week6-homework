<template>
  <div class="home">
    <div id="nav">
      <loading :active.sync="isLoading"></loading>
      <router-link to="/">前台首頁</router-link> |
      <router-link to="/products">產品列表</router-link> |
      <router-link to="/cart">購物車列表</router-link> |
      <router-link to="/admin">後台</router-link> |
    </div>
    <hr>
    <router-view/>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  data () {
    return {
      isLoading: false
    }
  },

  created () {
    this.isLoading = true
    // simulate AJAX
    setTimeout(() => {
      this.isLoading = false
    }, 1000)
  }
}
</script>
