import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './accordion.css'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import MyContext from '../MyContext'
import * as utils from '../utils';

export default function Accordion({ tipo, children }) {
    const contesto = React.useContext(MyContext);
    const [opened, setOpened] = useState(false)
    const toggleAccordion = () => {
        setOpened(!opened)
    }

    return (
        <>
            <div className="col-12 shadow accordion px-3 py-3 mb-4">
                <div className="row mr-0 ml-0">
                    <div className="d-flex align-items-center justify-content-between col-12">
                        <p className={"titoloAccordion m-0" + ((tipo === "info") ? (" text-primary"):"")}>{contesto.nome.toUpperCase()} {tipo === "citta" && <span className="date-text">{utils.getDateDalAlNoYear(contesto.giorni[0].data, contesto.giorni[contesto.giorni.length - 1].data)}</span>}</p>
                        <FontAwesomeIcon onClick={toggleAccordion} className="icon-arrow" rotation={(opened ? 180 : 0)} icon={faAngleDown} />
                    </div>
                </div>

                <div className={'separatore'+((opened) ? ' d-block' : ' d-none')}> </div>
                <div className="row">
                    <div className={`col-12 body-accordion m-auto ${opened ? 'open' : 'close'}  `}>
                        {(opened ? (<div className="body-props mt-3">{children}</div>) : '')}
                    </div>
                </div>
            </div>
        </>
    )
}