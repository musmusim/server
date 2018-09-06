const axios = require('axios')
const {OAuth2Client} = require('google-auth-library');


module.exports = {

    signFb: function(req,res){
        
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