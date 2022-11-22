import axios from "axios";

class Core {
    getPersons = async (person) => {
        const result = {
            value: null,
            error: null,
        };
        try {
            const response = await axios.post('https://www.breakingbadapi.com/api/characters', person)

            result.value = response.data
            console.log(value)
        } catch (e) {
            result.error = e.response.data
            console.log(response.data)
        }
        return result

    }
}

export default new Core()