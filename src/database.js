import { config } from 'dotenv'
import mongoose from 'mongoose'

// const SETTINGS = config()

export default () => {
    mongoose.connect(
        // `${SETTINGS.parsed.DB_PROTOCOL}://${SETTINGS.parsed.DB_URL}:${SETTINGS.parsed.DB_PORT}/${SETTINGS.parsed.DB_NAME}`,
        // "mongodb+srv://zetagh:zetaghpwd@cluster0-zjrjx.mongodb.net/test?retryWrites=true",
        "mongodb://zetagh:zetagh123@ds161856.mlab.com:61856/heroku_x2tz5x1j",
        { useNewUrlParser: true }
    ).then(() => { console.log('Successful connection to datbase MongoDB') })
        .catch(err => console.log(`Error while connecting to database: ${err}`))
}