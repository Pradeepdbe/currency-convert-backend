// // postgres connection
// // const client_obj = require('./connection.js')
// // client_obj.connect()

// const express = require('express') // express is needed for rest api call
// const cors = require('cors');
// const app = express()
// app.use(express.json())
// app.use(cors())

// // mongo start
// const mongoose = require('mongoose')

// //database connection url
// const dburl = "mongodb://localhost:27017/own-app-db"

// const connectionParams = {
//     useNewUrlParser: true
// }

// mongoose.connect(dburl, connectionParams)
//     .then(() => {
//         console.log("connect to db")
//     })
//     .catch((err) => {
//         console.log("error", err)
//     })

// app.listen(4500, function () {
//     console.log("test server is running")
// })

// app.get('/', (req, res) => {
//     console.log("req", req.query)
//     res.send("first get api details without nodemon")
// })

// const userSchema = new mongoose.Schema({name: String,
//     username: String, 
//     password : String})
// const UserData = mongoose.model('users', userSchema);

// app.get('/getTest', (req, res) => {
//     UserData.find().then((datas) => {
//         console.log("datas", datas)
//         res.send(datas)
//     }).catch((err) => {
//         console.log("test errored out", err)
//     })
// })

// app.post('/createuser', (req, res) => {
//     const user1 = req.body
//     const userDetails = new UserData(user1);
//     userDetails.save(res);
//     res.send(userDetails);
// })

// app.put('/updateuser', async (req, res) => {
//     console.log("req", req.body)
//     const updateObj = req.body.updateObj
//     const userId = req.body.id
//    const updatedUser = await UserData.findByIdAndUpdate(
//         userId,
//         updateObj,
//         {new : true}
//     )
//     res.status(200).json(updatedUser);
// })

// app.get('/fetchById', async(req, res) => {
//     const userId = req.body.id
//     const userData = await UserData.findById(userId)
//     console.log(userData)
//     res.status(200).json(userData)    
// })
const express = require('express');
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(cors());
app.listen(4500, function () {
    console.log("test server is running")
})
var userRoute = require('./src/routes/userRoute');
app.use('/api', userRoute);