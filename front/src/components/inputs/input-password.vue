<template>
  <InputContainer type="password" text="Password" :id="id" :className="className"></inputContainer>
</template>

<script>
  import InputContainer from './input-container';

  export default {
    name: 'input-password',

    components: {
      InputContainer,
    },

    props: {
      id: String,
      className: String,
    },
  };
</script>
