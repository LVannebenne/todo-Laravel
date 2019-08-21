import HomeComponent from './components/HomeComponent';
import DashboardComponent from './components/DashboardComponent';
import CreateComponent from './components/CreateComponent';


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
        },
        {
            name: 'Create',
            path: '/create',
            component: CreateComponent
        },
        {
            name: 'Edit',
            path: '/edit/${id}',
            component: EditComponent
        }
    ]
};