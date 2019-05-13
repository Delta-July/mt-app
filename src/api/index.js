import axios from '@/axios'

var api = {
    searchHotWords() {
        return axios.get('/api/meituan/header/searchHotWords.json')
    },
    searchList() {
        return axios.get('/api/meituan/header/search.json')
    },
    getMenuList() {
        return axios.get('/api/meituan/index/nav.json')
    },
    getResultProducts() {
        return axios.get('/api/meituan/index/resultsByKeywords.json')
    },
    getProducts() {
        return axios.get('/api/meituan/list/goodsList.json')
    }

}
export default api
