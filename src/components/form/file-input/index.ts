import Component from 'vue-class-component';

import inputMixin from '../../../mixins/input';
import bindBoolean from '../../../directives/bind-boolean';

@Component({
    props: {
        value: {
            type: String,
            required: false,
            'default': null
        },
        name: {
            type: String,
            required: true
        },
        placeholder: {
            type: String,
            required: false,
            'default': ''
        },
        multiple: {
            type: Boolean,
            required: false,
            'default': false
        }
    },
    directives: {
        bindBoolean
    },
    mixins: [
        inputMixin
    ],
    template: require('./file-input.html')
})
export default class FileInputField {
    private value: any;

    selectFile(e) {
        this.value = Array.prototype.slice.call(e.target.files)
            .map((f) => f.name)
            .join(', ');
    }
}