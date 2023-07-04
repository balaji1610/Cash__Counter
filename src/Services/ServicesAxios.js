import axios from "axios";
const BASE_URL = "https://orange-salty-insect.glitch.me/cashcounter";
const Services = {
  getApi: () => {
    const response = axios
      .get(`${BASE_URL}`)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        return error;
      });

    return response;
  },

  postApi: (payload) => {
    const response = axios
      .post(`${BASE_URL}`, payload)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        return error;
      });

    return response;
  },
};

export default Services;
