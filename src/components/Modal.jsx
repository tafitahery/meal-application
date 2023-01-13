import React from 'react';
import { useGlobalContext } from '../context';

export default function Modal() {
  const { selectedMeal, closeModal } = useGlobalContext();
  const {
    strMeal: title,
    strMealThumb: image,
    strInstructions: text,
    strSource: source,
  } = selectedMeal;

  return (
    <aside className="modal-overlay">
      <div className="modal-container">
        <img src={image} alt={title} className="img modal-img" />
        <div className="modal-content">
          <h4>{title}</h4>
          <p>Cooking instructions</p>
          <p>{text}</p>
          <a href={source} target="_blank" rel="noreferrer">
            Original source
          </a>
          <button onClick={closeModal} className="btn btn-hipster close-btn">
            close
          </button>
        </div>
      </div>
    </aside>
  );
}
