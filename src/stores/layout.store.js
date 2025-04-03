import { defineStore } from "pinia";

export const useLayoutStore = defineStore("layout", () => {
  let statusLoading = false;

  function setStatusLoading() {
    statusLoading = false;
  }

  return { statusLoading, setStatusLoading };
});
