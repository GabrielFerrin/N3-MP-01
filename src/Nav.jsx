import ActionContainer from "./ActionContainer"
import Input01 from "./Input01"
import Button01 from "./Button"

const Nav = () => {
  return (
    <header>
      <img src="/logo.svg" alt="" />
      <ActionContainer>
        <Input01 tagName="LOCATION" placeholder="Add Location" />
        <div className="separator"></div>
        <Input01 tagName="GUESTS" placeholder="Add guests" />
        <div className="separator"></div>
        <Button01 showText='none' color='transparent' />
      </ActionContainer>
    </header>
  )
}

export default Nav
