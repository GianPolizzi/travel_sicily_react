import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import './modale.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

export default function Modale({ children, title, click }) {
    const divModale = document.getElementById('divModale');
    const [opened, setOpened] = useState(false);

    const chiudiModale = () => {
        document.body.classList.remove('modal-open');
        setOpened(false);
    }
    useEffect(() => {
        if (click) {
            document.body.classList.add('modal-open');
            setOpened(true);
        }
    }, [click]);

    return createPortal(
        opened ? (
            <div className="containermodale">
                <div className="modale shadow mt-3">
                    <div className="row justify-content-between w-100 m-0 p-2">
                        <div className="col-10">
                            <div className="title text-uppercase">{title}</div>
                        </div>
                        <div onClick={chiudiModale} className="col-2">
                            <div className="chiudi text-center text-primary shadow">
                                <FontAwesomeIcon icon={faTimes}></FontAwesomeIcon> <span className="nomobile">Close</span>
                            </div>
                        </div>
                    </div>
                    <div className="row w-100 m-0">
                        <div className="separatore mb-2"></div>
                        {children}
                    </div>
                </div>
            </div>
        )
            : <></>, divModale);
}