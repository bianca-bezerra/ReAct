import './styles.css'

export const Input = ({ searchInput, handleChange, placeholder }) => {
  return (
    <input type="text"
      className="search-input"
      value={searchInput}
      onChange={handleChange}
      placeholder={placeholder ?? 'Search...'}
    />
  )
}
