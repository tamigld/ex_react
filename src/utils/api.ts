import axios from "axios"

// criar configurações utilizando axios
const api = axios.create({
    baseURL: "http://localhost:3000/"
    // URL base em que as infos serão puxadas
})

export default api
// exporta p/ utilização