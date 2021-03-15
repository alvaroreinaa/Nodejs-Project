const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');
const User = require('./models/User');

const saltRounds = 10;

passport.use(
    'register',
    new LocalStrategy(
        {
            usernameField: 'email',
            passwordField: 'password',
            passReqToCallback: true,
        },
        async (req, email, password, done) => {
            try {
                const previousUser = await User.findOne({ email: email });

                if (previousUser) {
                    const error = new Error('This email is already registered!');
                    return done(error);
                }

                const hash = await bcrypt.hash(password, saltRounds);

                const newUser = new User({
                    type: 'client',
                    name: req.body.name,
                    surname: req.body.surname,
                    email: email,
                    password: hash,
                });

                const savedUser = await newUser.save();

                done(null, savedUser);
            } catch (err) {
                return done(err);
            }
        }
    )
)