import { hasParent } from "./helpers"

const ActionContainer = ({ children, setShowModal }) => {
  const activateModal = (e) => {
    !hasParent(e.target, 'toggle-wrapper') && setShowModal(true);
    hasParent(e.target, 'button') && hasParent(e.target, 'search-modal')
      && setShowModal(false);
  }
  return (
    <div className="action-container" id="action-container"
      onClick={(e) => activateModal(e)} click="false">
      {children}
    </div>
  )
}

export default ActionContainer
