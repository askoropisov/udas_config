import axios from "axios"


//перехватчик запросов для добавления адреса хоста
const configureAxios = () => {
    axios.interceptors.request.use(config => {
        if (process.env.NODE_ENV === "development") {
            config.url = "http://localhost:5100" + config.url
        }
        return config
    })
}

export default configureAxios