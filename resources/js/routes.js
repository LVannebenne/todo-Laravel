import HomeComponent from './components/HomeComponent';
import DashboardComponent from './components/DashboardComponent';

export default {
    mode: 'history',

    routes: [
        {
            name: 'Home',
            path: '/',
            component: HomeComponent
        },
        {
            name: 'Dashboard',
            path: '/dashboard',
            component: DashboardComponent
        }
    ]
};