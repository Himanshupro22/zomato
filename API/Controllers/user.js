const  express  =require('express');
const User = require('../Modules/user');


exports.login = (req, res) => {
    const { email, password } = req.body;
    User.find({ email: email, password: password })
        .then(response => {
            if (response.length > 0) {
                res.status(200).json({ message: "user Logedin Succesfully", isauthenticateduser: true, User: response })
            } else {
                res.status(400).json({ message: "user Logedin Failed", isauthenticateduser: false, User: response })
            }
        })
        .catch(err => {
            res.status(500).json({ error: err })
        })
}

exports.signUp = (req, res, next) => {
    const { email, password, firstName, lastName, phone_number, address } = req.body;
    User.find({ email: email })
        .then(response => {
            if (response.length >= 1) {
                res.status(200).json({ message: "user already exist", user: response })

            } else {
                const usersignedin = new User({ email: email, password: password, firstName: firstName, lastName: lastName, phone_number: phone_number, address: address });
                usersignedin.save().then(response => {
                        res.status(200).json({ message: "user registerd Succesfully", user: response })
                    })
                    .catch(err => {
                        res.status(500).json({ error: err })
                    })
            }
        })
        .catch(err => {
            res.status(500).json({ error: err })
        })


}