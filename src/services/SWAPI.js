import axios from "axios";

axios.defaults.baseURL = 'https://swapi.dev/api'

const getAllFilms = async () => {
    const res = await axios.get(`/films`)
    return res.data
}

// Get one film
const getOneFilm = async (id) => {
    const res = await axios.get(`/films/${id}`)
    return res.data
}

// Get all people
const getAllPeople = async (page) => {
    const res = await axios.get(`/people/?page=${page}`)
    return res.data
}

// Get one person 
const getOnePerson = async (id) => {
    const res = await axios.get(`/people/${id}`)
    return res.data
}

// eslint-disable-next-line
export default {
    getAllFilms,
    getOneFilm,
    getAllPeople,
    getOnePerson,
}