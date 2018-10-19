module.exports = {

    getHouses: (req, res) => {
        const db = req.app.get('db');
        db.get_houses().then(houses => {
            res.status(200).json(houses);
        }).catch(err => {
            console.error('Error on getHouses', err);
        })
    },

    addHouse: (req, res) => {
        const db = req.app.get('db');
        const { name, address, city, state, zipcode, image_url } = req.body;
        db.add_house(name, address, city, state, zipcode, image_url).then(house => {
            res.status(200).json(house);
        }).catch(err => {
            console.error('Error on addHouse', err);
        })
    },

    deleteHouse: (req, res) => {
        const db = req.app.get('db');
        const { id } = req.params;
        db.delete_house(id).then(() => {
            res.sendStatus(200);
        }).catch(err => {
            console.error('Error on deleteHouse', err);
        })
    },

    updateHouse: (req, res) => {
        const db = req.app.get('db');
        const { name, address, city, state, zipcode, image_url } = req.body;
        const { id } = req.params;
        db.update_house(name, address, city, state, zipcode, image_url, id).then(() => {
            res.sendStatus(200);
        }).catch(err => {
            console.error('Error on updateHouse', err);
        })
    }
}