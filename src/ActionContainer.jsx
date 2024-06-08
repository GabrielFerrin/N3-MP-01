const ActionContainer = ({ children, setShowModal }) => {
  const activateModal = (e) => {
    let current = e.target
    let hasParent = false
    while (current) {
      if (current.id === "toggle-wrapper" || current.id === "search-modal")
        hasParent = true
      current = current.parentElement
    }
    !hasParent && setShowModal('show')
  }
  return (
    <div className="action-container" onClick={(e) => activateModal(e)}
      click="false">
      {children}
    </div>
  )
}

export default ActionContainer
