import React, {useEffect, useState, useRef} from 'react'
import { Link } from 'react-router-dom'
import BlogCard from '../common/blogCard'
import Image from '../assets/pagoda.webp'
import axios from '../axios-pf'

const Search = props => {
    return (
        <div className="search_box">
            <div className="search_blogs">
                <input 
                type="text"
                id="search_blogs" 
                placeholder="press '/' to search content"
                onChange={props.handleChange}
                />
            </div>
            {props.q.length !== 0 && <div className="search_results">
                {   
                    props.results.map((m, k) => 
                        <div className="found_result">
                            <Link to={m.type + '/' + m._id}>
                                <div className="row m-0 p-0">
                                    <div className="col-md-9">
                                        <h3>{m.card.cardName}</h3>
                                        <p>{m.card.desc}</p>
                                    </div>
                                    <div className="col-md-3">
                                        <img src={m.card.image} className='search_res_image' alt="" />
                                    </div>
                                </div>
                            </Link>
                        </div>
                )}
            </div>
            }   
        </div>
    )
}
const BlogContainer = props => {
    const tags = [
        {tag: "reactjs"},
        {tag: "ganache"},
    ]
    const [blogs, setBlogs] = useState(null)
    const [searchRes, setSearchRes] = useState([])
    const [q, setQ] = useState("")
    const onSearch = async e => {
        e.preventDefault()
        const {data} = await axios.post('/search/blogs', { q: q })
        setSearchRes(data)
    }
    const handleChange = async e => {
        const value = e.target.value
        setQ(value)
        onSearch(e)
    }
    useEffect(() => {
        const listener = event => {
            if (event.code === "Slash" || event.code === "Enter") {
              event.preventDefault()
              document.getElementById('search_blogs').focus()
            }
        }
        axios.get('/blogs/').then(res => setBlogs(res.data))
        document.addEventListener("keydown", listener)
        return () => {
            document.removeEventListener("keydown", listener)
        }
        
    }, [])
    return (
        <div className="blog_container_main_wrapper">
            <Search handleChange={handleChange} q={q} results={searchRes} />
            <div className="row m-0 p-0">
            {blogs === null ? 
            <div></div>
            :
            blogs.map((m, k) => 
                <div key={k} className="blog_card_wrapper col-md-6">
                    <BlogCard 
                        image={m.card.image} 
                        date={m.date} 
                        author={m.author} 
                        type={m.type}
                        id={m._id} 
                        name={m.card.cardName} 
                        tags={tags} 
                        content={m.card.desc}
                    />
                </div>
            )}
            </div>
        </div>
    )
}

export default BlogContainer