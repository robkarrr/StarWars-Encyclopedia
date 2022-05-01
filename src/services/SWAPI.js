import axios from "axios";

axios.defaults.baseURL = 'https://swapi.dev/api'

const getAllFilms = async () => {
    const res = await axios.get(`/films`)
    return res.data
}

// eslint-disable-next-line
export default {
    getAllFilms,
}