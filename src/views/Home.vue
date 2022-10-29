<template>
  <div id="home">
    <div>
      <h1 class="text-4xl lg:text-5xl font-bold">
        <font color="#1ABC9C">
          <VueWriter
            :array="['konnyaku256.dev']"
            :iterations="1"
            :typeSpeed="50"
          />
        </font>
      </h1>
      <p class="text-2xl lg:text-3xl">
        <VueWriter
          :array="['Welcome to Shuntaro Shimada\'s portfolio site!']"
          :iterations="1"
          :typeSpeed="50"
          :start="2000"
        />
      </p>
    </div>
  </div>
</template>

// vue-writerがTypeScript対応してないのでJSで実装
<script>
import VueWriter from 'vue-writer';

export default {
  components: {
    VueWriter,
  }
};
</script>

<style lang='scss'>
#home {
  position: absolute;
  top: 50px;
  width: 100vw;
  height: calc(100vh - 100px);
  overflow: auto;
  font-size: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
