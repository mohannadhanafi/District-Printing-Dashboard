import React from 'react';
import "../style.scss";

const Invoice = () => {
    return (
        <div className="d-flex card--invoice justify-content-between align-items-center">
            <h4 className="mb-0">Invoice 2133394443 / 0319</h4>
            <button
                type="button"
                onClick={() => console.log(1)}
                className={`btn btn-primary font-weight-bold`}
            >
                Save
            </button>
        </div>
    )
}

export default Invoice;
