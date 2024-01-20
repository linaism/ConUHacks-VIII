import ApiMethods from "./ApiMethods"
import ENDPOINTS from "./EndPoints"
import { API_URL } from '@env';

const BASE_URL = API_URL

class ApiManager{
    static helloWorld = () => {
        const url = BASE_URL + ENDPOINTS.HELLO_WORLD();
        return ApiMethods.get(url);
    }
    
}

export default ApiManager;