<script>
import dishes from '../data/dishes.js'
export default {
  data() {
    return {
      dishes
    }
  },
  mounted() {
    console.log(dishes)
  },
  methods: {
    handleClick(e, dish) {
      this.$router.push(`/dish/${dish.id}`)
    }
  }
}
</script>

<template>
  <div class="cook">
    <div v-for="dish in dishes" :key="dish.id" class="dish" @click="(e) => handleClick(e, dish)">
      <div class="background"></div>
      <div class="title">{{dish.name}}</div>
    </div>
  </div>
</template>

<style scoped>
.cook {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.dish {

}

.dish .background {
  width: 200px;
  height: 200px;
  background-image: url('../assets/images/dish_demo.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
.dish .title {

}
</style>