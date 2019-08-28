const express = require("express")
const users = express.Router()
const cors = require('cors')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const models = require("../models")
const User = models.user;

users.use(cors())

process.env.SECRET_KEY='secret'

//Register
users.post('/register',(req, res)=>{
	const today= new Date()
	const userData = {
		first_name: req.body.first_name,
		last_name: req.body.last_name,
		email: req.body.email,
		password: req.body.password,
		created: today
	}
	//SELECT 'email' from users
	User.findOne({
		where:{
			email:req.body.email
		}
	})
	.then(user=>{
		if(!user){
			bcrypt.hash(req.body.password, 10, (err,hash) => {
				userData.password = hash
				User.create(userData)
				.then(user=>{
					res.json({status: user.email + ' registered'})
				})
				.catch(err => {
					res.send('error: ' + err)
				})
			})
		}else{
			res.json({error:"User already exists"})
		}
	})
	.catch(err => {
		res.send('error: ' + err)
	})
})
//Login
users.post('/login', (req, res) => {
	User.findOne({
		where:{email:req.body.email}
	})
	.then(user => {
		if (user) {
			if (bcrypt.compareSync(req.body.password, user.password)) {
				let token = jwt.sign(user.dataValues, process.env.SECRET_KEY, {
					expiresIn: 1440
				}); //so sánh pass input và pass db
				res.status(200).json(token);
				res.send(token);
			} else {
				res.status(400).json({error: 'Wrong password'});
				
				//bcrypt.hash(req.body.password, 10, function(err, hash) {
					//  	res.send(hash + '||' + user.password);
				//});
				
			}
		} else {
			res.status(400).json({error: 'Wrong user'});
		}
		//err empty res hahaha
	})
	.catch(err => {
		res.status(400).json({error: err})
	})
})
//Profile
users.get('/profile',(req, res)=>{
	var decoded = jwt.verify(req.headers['authorization'], process.env.SECRET_KEY)

	User.findOne({
		where:{
			id: decoded.id
		}
	})
	.then(user => {
		if(user){
			res.json(user)
		}else{
			res.send('User does not exist')
		}
	})
	.catch(err=> {
		res.send('error:' + err)
	})
})
//Get all users
users.get("/display-user", (req, res) => {
	User.findAll()
	.then(user => {
		res.json(user)
	})
	.catch(err => {
		res.send('error:' + err)
	})
})
//Get a user of update
users.get("/update/:id", (req, res) => {
	User.findOne({
		where:{
			id:req.params.id
		}
	})
	.then(user => {
		res.json(user)
	})
	.catch(err => {
		res.send('error: ' + err)
	})
})
//Delete
users.delete("/delete/:id", (req, res) => {
	User.destroy({	
		where:{
			id:req.params.id
		}
	})
	.then(user => {
		res.json({status: 'Deleted'})
	})
	.catch(err => {
		res.send('error:' + err)
	})
})
//Update
users.put("/update/:id", (req, res) => {
	const today= new Date()
	const userData = {
		first_name: req.body.first_name,
		last_name: req.body.last_name,
		email: req.body.email,
		password: req.body.password
	}
	User.update(
		userData,
		{
			where: {
				id: req.params.id
			}
		}
	)
	.then(user => {
			res.json({status:'Updated'})
		})
	.catch(err => {
			res.send('error:' + err)
		})	
})
module.exports = users

