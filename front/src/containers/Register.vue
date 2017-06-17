<template>
  <div>
    <form>
      <InputEmail className="register__email" id="register-email"></InputEmail>
      <InputPassword className="register__password" id="register-password"></InputPassword>
    </form>
  </div>
</template>

<script>
  import InputEmail from '@/components/inputs/input-email';
  import InputPassword from '@/components/inputs/input-password';

  export default {
    name: 'register',

    components: {
      InputEmail,
      InputPassword,
    },
  };
</script>
