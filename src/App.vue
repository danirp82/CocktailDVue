<template>
  <router-view v-slot="{ Component }">
    <suspense>
      <component :is="Component" />
    </suspense>
  </router-view>
</template>

<style lang="scss">
body {
  background-color: #fff;
  background-image: url("./assets/img/back-g.svg");
  background-attachment: fixed;
  background-size: cover;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;
}
</style>
