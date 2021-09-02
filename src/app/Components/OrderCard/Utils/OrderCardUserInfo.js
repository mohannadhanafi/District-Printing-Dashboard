import React from 'react'

const OrderCardUserInfo = () => {
    return (
        <div className="card--userinfo">
            <div className="card--userinfo__image d-flex justify-content-between">
                <div className="d-flex justify-content-between align-items-center">
                <img className="card--userinfo__image__img" src="https://e5ap8jfucp-flywheel.netdna-ssl.com/wp-content/uploads/2019/10/Student-reviewing-personal-statement-template-1024x683.jpeg" alt="avatar" />
                <div className="d-flex flex-column user--info__userdata">
                    <h3>235</h3>
                    <h2>Jane Doe</h2>
                </div>
                </div>
                <div className="d-flex flex-column justify-content-between align-items-center">
                  <img src="https://i.ibb.co/smY8Xbt/Group-61792.png" alt="Group-61792" border="0" />
                  <div className="d-flex">
                    <div className="card--info__icon d-flex justify-content-center align-items-center">
                      <img src="https://i.ibb.co/3sdkMQX/Vector-2.png" alt="Vector-2" border="0" />
                    </div>
                    <div className="card--info__icon d-flex justify-content-center align-items-center" style={{ marginLeft: 6 }}>
                      <img src="https://i.ibb.co/rQmRtNF/Group-96.png" alt="Group-96" border="0" />
                    </div>
                  </div>
                </div>
            </div>
            <p className="user--info__bio">Lorem ipsum dolor sit amet, consectetur dipiscing elit, sed do eiusmod tempor incididunt.</p>
        </div>
    )
}

export default OrderCardUserInfo;
