import { createRouter, createWebHistory } from "vue-router";
import TodosList from "../views/Todo.vue";
import UserList from '../views/UserList'
import Albums from '../views/Albums'
import Posts from '../views/Posts'
import AlbumsDetail from '../views/AlbumsDetail'
const routes = [
  {
    path: "/",
    component: UserList,
  },
  {
    path: "/todos",
    component: TodosList,
  },
  {
    path: "/albums",
    component: Albums,
  },
  {
    path: "/posts",
    component: Posts,
  },
  {
    path: "/albums/detail",
    component: AlbumsDetail,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;