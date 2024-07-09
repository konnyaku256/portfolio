<template>
  <div id="certificates">
    <section class="lg:m-16">
      <ul class="grid grid-cols-1 w-full">
        <li
          v-for="certificate in certificates"
          v-bind:key="certificate.name"
          class="flex justify-center flex-wrap"
        >
          <CertificateCard v-bind:certificate="certificate" />
        </li>
      </ul>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent, toRefs, reactive } from "vue";
import CertificateCard from "../components/CertificateCard.vue";
import certificates from "../assets/data/certificates.json";

export default defineComponent({
  components: {
    CertificateCard
  },
  setup() {
    const state = reactive({
      certificates
    });
    return {
      ...toRefs(state)
    };
  }
});
</script>

<style lang="scss">
#certificates {
  position: absolute;
  top: 50px;
  width: 100vw;
  height: calc(100vh - 50px * 2);
  overflow: auto;
}
</style>
