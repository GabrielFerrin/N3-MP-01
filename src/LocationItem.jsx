const LocationItem = ({ location, setLocationKey, setShowLocations }) => {
  const handleClick = () => {
    setLocationKey(location);
    setShowLocations(false);
  }
  return (
    <div className="location-item" onClick={handleClick}>
      <svg className="location-icon" viewBox="0 0 56.08 78.56"
        stroke="transparent" fill="currentColor" height={18} width={18}>
        <path d="M56.08,31.86c-.16,6.42-4.52,15.14-9.63,23.41-4.45,7.18-9.63,13.93-14.67,20.73-2.45,3.32-4.81,3.39-7.29,.29C15.5,65.08,7.13,53.47,2.13,39.8-3.99,23.06,3.44,6.5,19.43,1.38c18.35-5.88,36.66,7.5,36.65,30.48Zm-27.93,6.31c5.89-.02,10.3-4.26,10.37-9.98,.07-5.55-5.02-10.6-10.55-10.47-5.97,.15-10.22,4.6-10.14,10.62,.07,5.88,4.23,9.84,10.32,9.82Z" />
      </svg>
      {location}
    </div>
  )
}

export default LocationItem