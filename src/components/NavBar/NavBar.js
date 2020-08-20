import React from 'react';
import { useHistory } from "react-router-dom";
import { Link } from 'react-scroll';
import './navbar.css';

export default function NavBar({ navlinks }) {
    const navheight = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--myheight-navbar'));
    const history = useHistory();
    const logout = () => {
        fetch("http://treeact.altervista.org/logout1561564684");
        window.sessionStorage.removeItem('email');
        history.go("/");
    }
    return (
        <nav className="navbar sticky-top navbar-expand navbar-light my-nav">
            <div className="collapse navbar-collapse">
                <div className="container-fluid">
                    <img className="m-0 p-0 navlogo" alt="logo" />
                    <div className="navbar-nav mr-auto">
                        {navlinks.map((link, i) => {
                            return (
                                <Link key={"link-" + i} activeClass="active" className={"nav-link " + ((link.id === "header") ? "d-none" : "")} to={link.id}
                                    offset={(link.id === 'mappa') ? (navheight * -1) + 3 : (navheight * -1)}
                                    spy={true} hashSpy={true} isDynamic={true} duration={200} >
                                    <span className="font-link link-hover">{link.nome}</span>
                                </Link>
                            )
                        })}
                    </div>
                    <button onClick={logout} className="btn btn-sm btn-outline-danger">Logout</button>
                </div>
            </div>
        </nav>
    )
}