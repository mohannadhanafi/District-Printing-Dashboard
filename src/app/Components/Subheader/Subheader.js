/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React from "react";
import "./style.scss";
export function SubHeader() {

  return (
      <div className="d-flex justify-content-between align-items-center flex-wrap flex-sm-nowrap subheader--main">
      <div className="align-items-center justify-content-between flex-wrap mr-1 custom--div">
      <button
    type="button"
    onClick={() => console.log(1)}
    className={`btn btn-primary font-weight-bold mr-2`}
>
<img class="fas fa-plus" src="https://i.ibb.co/mcZfmS0/refresh-1.png" style={{ height: 18 }} alt="icon"/>
</button>
    <button
    type="button"
    onClick={() => console.log(1)}
    className={`btn btn-primary font-weight-bold mr-2`}
>
<i class="fas fa-plus"></i> New Order
</button>
      </div>
      <div className="justify-content-between align-items-center custom--div">
      <button
    type="button"
    onClick={() => console.log(1)}
    className={`btn btn-secondary color-primary font-weight-bold mr-2`}
>
  Print Date
</button>
<button
    type="button"
    onClick={() => console.log(1)}
    className={`btn btn-secondary color-primary font-weight-bold mr-2`}
>
  Customer <i class="fas fa-chevron-down color-primary"></i>
</button>
<button
    type="button"
    onClick={() => console.log(1)}
    className={`btn btn-secondary color-primary font-weight-bold mr-2`}
>
  Date Order <i class="fas fa-chevron-down color-primary"></i>
</button>
<button
    type="button"
    onClick={() => console.log(1)}
    className={`btn btn-secondary color-primary font-weight-bold mr-2`}
>
  Printer Name <i class="fas fa-chevron-down color-primary"></i>
</button>
<button
    type="button"
    onClick={() => console.log(1)}
    className={`btn btn-secondary color-primary font-weight-bold mr-2`}
>
  Order Type <i class="fas fa-chevron-down color-primary"></i>
</button>
      </div>
      </div>
  );
}
