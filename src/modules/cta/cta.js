import React from 'react';
import './cta.scss';


const cta = () => {
    return (
        <div className="cta">
            <h2 className="cta__book-now">
                Hadi yine iyisin! 4 odamız var.
            </h2>
            <button className="btn">
            <span className="btn__visible">Rezervasyon</span>
            <span className="btn__invisible">4 oda kaldı.</span>
            </button>
        </div>
    );
}

export default cta;