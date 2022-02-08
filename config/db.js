const mongoose = require("mongoose");

const mode = process.env.NODE_ENV;

const MONGO_URI =
	mode === "production" ? process.env.MONGO_URI_ATLAS : process.env.MONGO_URI_LOCAL;

const connectDB = async () => {
	try {
		const conn = await mongoose.connect(MONGO_URI, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
			useFindAndModify: true,
		});

		console.log(`MongoDB Connected: ${conn.connection.host}`);
	} catch (err) {
		console.log(err);
		process.exit(1);
	}
};

module.exports = connectDB;
