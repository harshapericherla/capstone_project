const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');
const {checkIfGoogleIdExists} = require('../auth/authMethods');

const attachHandlers = (app) => {
    

    app.get('/auth/google', function(req,res,next){

        let state = "";
        if(req.query.redirectUrl)
        {
            state = req.query.redirectUrl;
        }

        passport.authenticate('google',{
            scope: ['profile','email'],
            state
        })(req,res,next);
    });
  
    app.get('/auth/google/callback', function(req, res, next) {

        passport.authenticate('google', async function(err, user, redirectUrl) {
           let jwtToken = await checkIfGoogleIdExists(user);
           redirectStr = typeof redirectUrl === "string" ? `/?token=${encodeURIComponent(jwtToken)}&redirectUrl=${redirectUrl}` : `/?token=${encodeURIComponent(jwtToken)}`; 
           res.redirect(redirectStr);
        })(req, res, next);
      });
}
GoogleStrategy.passReqToCallback = true
const initializePassportForGoogle = () => {
    passport.use(new GoogleStrategy({
        clientID: keys.googleClientId,
        clientSecret: keys.googleClientSecret,
        callbackURL: '/auth/google/callback',
        /* Used proxy true becuase servers like heroku uses proxy to map request to the server, 
           therefore the browser inherently cannot trust a proxy and converts the https to htpp */
        proxy: true,
        passReqToCallback:true
        },
        async (req,accessToken,refreshToken,profile,done) => {      
            done(null,profile,req.query.state);
        }
    ));
    
}


module.exports = (app) => {

    attachHandlers(app);
    initializePassportForGoogle();
}