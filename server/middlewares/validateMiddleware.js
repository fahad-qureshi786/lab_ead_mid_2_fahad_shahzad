const validateMiddleware = (req, res, next) => {
    const { fullName, email,phone, country,state,zipCode,image } = req.body;
    if (!fullName || !email || !phone || !country || !state || !zipCode || !image  || !req.files) {
        return res.redirect("/");
    }
    next();
};


module.exports = { validateMiddleware };