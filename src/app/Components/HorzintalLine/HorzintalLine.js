import React from 'react';
import "./style.scss";

const HorzintalLine = ({ borderColor }) => <hr className="custom--hr" style={{ borderColor: borderColor || "#D8D8D8" }} />;

export default HorzintalLine;