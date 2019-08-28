import axios from 'axios'

export const add = newAsset => {
	return axios
	.post('assets/add',{
		barcode_id: newAsset.barcode_id,
		barcode: newAsset.barcode,
		name: newAsset.name,
		quantity: newAsset.quantity,
		price: newAsset.price,
		unit: newAsset.unit,
		note: newAsset.note
	})
	.then(res => {
		console.log("Added")
	})
}

export const update = asset => {
	return axios
	.put('assets/update',{
		barcode_id: asset.barcode_id,
		barcode: asset.barcode,
		name: asset.name,
		quantity: asset.quantity,
		price: asset.price,
		unit: asset.unit,
		note: asset.note
	})
	.then(res => {
		console.log("Updated");
	})
	.catch(err => {
		console.log(err);
	})
}
