import React from 'react';

export default function OnlyDescription({description,name}) {
    return (
        <div className="row">
            <div className="col-10 offset-1">
                {name && (<h4 className="title">{name}</h4>)}
            </div>
            <div className="col-10 offset-1">
                <p className="text-medium">{description}</p>
            </div>
        </div>
    )
}