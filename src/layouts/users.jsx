import React from "react";
import { useParams } from "react-router-dom";
import UserPage from "../components/page/userPage";
import UsersListPage from "../components/page/usersListPage";
import EditUser from "../components/page/editUser/editUser";

const Users = () => {
    const params = useParams();
    const { userId, edit } = params;

    if (userId) {
        if (edit) {
            return <EditUser userId={userId} />;
        } else {
            return <UserPage userId={userId} />;
        }
    } else {
        return <UsersListPage />;
    }
};

export default Users;
