import React from 'react'

const ActionContainer = ({ children, showModal, setShowModal }) => {
  return (
    <div className="action-container" onClick={() => setShowModal('show')}>
      {children}
    </div>
  )
}

export default ActionContainer
