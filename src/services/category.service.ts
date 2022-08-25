import axios from "axios";
import { BASE_URL } from '../constants/api_constant';

const API_URL = `${BASE_URL}/categories`

class CategoryService {

    getList() {
        return axios.get(API_URL).then((res) => { return res.data; });
    } 

    getByID(id: number) {
        return axios.get(API_URL + `/${id}`).then((res) => { return res.data; });
    } 

}

export default new CategoryService();