import React from 'react';
import './PageHeader.css';

function PageHeader({icon, title}) {
    return (
        <>
            <div className="title-container">
                <img src={icon} alt={title}/>
                <h1 className="pageheader">{title}</h1>
            </div>
        </>
    );
}

export default PageHeader;