import mongoose from 'mongoose'
import express from 'express'
import Blogs from '../models/blogs.js'
import {isalpha, filter} from '../functions/urlFilter.js'

const Router = express.Router()
Router.post('/blogs', async(req, res) => {
    const regex = new RegExp(req.body.q, 'i')
    const data = await Blogs.find({ $and: [{ $or : [{name:regex}, {'card.cardName': regex}] }] })
    if(!data) return
    res.send(data)
})

export default Router