import React from "react";
import { toast } from "react-toastify";

function PhotoCard({ photo, photos, setPhotos }) {
  let { id, title } = photo;

  let deletePhotos = (id) => {
    let newPhotos = photos.filter((item) => item.id !== id);
    setPhotos(newPhotos);
    toast(`${id}-id ga ega photo o'chirildi`)
  };

  return (
    <div className="photo-card">
      <h2>{title}</h2>
      <button onClick={() => deletePhotos(id)} className="btn">
        DELETE
      </button>
    </div>
  );
}

export default PhotoCard;
