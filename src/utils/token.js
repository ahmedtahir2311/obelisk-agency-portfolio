import isBrowser from "@/utils/isBrowser";

export function setToken(token) {
  if (isBrowser()) {
    window.localStorage.setItem("accessToken", token);
  }
}
export function getToken() {
  if (isBrowser()) {
    return window.localStorage.getItem("accessToken");
  }
}
export function removeToken() {
  if (isBrowser()) {
    window.localStorage.removeItem("accessToken");
  }
}
