<template>
  <div class="component HomePage">
    <PanelForImageGallery />
    <PanelForNextView text="Sigue mercando" title="Vinos" />
    <PanelForRoundedButtons title='¿Podemos ayudarle?' :buttons='[{
      text: "CHAT",
      image: "static/chat.png"
    }, {
      text: "LLAMAR",
      image: "static/phone_down.png"
    }]' />
    <MainFooter />
  </div>
</template>
<script>
  
export default {
    name: "HomePage",
    props: {},
    data() {
      return {};
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