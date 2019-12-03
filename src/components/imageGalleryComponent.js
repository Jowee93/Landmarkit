import React, { useState, useCallback, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import { photos } from "./photos";
import axios from "axios";
import $ from "jquery";
import "../components/css/imageGallery.css";
//loader
import Loader from "../components/LoadingPage";




export default function ImageGalleryComponent() {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);
  const [images, setImages] = useState([]);
  //loader
  const [isLoading, setIsLoading] = useState(true);

  const history = useHistory();

  const openLightbox = useCallback((event, { photo, index }) => {
    // setCurrentImage(index);
    setCurrentImage(photo.id);
    console.log(`Clicked photo id: ${photo.id}`);
    // console.log(photo);
    // console.log(photo.src);
    // console.log(index);
    history.push({
      pathname: `/photo/${photo.id}`,
      state: {
        currentImage: photo.src,
        description: photo
      }
    });

    // setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  useEffect(() => {
    // $("img").addClass("GalleryImage");
    let JWT = localStorage.getItem("userToken");
    axios({
      method: "GET",
      url: "https://lamppost.herokuapp.com/api/v1/images/me",
      headers: { Authorization: `Bearer ${JWT}` }
    })
      .then(response => {
        console.log("Get User Images axios called:");
        console.log(response.data[0].src);
        console.log(response.data);
        console.log("hello");
        setImages(response.data);
        //loader
        setIsLoading(false);
      })
      .catch(error => {
        console.log(error.response);
        setIsLoading(false);
      });
    console.log(images);
  }, []);

  ///loader
  if (isLoading) {
    return <Loader />;
  }
  return (
    <div>
      {/* <img src={images[1].src}></img> */}
      <Gallery photos={images} onClick={openLightbox} />
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
