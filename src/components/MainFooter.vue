<template>
  <div class='component MainFooter'>
    <ul class="main_footer_list main_footer_list_font_style">
        <li>Sobre nosotros</li>
        <li>Medidas de seguridad (COVID 19)</li>
        <li>Cómo mercar</li>
        <li>Proveedores</li>
        <li>Contáctenos</li>
        <li>Zona de cobertura</li>
    </ul>
    <hr style="border: none; border-top: 1px solid #CCC; margin: 0 auto; max-width: 40px;">
    <PanelForSocialMedia />
    <div class="main_footer_list_font_style" style="text-align: center; text-transform: uppercase; padding-bottom: 40px;">Política de tratamiento de datos personales</div>
    <div style="height: 47px; background-color: #0F0F0F; color: white; text-align: center; padding-top: 10px;">
        © 2020 Axiacore
    </div>
  </div>
</template>
<script>
  
export default {
    name: 'MainFooter',
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
.main_footer_list {
    margin: 0;
    padding: 0;
    list-style: none;
    list-style-type: none;
    text-align: center;
    padding-top: 20px;
    padding-bottom: 20px;
}
.main_footer_list > li {
    padding: 10px;
}
.main_footer_list_font_style {
    text-transform: uppercase;
    font-size: 15px;
    font-weight: bold;
}
</style>