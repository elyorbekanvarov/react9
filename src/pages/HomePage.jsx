import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import { toast } from "react-toastify";
import PhotoCard from "../components/PhotoCard";
function HomePage() {
  let [photos, setPhotos] = useState([]);
  useEffect(() => {
    async function PhotosGetApi() {
      let res = await fetch("https://jsonplaceholder.typicode.com/photos");
      let data = await res.json();
      setPhotos(data.slice(0, 6));
    }
    PhotosGetApi();
  }, []);

  return (
    <section>
      <div className="container">
        <h1>Photos</h1>
        <div className="photos-wrapper">
          {photos &&
            photos.slice(0, 6).map((photo) => {
              return (
                <PhotoCard
                  key={photo.id}
                  photo={photo}
                  photos={photos}
                  setPhotos={setPhotos}
                ></PhotoCard>
              );
            })}
        </div>
      </div>
    </section>
  );
}

export default HomePage;
