class Storage {

    constructor(id) {
        this.storageID = id;
    }

    initialize() {
        try {
            console.log(`Initializing storage: ${this.storageID}`);
            if(!(this.storageID in localStorage)) {
                localStorage[this.storageID] = "{}";
            }
            return this;
        } catch (error) {
            console.error(error);
            alert("Storage could not be loaded!");
            throw error;
        }
    }

    load() {
        return JSON.parse(localStorage[this.storageID]);
    }

    save(value) {
        localStorage[this.storageID] = JSON.stringify(value);
    }

    getKey(key, defaultValue = undefined) {
        const data = this.load();
        return key in data ? data[key] : defaultValue;
    }

    setKey(key, value) {
        const data = this.load();
        data[key] = value;
        this.save(data);

    }

}

export default Storage;