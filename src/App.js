import React, { useState, useEffect } from "react";
import Users from "./components/users";
import API from "./api";

function App() {
    const [users, setUsers] = useState();

    useEffect(() => {
        API.users.default.fetchAll().then((data) => setUsers(data));
    }, []);

    const handleDelete = (id) => {
        setUsers(users.filter((user) => user._id !== id));
    };

    const handleToggleBookMark = (id) => {
        setUsers(
            users.map((user) =>
                user._id === id
                    ? ((user.bookmark = !user.bookmark), user)
                    : user
            )
        );
    };

    return (
        <div className="app">
            {users && (
                <Users
                    users={users}
                    onDelete={handleDelete}
                    onToggleBookMark={handleToggleBookMark}
                />
            )}
        </div>
    );
}

export default App;
