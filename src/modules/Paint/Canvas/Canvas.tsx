import React, { useEffect } from 'react';
import '../Paint.scss';
import { useHistory } from 'react-router';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import allActions from '@store/actions';
import handleResize from './resizeCanvas';
import Toolbar from '../Toolbar/Toolbar';
import Icons from '@assets/index';

const Canvas = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const canvasRef = useSelector((state: RootStateOrAny) => state.currentCanvas);

  useEffect(() => {
    dispatch(allActions.canvasActions.setRef(canvasRef.current));
  }, []);

  const handleMouseDown = () => {
    if (canvasRef.current?.toDataURL) {
      dispatch(allActions.canvasActions.pushToRedo(canvasRef.current.toDataURL()));
    }
  };

  useEffect(() => {
    handleResize(canvasRef);
  }, []);

  const signOutHandle = () => {
    dispatch(allActions.authActions.signOut());
  };
  const galleryLinkHandler = () => {
    history.push('/gallery');
  };
  return (
    <>
      <canvas
        onMouseDown={handleMouseDown}
        onTouchStart={handleMouseDown}
        ref={canvasRef}
        className="canvas"
      />
      <footer>
        <Toolbar />
        <button onClick={galleryLinkHandler}>Gallery</button>
        <button className=" sign-out" onClick={signOutHandle}>
          <img src={Icons.signOut} />
        </button>
      </footer>
    </>
  );
};

export default Canvas;
