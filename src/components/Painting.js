import React from "react";
import defaultImg from "..//default.jpg";
import PropTypes from "prop-types";
console.log(PropTypes);

const Painting = ({ url, title, profileUrl, tag, price }) => (
  <div>
    <img src={url} alt={title} width="480" />
    <h2>{title}</h2>
    <p>
      Author: <a href={profileUrl}>{tag}</a>
    </p>
    <p>{price} dollars</p>
    <button type="button">Add</button>
  </div>
);

Painting.defaultProps = {
  url: defaultImg,
};

Painting.propTypes = {
  url: PropTypes.string,
  title: PropTypes.string.isRequired,
  profileUrl: PropTypes.string,
  price: PropTypes.number.isRequired,
};
export default Painting;
