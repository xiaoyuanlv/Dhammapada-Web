import axios from "axios";
import { BASE_URL } from '../constants/api_constant';

const API_URL = `${BASE_URL}/dhamma`

class DhammaService {

    getByID(id: number) {
        return axios.get(API_URL + `/${id}`).then((res) => { return res.data; });
    } 

    getByCategoryID(id: number) {
        return axios.get(API_URL + `/category/${id}`).then((res) => { return res.data; });
    } 

    getDhammaList(page: number) {
        return axios.get(API_URL + `?page${page}`).then((res) => { return res.data; });
    } 

}

export default new DhammaService();