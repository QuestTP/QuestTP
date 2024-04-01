import { userState } from "~/stores/user";
const user = userState();

export default defineNuxtRouteMiddleware((to, from) => {
  if (to.path == "/game") {
    if (user.loggedIn !== true) {
      return navigateTo("/login");
    }
  }
});
