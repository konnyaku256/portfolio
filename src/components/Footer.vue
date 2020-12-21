<template>
  <div id="footer">
    <a href="https://twitter.com/konnyaku256">
      <i class="fab fa-twitter"></i>
    </a>
    <a href="https://github.com/konnyaku256">
      <i class="fab fa-github"></i>
    </a>
    <a href="https://blog.konnyaku256.dev">
      <i class="fas fa-blog"></i>
    </a>
    <a href="https://zenn.dev/konnyaku256">
      <img src="https://simpleicons.org/icons/zenn.svg" width="24" height="24" style="filter: invert(1)">
    </a>
    <a href="https://medium.com/@konnyaku256">
      <i class="fab fa-medium"></i>
    </a>
    <a href="https://speakerdeck.com/konnyaku256">
      <i class="fab fa-speaker-deck"></i>
    </a>
  </div>
</template>

<style lang="scss">
#footer {
  bottom: 0px;
  position: absolute;
  width: 100vw;
  height: 50px;
  font-size: 25px;
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
