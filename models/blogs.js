import mongoose from 'mongoose'

const tags = mongoose.Schema({
    name: String
})
const blogs = mongoose.Schema({
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
        cardName: String,
        desc: String
    }
})

const model = mongoose.model('blogs', blogs)
export default model