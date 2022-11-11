import React, { useEffect, useState } from "react";
import api from "../../../api";
import TextField from "../../common/form/textField";
import SelectField from "../../common/form/selectField";
import RadioField from "../../common/form/radioField";
import MultiSelectField from "../../common/form/multiSelectField";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const EditUser = ({ userId }) => {
    const [user, setUser] = useState({
        email: "",
        name: "",
        profession: "",
        qualities: [],
        sex: "male"
    });

    const [professions, setProfession] = useState([]);
    const [qualities, setQualities] = useState([]);

    useEffect(() => {
        api.users.getById(userId).then((data) => {
            const qualitiesList = data.qualities.map((quality) => ({
                value: quality._id,
                label: quality.name,
                color: quality.color
            }));
            console.log(data);
            setUser({
                ...data,
                profession: data.profession._id,
                qualitiesList
            });
        });
        api.professions.fetchAll().then((data) => {
            const professionsList = Object.keys(data).map((professionName) => ({
                label: data[professionName].name,
                value: data[professionName]._id
            }));
            setProfession(professionsList);
        });
        api.qualities.fetchAll().then((data) => {
            const qualitiesList = Object.keys(data).map((optionName) => ({
                value: data[optionName]._id,
                label: data[optionName].name,
                color: data[optionName].color
            }));
            setQualities(qualitiesList);
        });
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        const index = professions.findIndex(
            (profession) => profession.value === user.profession
        );

        setUser((prevState) => ({
            ...prevState,
            profession: {
                _id: user.profession,
                name: professions[index].label
            }
        }));

        api.users.update(userId, user).then((user) => {
            console.log(user);
        });
    };

    const handleChange = (target) => {
        // if (target.name === "profession") {
        //     const professionIndex = professions.findIndex(
        //         (u) => u.value === target.value
        //     );

        //     setUser((prevState) => ({
        //         ...prevState,
        //         profession: {
        //             _id: target.value,
        //             name: professions[professionIndex].label
        //         }
        //     }));
        //     return;
        // }
        setUser((prevState) => ({
            ...prevState,
            [target.name]: target.value
        }));
        console.log(user);
    };

    if (user && professions) {
        console.log(user);

        return (
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-6 offset-md-3 shadow p-4">
                        <form onSubmit={handleSubmit}>
                            <TextField
                                label="Имя"
                                name="name"
                                value={user.name}
                                onChange={handleChange}
                            />
                            <TextField
                                label="Электронная почта"
                                name="email"
                                value={user.email}
                                onChange={handleChange}
                            />
                            <SelectField
                                label="Выбери свою профессию"
                                defaultOption="Choose..."
                                name="profession"
                                options={professions}
                                value={user.profession}
                                onChange={handleChange}
                            />
                            <RadioField
                                options={[
                                    { name: "Male", value: "male" },
                                    { name: "Female", value: "female" },
                                    { name: "Other", value: "other" }
                                ]}
                                label="Выберите ваш пол"
                                value={user.sex}
                                name="sex"
                                onChange={handleChange}
                            />
                            <MultiSelectField
                                options={qualities}
                                defaultValue={user.qualitiesList}
                                name="qualities"
                                label={"Выберите ваши качества"}
                                onChange={handleChange}
                            />
                            <button
                                className="btn btn-primary w-100 mx-auto"
                                type="submit"
                            >
                                <Link to={`/users/${userId}`}> Обновить</Link>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        );
    } else {
        return <h1>Loading</h1>;
    }
};

EditUser.propTypes = {
    userId: PropTypes.string
};

export default EditUser;
