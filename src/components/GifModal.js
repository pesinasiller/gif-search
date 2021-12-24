import './GifModal.css';

export default function GifModal({gifData, onCloseModal, onShowNext}) {
  console.log(gifData)
    return (
      <div className="GifModal">
        <img src={gifData.images.fixed_width.url} />
        <button onClick={onCloseModal}>close</button>
        <button onClick={onShowNext}>next</button>
      </div>
    );
  }
  