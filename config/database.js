module.exports = {
    database: {
        uri: 'mongodb://localhost/db',
        options: {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        }
    }
}