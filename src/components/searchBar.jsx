import React from "react";
import PropTypes from "prop-types";

const SearchBar = ({ search, onChange }) => {
    return (
        <form>
            <input
                className="w-100"
                type="text"
                placeholder="Search..."
                value={search}
                onChange={onChange}
            />
        </form>
    );
};

SearchBar.propTypes = {
    search: PropTypes.string,
    onChange: PropTypes.func
};

export default SearchBar;
