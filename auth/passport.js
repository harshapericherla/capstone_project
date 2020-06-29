const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');
const {checkIfGoogleIdExists} = require('../auth/authMethods');

const attachHandlers = (app) => {
    
    app.get(
        '/auth/google',
        passport.authenticate('google',{
            scope: ['profile','email']
        })
    );
  
    app.get('/auth/google/callback', function(req, res, next) {
        passport.authenticate('google', async function(err, user, info) {
           let jwtToken = await checkIfGoogleIdExists(user);
           console.log(jwtToken);
           res.redirect(`/?token=${encodeURIComponent(jwtToken)}`);
        })(req, res, next);
      });
}

const initializePassportForGoogle = () => {
    passport.use(new GoogleStrategy({
        clientID: keys.googleClientId,
        clientSecret: keys.googleClientSecret,
        callbackURL: '/auth/google/callback',
        /* Used proxy true becuase servers like heroku uses proxy to map request to the server, 
           therefore the browser inherently cannot trust a proxy and converts the https to htpp */
        proxy: true
        },
        async (accessToken,refreshToken,profile,done) => {      
            done(null,profile);
        }
    ));
    
}


module.exports = (app) => {

    attachHandlers(app);
    initializePassportForGoogle();
}