import * as httpRequests from "../common/api_requests";
import { URLS } from "../common/endpoints";

const fetchLogin = async (obj, callback) => {
  await httpRequests
    .postMethod(URLS.USER + "/signin", obj)
    .then(async (res) => {
      const body = res.data;
      if (body) {
        localStorage.setItem("token", body.token);
        localStorage.setItem("userId", body.user.id);
        localStorage.setItem("userEmail", body.user.email);

        callback(body);
      }
    });
};

const fetchLogout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("userId");
  localStorage.removeItem("userEmail");
  window.location.href = "/";
};

export { fetchLogin, fetchLogout };
