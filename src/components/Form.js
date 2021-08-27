import React, {useState} from 'react'

export default function Text(props) {
    const [text,setText] = useState("")
    const handleUpClick = () => {
        let upperText = text.toUpperCase()
        setText(upperText)
        props.showAlert ("converted to uppercase!", "Success")
    }
    const handleloClick = () => {
        let upperText = text.toLowerCase()
        setText(upperText)
        props.showAlert ("converted to lowercase!", "Success")
    }
    const clearText = () => {
        let upperText = ""
        setText(upperText)
        props.showAlert ("Text cleared!", "Success")
    }
    const onChange = (event) => {
        setText(event.target.value)
    }

    return (
        <>
        <div className="conatainer"  style={{color: props.mode=== 'light'?'black':'white'}} >
            <h1>{props.heading}</h1>
                <div className="mb-3">
                  <textarea className="form-control" id="exampleFormControlTextarea1" onChange={onChange} style={{backgroundColor: props.mode=== 'light'?'#e6e8eb':'#323a42',color: props.mode=== 'light'?'black':'white'}} value={text} rows="8"></textarea>
                </div>
                 <button className="btn btn-primary mx-4" onClick={handleUpClick}>Convert to Uppercase</button>
                 <button className="btn btn-primary  mx-4" onClick={handleloClick}>Convert to Lowercase</button>
                 <button className="btn btn-primary  mx-4" onClick={clearText}> Cleartext</button>
        </div>
        <div className="container my-2" style={{color: props.mode=== 'light'?'black':'white'}} >
            <h1>Your text summary</h1>
            <p> {text.split(" ").length -1  } words and {text.length } characers</p>
            <p> { 0.08 * (text.split(" ").length - 1)}Minutes read</p>
            <h2>Preview</h2>
            <p>{text.length>0 ? text :"Enter something in the box to preview it here "}</p>
        </div>
        </>
    )
}
