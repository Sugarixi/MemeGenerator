import React from "react";

export default function Meme() {
  const [memeObj, setMemeObj] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setMemeObj(function (prevMemeText) {
      return {
        ...prevMemeText,
        [name]: value,
      };
    });
  }

  const [allMemes, setAllMemes] = React.useState([]);

  function generate() {
    const randomMeme = allMemes[Math.floor(Math.random() * allMemes.length)];
    const url = randomMeme.url;
    setMemeObj(function (prevMeme) {
      return {
        ...prevMeme,
        randomImage: url,
      };
    });
  }

  React.useEffect(function () {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => setAllMemes(data.data.memes));
  }, []);

  return (
    <div className="memeContainer">
      <div className="form">
        <input
          name="topText"
          type="text"
          value={memeObj.topText}
          onChange={handleChange}
        ></input>
        <input
          name="bottomText"
          type="text"
          value={memeObj.bottomText}
          onChange={handleChange}
        ></input>
        <button onClick={generate}>
          Get a new meme image <i className="fa-solid fa-image"></i>
        </button>
      </div>
      <div className="memeImageContainer">
        <img className="memeImage" src={memeObj.randomImage}></img>
        <h2 className="memeTextTop">{memeObj.topText.toUpperCase()}</h2>
        <h2 className="memeTextBot">{memeObj.bottomText.toUpperCase()}</h2>
      </div>
    </div>
  );
}
