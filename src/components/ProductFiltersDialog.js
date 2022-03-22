class ProductFiltersDialog {

    static create(...args) {
        return new this(...args);
    }

    constructor(element, parent) {
        this.element = element;
        this.parent = parent;
        this.available_filters = [];
        this.selected_filters = [];
    }

    initialize() {
        this.selected_filters = JSON.parse(localStorage[this.constructor.STORAGE_ID] || "[]");
    }

    display_dialog() {
        this.element.style.display = "block";
    }
    
    hide_dialog() {
        this.element.style.display = "none";
    }

    toggle_filter(id) {
        const pos = this.selected_filters.indexOf(id);
        if(pos === -1) {
            this.selected_filters.push(id);
        } else {
            this.selected_filters.slice(pos, 1);
        }
        this.save_state();
    }

    save_state() {
        localStorage[this.constructor.STORAGE_ID] = JSON.stringify(this.selected_filters);
    }

    remove_filters() {
        this.selected_filters = [];
        this.update_view();
    }

    search() {
        this.hide();
        this.update_view();
        this.search_through_parent();
    }

    update_view() {
        this.element.innerHTML = "";
    }

    search_through_parent() {
        // @TODO...
    }

}

window.ProductFiltersDialog = ProductFiltersDialog;