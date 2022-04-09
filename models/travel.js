import mongoose from 'mongoose'

const tags = mongoose.Schema({
    name: String
})

const travel = mongoose.Schema({
    name: String,
    type: String,
    slug: String,
    data: String,
    author: String,
    date: String,
    tags: [tags],
    banner: {
        link: String,
        fluid: Boolean
    },
    card: {
        image: String,
        name: String,
        desc: String
    }
})

const model = mongoose.model('travel', travel)
export default model