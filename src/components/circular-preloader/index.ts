import Component from 'vue-class-component';

@Component({
    props: {
        size: {
            type: String,
            required: false,
            'default': null,
            twoWay: false
        },
        color: {
            type: String,
            required: false,
            'default': null,
            twoWay: false
        },
        flashing: {
            type: Boolean,
            required: false,
            'default': false,
            twoWay: false
        }
    },
    template: require('./circular-preloader.html')
})
export default class CircularPreloader {
    
}