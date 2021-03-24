import { getPictures } from '@firebaseAlias/firebaseDBQueries';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { RootStateOrAny, useSelector } from 'react-redux';

function Gallery() {
  const user = useSelector((state: RootStateOrAny) => state.currentAuth);
  const history = useHistory();
  const [pictures, setPictures] = useState([]);
  const { uid } = user.user;
  useEffect(() => {
    const getAsyncPics = async () => {
      await getPictures(setPictures, uid);
    };

    getAsyncPics();
  }, []);

  const goBackHandler = () => {
    history.push('/');
  };

  return (
    <>
      <h1>Gallery</h1>
      {pictures.length > 0 ? (
        <div className="picture-list-wrapper">
          <div className="picture-list" id="gallery">
            {pictures.map((picture, i) => {
              return <img src={picture} alt="" key={i} />;
            })}
          </div>
        </div>
      ) : (
        <div className="empty-list">
          <h2>Gallery is empty</h2>
        </div>
      )}

      <button onClick={goBackHandler} className="gallery-back-btn">
        Paint
      </button>
    </>
  );
}
export default Gallery;
