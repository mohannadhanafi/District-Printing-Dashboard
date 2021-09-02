import React from 'react';
import "../style.scss";

const Type = () => {
    return (
        <div className="d-flex justify-content-between align-items-center">
            <div className="checkboxes--side d-flex justify-content-between align-items-center">
            <div className="d-flex justify-content-between align-items-center">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
            <img className="checkbox--image" src="https://i.ibb.co/NmCGj3D/film.png" alt="film" border="0"/>
            </div>
            <div className="d-flex justify-content-between align-items-center">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
            <img className="checkbox--image" src="https://i.ibb.co/RP11skK/Group-4.png" alt="Group-4" border="0" />
            </div>
            <div className="d-flex justify-content-between align-items-center">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
            <img className="checkbox--image" src="https://i.ibb.co/ynN9p8m/Frame-74.png" alt="Frame-74" border="0" />
            </div>
            </div>
            <div className="d-flex justify-content-between align-items-center">
                <div style={{ background: "rgba(171, 84, 219, 0.15)", marginRight: 5 }} className="checkbox--box d-flex justify-content-center align-items-center"><i style={{ color: "#AB54DB" }} class="fas fa-check"></i></div>
                <div style={{ background: "#F4355B" }} className="checkbox--box d-flex justify-content-center align-items-center"><i style={{ color: "#FFF" }} class="fas fa-times"></i></div>
            </div>
        </div>
    )
}

export default Type;
