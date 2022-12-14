require('dotenv').config()
const express = require('express')
const cors = require('cors')
const app = express()
const db = require('./config.firebase')

const defaultStartMessage = `Renner Challenge backend is running on port: ${process.env.HTTP_PORT}`

app.use(express.json())
app.use(cors())

app.get("/", (req, res) => {
    res.send(defaultStartMessage)
});

const products = express.Router()
app.use('/products', products)

const productsRef = db.collection('products')

products.get("/", async (req, res) => {
    try {
        const snapshot = await productsRef.get()
        const productsList = snapshot.docs.map(doc => ({ id:doc.id, ...doc.data() }))
        
        if (productsList) {
            res.send(productsList)
        } else {
            res.sendStatus(400)
        }

    } catch (error) {
        res.sendStatus(502)
        throw error
    }
});

products.get("/:id", async (req, res) => {
    try {
        const { id } = req.params
        if (!id) return res.sendStatus(404)

        const snapshot = await productsRef.doc(id).get()
        const product = { id, ...snapshot.data() }
        
        if (product) {
            res.status(200).send(product)
        } else {
            res.sendStatus(400)
        }

    } catch (error) {
        throw error
    }
});

app.listen(process.env.HTTP_PORT, () => console.log(defaultStartMessage))