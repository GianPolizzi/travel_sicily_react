import React from 'react';

export default function Tariffa({ dati }) {
    return (
        <div className="row">
            <div className="col-10 offset-1">
                <div className="container-content">
                    <div className="accordion__body">
                        <div className="accordion__price black">
                            <div className="single__price">
                                <p className="mb-0">Prezzo a persona</p>
                                <p className="mycolor-orange title">{((dati.partecipants[0].price)).toFixed(2) + ' €'}</p>
                            </div>
                            <hr />
                            {
                                dati.partecipants.map((ele, i) => {
                                    return <div key={"partecipante-"+i} className='d-flex my-2'><span>{'Persona ' + (i + 1)}</span><span className="ml-auto mycolor-grey">{(ele.price).toFixed(2) + '€'}</span></div>
                                })
                            }
                            <hr />
                            <div className="total__price text-right">
                                <p className="mb-0">TOTALE</p>
                                <p className="mycolor-orange title">{((dati.priceTotal) / 100).toFixed(2) + '€'}</p>
                            </div>
                            <div className="price__included mycolor-grey text-medium">
                                <p className="mycolor-orange title">COSA COMPRENDE IL PREZZO</p>
                                <p>{dati.included}</p>
                                <p className="mb-0">Dolor sit orem ipsum dolor amet conseurem ipsum dolor adipisicing elit:</p>
                                <p className="mb-0">Dolor sit orem ipsum dolor amet conseurem ipsum olor sit orem ipsum dolor amet conseurem ipsum olor sit orem</p>
                                <p className="mb-0">Dolor sit orem ipsum dolor amet conseurem ipsum olor sit orem ipsum dolor amet conseurem ipsum olor sit orem</p>
                                <p>Dolor sit orem ipsum dolor amet conseurem ipsum olor sit orem ipsum dolor amet conseurem ipsum olor sit orem</p>
                            </div>
                            <div className="price__included mycolor-grey text-medium">
                                <p className="mycolor-orange title">COSA NON COMPRENDE IL PREZZO</p>
                                <p>{dati.notIncluded}</p>
                                <p className="mb-0">Dolor sit orem ipsum dolor amet conseurem ipsum dolor adipisicing elit:</p>
                                <p className="mb-0">Dolor sit orem ipsum dolor amet conseurem ipsum olor sit orem ipsum dolor amet conseurem ipsum olor sit orem</p>
                                <p className="mb-0">Dolor sit orem ipsum dolor amet conseurem ipsum olor sit orem ipsum dolor amet conseurem ipsum olor sit orem</p>
                                <p>Dolor sit orem ipsum dolor amet conseurem ipsum olor sit orem ipsum dolor amet conseurem ipsum olor sit orem</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}