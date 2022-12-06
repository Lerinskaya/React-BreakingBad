import axios from "axios";


class Core {
    getPersons = async () => {
        const result = {
            value: null,
            error: null,
        };
        try {
            const response = await axios.get('https://www.breakingbadapi.com/api/characters?limit=9')
            result.value = response.data

        } catch (e) {
            result.error = e.response.data
        }
        return result
    }

    getPersonById = async (id) => {
        const result = {
            value: null,
            error: null,
        };
        try {
            const response = await axios.get(`https://www.breakingbadapi.com/api/characters/${id}`)
            result.value = response.data[0]

        } catch (e) {
            result.error = e.response.data
        }
        return result
    }
    getQuoteById = async (id) => {
        const result = {
            value: null,
            error: null,
        };
        try {
            const response = await axios.get(`https://www.breakingbadapi.com/api/quotes/${id}`)
            result.value = response.data

        } catch (e) {
            result.error = e.response.data
        }
        return result
    }
}

export default new Core()