import React from 'react'

const Card = ({ stay }) => {
  const { superHost, type, beds, title, rating, photo,
    city, country } = stay
  const cardDet = beds === null ? type : `${type} . ${beds} beds`;
  const hide = superHost ? 'block' : 'none';
  return (
    <div className="card"
      title=
      {`Location: ${city}, ${country}\nMax guests: ${stay.maxGuests}`}>
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
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"
            viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"
            className="size-6" height={17} width={17}>
            <path strokeLinecap="round" strokeLinejoin="round"
              d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
          </svg>
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
