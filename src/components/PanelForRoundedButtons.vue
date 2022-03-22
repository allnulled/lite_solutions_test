<template>
  <div class='component PanelForRoundedButtons'>
    <div style="background-color: #0f0f0f; color: white; text-align: center; padding: 30px; padding-bottom: 20px;">
      <h5 style="font-size: 15px; color: white; font-weight: bold; text-align: center; padding-bottom: 10px;">
        {{ selected_title }}
      </h5>
      <div style="display: inline-block; margin-right: 8px;" v-for="(selected_button, index_button) in selected_buttons" v-bind:key="'rounded-button-' + index_button">
        <div style="background-color: white; border-radius: 50%; width: 75px; height: 75px; text-align: center;">
          <img style="margin-top: 21px" :src="selected_button.image" :alt="selected_button.text">
        </div>
        <div style="font-size: 15px; text-transform: uppercase; font-weight: bold; padding: 10px;">{{ selected_button.text }}</div>
      </div>
    </div>
  </div>
</template>
<script>
  
export default {
    name: 'PanelForRoundedButtons',
    props: {
      title: { type: String, required: true },
      buttons: { type: Array, required: true },
    },
    data() {
      return {
        selected_title: this.title,
        selected_buttons: this.buttons,
      };
    },
    beforeCreate() {},
    created() {},
    beforeMount() {},
    mounted() {},
    beforeUpdate() {},
    updated() {},
    beforeUnmount() {},
    unmounted() {},
    activated() {},
    deactivated() {},

}
</script>
<style>

</style>