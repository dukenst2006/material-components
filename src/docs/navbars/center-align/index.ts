import Component from 'vue-class-component';
import mdBadge from '../../../components/badge';
import mdNavbar from '../../../components/navbar';
import mdNavItem from '../../../components/nav-item';

@Component({
    components: {
        mdBadge,
        mdNavbar,
        mdNavItem
    },
    template: require('./navbars.html')
})
export default class CenterAlignNavbar {
}