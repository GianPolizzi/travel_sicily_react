import React from "react";
import MyContext from "../../MyContext";
import "./referente.css";

export default function Referente() {
    const contesto = React.useContext(MyContext);
    const iconaAzienda = "./logo.png";
    return (
        <div className="reference-card shadow py-3">
            <div className="row align-items-center">
                <div className="col-12 col-xl-5">
                    <div className="row">
                        <div className="col-5 col-xl-4">
                            <img
                                alt="immagine"
                                className="operator-img"
                                src={contesto.operator.image}
                            ></img>
                        </div>
                        <div className="col-7 col-xl-7">
                            <div className="row h-100">
                                <div className="col-12">
                                    <span className="text-small">
                                        Il tuo referente è{" "}
                                        <span className="mycolor-orange">{contesto.operator.name}</span></span>
                                </div>
                                <div className="col-12 mt-auto">
                                    <span className="text-small">
                                        Tel: <a href={`tel: ${contesto.operator.contact.phone}`} >{contesto.operator.contact.phone}</a>
                                    </span>
                                        <br />
                                        <span className="text-small">
                                            Email: <a href={`mailto: ${contesto.operator.contact.email}`} target="_blank" rel="noopener noreferrer">{contesto.operator.contact.email}</a>
                                        </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-xl-1 separatore-card"></div>
                <div className="col-12 col-xl-5 offset-xl-1 agency-info">
                    <div className="row h-100">
                        <div className="col-12">
                            <img alt="immagine" className="agency-img" src={iconaAzienda}></img>
                        </div>
                        <div className="col-12 mt-auto">
                            <span className="text-small">
                                {contesto.agency.name}
                                <br />
                                {contesto.agency.contact.address}
                                <br />
                                {contesto.agency.contact.website}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
