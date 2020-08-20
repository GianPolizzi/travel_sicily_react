import React, { useState } from 'react';
import MyContext from '../../../MyContext';
import Slider from '../Slider/Slider';
import Modale from '../../Modale/Modale';
import { Link } from 'react-router-dom';
import * as utils from '../../../utils';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import ScrollingImg from '../ScrollingImg/ScrollingImg'

export default function Pernottamento({ numeroGiorni, booleano }) {
    const contesto = React.useContext(MyContext);
    const [modPernottamento, setModPernottamento] = useState(0);

    let numeroNotti = numeroGiorni - 1;
    let titoloAccomodation = contesto[0].name + ' ' + (contesto[0].stars.includes('Lux') ? contesto[0].stars.split('_')[0] + "*L" : contesto[0].stars + '*');
    return (
        <>
            {booleano && contesto.map((acc, i) => {
                var numeroStelle = Number((acc.stars).slice(0, 1));
                return (
                    <div className='row' key={"accomodation" - i}>
                        <div className='col-12'>
                            <h2 className='title mycolor-grey'>Pernottamento {numeroNotti} {'nott' + ((numeroNotti > 1) ? 'i' : 'e')}</h2>
                        </div>
                        <div className='col-12 col-lg-7'>
                            <Slider apriModale={() => utils.funzioneApriModale(setModPernottamento, modPernottamento)} images={acc.images}></Slider>
                        </div>
                        <div className='col-12 col-lg-5'>
                            <p className="title mb-1">{titoloAccomodation}</p>
                            <button className='btn btn-outline-primary mb-1' disabled>{acc.places[0].name}</button>
                            <p className="text-small mycolor-grey"><span className='taglia-testo' >{acc.description}</span>
                                <Link className="d-inline" to="" onClick={() => utils.funzioneApriModale(setModPernottamento, modPernottamento)}>Scopri di più</Link>
                            </p>
                            <Modale title={acc.name} click={modPernottamento}>
                                <MyContext.Provider value={acc.images}>
                                    <ScrollingImg></ScrollingImg>
                                </MyContext.Provider>
                                <div className="container">
                                    <div className="row">
                                        <div className="col-10 offset-1 mb-1">

                                            <h1 className='title'>{acc.typology} {Array(numeroStelle).fill(null).map((icon, i) => {
                                                return <FontAwesomeIcon key={'stella-' + i} icon={faStar}></FontAwesomeIcon>
                                            })}{(numeroStelle === 5 && acc.stars.length > 1) && 'L'} </h1>
                                            <p className="text-tiny mb-1">
                                                {acc.description}<br/>
                                                {acc.descriptionRestaurant}
                                                {acc.descriptionRooms}
                                                {acc.descriptionServices}
                                            </p>
                                            <p className="text-small m-0">Indirizzo: {acc.contact.address}<br/>
                                            Sito web: <a target="_blank" rel="noopener noreferrer" href={"https://"+acc.contact.website}> {acc.contact.website}</a>
                                            </p>
                                        </div>
                                    </div>
                                    <div class="modale__description my-2">
                                    </div>
                                </div>
                            </Modale>
                        </div>
                    </div>
                )
            })}
            {!booleano && <p className='title nomobile'><span className="mycolor-grey">Ricordati che pernotti al </span>
                {titoloAccomodation}</p>}
        </>
    )
}



/*

:
contact: {id: 47, phone: "095-1234567", email: "hotel@info.com", address: "Via Bagnoli Croci 92, 98039 Taormina", website: "www.hotel.it", …}
description: "Il Resort offre gratuitamente un centro benessere e una piscina all'aperto, e vanta bellissime viste sul Mar Ionio e una grande terrazza panoramica."
descriptionRestaurant: "Il ristorante del Taormina Park Hotel è specializzato in cucina italiana e siciliana e propone vini locali, che potrete gustare ammirando la vista sul mare dalle grandi finestre nella sala ristorazione in inverno, e sulla terrazza affacciata sul mare in estate"
descriptionRooms: "Tutte le camere sono climatizzate e presentano arredi in legno di noce, e la maggior parte regala un balcone e viste sul mare, sull'Etna o sul parco circostante."
descriptionServices: "Piscina, Parcheggio, Connessione WiFi gratuita, Disponibilità di camere familiari, Ristorante, Bar, Spiaggia privata"
id: 9
images: Array(7)
0: {id: 126, image: "http://51.77.82.133:86/api/images/126/images/GY9hI7m8DvYNLgVp.jpeg", image_name: null}
1: {id: 127, image: "http://51.77.82.133:86/api/images/127/images/qamIgu1zF1ZOa63w.jpeg", image_name: null}
2: {id: 128, image: "http://51.77.82.133:86/api/images/128/images/qZHhv2Wr9bIsnt6j.jpeg", image_name: null}
3: {id: 129, image: "http://51.77.82.133:86/api/images/129/images/jJxn7OczkWBoY0UB.jpeg", image_name: null}
4: {id: 130, image: "http://51.77.82.133:86/api/images/130/images/L6aNIMNmd7BJVI9P.jpeg", image_name: null}
5: {id: 131, image: "http://51.77.82.133:86/api/images/131/images/8LmMsY5OafYGXaBZ.jpeg", image_name: null}
6: {id: 132, image: "http://51.77.82.133:86/api/images/132/images/CJRCQcM3er38RvvA.jpeg", image_name: null}
length: 7
__proto__: Array(0)
language:
code: "it"
created_at: "2020-03-02 19:44:53"
id: 2
name: "italiano"
updated_at: "2020-03-02 19:44:53"
__proto__: Object
name: "Park Hotel Taormina"
places: Array(1)
0: {id: 22, name: "Taormina", position: {…}}
length: 1
__proto__: Array(0)
position: "5 minuti a piedi dal centro di Taormina, 400 metri dal Teatro Greco di Taormina e 7 km dalla stazione ferroviaria di Taormina-Giardini."
stars: "5_Luxury"
tags: Array(3)
0: {id: 39, name: "Famiglia"}
1: {id: 41, name: "Piscina"}
2: {id: 42, name: "Spiaggiaprivata"}
length: 3
__proto__: Array(0)
typology: "Resort"


*/