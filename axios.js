import axios from "axios";
import { createBrowserHistory } from "history";
import { store } from "./src/store/store";

let history = createBrowserHistory();

let axiosClient = axios.create({
    baseURL : `http://3.0.176.177:8000/v1/`,
})

axiosClient.interceptors.response.use(undefined, (err) => {
    const error = err.response;

    if(error.status === 401 && error.config && !error.config.__isRetryRequest){
        let state = store.getState();
        axiosClient.post(`user/logout`,{
            username : state.loginData?.user?.username,
        })
        .then((res)=>{
            history.replace('/');
            window.location.reload()
        })
    }
})
export default axiosClient;