import axios from "axios";


class Core {
    getPersons = async () => {
        const result = {
            value: null,
            error: null,
        };
        try {
            const response = [{
                char_id: 1,
                name: "Walter White",
                birthday: "09-07-1958",
                occupation: [
                    "High School Chemistry Teacher",
                    "Meth King Pin"
                ],
                img: "https://images.amcnetworks.com/amc.com/wp-content/uploads/2015/04/cast_bb_700x1000_walter-white-lg.jpg",
                status: "Deceased",
                appearance: [1, 2, 3, 4, 5],
                nickname: "Heisenberg",
                portrayed: "Bryan Cranston"
            },
            {
                char_id: 2,
                name: "Walter White",
                birthday: "09-07-1958",
                occupation: [
                    "High School Chemistry Teacher",
                    "Meth King Pin"
                ],
                img: "https://images.amcnetworks.com/amc.com/wp-content/uploads/2015/04/cast_bb_700x1000_walter-white-lg.jpg",
                status: "Deceased",
                appearance: [1, 2, 3, 4, 5],
                nickname: "Heisenberg",
                portrayed: "Bryan Cranston"
            },
            {
                char_id: 3,
                name: "Walter White",
                birthday: "09-07-1958",
                occupation: [
                    "High School Chemistry Teacher",
                    "Meth King Pin"
                ],
                img: "https://images.amcnetworks.com/amc.com/wp-content/uploads/2015/04/cast_bb_700x1000_walter-white-lg.jpg",
                status: "Deceased",
                appearance: [1, 2, 3, 4, 5],
                nickname: "Heisenberg",
                portrayed: "Bryan Cranston"
            },
            {
                char_id: 4,
                name: "Walter White",
                birthday: "09-07-1958",
                occupation: [
                    "High School Chemistry Teacher",
                    "Meth King Pin"
                ],
                img: "https://images.amcnetworks.com/amc.com/wp-content/uploads/2015/04/cast_bb_700x1000_walter-white-lg.jpg",
                status: "Deceased",
                appearance: [1, 2, 3, 4, 5],
                nickname: "Heisenberg",
                portrayed: "Bryan Cranston"
            },
            {
                char_id: 5,
                name: "Walter White",
                birthday: "09-07-1958",
                occupation: [
                    "High School Chemistry Teacher",
                    "Meth King Pin"
                ],
                img: "https://images.amcnetworks.com/amc.com/wp-content/uploads/2015/04/cast_bb_700x1000_walter-white-lg.jpg",
                status: "Deceased",
                appearance: [1, 2, 3, 4, 5],
                nickname: "Heisenberg",
                portrayed: "Bryan Cranston"
            }
            ];
            result.value = response
            // const response = await axios.get('https://www.breakingbadapi.com/api/characters?limit=9')
            // result.value = response.data

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
    QuoteById = async (id) => {
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