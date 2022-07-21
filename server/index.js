const PORT = process.env.PORT || 3000;
const {
	setupServer
} = require("./server.js");
const app = setupServer();

const server = () => {
	try {
		app.listen(PORT, () => {
			console.log(`server is listening on http://localhost:${PORT}`)
		})

	} catch (err) {
		return err
	}

};

server();