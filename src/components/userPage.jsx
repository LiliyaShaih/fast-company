import React from "react";
import QualitiesList from "./qualitiesList";
import PropTypes from "prop-types";

const UserPage = ({
    name,
    profession,
    qualities,
    completedMeetings,
    rate,
    goToUsers
}) => {
    if (name) {
        return (
            <div>
                <h1>{name}</h1>
                {profession && <h2>Профессия:{profession.name}</h2>}
                {qualities && <QualitiesList qualities={qualities} />}
                <p>CompletedMeetings:{completedMeetings}</p>
                <h2>Rate:{rate}</h2>
                <button onClick={() => goToUsers(name)}>
                    Все пользователи
                </button>
            </div>
        );
    }

    return <h1>Loading</h1>;
};

UserPage.propTypes = {
    name: PropTypes.string,
    profession: PropTypes.object,
    qualities: PropTypes.array,
    completedMeetings: PropTypes.number,
    rate: PropTypes.number,
    goToUsers: PropTypes.func
};

export default UserPage;
