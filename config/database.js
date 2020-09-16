module.exports = {
    database: {
        uri: 'mongodb://localhost/database',
        options: {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        }
    }
}