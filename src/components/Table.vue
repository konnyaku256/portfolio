<template>
  <div class="table">
    <h3>{{ title }}</h3>
    <div class="content">
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
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Table extends Vue {
  @Prop() private items!: any[];
  @Prop() private title!: string;
}
</script>

<style lang='scss'>
.table {
  margin: 20px;
  width: 500px;
  .content {
    text-align: left;
  }
}
table {
  margin: 0 0 20px 0;
  display: inline-block;
  text-align: left;
}
th {
  padding-right: 20px;
  font-weight: normal;
}
td {
  padding: 5px 0px;
}
</style>
