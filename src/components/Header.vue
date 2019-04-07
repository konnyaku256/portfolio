<template>
  <div class="header">
    <router-link to="/"><h2>Home</h2></router-link>
    <router-link to="/about"><h2>About</h2></router-link>
    <router-link to="/products"><h2>Products</h2></router-link>
  </div>
</template>

<style lang="scss">
.header {
  top: 0px;
  position: absolute;
  width: 100vw;
  height: 50px;
  color: #ffffff;
  background-color: #34495E;
  display: flex;
  justify-content: center;
  align-items: center;
  a {
    display: inline-block;
    margin: 0vw 2vw 0vw 2vw;
    color: #ffffff;
    text-decoration: none;
    &:hover {
      color: #1ABC9C;
    }
    &.router-link-exact-active {
      color: #1ABC9C;
    }
  }
}
</style>
