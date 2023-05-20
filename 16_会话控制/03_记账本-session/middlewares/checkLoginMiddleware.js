let checkLoginMiddleware = (req, res, next) => {
    if (!req.session.username) {
        return res.redirect('/login')
    }
    req.session.date = Date.now()
    next()
}

module.exports = checkLoginMiddleware