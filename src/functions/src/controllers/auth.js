module.exports = {
    isAuthenticated(req, res, next){
        const { user } = req.query

        if(!user)
            return res.status(401).send({ message: 'Unauthorized' })

        return next()
    }
}