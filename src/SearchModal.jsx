import React from 'react'
import { hasParent } from './helpers'
import Input from './Input'
import ActionContainer from './ActionContainer'
import Button01 from './Button'
import { useState, useRef, useEffect } from 'react'
import LocationItem from './LocationItem'
import Counter from './Counter'

const SearchModal = ({ showModal, setShowModal, locations, setLocationKey,
  locationKey }) => {
  const [showLocations, setShowLocations] = useState(false);
  const [showGuests, setShowGuests] = useState(false);
  const [filteredLocations, setFilteredLocations] = useState(locations);
  const [locationsWidth, setlocationsWidth] = useState(0);
  const [guestsWidth, setGuestsWidth] = useState(0);
  const separator = useRef(null)
  const locationInput = useRef(null)
  const guestsInput = useRef(null)
  useEffect(() => {
    setFilteredLocations(locations)
  }, [locations])
  useEffect(() => {
    const handleResize = () => {
      locationInput.current &&
        setlocationsWidth(locationInput.current.clientWidth);
      guestsInput.current &&
        setGuestsWidth(guestsInput.current.clientWidth);
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => { window.removeEventListener('resize', handleResize); };
  }, [])
  const handleOnClick = (e) => {
    if (e.target.className === 'search-modal show') {
      setShowModal('')
      setShowGuests(false)
      setShowLocations(false)
    }
  }
  const onFocus = (e) => {
    if (hasParent(e.target, 'modal-location-input')) {
      setShowLocations(true)
      setShowGuests(false)
    }
    if (hasParent(e.target, 'modal-guests-input')) {
      setShowGuests(true)
      setShowLocations(false)
    }
  }
  const onChange = (value) => {
    setFilteredLocations(locations.filter((location) =>
      location.toLowerCase().includes(value.toLowerCase())))
    value === '' && setFilteredLocations(locations)
    setLocationKey(value)
  }
  return (
    <div className={`search-modal ${showModal}`} onClick={handleOnClick}
      id="search-modal">
      <div className="modal">
        <ActionContainer className="action-container-modal">
          <div className="input-wrapper" ref={locationInput}>
            <Input tagName="LOCATION" placeholder="Add Location"
              id="modal-location-input" onFocus={onFocus} onChange={onChange}
              locationKey={locationKey} />
          </div>
          <div className="separator" ref={separator}></div>
          <div className="input-wrapper" ref={guestsInput}>
            <Input tagName="GUESTS" placeholder="Add guests" value=""
              id="modal-guests-input" onFocus={onFocus} />
          </div>
          <div className="separator"></div>
          <Button01 showText='block' />
        </ActionContainer>
        <div className="locations"
          style={{
            display: showLocations ? 'flex' : 'none',
            width: locationsWidth + 'px'
          }}>
          {filteredLocations?.map((location, index) => (
            <LocationItem key={`loc-${index}`} location={location}
              setShowLocations={setShowLocations}
              setLocationKey={setLocationKey} />
          ))}
        </div>
        <div className="guests-options"
          style={{
            display: showGuests ? 'flex' : 'none',
            left: separator.current?.offsetLeft - 45 || 0,
            width: guestsWidth + 'px'
          }}>
          <Counter title="Adults" desc="Ages 13 or above" />
          <Counter title="Children" desc="Ages 2–12" />
        </div>
      </div>
    </div >
  )
}

export default SearchModal
