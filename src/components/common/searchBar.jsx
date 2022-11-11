import React from "react";
import PropTypes from "prop-types";

const SearchBar = ({ searchQuery, onChange }) => {
    return (
        <form>
            <input
                className="w-100"
                type="text"
                placeholder="Search..."
                name="searchQuery"
                value={searchQuery}
                onChange={onChange}
            />
        </form>
    );
};

SearchBar.propTypes = {
    searchQuery: PropTypes.string,
    onChange: PropTypes.func
};

export default SearchBar;
