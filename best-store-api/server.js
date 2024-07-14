const jsonServer = require('json-server')
const multer = require('multer')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

server.use(middlewares) 


const storage = multer.diskStorage ({
	destination: function (req, file, cb){
		cb(null, 'public/images')
	},
	filename:function (req, file, cb){
		let date = new Date()
		let imageFilename = date.getTime() + "_" + file.originalname
		req.body.imageFilename = imageFilename 
		cb(null, imageFilename)
	}
})
const bodyParser = multer({ storage: storage}).any()
	
/*server.get('/echo', (req, res)=>{
	res.jsonp(req.query)
})*/ 

server.use(bodyParser)
server.post("/products", (req, res, next) => {
	
let date = new Date()
req.body.createdAt = date.toISOString()

if (req.body.price){
	req.body.price = Number(req.body.price)
}
let hasErrors = false
let errors = {}

if (req.body.name.length< 2){
	hasErrors = true
	errors.name = "the name length should be at least 2 character"
}

if (req.body.brand.length< 2){
	hasErrors = true
	errors.brand = "the brand length should be at least 2 character"
}

if (req.body.categoy.length< 2){
	hasErrors = true
	errors.categoy = "the category length should be at least 2 character"
}

if (req.body.price.length< 0){
	hasErrors = true
	errors.price = "the price is not valid"
}

if (req.body.description.length< 10){
	hasErrors = true
	errors.description = "the description length should be at least 2 character"
}

if (hasErrors){
	
	res.status(400).jsonp(errors)
	return
	
}

next()
})

server.use(router)
server.listen(4000, () => {
	console.log('JSON Server is running')
})