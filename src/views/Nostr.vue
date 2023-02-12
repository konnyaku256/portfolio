<template>
  <div id="nostr">
    <div>
      <h1 class="text-4xl lg:text-5xl font-bold">
        <font color="#00d6c2">
          <VueWriter :array="['Nostr public key 🔑']" :iterations="1" :typeSpeed="50" />
        </font>
      </h1>
      <p class="text-2xl lg:text-3xl">
        <VueWriter
          :array="['npub1wskuefh2j5a5k8s3af0wsst622043csuacza3p2zvavf2993yekqmnv692']"
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
import VueWriter from "vue-writer";

export default {
  components: {
    VueWriter
  }
};
</script>

<style lang="scss">
#nostr {
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
