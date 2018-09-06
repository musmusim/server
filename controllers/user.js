const axios = require('axios')
const {OAuth2Client} = require('google-auth-library');
const User = require('../models/user')
const jwt = require('jsonwebtoken')

module.exports = {

    signinFb: function(req,res){
        axios({
            method:'get',
            url:`https://graph.facebook.com/me?fields=email,name&access_token=${req.body.accessToken}`,
        })
        .then(result => {
            User.findOne({email: result.data.email}, (err, findResult) => {
                if (err) {
                    console.log(err)
                } else {
                    if(findResult) {
                        jwt.sign({
                            id: result.data.id
                        }, 'secret', (err, token) => {
                            if (err) {
                                res.status(500).json({message: err.message})
                            } else {
                                res.status(201).json({token: token})
                            }
                        })
                    } else {
                        axios({
                            method:'GET',
                            url:`https://gender-api.com/get?name=${result.data.name}&key=MhKTkVNrTBNjQofklH`
                        })
                        .then(genderUser => {
                            User.create({
                                email: result.data.email,
                                name: result.data.name,
                                password: result.data.name,
                                gender: genderUser.data.gender,
                                statusFb: 1
                            }, (err) => {
                                if (err) {
                                    res.status(500).json({message: err.message})
                                } else {
                                    jwt.sign({
                                        id: result.data.id
                                    }, 'secret', (err, token) => {
                                        if (err) {
                                            res.status(500).json({message: err.message})
                                        } else {
                                            res.status(201).json({token: token})
                                        }
                                    })
                                }
                            })
                        })
                        .catch(err => {
                            console.log(err)
                        })
                    }
                }
            })
        })
        .catch(err => {
            console.log(err)
        })
    },

    signinGoogle: function(req,res){
       
        let token = req.body.token
        let CLIENT_ID = '785037493601-205nrch5cf6k4dfdu7s3mj8e22f590r0.apps.googleusercontent.com'

        const client = new OAuth2Client(CLIENT_ID);
        async function verify() {
        const ticket = await client.verifyIdToken({
            idToken: token,
            audience: CLIENT_ID
        });
        const payload = ticket.getPayload();
        const userid = payload['sub'];
            axios({
                method:'GET',
                url:`https://www.googleapis.com/oauth2/v3/tokeninfo?id_token=${token}`
            })
            .then(function(response) {
                console.log(response)
            })
            .catch(function(err){
                console.log(err)
            })
        }
        verify().catch(console.error);
        
        
    }

}