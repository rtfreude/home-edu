const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const bodyParser = require('body-parser');
const keys = require('./config/keys');

require('./models/user');
require('./services/passport');

mongoose.Promise = global.Promise;
mongoose.connect(keys.mongoURI, {
  useMongoClient: true
});

const app = express();

//use cookie-session as we don't need to save a ton of cookie data, use express session of cookie needs to hold a lot of data (more than 14kb)
app.use(bodyParser.json());
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);

app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);
// require('./routes/beerRoutes')(app);
// require('./routes/breweryRoutes')(app);

if (process.env.NODE_ENV === 'production') {
  // Express will serve up production assets
  // like our main.js file, or main.css file!
  app.use(express.static('client/build'));

  // Express will serve up the index.html file
  // if it doesn't recognize the route
  const path = require('path');
  app.get('*', (req, res) => {
    console.log('this is get in index')
    res.sendFile(path.resolve(__dirname, '..','client', 'build', 'index.html'));
  });
}


const PORT = process.env.PORT || 5000;
//const PORT = 5000;
app.listen(PORT, () => console.log(`Example app listening on port: ${PORT} !`))