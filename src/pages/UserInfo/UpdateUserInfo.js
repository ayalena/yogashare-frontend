import {useForm} from "react-hook-form";
import React, {useContext} from "react";
import {UserProfileContext} from "../../context/UserProfileContext";
import {useHistory} from "react-router-dom";
import axios from "axios";
import logo from "../../assets/ohm.png";
import PageHeader from "../../components/PageHeader/PageHeader";
import Button from "../../components/Button/Button";

function UpdateUserInfo() {
    const {register, handleSubmit, formState: {errors}} = useForm({mode: 'onChange'})
    const {userProfile, setChangeData} = useContext(UserProfileContext)

    const history = useHistory()

    async function onFormSubmit(data) {
        const token = localStorage.getItem("token")
        try {
            await axios.put(`http://localhost:8081/api/userprofile/${userProfile.id}`, {
                firstName: data.firstName,
                lastName: data.lastName,
                age: data.age,
                address: data.address,
                postalCode: data.postalCode,
                country: data.country,
            }, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                }
            })
            history.push("/userprofilepage")
        } catch (e) {
            console.error(e)
        }
        setChangeData(true)
    }

    return (
        <>
            <PageHeader icon={logo} title="Update Info"/>
            {userProfile &&
            <div>
                <main>
                    <form onSubmit={handleSubmit(onFormSubmit)}>
                        <div className="form-container">
                            <label htmlFor="update-information">

                                <div>
                                    <label htmlFor="firstName"> First Name </label>
                                    <input
                                        type="text"
                                        id="firstName"
                                        {...register("firstName", {
                                            required: {
                                                value: true,
                                                message: "Please fill in your name",
                                            },
                                            minLength: {
                                                value: 3,
                                                message: "Name has to be at least 3 characters",
                                            },
                                        })}
                                    />
                                    {errors.firstName && <p>{errors.firstName.message}</p>}
                                </div>

                                <div>
                                    <label htmlFor="lastName"> Last Name </label>
                                    <input
                                        type="text"
                                        id="lastName"
                                        {...register("lastName", {
                                            required: {
                                                value: true,
                                                message: "Please fill in your last name"
                                            },
                                        })}
                                    />
                                    {errors.lastName && <p>{errors.lastName.message}</p>}
                                </div>

                                <div>
                                    <label htmlFor="age"> Age </label>
                                    <input
                                        type="number"
                                        id="age"
                                        {...register("age", {
                                            required: {
                                                value: true,
                                                message: "Please fill in your age"
                                            },
                                            min: {
                                                value: 18,
                                                message: "You have to be at least 18",
                                            },
                                        })}
                                    />
                                    {errors.age && <p>{errors.age.message}</p>}
                                </div>

                                <div>
                                    <label htmlFor="address"> Address </label>
                                    <input
                                        type="text"
                                        id="address"
                                        {...register("address", {
                                            required: {
                                                value: true,
                                                message: "Please fill in your address"
                                            },
                                        })}
                                    />
                                    {errors.address && <p>{errors.address.message}</p>}
                                </div>

                                <div>
                                    <label htmlFor="postalCode"> Postal Code </label>
                                    <input
                                        type="text"
                                        id="postalCode"
                                        {...register("postalCode", {
                                            required: {
                                                value: true,
                                                message: "Please fill in your postal code"
                                            },
                                            pattern: {
                                                value: /^(?:NL-)?(\d{4})\s*([A-Z]{2})$/i,
                                                message: "Please fill in a valid postal code",
                                            },
                                        })}
                                    />
                                    {errors.postalCode && <p>{errors.postalCode.message}</p>}
                                </div>

                                <div>
                                    <label htmlFor="country"> Country </label>
                                    <input
                                        type="text"
                                        id="country"
                                        {...register("country", {
                                            required: {
                                                value: true,
                                                message: "Please fill in your country"
                                            },
                                        })}
                                    />
                                    {errors.country && <p>{errors.country.message}</p>}
                                </div>

                                <div>
                                    <Button
                                        type="submit"
                                        className="round-button"
                                        text="Send"
                                    >
                                    </Button>
                                </div>
                            </label>
                        </div>
                    </form>
                </main>
            </div>
            }

        </>

    )
}

export default UpdateUserInfo;