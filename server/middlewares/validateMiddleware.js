const validateMiddleware = (req, res, next) => {
    const { fullName, email,phone, country,state,zipCode,image,city, address } = req.body;
    if (!fullName || !email || !phone || !country || !state || !zipCode || !city || !address || !image  || !req.files) {
        return res.redirect("/");
    }
    next();
};


module.exports = { validateMiddleware };