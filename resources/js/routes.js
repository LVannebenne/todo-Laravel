import Home from './pages/Home.vue';
import Register from './pages/Register.vue';
import Login from './pages/Login.vue';
import Dashboard from './pages/user/Dashboard.vue';
import AdminDashboard from './pages/admin/Dashboard.vue';
import CreateTodoComponent from './components/CreateTodoComponent';
import CreateItemComponent from './components/CreateItemComponent';
import MyTodosComponent from './components/MyTodosComponent';

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: {
      auth: undefined
    }
  },
  {
    path: '/register',
    name: 'register',
    component: Register,
    meta: {
      auth: false
    }
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {
      auth: false
    }
  },
  // TODO ROUTES
  {
    name: 'MyTodos',
    path: '/mytodos',
    component: MyTodosComponent,
    meta: {
      auth: false
    }
  },
  {
    name: 'Create',
    path: '/create',
    component: CreateTodoComponent,
    meta: {
      auth: false
    }
  },
  {
    name: 'CreateItem',
    path: '/createitem/:id',
    component: CreateItemComponent,
    meta: {
      auth: false
    }
  },
  // USER ROUTES
  {
    path: '/dashboard',
    name: 'dashboard',
    component: Dashboard,
    meta: {
      auth: true
    }
  },
  // ADMIN ROUTES
  {
    path: '/admin',
    name: 'admin.dashboard',
    component: AdminDashboard,
    meta: {
      auth: {
        roles: 2,
        redirect: {
          name: 'login'
        },
        forbiddenRedirect: '/403'
      }
    }
  }
]
export default routes
