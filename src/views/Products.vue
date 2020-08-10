<template>
  <div class="home">
    <h2>這裡是產品列表</h2>
    <table>
      <tr v-for="item in products" :key = "item.id">
        <td>{{item.title}}</td>
        <td>{{item.content}}</td>
        <td>{{item.price}}</td>
        <td><button @click = "goPage(item)">更多資訊</button></td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'Products',
  data () {
    return {
      products: []
    }
  },
  methods: {
    goPage (item) {
      this.$router.push(`/product/${item.id} `)
    }
  },
  created () {
    console.log(process.env.VUE_APP_APIPATH)
    const url = ` ${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_UUID}/ec/products`
    this.$http.get(url)
      .then(res => {
        console.log(res)
        this.products = res.data.data
      })
  }
}
</script>
