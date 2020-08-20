import React from 'react';
import './slider.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faFileImage} from '@fortawesome/free-solid-svg-icons'


export default function Slider({ apriModale, images }) {
    /*Attenzione se nell'array è presente una sola immagine, due o solo tre*/
    return (
        <div className='row '>
            <div className="col-6 col-lg-5 ">
                <img alt="immagine" className='img-medium' src={(images[0]) ? images[0].image : 
                "https://via.placeholder.com/240"}></img>
            </div>
            <div className='col-6 col-lg-5'>
                <div className='filter text-white'>
                    <FontAwesomeIcon onClick={apriModale} icon= {faFileImage}></FontAwesomeIcon>
                </div>
                <img alt="immagine" className='img-medium' src={(images[1]) ? images[1].image : 
                "https://via.placeholder.com/240"}></img>
            </div>
            
                <div className=' col-6 col-lg-2 p-0 responsive-col'>

                    <img alt="immagine" className='img-tiny  mb-auto' src={(images[2]) ? images[2].image : 
                "https://via.placeholder.com/240"}></img>
                    <div style={{ backgroundImage: `url('${(images[3]) ? images[3].image : 
                "https://via.placeholder.com/240"}')` }} className=' img-tiny text-center  cover '>
                        <div className='hoverImg d-flex flex-column ' onClick={apriModale}>
                            <span className='my-auto length '>+{((images.length - 3) > 0) && images.length - 3}</span>
                        </div>
                    </div>
                </div>
        
        </div>
    )
}