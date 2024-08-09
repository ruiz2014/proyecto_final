const axios = require('axios');

const getApi = async (req, res) => {
    try {
        // const response = await axios.get('https://api.escuelajs.co/api/v1/products/?categoryId=2')
        const response = await axios.get('https://fakestoreapi.com/products')
        const characters = response.data
        // console.log(characters)
        res.render('character/persons', {
            layout: "layouts/main",
            characters
        })
    } catch (error) {
        console.error('Error en la api', error)
    }
};

const getPerson = async (req, res) => {
    let id = req.params.id;
    // console.log(id);
    try {
        const response = await axios.get(`https://fakestoreapi.com/products/${id}`)
        const person = response.data
        // console.log(person)
        res.render('character/person', {
            layout: "layouts/main",
            person
        })
    } catch (error) {
        console.error('Error en la api', error)
    }
}

module.exports = {
    getApi,
    getPerson,
};
