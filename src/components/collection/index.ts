import Component from 'vue-class-component';

@Component({
    template: require('./collection.html')
})
export default class Collection {
    private _slotContents: any;
    
    get headerSlot() {
        return 'header' in this._slotContents;
    }
}