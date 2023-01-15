import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";
import "./Modal.css";

function Modal({title, text, onClose, show, image, bgColor, name}) {
  const songs =  ['01.mp3', '02.mp3', '03.mp3'];
  let treck; 
  let audioPlay; 



function switchTreck (numTreck) {
  let audio = document.getElementById("audio");  
  audio.src = './audio/' + title + '/'+ songs[numTreck];
  audio.currentTime = 0;
  audio.volume = '0.05';
  audio.play();
  let song = document.getElementById('song');
  song.innerHTML = name[numTreck];
  if (songs[numTreck] === undefined) {
    song.innerHTML = "<p class='animate'>Сlick on the button next to play music</p>";
  } 
  audioPlay = setInterval(function() {
    let audioTime = Math.round(audio.currentTime);
    let audioLength = Math.round(audio.duration)
    if (audioTime === audioLength && treck < 3) {
        treck++; 
        switchTreck(treck); 
    } else if (audioTime === audioLength && treck >= 3) {
        treck = 0; 
        switchTreck(treck);
    }
}, 10)
}

const btnPlay = function (treck) {
    let audio = document.getElementById("audio");   
    audio.play(); 
};

const btnPause = function() {
    let audio = document.getElementById("audio");   
    audio.pause(); 
    clearInterval(audioPlay) 
};

const btnPrev = function() {
    if (treck > 0) {
        treck--; 
        switchTreck(treck); 
    } else { 
        treck = 3; 
        switchTreck(treck); 
    }
};

const btnNext = function() {
    if (treck < 3) { 
        treck++; 
        switchTreck(treck); 
    } else { 
        treck = 0; 
        switchTreck(treck); 
    }
};

  const closeOnEscapeKeyDown = e => {
    if ((e.charCode || e.keyCode) === 27) {
      onClose();
    }
  };

  useEffect(() => {
    document.body.addEventListener("keydown", closeOnEscapeKeyDown);
     return function cleanup() {
      document.body.removeEventListener("keydown", closeOnEscapeKeyDown);
        };
  });

  return ReactDOM.createPortal(
    <CSSTransition
      in={show}
      unmountOnExit
      timeout={{ enter: 500, exit: 300 }}
    >
    <div className="modal" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()} style={{background: bgColor}}>
        <div><img className="modal-img" src={image} alt={title}/></div> 
        <div className="modal-info">
          <button onClick={onClose} className="button-close"></button>
          <div className="modal-header">
            <h4 className="modal-title">{title}</h4>
          </div>
          <div className="modal-body">{text}</div>
          <div className="modal-result">
            <p id="song" className="modal-track__animate"><p className="animate">Click on the button next to play music</p></p>
            <audio id="audio" controls controlsList="nodownload noplaybackrate"></audio>
		        <div className="modal-player"> 
              <button className="modal-none" onClick={btnPlay}></button>
              <button className="modal-none" onClick={btnPause}></button>
              <button className="modal-prev" onClick={btnPrev}>&#60;</button>
              <button className="modal-next" onClick={btnNext}>&#62;</button>
		        </div>	
	        </div>
        </div>
      </div>
    </div>
    </CSSTransition>,
    document.getElementById("root")
  );
};

export default Modal;



