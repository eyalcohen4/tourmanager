<template>
  <InputContainer type="email" text="Email" :id="id" :className="className"></inputContainer>
</template>

<script>
  import InputContainer from './input-container';

  export default {
    name: 'input-email',

    components: {
      InputContainer,
    },

    props: {
      id: String,
      className: String,
    },
  };
</script>
