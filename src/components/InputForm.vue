<template>
  <b-form-group id="input-group-1" :label="title" :label-for="labelFor">
    <b-form-input
      :id="labelFor"
      v-model="ModuleLogin.user[name]"
      :type="type"
      required
      :placeholder="text"
    ></b-form-input>
  </b-form-group>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "InputForm",
  data() {
    return {
      valueInput: ""
    };
  },
  props: {
    text: String,
    title: String,
    type: String,
    labelFor: String,
    name: String
  },
  computed: {
    ...mapState(["ModuleLogin"])
  }
};
</script>
