const SearchBar = ({ setSearch }) => {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search:"
        onChange={(event) => {
          setSearch(event.target.value);
        }}
      />
    </div>
  );
};
export default SearchBar;
