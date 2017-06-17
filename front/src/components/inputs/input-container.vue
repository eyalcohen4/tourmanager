<template>
  <div class="input-container">
    <label :for="id" v-text="$t(text)"></label>
    <input :type="type" :class="className">
  </div>
</template>

<script>
  export default {
    name: 'input-container',

    props: {
      id: String,
      className: String,
      text: String,
    },
  };
</script>
