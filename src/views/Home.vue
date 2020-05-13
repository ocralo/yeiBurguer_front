<template>
  <div class="home">
    <b-container fluid class="bg-login vh-100">
      <b-row class="align-items-center h-100 justify-content-around">
        <b-col cols="12" md="6">
          <img src="../assets/img/logo-yeiburguer.jpg" width="300px" alt srcset />
        </b-col>
        <b-col cols="12" md="4">
          <FormLogin class="border rounded p-4 bg-login-form" />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import FormLogin from "../components/FormLogin";
export default {
  name: "Home",
  components: {
    FormLogin
  }
};
</script>

<style lang="sass">
@import '../Styles/_var'

.bg-login
  background-color: $amarilloClaro

.bg-login-form
  background-color: $blanco
</style>
