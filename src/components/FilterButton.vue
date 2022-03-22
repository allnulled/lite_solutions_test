<template>
  <div class='component FilterButton'>
    <div style="position: fixed; top: auto; bottom: 10px; left: 0; right: 0; text-align: center;">
        <div style="text-align: center;">
            <div style="display: inline-block;">
                <span style="position: relative; display: inline-block; " type="button">
                    <div v-if="is_selected_filters_panel" style="background-color: #f4f4f4; position: absolute; height: 182px; width: 206px; top: auto; left: auto; bottom: -10px; right: -10px; border: 1px solid #CCCCCC; z-index: 99; text-align: left;">
                        <div style="position: relative;">
                            <div style="position: absolute; top: -10px; bottom: auto; left: auto; right: 10px; border: 1px solid #CCCCCC; border-radius: 3pt; padding: 4px; background-color: white; cursor: pointer;" v-on:click="() => is_selected_filters_panel = false">
                                <img style="width: 20px; height: 20px; vertical-align: top;" src="static/cross.png" />
                            </div>
                        </div>
                        <h3 style="background-color: #FFFFFF; font-weight: bold; font-size: 18px; margin: 0; padding: 5px; padding-top: 10px; padding-bottom: 5px;">Filtros</h3>
                        <ul class="filters_list" style="background-color: #FFFFFF;">
                            <li>
                                <span>
                                    <label for="input_for_rubia">Rubia</label>
                                    <input id="input_for_rubia" style="float: right;" type="checkbox" v-model="selected_filters" :value="1" />
                                </span>
                            </li>
                            <li>
                                <span>
                                    <label for="input_for_morena">Morena</label>
                                    <input id="input_for_morena" style="float: right;" type="checkbox" v-model="selected_filters" :value="2" />
                                </span>
                            </li>
                            <li>
                                <span>
                                    <label for="input_for_roja">Roja</label>
                                    <input id="input_for_roja" style="float: right;" type="checkbox" v-model="selected_filters" :value="3" />
                                </span>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <table>
                            <tbody>
                                <tr>
                                    <td v-if="is_selected_filters_panel">
                                        <button :style="selected_filters.length ? 'visibility: visible;' : 'visibility: hidden;'" style="position: relative; display: inline-block;color: #AAAAAA; text-transform: uppercase; border: 1px solid #AAAAAA; padding: 7px; border-radius: 3pt; text-align: center; z-index: 101;" type="button" v-on:click="() => remove_all_filters()">
                                            <span style="text-align: center; margin: 0 auto; vertical-align: middle; padding-bottom: 3px; z-index: 99; color: #666666;">Limpiar</span>
                                        </button>
                                    </td>
                                    <td>
                                        <button style="z-index: 99; position: relative; background-color: #0000a3;color: white; text-transform: uppercase; border: 1px solid #0000a3; padding: 7px; border-radius: 3pt;" v-on:click="() => toggle_filters_panel()">
                                            <span style="vertical-align: middle; padding-bottom: 3px; padding-right: 10px; position: relative; z-index: 101;">Filtrar</span>
                                            <span>
                                                <img src="static/filtro.png" style="width: 14px; height: 16px; vertical-align: middle;" />
                                            </span>
                                            <span v-bind:style="selected_filters.length ? 'visibility: visible;' : 'visibility: hidden;'" style="display: inline-block; background-color: white; border-radius: 10pt; width: 20px; height: 12px; color: blue; font-size: 9px; font-weight: bold; padding: 0; vertical-align: middle;">
                                                {{ selected_filters.length }}
                                            </span>
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </span>
            </div>
        </div>
    </div>
  </div>
</template>
<script>

export default {
    name: 'FilterButton',
    props: {
        galleryComponent: {
            type: Object,
            required: true
        },
    },
    data() {
      const selected_filters = this.$storage.getKey("filter_button_$_selected_filters", []);
      return {
          is_selected_filters_panel: false,
          selected_filters,
      };
    },
    methods: {
        toggle_filters_panel() {
            this.is_selected_filters_panel = !this.is_selected_filters_panel;
            if(!this.is_selected_filters_panel) {
                this.apply_filters();
            }
        },
        apply_filters() {
            this.galleryComponent.apply_filters();
        },
        remove_all_filters() {
            this.selected_filters = [];
        }
    },
    watch: {
        selected_filters(v) {
            this.$storage.setKey("filter_button_$_selected_filters", v);
        }
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
.filters_list {
    list-style: none;
    list-style-type: none;
    padding: 0;
    margin: 0;
    border-bottom: 1px solid #CCCCCC;

}
.filters_list > li {
    border-top: 1px solid #CCCCCC;
    padding: 5px;
}
input[type='checkbox']:checked {
    background-color: blue;
    color: white;
}
</style>