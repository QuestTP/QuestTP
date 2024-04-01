import { defineStore } from "pinia";

export const userState = defineStore("state", () => {
  const email = ref<string>("ryanchen979@gmail.com");
  const username = ref<string>("");
  const loggedIn = ref<boolean>(false);

  function $logout() {
    (email.value = ""), (username.value = ""), (loggedIn.value = false);
    useRouter().push("/login");
  }

  return {
    email,
    username,
    loggedIn,
    $logout,
  };
});
