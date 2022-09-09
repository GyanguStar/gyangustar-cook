<script>
import dishes from '../data/dishes';
export default {
  data() {
    return {
      steps: ['先这样', '再那样', '然后这样', '最后这样', '当当, 完成了']
    };
  },
  computed: {
    id() {
      return this.$router.currentRoute.value.params?.id ?? null
    },
    title() {
      // console.log(this.id, dishes)
      const aa = dishes.find(el => el.id == this.id);
      // console.log(aa);
      return aa.name
    }
  },
  mounted() {
    console.log(this.$router.currentRoute.value.params?.id)
  }
}
</script>

<template>
  <div class="dish">
    <div class="header">
      <div class="title">{{title}}</div>
      <div class="backgroud"></div>
    </div>
    <div class="content">
      <div v-for="step in steps" :key="step">{{step}}</div>
    </div>
  </div>
</template>

<style scoped>
.dish {
  display: flex;
  flex-direction: column;
  padding: 16px 32px;
}

.header {
  flex: 0 0 auto;
  display: flex;
  margin-bottom: 32px;
}

.content {
  flex: 1;
  padding-left: 48px;
  text-align: left;
}

.backgroud {
  flex: 0 0 auto;
  width: 240px;
  height: 240px;
  background-image: url('../assets/images/dish_demo.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}

.title {
  flex: 1;
  text-align: left;
  padding-left: 48px;
  font-size: 32px;
  font-weight: 600;
  line-height: 2;
}
</style>