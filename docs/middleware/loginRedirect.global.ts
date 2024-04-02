import { userState } from "~/stores/user";

export default defineNuxtRouteMiddleware((to, from) => {
  if (to.path == "/play") {
    console.log("play");
  }
});
