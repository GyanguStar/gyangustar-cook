<script>
import dishes from '../data/dishes';
export default {
  data() {
    return {
      eatThis: null,
    }
  },
  methods: {
    toDish() {
      this.$router.push(`/dish/${this.eatThis.id}`)
    },
    randomPickOne() {
      const length = dishes.length;
      const randomI = Math.round(Math.random() * length + 0.5) - 1
      const randomOne = dishes[randomI];
      this.eatThis = randomOne
    }
  }
}
</script>

<template>
  <div class="eatwhat">
    <div class="showzone">
      <h1>{{ eatThis?.name ?? '随机一个' }}</h1>
      <el-button type="default" @click="toDish">查看菜谱</el-button>
      <el-button type="primary" @click="randomPickOne">再随一个</el-button>
    </div>
  </div>
</template>

<style scoped>
.eatwhat {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.showzone {}
</style>
