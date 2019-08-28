const express = require("express");
const assets = express.Router();
const cors = require('cors');

const models = require("../models");
const Asset = models.asset;
const History = models.assets_history;
assets.use(cors())

process.env.SECRET_KEY='secret'

//Add
assets.post('/add',(req, res)=>{
	const today= new Date()
	const assetData = {
		barcode_id: req.body.barcode_id,
		barcode: req.body.barcode,
		name: req.body.name,
		quantity: req.body.quantity,
		price: req.body.price,
		unit: req.body.unit,
		created: today,
		note: req.body.note
	}
	//SELECT 'name' from assets
	Asset.findOne({
		where:{
			name:req.body.name
		}
	})
	.then(asset=>{
		if(!asset){
			Asset.create(assetData)
			.then(asset=>{
				res.json({status: asset.name + ' Added'})
			})
			.catch(err => {
				res.send('error: ' + err)
			})
		}else{
			res.json({error:"Asset already exists"})
		}
	})
	.catch(err => {
		res.send('error: ' + err)
	})
})
//Delete
assets.delete("/delete/:id", (req, res) => {
	Asset.destroy({	
		where:{
			id:req.params.id
		}
	})
	.then(asset => {
		res.json({status: 'Deleted'})
	})
	.catch(err => {
		res.send('error:' + err)
	})
})
//Update
assets.put("/update/:id", (req, res) => {
	const today= new Date()
	const assetData = {
		barcode_id: req.body.barcode_id,
		barcode: req.body.barcode,
		name: req.body.name,
		quantity: req.body.quantity,
		price: req.body.price,
		unit: req.body.unit,
		note: req.body.note
	}
	Asset.update(
		assetData,
		{
			where: {
				id: req.params.id
			}
		}
	)
	.then(asset => {
			res.json({status:'Updated'})
		})
	.catch(err => {
			res.send('error:' + err)
		})	
})

//Get all assets
assets.get("/display", (req, res) => {
	Asset.findAll()
	.then(asset => {
		res.json(asset)
	})
	.catch(err => {
		res.send('error:' + err)
	})
})
//Get a asset
assets.get("/update/:id", (req, res) => {
	Asset.findOne({
		where:{
			id:req.params.id
		}
	})
	.then(asset => {
		res.json(asset)
	})
	.catch(err => {
		res.send('error: ' + err)
	})
})
//Join 
assets.get("/display_stock", (req, res) => {
	Asset.findAll({
		include: [{
			model: History
		}]
	})
	.then(asset => {
		res.json(asset)
	})
	.catch(err => {
		res.send('error: ' + err)
	})
})
module.exports = assets
