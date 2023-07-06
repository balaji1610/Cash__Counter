import axios from "axios";
const BASE_URL = "https://orange-salty-insect.glitch.me/cashcounter";
const Services = {
  getApi: () => {
    const response = axios
      .get(`${BASE_URL}?_sort=id&_order=desc`)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        return error;
      });

    return response;
  },
  getLowToHigh: () => {
    const response = axios
      .get(`${BASE_URL}?_sort=total.sumoftotal`)
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

  putApi: (id, payload) => {
    const response = axios
      .put(`${BASE_URL}/${id}`, payload)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        return error;
      });

    return response;
  },
  DeleteApi: (id) => {
    const response = axios
      .delete(`${BASE_URL}/${id}`)
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
