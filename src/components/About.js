import React from 'react'

export default function About(props) {
    return (
        <div className="container" style={{color: props.mode=== 'light'?'black':'white'}}  >
            <h3 className="my-3">About us</h3>
           <div className="accordion" id="accordionExample">
  <div className="accordion-item" style={{color: props.mode=== 'light'?'black':'white', backgroundColor: props.mode=== 'light'?'black':'white'}} >
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button" style={{color: props.mode=== 'light'?'black':'white', backgroundColor: props.mode=== 'light'?'white':'#4b5454'}}  type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
      Developer
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={{color: props.mode=== 'light'?'black':'white', backgroundColor: props.mode=== 'light'?'white':'#4b5454'}} >
        <strong>Hii i am Sagnik </strong> <br/>This is my first react app. I hope you will like this web app. TextUtils is a utility which can manipulate your text as you like.</div>
    </div>
  </div>
  <div className="accordion-item" style={{color: props.mode=== 'light'?'black':'white', backgroundColor: props.mode=== 'light'?'black':'white'}} >
    <h2 className="accordion-header" id="headingTwo">
      <button style={{color: props.mode=== 'light'?'black':'white', backgroundColor: props.mode=== 'light'?'white':'#4b5454'}} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Source code 
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={{color: props.mode=== 'light'?'black':'white', backgroundColor: props.mode=== 'light'?'white':'#4b5454'}} >
      <strong>github link - </strong> <a href="https://github.com/sagnik-seth/TextUtils"> <button >https://github.com/sagnik-seth/TextUtils</button></a> </div>
    </div>
  </div>
  <div className="accordion-item" style={{color: props.mode=== 'light'?'black':'white', backgroundColor: props.mode=== 'light'?'black':'white'}} >
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" style={{color: props.mode=== 'light'?'black':'white', backgroundColor: props.mode=== 'light'?'white':'#4b5454'}}  type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        My social media handles
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={{color: props.mode=== 'light'?'black':'white', backgroundColor: props.mode=== 'light'?'white':'#4b5454'}} >
        <strong>Stackoverflow - </strong><a href="https://stackoverflow.com/users/16157901/sagnik?tab=profile"><button> https://stackoverflow.com/users/16157901/sagnik?tab=profile</button></a> <br/>
       <br/> <strong>Instagram - </strong><a href="https://www.instagram.com/sethsagnik/"><button> https://www.instagram.com/sethsagnik/</button></a> </div>
   
    </div>
  </div>
</div>
</div>
    )
}

