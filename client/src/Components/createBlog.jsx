import React, {useState} from 'react'
import axios from '../axios-pf'
import { Navigate, useNavigate  } from 'react-router-dom'
const CreateBlog = props => {
    const [data, setData] = useState({
        name: "",
        slug: "",
        author: "Devang",
        link: "",
        image: "",
        cardName: "",
        desc: ""
    }) 
    const handleChange = e => {
        e.persist()
        setData(data => ({
            ...data,
            [e.target.name]: e.target.value
        }))  
    }

    const handleSubmit = async e => {
        e.preventDefault()
        const payload = data
        const {response} = await axios.post('/blogs/create', payload)
        navigate('/')
    }
    const navigate = useNavigate()
    return (
        <div className='container'>
            <form>
                <div className="box">
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" name="name" onChange={handleChange} value={data.name} />
                </div>
                <div className="box">
                    <label htmlFor="name">Author</label>
                    <input type="text" id="author" name="author" onChange={handleChange} value={data.author} />
                </div>
                <div className="box">
                    <label htmlFor="name">Blog banner link</label>
                    <input type="text" id="link" name="link" onChange={handleChange} value={data.link} />
                </div>
                <div className="box">
                    <label htmlFor="name">Card Image</label>
                    <input type="text" id="image" name="image" onChange={handleChange} value={data.image} />
                </div>
                <div className="box">
                    <label htmlFor="name">Card Name</label>
                    <input type="text" id="cardName" name="cardName" onChange={handleChange} value={data.cardName} />
                </div>
                <div className="box">
                    <label htmlFor="name">Description</label>
                    <textarea type="text" id="desc" name="desc" onChange={handleChange} value={data.desc} />
                </div>
                <button onClick={e => handleSubmit(e)}>Submit</button>
            </form>
        </div>
    )
}

export default CreateBlog