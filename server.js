const express = require("express"); //import module Express
const bodyParser = require("body-parser"); //third-party middleware parse dữ liệu mà client post lên.
const cors = require("cors") //middleware cho pháp truy cập đến API của ta trong mọi nơi.

const app = express(); //import Express
const port = process.env.PORT || 5000; //process.env để các biến môi trường để host ở cloud

app.use(bodyParser.json())
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))


var Users = require("./routes/userRoutes")

app.use("/users",Users)

var Assets = require("./routes/assetRoutes")

app.use("/assets",Assets)

var Assets_history = require("./routes/historyRoutes")

app.use("/assets_history",Assets_history)

var db = require('./models');
//db.sequelize.sync() //Create table from models if it isn't existed
	//.then(() => {
		app.listen(port, () => console.log(`Listening on port ${port}`))
	//})
	//.catch(e => console.log(e))

