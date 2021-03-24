/* eslint-disable no-self-assign */
import React from 'react';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import Brush from './Tools/Brush';
import Rectangle from './Tools/Rectangle';
import Circle from './Tools/Circle';
import Line from './Tools/Line';
import Eraser from './Tools/Eraser';
import ClearAll from './Tools/ClearAll';
import allActions from '@store/actions';
import { saveImage } from '@firebaseAlias/firebaseDBQueries';
import Icons from '@assets/index';
const Toolbar = () => {
  const dispatch = useDispatch();
  const canvasRef = useSelector((state: RootStateOrAny) => state.currentCanvas);
  const user = useSelector((state: RootStateOrAny) => state.currentAuth);

  const setBrush = () => {
    if (canvasRef) {
      dispatch(allActions.toolsActions.setTool(new Brush(canvasRef.current)));
    }
  };

  const setRect = () => {
    if (canvasRef) {
      dispatch(allActions.toolsActions.setTool(new Rectangle(canvasRef.current)));
    }
  };

  const setCircle = () => {
    if (canvasRef) {
      dispatch(allActions.toolsActions.setTool(new Circle(canvasRef.current)));
    }
  };

  const setLine = () => {
    if (canvasRef) {
      dispatch(allActions.toolsActions.setTool(new Line(canvasRef.current)));
    }
  };

  const setEraser = () => {
    if (canvasRef) {
      dispatch(allActions.toolsActions.setTool(new Eraser(canvasRef.current)));
    }
  };

  const lineWidth = (event: any) => {
    if (canvasRef) {
      dispatch(allActions.toolsActions.setLineWidth(event.target.value));
    }
  };

  const clearAll = () => {
    if (canvasRef) {
      dispatch(allActions.toolsActions.setTool(new ClearAll(canvasRef.current)));
    }
  };

  const changeStrokeColor = (event: any) => {
    if (canvasRef) {
      dispatch(allActions.toolsActions.setStrokeColor(event.target.value));
    }
  };

  const changeFillColor = (event: any) => {
    if (canvasRef) {
      dispatch(allActions.toolsActions.setFillColor(event.target.value));
    }
  };

  const undo = () => {
    if (canvasRef) {
      dispatch(allActions.canvasActions.undo());
    }
  };

  const redo = () => {
    if (canvasRef) {
      dispatch(allActions.canvasActions.redo());
    }
  };

  const handleSaveImage = () => {
    if (!canvasRef) {
      return;
    }
    const { uid } = user.user;
    saveImage(canvasRef.current, uid);
  };

  return (
    <div className="toolbar-container">
      <label>Fill Color</label>
      <input type="color" onChange={(event) => changeFillColor(event)} title={'Fill Color'} />

      <label>Stroke Color</label>
      <input type="color" onChange={(event) => changeStrokeColor(event)} title={'Stroke Color'} />

      <label>Line Width</label>
      <br />
      <input
        className="line-width"
        type="number"
        min={1}
        max={30}
        defaultValue={1}
        title={'Толщина линии'}
        onChange={(event) => lineWidth(event)}
      />

      <div className="button-tools">
        <button onClick={setLine}>
          <img src={Icons.line} />
        </button>
        <button onClick={setBrush}>
          <img src={Icons.brush} />
        </button>
        <button onClick={setRect}>
          <img src={Icons.rectangle} />
        </button>
        <button onClick={setCircle}>
          <img src={Icons.circle} />
        </button>
        <button onClick={undo}>
          {' '}
          <img src={Icons.undo} />
        </button>
        <button onClick={redo}>
          {' '}
          <img src={Icons.redo} />
        </button>
        <button onClick={setEraser}>
          {' '}
          <img src={Icons.eraser} />
        </button>
        <button onClick={clearAll}>
          {' '}
          <img src={Icons.trash} />
        </button>
        <button onClick={handleSaveImage}>
          {' '}
          <img src={Icons.save} />
        </button>
      </div>
    </div>
  );
};

export default Toolbar;
