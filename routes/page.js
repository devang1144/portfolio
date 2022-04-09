import mongoose from 'mongoose'
import express from 'express'
import Page from '../models/page.js'

const Router = express.Router()

Router.post('/content/save/:slug', async(req, res) => {
    const data = await Page.findOne({ slug: req.body.slug })

    if(data) {
        await Page.findOneAndUpdate({ slug: req.body.slug, data: req.body.data })
    }
    else {
        const Obj = new Page({
            name: req.body.name,
            slug: req.body.slug,
            data: req.body.data
        })
        const savedBlog = await Obj.save()
        res.send(savedBlog)
    }
})
Router.get('/content/:slug', async(req, res) => {
    const data = await Page.findOne({ slug:req.params.slug })
    if(data === null) 
        return
    res.send(data.data)
})
Router.get('/content', (req, res) => {
    res.send("<h2>blogs page <b>12345</b></h2>")
})

export default Router