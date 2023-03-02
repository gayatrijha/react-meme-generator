import React, { useEffect, useState } from "react";
// import memesData from "../memeData";

export default function Form() {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  useEffect(()=>{
    fetch("https://api.imgflip.com/get_memes")
      .then(res=> res.json())
      .then(data => setAllMemes(data.data.memes))
  },[])
  const [allMemes, setAllMemes] = React.useState([])
  console.log(meme)
  function onChange(event){
    const {value, name}= event.target;

    setMeme((prevMeme) => ({ ...prevMeme, 
       [name]: value 
    }));
  }
  function getMemeImage() {
    // let image= memeData.map(datas=>{
    //   console.log(datas);
    // })

    const randomNumber = Math.floor(Math.random() * allMemes.length);
    const url = allMemes[randomNumber].url;
    console.log(url);
    setMeme((prevMeme) => ({ ...prevMeme, 
      randomImage:url
   }));
  }

  function handlerSubmit(event){
      event.preventDefault();
  }
  return (
    <>
      <form onSubmit={handlerSubmit}>
        <div className="container my-4">
          <div style={{ display: "flex" }}>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                name="topText"
                placeholder="Top Text"
                onChange={onChange}
                value={meme.topText}
              />
            </div>
            <div className="form-group mx-4">
              <input
                type="text"
                className="form-control"
                name="bottomText"
                placeholder="Bottom Text"
                onChange={onChange}
                value={meme.bottomText}
              />
            </div>
            <button onClick={getMemeImage} className="btn btn-primary">
              Get a new meme image
            </button>
          </div>

          <div className="meme my-4">
              <img
                src={meme.randomImage}
                alt="loading"
                className="meme--image"
              />
              <h2 className="meme--text top">{meme.topText}</h2>
              <h2 className="meme--text bottom">{meme.bottomText}</h2>
          </div>
        </div>
      </form>
    </>
  );
}
