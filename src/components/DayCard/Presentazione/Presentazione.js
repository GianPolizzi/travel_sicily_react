import React from 'react';
import MyContext from '../../../MyContext';
import {getDayMonth} from '../../../utils';
import './presentazione.css';

export default function Presentazione() {
    const contesto = React.useContext(MyContext);
    return (
        <>
            <div className='row'>
                <div className='col-12'>
                    <h1 className='mycolor-orange title p-1'> {contesto.day.name}<span className='mycolor-grey2 sub-title data-title p-1'>{"  "+getDayMonth(contesto.data)}</span></h1>
                    <img alt="immagine" className='img-presentazione' src={`${contesto.day.images[0].image}`} />
                    <p className="text-small mycolor-grey my-3">{contesto.day.description}</p>
                    <p className="text-small mycolor-grey my-3">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore, odit! Quasi a nobis sed eaque veritatis expedita earum ipsum saepe tempora mollitia, harum obcaecati commodi sit ullam. Magnam, quod facilis.</p>
                </div>
            </div>
        </>
    )
}