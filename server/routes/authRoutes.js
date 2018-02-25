const passport = require('passport');

// 'google' calls GoogleStrategy above with a scope of info to get
module.exports = app => {

  app.get(
    '/auth/google',
    passport.authenticate('google', {
      scope: ['profile', 'email']
    })
  );

  app.get(
    '/auth/facebook',
    passport.authenticate('facebook'));

  app.get(
    '/auth/linkedin',
    passport.authenticate('linkedin'));

  //user has the code now and access to our server
  app.get('/auth/google/callback',
    passport.authenticate('google', { failureRedirect: '/' }),
    (req, res) => {
      res.redirect('/dashboard');
    }
    //return next();
  );

  app.get('/auth/facebook/callback',
    passport.authenticate('facebook', { failureRedirect: '/' }),
    (req, res) => {
      res.redirect('/dashboard');
    }

  );

  app.get('/auth/linkedin/callback',
    passport.authenticate('linkedin', { failureRedirect: '/' }),
    (req, res) => {
      res.redirect('/dashboard');
    }
    //return next();
  );

  app.get('/api/logout', (req, res) => {
    console.log('LOGOUT')
    req.logout();
    res.redirect('/');
  })

  app.get('/api/current_user', (req, res) => {
    console.log(`CURRENT USER`)
    console.log(req.user)
    res.send(req.user)
  })
}