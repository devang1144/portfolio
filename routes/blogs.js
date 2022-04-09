import mongoose from 'mongoose'
import express from 'express'
import Blogs from '../models/blogs.js'
import {isalpha, filter} from '../functions/urlFilter.js'

const Router = express.Router()

Router.get('/', async(req, res) => {
    const data = await Blogs.find({})
    res.send(data) 
})

Router.post('/create/', async(req, res) => {
    const slug = (req.body.name ? filter(req.body.name) : "") + `-${new Date().getTime()}`
    const blog = new Blogs({
        name: req.body.name || "",
        slug: slug,
        data: req.body.data || "",
        author: req.body.author || "Devang",
        date: new Date().toLocaleDateString(),
        banner: {
            link: req.body.link || "",
            fluid: req.body.fluid || false
        },
        card: {
            image: req.body.image || "",
            cardName: req.body.cardName || "",
            desc: req.body.desc || ""
        }
    })

    const savedBlog = await blog.save()
    res.send(savedBlog)
})

Router.get('/:id', async(req, res) => {
    if(!req.params.id) return
    const data = await Blogs.findById(req.params.id)
    if(data)
        res.send(data)
    return
})

Router.post('/save/:id', async(req, res) => {
    if(!req.params.id) return
    const data = await Blogs.findByIdAndUpdate(req.params.id, { data: req.body.data })
})

export default Router



