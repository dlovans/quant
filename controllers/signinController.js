const User = require('../models/user')
const bcrypt = require('bcrypt')

// Render sign in page
exports.renderSignin = (req, res) => {
    res.render('auth/signin')
}

// Sign in user
exports.signIn = (req, res) => {
    if (!req.body.email) {
        res.status(400).json({ success: false, missingFields: true, message: "Fields are null" })
    } else {
        User.findOne({ email: req.body.email })
            .then(user => {
                if (!user) {
                    res.status(400).json({ success: false, message: "Incorrect email or password" })
                } else {
                    // check if user has email and password and inputted password, if true, compare in bcrypt
                    if (user.email && user.password && req.body.password) {
                        bcrypt.compare(req.body.password, user.password)
                            .then(async result => {
                                if (result) {
                                    req.session.user = user._id
                                    res.status(200).json({ redirect: '/dashboard' })
                                } else {
                                    user.signinAttempts += 1
                                    try {
                                        await user.save()
                                        if (user.signinAttempts >= 3) {
                                            res.status(400).json({ success: false, message: "Having trouble logging in? Try other sign-in methods you might have used when you created your account." })
                                        } else {
                                            res.status(400).json({ success: false, message: "Incorrect email or password." })
                                        }
                                    } catch (err) {
                                        res.status(500).send(err)
                                    }
                                }
                            })
                            .catch(err => {
                                res.status(500).send(err)
                            })
                    } else {
                        // otherwise, check with which external oauth user has signed in with, and provide variable for axios and client side implementation
                        if (user.google) {
                            res.status(200).json({ google: true })
                        } else if (user.apple) {
                            res.status(200).json({ apple: true })
                        } else if (user.linkedin) {
                            res.status(200).json({ linkedin: true })
                        } else {
                            res.status(400).json({ success: false, missingFields: true, message: "Fields are missing" })
                        }
                    }
                }
            })
            .catch(err => {
                res.status(500).send(err)
            })
    }
}


// sign out user
exports.signOut = (req, res) => {
    req.session.destroy(err => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.render('auth/signin')
        }
    })
}
