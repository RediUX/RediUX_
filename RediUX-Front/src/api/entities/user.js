import * as httpRequests from "../common/api_requests";
import { URLS } from "../common/endpoints";

const fetchLogin = async (obj, callback) => {
  console.log(obj);
  console.log(URLS.USER + "/signin");
  httpRequests.postMethod(URLS.USER + "/signin", obj).then(async (res) => {
    const body = res.data;
    if (body) {
      localStorage.setItem("token", body.token);
      localStorage.setItem("user", body.user);
      localStorage.setItem("tokenExpiration", token.exp);
      callback(body);
    }
  });
};

export { fetchLogin };
