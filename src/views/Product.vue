<template>
  <div>
    <h2>這裡是單一產品資訊</h2>
    <table>
      <tr>
        <td>{{ product.title }}</td>
        <td>{{ product.content }}</td>
        <td></td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  data () {
    return {
      product: {}
    }
  },
  created () {
    console.log(this.$route.params.id)
    const id = this.$route.params.id
    this.$http.get(` ${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_UUID}/ec/product/${id}`)
      .then(res => {
        console.log(res)
        this.product = res.data.data
      })
  }
}
</script>
