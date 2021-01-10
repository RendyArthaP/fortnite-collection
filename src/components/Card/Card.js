import React from 'react';
import { Link } from 'react-router-dom'

const Card = ({id, name, image}) => {
  return (
    <div
      className="bg-gray-100 rounded border shadow-lg w-40"
      key={id}
    >
      <Link to={`/collection/${id}`}>
        <img src={image} alt="" className="w-40" />
        <h1>{name}</h1>
      </Link>
    </div>
  );
}
 
export default Card;