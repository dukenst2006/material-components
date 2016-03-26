import Component from 'vue-class-component';

@Component({
    props: {
        group: {
            type: String,
            required: true
        }
    },
    template: require('./radio-group.html')
})
export default class RadioGroup {
}