<template>
  <div id="header">
    <router-link to="/">
      <h2 class="text-xl lg:text-2xl font-medium">Home</h2>
    </router-link>
    <router-link to="/about">
      <h2 class="text-xl lg:text-2xl font-medium">About</h2>
    </router-link>
    <router-link to="/products">
      <h2 class="text-xl lg:text-2xl font-medium">Products</h2>
    </router-link>
  </div>
</template>

<style lang="scss">
#header {
  top: 0px;
  position: absolute;
  width: 100vw;
  height: 50px;
  color: #ffffff;
  background-color: #34495e;
  display: flex;
  justify-content: center;
  align-items: center;
  a {
    display: inline-block;
    margin: 0vw 2vw 0vw 2vw;
    color: #ffffff;
    text-decoration: none;
    &:hover {
      color: #1abc9c;
    }
    &.router-link-exact-active {
      color: #1abc9c;
    }
  }
}
</style>
