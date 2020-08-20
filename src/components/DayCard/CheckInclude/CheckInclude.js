import React from 'react'
import MyContext from '../../../MyContext'
import './checkinclude.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

export default function CheckInclude() {
    const contesto = React.useContext(MyContext);
    return (
        <>
            {(contesto.included) && (
                <div class="included__check my-5 text-right" >
                    <p class="mr-5">
                        <span class="check-true">
                            <FontAwesomeIcon aria-hidden="true" icon={faCheck}></FontAwesomeIcon>
                            {/* <i class="fa fa-check" aria-hidden="true"></i> */}
                        </span>
                        {contesto.included}
                    </p>
                </div>
            )}
            {
                (contesto.notIncluded) && (

                    <div class="included__check my-5 text-right" >
                        <p class="mr-5">
                            <span class="check-false">
                                <FontAwesomeIcon aria-hidden="true" icon={faCheck}></FontAwesomeIcon>
                            </span>
                            {contesto.notIncluded}
                        </p>
                    </div>
                )
            }
        </>

    )
}