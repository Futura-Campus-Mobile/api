module.exports = {
    listUsers(req, res){
        const users = []

        return res.status(200).send(users)
    }
}