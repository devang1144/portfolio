import React, { useState, useEffect, useRef } from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css';
import axios from '../axios-pf'

const Editor = props => {
  const [value, setValue] = useState(null)
  const [theme, setTheme] = useState('snow')
  const Quill = useRef()

  useEffect(() => {
      setValue(props.data || "")
  }, [props])

  const handleChange = text => {
    setValue(text)
  }
  const handleThemeChange = theme => {
    setTheme(theme)
  }
  const imageHanlder = async() => {
    const e = Quill.current.getEditor()

    const input = document.createElement('input')
    input.setAttribute('type', 'file')
    input.setAttribute('accept', 'image/*')  
    input.click()
  
    input.onchange = async () => {  
      var file = input.files[0]
      var formData = new FormData() 
  
      formData.append('image', file) 

      e.insertEmbed(e.getSelection(), 'image', file.name)
  
      const fileName = file.name;
      console.log(fileName)
  }
}
  const saveEditor = async e => {
    const id = props.id
    const payload = {
      name: props.name,
      id: props.id,
      data: value
    }
    const {data} = await axios.post(`/${props.type}/save/${id}`, payload)
  }
  Editor.modules  = {
    toolbar: {
      container: [
        [{ font: [] }],
        [{ header: [1, 2, 3, 4, 5, 6, false] }],
        ["bold", "italic", "underline", "strike"],
        [{ color: [] }, { background: [] }],
        [{ script:  "sub" }, { script:  "super" }],
        ["blockquote", "code-block"],
        [{ list:  "ordered" }, { list:  "bullet" }],
        [{ indent:  "-1" }, { indent:  "+1" }, { align: [] }],
        ["link", "image", "video"],
        ["clean"],
    ],
    
  }
};
  Editor.formats = [
    'header', 'font', 'size',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent', 'align',
    'link', 'image', 'video',
    'color', 'background'
  ]
  return (
    <div>
      <ReactQuill
         ref={Quill}
         theme={theme}
         onChange={handleChange}
         value={value}
         modules={Editor.modules}
         formats={Editor.formats}
         bounds={'._document'}
         placeholder="Content..."
      />
      <button className="btn btn-primary" onClick={e => saveEditor(e)}>Save</button>

      <p dangerouslySetInnerHTML={{ __html : value }}></p>
    </div>
  )
}

export default Editor