const Filter = ({ name, handleChange }) => {
    
    return (
    <div className="search-by-name-group">
        <label htmlFor="search-name">Search by title : </label>
        <input
        name="name"
        value={ name }
        id="search-name"
        placeholder="Hurry up!"
        onChange={ handleChange }
        />
    </div>
    );
};
 export default Filter