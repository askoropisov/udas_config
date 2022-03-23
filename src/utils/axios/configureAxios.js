import axios from "axios"

const configureAxios = () => {
    axios.interceptors.request.use(config => {
        if (process.env.NODE_ENV === "development") {
            config.url = "https://localhost:5001" + config.url
        }
        return config
    })
}

export default configureAxios