module.exports = {
    getAll: async (req, res) => {
        const db = req.app.get('db')
        const list = await db.get_all_houses()
        res.status(200).send(list)
    },
    deleteOne: async (req, res) => {
        const db = req.app.get('db')
        const {id} = req.params
        db.delete_house([+id]).then(result => {
            res.status(200).send(result)
        })
    },
    addHouse: async (req, res) => {
        const db = req.app.get('db')
        const {property, address, city, uState, zip, url, morgage, rent} = req.body
        const list = await db.add_a_house({property, address, city, uState, zip, url, morgage, rent})
        res.status(200).send(list)
    }
}
