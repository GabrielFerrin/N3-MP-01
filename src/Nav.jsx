import ActionContainer from "./ActionContainer"
import Input from "./Input"
import Button from "./Button"

const Nav = ({ setShowModal, theme, setTheme, locationKey,
  guestsKey }) => {
  const switchTheme = (e) => {
    if (e.target.id !== 'lbl-btn' || e.target.id !== 'spn-btn')
      if (theme === 'light-theme') setTheme('dark-theme')
      else setTheme('light-theme')
  }
  return (
    <header>
      <a href="#"><img src="/logo.svg" alt="" /></a>
      <ActionContainer setShowModal={setShowModal}>
        <Input tagName="LOCATION" placeholder="Add Location"
          id="location-input" value={locationKey} />
        <div className="separator"></div>
        <Input tagName="GUESTS" placeholder="Add guests"
          id="guests-input" value={guestsKey} />
        <div className="separator"></div>
        <Button showText='none' color='transparent' />
        <div className="separator" id="separator"></div>
        <div className="toggle-wrapper" id="toggle-wrapper">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none"
            viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"
            className={`theme-icon${theme === 'light-theme' ? '' : ' hide'}`}
            height={25} width={25}>
            <path strokeLinecap="round" strokeLinejoin="round"
              d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none"
            viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"
            className={`theme-icon dark${theme === 'light-theme' ? ' hide' : ''}`}
            height={33} width={33}>
            <path strokeLinecap="round" strokeLinejoin="round"
              d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
          </svg>
          <div className="toggle" id="toggle">
            <input type="checkbox" id="btn" />
            <label htmlFor="btn" id="lbl-btn" onClick={(e) => switchTheme(e)}>
              <span className="thumb" id="spn-btn"></span>
            </label>
            <div className="light"></div>
          </div>
        </div>
      </ActionContainer>
    </header>
  )
}

export default Nav
