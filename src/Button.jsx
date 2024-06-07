import SearchIcon from "./SearchIcon"

const Button01 = ({ showText, color }) => {
  return (
    <div className="button" onClick={() => console.log('clicked')}>
      <SearchIcon />
      <span style={{ display: showText }}>Search</span>
    </div>
  )
}

export default Button01
