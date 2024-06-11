import React from 'react'
import { hasParent } from './helpers'
import Input from './Input'
import ActionContainer from './ActionContainer'
import Button from './Button'
import { useState, useRef, useEffect } from 'react'
import LocationItem from './LocationItem'
import Counter from './Counter'

const SearchModal = ({ showModal, setShowModal, locations, setLocationKey,
  locationKey, guestsKey, setGuestsKey }) => {
  const [showLocations, setShowLocations] = useState(false);
  const [showGuests, setShowGuests] = useState(false);
  const [filteredLocations, setFilteredLocations] = useState(locations);
  const [locationsWidth, setlocationsWidth] = useState(0);
  const [guestsWidth, setGuestsWidth] = useState(0);
  const [adultsCount, setAdultsCount] = useState(0);
  const [childrenCount, setChildrenCount] = useState(0);
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
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => { window.removeEventListener('resize', handleResize); };
  }, [showModal])
  useEffect(() => {
    !adultsCount && !childrenCount ? setGuestsKey('') :
      setGuestsKey(adultsCount + childrenCount)
  }, [adultsCount, childrenCount])
  const handleOnClick = (e) => {
    if (e.target.className === 'search-modal') {
      setShowModal(false)
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
  const onChangeLocation = (value) => {
    setFilteredLocations(locations.filter((location) =>
      location.toLowerCase().includes(value.toLowerCase())))
    value === '' && setFilteredLocations(locations)
    setLocationKey(value)
  }
  const onChangeGuests = (value) => {
    setAdultsCount(0);
    setChildrenCount(0);
    setTimeout(() => {
      setGuestsKey(value);
    }, 10);
  }
  return (
    <div className={`search-modal`} onClick={handleOnClick}
      id="search-modal">
      <div className="modal">
        <div className="close-btn-wrapper" onClick={() => setShowModal(false)}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none"
            viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"
            className="close-modal-btn" width={17} height={17}>
            <path strokeLinecap="round" strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12" />
          </svg>
        </div>
        <ActionContainer className="action-container-modal" setShowModal={setShowModal}>
          <div className="input-wrapper" ref={locationInput}>
            <Input tagName="LOCATION" placeholder="Add Location"
              id="modal-location-input" onFocus={onFocus} onChange={onChangeLocation}
              value={locationKey} />
          </div>
          <div className="separator" ref={separator}></div>
          <div className="input-wrapper" ref={guestsInput}>
            <Input tagName="GUESTS" placeholder="Add guests" value={guestsKey}
              id="modal-guests-input" onFocus={onFocus} onChange={onChangeGuests} />
          </div>
          <div className="separator"></div>
          <Button showText='block' />
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
          <Counter title="Adults" desc="Ages 13 or above"
            count={adultsCount}
            setCount={setAdultsCount} />
          <Counter title="Children" desc="Ages 2–12"
            count={childrenCount}
            setCount={setChildrenCount} />
        </div>
      </div>
    </div >
  )
}

export default SearchModal
