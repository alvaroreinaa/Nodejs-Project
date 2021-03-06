const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');
const User = require('./models/User');

const saltRounds = 10;

// Strategy for the register
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
                    cart: [],
                });

                const savedUser = await newUser.save();

                done(null, savedUser);
            } catch (err) {
                return done(err);
            }
        }
    )
);

// Strategy for the login
passport.use(
    'login',
    new LocalStrategy(
        {
            usernameField: 'email',
            passwordField: 'password',
            passReqToCallback: true,
        },
        async (req, email, password, done) => {
            try {
                const currentUser = await User.findOne({ email: email });
                const checkPassword = await bcrypt.compare(password, currentUser.password);

                if (!currentUser || !checkPassword) {
                    const error = new Error('Incorrect email or password');
                    return done(error);
                }

                done(null, currentUser);
            } catch (err) {
                return done(err);
            }
        }
    )
);

// To register the sessions of the users
passport.serializeUser(async (user, done) => {
    done(null, user._id);
});

passport.deserializeUser(async (userId, done) => {
    try {
        const existingUser = User.findById(userId);
        return done(null, existingUser);
    } catch (err) {
        return done(err);
    }
});