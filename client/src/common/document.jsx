import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Editor from './Editor'
import EmbedGist from '../common/EmbedGist'
import axios, {base} from '../axios-pf'
import backArrow from '../assets/leftArrow.svg'
import reactStringReplace  from 'react-string-replace'
import Loader from '../common/Loader'
import BurgerIcon from '../assets/burgerMenu.svg'

export default class Document extends Component {

    state = {
        loading: true,
        blog: {},
        headings : []
    }

    componentDidMount = async() => {
        const props = this.props
        const {data: blog} = await axios.get(`/${props.params.type}s/${props.params.slug}`)
        this.setState({ blog, loading: false })
        const all_headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6')
        this.setState({ headings: Array.from(all_headings).slice(2) })
    }

    formatEditorContent = data => {

        // Match github gist strings
        let replacedText = reactStringReplace(data, /(#https?:\/\/\S+)/g, (match, i) => (
            <div id="gist-wrapper">
                {/* {console.log(match.split('@')[1].split('<')[0])} */}
                <EmbedGist gist={match.split('/')[match.split('/').indexOf('gist.github.com') + 2].split('@')[0].slice(0, -3)} file={match.split('@')[1].split('<')[0]} />
                {/* <Tooltip title="copy code">
                    <IconButton className="copy-gist-button">
                        <FileCopyIcon/>
                    </IconButton>
                </Tooltip> */}
            </div>

        ))
        for(let i = 0;i<replacedText.length;i++) {
            if(typeof replacedText[i] === 'string') {
                // if (replacedText[i].includes('target="_self"'))
                //     replacedText[i] = <p></p>
                // else if (replacedText[i].includes('https://github.com/'))
                //     replacedText[i] = <a href={replacedText[i]} dangerouslySetInnerHTML={{ __html : replacedText[i] }}></a>
                // else
                    replacedText[i] = <p dangerouslySetInnerHTML={{ __html : replacedText[i] }} />
            }
        }
        const doc = replacedText[0].props.dangerouslySetInnerHTML.__html
        
        return <div>{replacedText}</div>
    }
    assignId = data => {
        const doc = document.querySelectorAll('*')
        for(let i = 2; i < doc.length; i++) {
            // console.log(doc[i].tagName)
        }

        return doc
    }
    render() {
        const props = this.props === undefined ? null : this.props
        const id = props ? props.params.slug : ""
        const name = this.state.blog === {} ? "" : this.state.blog.name
        const data = this.state.blog === {} ? "" : this.state.blog.data
        const type = this.state.blog === {} ? "" : this.state.blog.type
        const loading = this.state.loading
        return (
            <div className='_document'>
                <img src="" alt="" />
                <div className="editor">
                    <Editor type={type + 's'} id={id} name={name} data={data} />
                </div>
                <div className='_document_side'>
                    <img className='menu_icon' src={BurgerIcon} alt="" />
                </div>
                {   loading ? 
                    <Loader/>
                    :
                    <div className="wrapper">
                        <Link to="/">
                            <img className="pb-2" src={backArrow} alt="" />
                        </Link>
                        <p 
                            className="_document_content"
                            dangerouslySetInnerHTML={{__html: this.state.blog.data === undefined ? <p></p> : this.state.blog.data}}>
                        </p>
                        <div className="share_this_page">
                            <span>Share:&nbsp;&nbsp;&nbsp;</span>
                            <a href={"https://www.facebook.com/sharer/sharer.php?u=thedevang.com/blog/" + props.id} >
                                <i className='fa fa-facebook' />
                            </a>
                            <a href={"https://twitter.com/share?url=thedevang.com/blog/" + props.id}>
                                <i className='fa fa-twitter' />
                            </a>
                            <a href={"https://www.linkedin.com/sharing/share-offsite/?url=thedevang.com/blog/" + props.id}>
                                <i className='fa fa-linkedin' />
                            </a>
                        </div>
                        <Link to="/">
                            <img className="mt-2 mb-3" src={backArrow} alt="" />
                        </Link>
                        <p className="_document_content">
                            {this.formatEditorContent(data)}
                        </p>
                    </div>
                }
            </div>
        )
    }
}