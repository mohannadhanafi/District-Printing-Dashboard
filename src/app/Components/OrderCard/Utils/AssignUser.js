import React from 'react';

const AssignUser = () => {
    return (
        <>
        <div className="d-flex justify-content-start align-items-center card--time" style={{ marginBottom: 10 }}>
                <img src="https://i.ibb.co/5czF33z/profile-user-1.png" alt="box" border="0" />
                <h4>Robert</h4>
                <h6>(Overtime 6PM - 1 Hr)</h6>
            </div>
            <div className="d-flex card--invoice justify-content-between align-items-center" style={{ paddingLeft: 33 }}>
            <h4 className="mb-0">Wed,Aug 17th</h4>
            <button
                type="button"
                onClick={() => console.log(1)}
                className={`btn btn-primary font-weight-bold`}
            >
                Assign
            </button>
        </div>
            </>
    )
}

export default AssignUser
