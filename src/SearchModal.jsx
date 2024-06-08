import React from 'react'
import Input01 from './Input01'
import ActionContainer from './ActionContainer'
import Button01 from './Button'

const SearchModal = ({ showModal, setShowModal }) => {
  const handleClick = (e) => {
    e.target.className === 'search-modal show' && setShowModal('')
  }

  return (
    <div className={`search-modal ${showModal}`} onClick={handleClick}>
      <div className="modal">
        <ActionContainer className="action-container-modal">
          <Input01 tagName="LOCATION" placeholder="Add Location" />
          <div className="separator"></div>
          <Input01 tagName="GUESTS" placeholder="Add guests" />
          <div className="separator"></div>
          <Button01 showText='block' />
        </ActionContainer>
      </div>
    </div >
  )
}

export default SearchModal
