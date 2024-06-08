import SearchIcon from "./SearchIcon"

const Button01 = ({ showText }) => {
  return (
    <div className="button">
      <SearchIcon />
      <span style={{ display: showText }}>Search</span>
    </div>
  )
}

export default Button01
