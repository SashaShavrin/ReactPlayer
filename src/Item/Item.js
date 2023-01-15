import React, { useState } from "react";
import Modal from '../Modal/Modal';

export default function Item({title, text, junre, img, bgColor, name}) {
    const [note, setNotes] = useState(false);

    return <>
        <button className={title} onClick={()=> setNotes(!note)}>{title}</button>
        <Modal 
		   title={title} 
		   onClose={() => setNotes(false)} 
		   show={note} 
		   text={text}
           image={img}
           bgColor={bgColor}
           name={name}>
        </Modal>
    </>
};
