const User = require('../models/user')
const bcrypt = require('bcrypt')
const saltRounds = 10


// Render sign up page
exports.renderSignup = (req, res) => {
    res.render('auth/signup')
}


// Create new user based on input data
exports.signupUser = async (req, res) => {
    // Check if client provided data
    if (req.body.email && req.body.password) {
        const emailRegex = new RegExp('^(?:[a-z0-9!#$%&\'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&\'*+/=?^_`{|}~-]+)*|"(?:[\\x01-\\x08\\x0b\\x0c\\x0e-\\x1f\\x21\\x23-\\x5b\\x5d-\\x7f]|\\\\[\\x01-\\x09\\x0b\\x0c\\x0e-\\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\\.) {3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\\x01-\\x08\\x0b\\x0c\\x0e-\\x1f\\x21-\\x5a\\x53-\\x7f]|\\\\[\\x01-\\x09\\x0b\\x0c\\x0e-\\x7f])+)\])$', 'i');
        const passwordRegex = new RegExp("^(?=.*[A-Z])(?=.*\\d)(?!.*\\s).{8,}$")
        // Server-side validation of data
        if (emailRegex.test(req.body.email) && passwordRegex.test(req.body.password)) {
            // Check if email exists in database
            await User.findOne({ email: req.body.email })
                .then(async email => {
                    // If email doesnt exist, create new user and hash with bcrypt
                    if (!email) {
                        bcrypt.hash(req.body.password, saltRounds, async function (err, hash) {
                            const createUser = new User({ email: req.body.email, password: hash })
                            await createUser.save()
                            res.json({ redirectURL: '/dashboard' })
                        });

                    } else {
                        // Otherwise, send  msg about user already existing and prompt client to sign in instead
                        res.json({ message: "Email already exists. Sign in!" })
                    }
                })
                .catch((err) => {
                    console.log(err)
                })
        } else {
            // Notify client server-side validation failed
            res.json({ validationStatus: false, status: 400, message: "Data validation failed!" })
        }
    } else {
        // Notify client input field data is missing
        res.json({ missingFields: true, message: "Missing email or password" })
    }
}


// Routes to signup through Google, LinkedIn, and Apple Oauth
exports.googleSignup = (req, res) => {

}

exports.linkedinSignup = (req, res) => {

}

exports.appleSignup = (res, req) => {

}