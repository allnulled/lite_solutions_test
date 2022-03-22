<template>
  <div class='component PanelForImageGallery'>
    <h3 style="padding: 20px; text-align: center;">
      Cervezas
    </h3>
    <div class="container0" v-if="selected_items">
      <div class="row">
        <div class="col-6 col-sm-3" v-for="(selected_item, index_item) in selected_items" v-bind:key="'image-gallery-item-' + index_item">
          <div style="border: 1px solid #CCCCCC; border-radius: 3pt; margin-bottom: 10px; overflow: hidden; cursor: pointer;">
            <div style="padding-left: 20px; padding-right: 20px; text-align: center">
              <img style="display: inline-block; max-width: 120px; text-align: center;" :src="'static/repo/img/' + selected_item.img" />
            </div>
            <div style="padding-left: 20px; padding-right: 20px; font-weight: bold; min-height: 50px;">{{ selected_item.name }}</div>
            <div style="padding-left: 20px; padding-right: 20px; font-size: 10px; min-height: 50px;">{{ selected_item.description }}</div>
            <div style="padding-left: 20px; padding-right: 20px; font-weight: bold;">${{ (selected_item.price / 1000).toFixed(3) }}</div>
            <div style="padding: 5px; border-top: 1px solid #CCCCCC; background-color: #f4f4f4; color: blue; text-transform: uppercase; text-align: center; font-weight: bold;">Agregar</div>
          </div>
        </div>
      </div>
    </div>
    <FilterButton :gallery-component="this" />
  </div>
</template>
<script>

import beers from "../assets/data/beers.js";

export default {
    name: 'PanelForImageGallery',
    props: {
      title: String,
      items: { type: Array, required: false, default: () => [] },
      filters: { type: Array, required: false, default: () => [] },
    },
    data() {
      return {
        selected_title: this.title,
        selected_filters: this.filters,
        selected_items: [],
        available_items: this.items,
      };
    },
    methods: {
      apply_filters() {
        const filterIds = this.$storage.getKey("filter_button_$_selected_filters", []);
        if(filterIds.length === 0) {
          this.selected_items = beers;
        } else {
          this.selected_items = beers.filter(beer => filterIds.indexOf(beer.filterId) !== -1);
        }
      },
      load_all_items() {
        return new Promise(ok => setTimeout(() => ok(beers), 1000))
          .then(data => this.available_items = data)
          .then(this.apply_filters);
      }
    },
    beforeCreate() {},
    created() {},
    beforeMount() {},
    mounted() {
      this.load_all_items();
    },
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