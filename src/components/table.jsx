import React from "react";
import TableHeader from "./tableHeader";
import TableBody from "./tableBody";
import PropTypes from "prop-types";

const Table = ({ onSort, selectedSort, columns, data, children, arrow }) => {
    return (
        <table className="table">
            {children || (
                <>
                    <TableHeader
                        {...{
                            onSort,
                            selectedSort,
                            columns,
                            arrow
                        }}
                    />
                    <TableBody {...{ columns, data }} />
                </>
            )}
        </table>
    );
};

Table.propTypes = {
    onSort: PropTypes.func,
    selectedSort: PropTypes.object,
    columns: PropTypes.object,
    data: PropTypes.array,
    children: PropTypes.array,
    arrow: PropTypes.element.isRequired
};

export default Table;
