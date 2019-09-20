module.exports = {
    getAll: async (req, res) => {
        const db = req.app.get('db')
        const list = await db.get_all_houses()
        res.status(200).send(list)
    }
}