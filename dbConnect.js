const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://sanskarbhatt1927:up64d5256@cluster0.ycikutg.mongodb.net/expensetracker-sanskar',{useNewUrlParser:true,useUnifiedTopology:true})
const connection = mongoose.connection
connection.on('error',err => console.log(err))
connection.on('connected',()=> console.log('Mongo DB connection is Successfull')) 