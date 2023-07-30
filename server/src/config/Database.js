import mongoose from 'mongoose';

/**
 * MongoDB connection utility for establishing a connection to the MongoDB database.
 * The `mongodb` object provides a `connect` method to connect to the database using the provided MongoDB URI and options.
 *
 * @typedef {Object} mongodb
 * @property {function} connect - Connects to the MongoDB database using the specified URI and options.
 * @async
 * @returns {Promise<void>} - Resolves when the connection is successful, or rejects with an error if the connection fails.
 */
const mongodb = {

    connect: async () => {

        const uri = process.env.MONGO_URI;
        const options = {
            useNewUrlParser: true,
            useUnifiedTopology: true
        };

        mongoose.connect(uri, options)
            .then(() => {
                console.log('[MongoDB Status] | \x1b[32mConnected\x1b[0m');
            })
            .catch((err) => {
                console.error('[MongoDB Status | \x1b[31mFailed\x1b[0m \n');
            });
    },

}

export default mongodb;