<template>
  <div class="table">
    <h3 class="font-bold text-lg lg:text-xl mb-2">{{ title }}</h3>
    <div class="content text-sm lg:text-base">
      <div v-for="(item, key) in items" :key="key">
        <table>
          <tbody>
            <tr v-for="(value, key) in item" :key="key">
              <th>{{ key }}</th>
              <td>{{ value }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    items: {
      type: Array,
    },
    title: {
      type: String,
    },
  },
});
</script>

<style lang="scss">
.table {
  margin: 20px;
  width: 500px;
  .content {
    text-align: left;
  }
}
table {
  margin: 0 0 20px 0;
  text-align: left;
}
th {
  padding-right: 20px;
  font-weight: normal;
  white-space: nowrap;
}
td {
  padding: 5px 0px;
}
@media screen and (max-width: 500px) {
  .table {
    margin: 20px;
    width: 90%;
    .content {
      text-align: left;
    }
  }
}
</style>
