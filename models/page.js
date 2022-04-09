import mongoose from 'mongoose'

const tags = mongoose.Schema({
    name: String
})
const docs = mongoose.Schema({
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
        slug: String
    }
})

const model = mongoose.model('docs', docs)
export default model