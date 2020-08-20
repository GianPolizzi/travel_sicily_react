import React, { useContext } from 'react';
import './header.css';
import MyContext from '../../MyContext';
import { Link } from 'react-scroll';

export default function Header() {
    const contesto = useContext(MyContext);
    return (
        <header className="cover" style={{ backgroundImage: `url(${contesto.image})` }}>
            <div className="cover__filter filter"></div>
            <div className="container-fluid h-100 d-flex align-items-end justify-content-end">
                <div className="cover__copy mb-5">
                    <h2 className="cover__titolo">Per {contesto.nomeCliente}</h2>
                    <h1 className="cover__titolo">{contesto.titolo}</h1>
                    <Link className="btn btn-primary cover__button mt-3" key={"3"} to={"mappa"}>SCOPRI DI PIÙ</Link>
                </div>
            </div>
        </header>
    )
}

