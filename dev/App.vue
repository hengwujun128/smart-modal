<template>
  <div class="wrapper">
    <h2>hello,this is test smartModal</h2>
    <modal name="hello" :draggable=draggable :reset=reset :transition="transition" width="50%">
          <h2>xxxx</h2>
    </modal>
    <button @click="show">click</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      name: "hello",
      draggable: true,
      reset: true,
      transition: "all"
    };
  },
  created() {},
  computed: {},
  methods: {
    show() {
      // 向v-modal emit toggle event
      // second params transfer to modal component
      this.$modal.show("hello", {});
    },
    hide() {
      this.$modal.hide("hello");
    }
  }
};
</script>
<style>
</style>
