import React, { useState } from 'react';
import MyContext from '../../../MyContext';
import Modale from '../../Modale/Modale';
import { Link } from 'react-router-dom';
import * as utils from '../../../utils';


export default function Attivita() {
    const [modAttivita, setModAttivita] = useState(0);
    const contesto = React.useContext(MyContext);
    return (
        <>
            {contesto.map((act, i) => {
                return (
                    <div key={"activity" - i} className='row'>
                        <div className="col-5 col-md-2">
                            <img alt="immagine" className='myicon' src={act.images[0].image}></img>
                        </div>
                        <div className="col-7 noMdLg">
                                <p className='title'>{act.name} </p>
                            </div>
                        <div className="col-12 col-md-10">
                            <p className='title nomobile'>{act.name} </p>
                            <p><span className='taglia-testo color-text-grey text-small mt-2'> {act.description}</span>
                                <Link to="" onClick={() => utils.funzioneApriModale(setModAttivita, modAttivita)}>Scopri di più</Link>
                            </p>
                            <Modale title={act.name} click={modAttivita}>
                                <div className="row w-100 m-0">
                                    {act.images.map((ele, i) => {
                                        return (<div key={'act-'+i} className="col-6 ">
                                            <img className="img-fluid" key={i} alt='img' src={ele.image}></img>
                                        </div>
                                        )
                                    })}
                                </div>
                                <div className="row m-0 mt-2">
                                    <div className="col-12">
                                        <p className='color-text-grey text-small '>{act.description}</p>
                                        <p className='color-text-grey text-small '>
                                            Tel: <a href={`tel: ${act.contact.phone}`} >{act.contact.phone}</a></p>
                                        <p className='color-text-grey text-small '>
                                            Email: <a href={`mailto: ${act.contact.email}`} target="_blank" rel="noopener noreferrer">{act.contact.email}</a></p>
                                    </div>
                                </div>
                            </Modale>
                        </div>
                    </div>
                )
            })}
        </>
    )
}