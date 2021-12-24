import { useState } from "react";
import GifModal from "./GifModal";

export default function GifGrid({gifsData}) {
  const [gifModal, setGifModal] = useState(null);
  console.log(gifsData)

  const gifs =  gifsData.map((gif, index) => (
    <div key={gif.id} onClick={e => setGifModal(index)}>
      <img src={gif.images.preview_gif.url} />
    </div>
  ));

  const onShowNextHandler = () => {
    setGifModal((gifModal + 1) % (gifsData.length));
  }

  const onShowPreviousHandler = () => {
    setGifModal(Math.abs((gifModal + 1) % (gifsData.length)));
  }

  return (
    <div className="border-solid">
      {gifsData.length === 0 && <div>no results</div>}
      {gifs}
      {(gifModal !== null) && 
        <GifModal 
          gifData={gifsData[gifModal]}
          onCloseModal={e => setGifModal(null)}
          onShowNext={onShowNextHandler}
        />
      }
    </div>
  );
}

