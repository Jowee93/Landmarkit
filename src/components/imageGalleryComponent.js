import React, { useState, useCallback, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import { photos } from "./photos";
import axios from "axios";
import $ from "jquery";
import "../components/css/imageGallery.css";

export default function ImageGalleryComponent() {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);
  const [images, setImages] = useState([]);
  const history = useHistory();

  useEffect(() => {
    // axios({
    //   method: "GET",
    //   url: "http://192.168.1.16:5001/api/v1/users/test"
    // })
    //   .then(response => {
    //     console.log(response.data);
    //     setImages(response.data);
    //   })
    //   .catch(error => {
    //     console.log(error.response);
    //   });
  }, []);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setCurrentImage(photo.id);
    console.log(photo.id);
    console.log(photo);
    console.log(photo.src);
    console.log(index);
    // history.push({
    //   pathname: "/photo",
    //   state: {
    //     currentImage: photo.src
    //   }
    // });

    // setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  return (
    <div>
      <Gallery photos={photos} onClick={openLightbox} />
      {/* <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={photos.map((x, index) => ({
                ...x,
                srcset: x.srcSet,
                caption: x.title
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway> */}
    </div>
  );
}
