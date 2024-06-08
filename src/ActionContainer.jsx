const ActionContainer = ({ children, setShowModal }) => {
  const activateModal = (e) => {
    console.log(e.target.tagName)
    if (e.target.id !== 'toggle')
      setShowModal('block')
  }
  return (
    <div className="action-container" onClick={(e) => activateModal(e)}>
      {children}
    </div>
  )
}

export default ActionContainer
