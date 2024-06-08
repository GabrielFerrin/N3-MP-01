import React from 'react'
import Input01 from './Input01'
import ActionContainer from './ActionContainer'
import Button01 from './Button'
import { useState, useRef } from 'react'
import LocationItem from './LocationItem'

const SearchModal = ({ showModal, setShowModal, locations, locationFilter,
  setLocationFilter }) => {
  const [showLocations, setShowLocations] = useState(true);
  const [showGuests, setShowGuests] = useState(false);
  const separator = useRef(null)
  const handleClick = (e) => {
    e.target.className === 'search-modal show' && setShowModal('')
  }
  return (
    <div className={`search-modal ${showModal}`} onClick={handleClick}
      id="search-modal">
      <div className="modal">
        <ActionContainer className="action-container-modal">
          <Input01 tagName="LOCATION" placeholder="Add Location"
            id="modal-location-input" setShowDetails={setShowLocations}
            value={locationFilter} />
          <div className="separator" ref={separator}></div>
          <Input01 tagName="GUESTS" placeholder="Add guests" value=""
            id="modal-guests-input" setShowDetails={setShowGuests} />
          <div className="separator"></div>
          <Button01 showText='block' />
        </ActionContainer>
        <div className="locations"
          style={{ display: showLocations ? 'flex' : 'none' }}>
          {locations?.map((location, index) => (
            <LocationItem key={`loc-${index}`} location={location}
              locationFilter={locationFilter}
              setLocationFilter={setLocationFilter} />
          ))}
        </div>
        <div className="guests-options"
          style={{
            display: showGuests ? 'flex' : 'none',
            left: separator.current?.offsetLeft - 45 || 0
          }}>
          Guests
        </div>
      </div>
    </div >
  )
}

export default SearchModal
