<template>
  <div class="home">
    <b-form @submit="autenticationUser" v-if="show">
      <InputForm
        text="Ingrese su usuario"
        type="text"
        title="Usuario"
        labelFor="usuario"
        name="userName"
      />
      <InputForm
        text="Ingrese su contraseña"
        type="password"
        title="Contraseña"
        labelFor="contraseña"
        name="passwordUser"
      />
      <b-button type="submit" variant="danger" block>Ingresar</b-button>
    </b-form>
  </div>
</template>
<script>
import InputForm from "./InputForm";
import { mapMutations } from "vuex";

export default {
  name: "formulario",
  components: {
    InputForm
  },
  data() {
    return {
      show: true
    };
  },
  methods: {
    ...mapMutations(["autenticationUser"]),
    onSubmit(evt) {
      evt.preventDefault();
      alert(JSON.stringify(this.ModuleLogin.user));
    }
  },
  computed: {}
};
</script>
