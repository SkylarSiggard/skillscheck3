module.exports = {
    getAll: async (req, res) => {
        const db = req.app.get('db')
        const list = await db.get_all_houses()
        res.status(200).send(list)
    },
    deleteOne: async (req, res) => {
        const db = req.app.get('db')
        const {id} = req.params
        console.log('index num', +id)
        db.delete_house([+id]).then(result => {
            res.status(200).send(result)
        })
    },
    addHouse: async (req, res) => {
        const db = req.app.get('db')
        const {property, address, city, uState, zip, url, mortgage, rent} = req.body
        db.add_a_house({property, address, city, uState, zip, url, mortgage, rent}).then(result => {
            res.status(200).send(result)
        })
    }
}
