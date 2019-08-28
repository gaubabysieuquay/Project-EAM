const express = require("express")
const assets = express.Router()
const cors = require('cors')

const models = require("../models")
const Asset = models.assets_history
assets.use(cors())

process.env.SECRET_KEY='secret'

//Add
assets.post('/add',(req, res)=>{
	const today= new Date()
	const assetData = {
		assetId: req.body.assetId,
		location: req.body.location,
		owner: req.body.owner,
		time: today
	}
	Asset.create(assetData)
	.then(asset=>{
		res.json({status: asset.assetId + ' Added'})
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
		assetId: req.body.assetId,
		location: req.body.location,
		owner: req.body.owner,
		time: today
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
//Detail history
assets.get("/display_stock/:id", (req, res) => {
	Asset.findOne({
		where:{
			id:req.params.id
		}
	})
	.then(asset => {
		res.json(asset)
	})
	.catch(err => {
		res.send('error:' + err)
	})
})
module.exports = assets
