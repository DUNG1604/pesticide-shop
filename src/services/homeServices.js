import { Axios } from "./Axios";

export const getAxios = () => {
   const url = "api/v1/notification";
   return Axios.postRequest(url);
};

const homeService = {
   getAxios,
};

export default homeService;
