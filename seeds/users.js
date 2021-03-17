const bcrypt = require('bcrypt');

const users = [
    {
        type: 'admin',
        name: 'main',
        surname: 'admin',
        email: 'admin@gmail.com',
        password: '$2b$10$QCxwjXxbZ5n138icoftfju91/I5WemlFJpc4uwGuSwiMPDEEbAB46',
        cart: [],
    },
    {
        type: 'client',
        name: 'Alvaro',
        surname: 'Reina',
        email: 'alvaroreina@gmail.com',
        password: '$2b$10$rF5AjmxJ6O1zvZIdKsFFYu8Z9lZf9iuWOXkcTF7hF2nfdIgUljWzm',
        cart: []
    }
]

module.exports = users;