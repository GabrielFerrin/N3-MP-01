import SearchIcon from "./SearchIcon"

const Button = ({ showText, onClick = null }) => {
  return (
    <div className="button" id="button" onClick={onClick && onClick} >
      <SearchIcon />
      <span style={{ display: showText }}>Search</span>
    </div>
  )
}

export default Button
