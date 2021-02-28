import React, {useState} from 'react';
import './StoreCard.css'

function App () {
const [name,setName]=useState("your name")
const [job,setJob]=useState("your job")
const [about,setAbout]=useState("your about")
    return(
        <div className="card container">
            <div className="upper-container">
                <div className="image-container">
                <img src="https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg" width="100px" height="100px" alt="" className="rounded-circle"/>
                </div>
            </div>
            <div className="lower-container">
                <h1>{name}</h1>
                <h4>{job}</h4>
                <p>{about}</p>
                <button>visit profile</button>
            </div>
        </div>
    )
}

export default App;