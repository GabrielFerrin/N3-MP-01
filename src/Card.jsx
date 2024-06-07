import React from 'react'

const Card = ({ stay }) => {
  const { superHost, type, beds, title, rating, photo } = stay
  const cardDet = beds === null ? type : `${type} . ${beds} beds`;
  const hide = superHost ? 'block' : 'none';
  return (
    <div className="card">
      <img src={photo} alt="Stay photo" height={269} width={395}
        className="card-img" />
      <div className="card-section">
        <div className="det-wrapper">
          <span className="card-host" style={{ display: hide }}>
            {superHost ? 'SUPER HOST' : ''}
          </span>
          <span className="card-det">{cardDet}</span>
        </div>
        <span className="card-stars">
          <img src="/star.svg" alt="Star icon" height={17} width={17} />
          {rating.toFixed(2)}
        </span>
      </div>
      <div className="card-section">
        <span className="card-title">{title}</span>
      </div>
    </div>
  )
}

export default Card
