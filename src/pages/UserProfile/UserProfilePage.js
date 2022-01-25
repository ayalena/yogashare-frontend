import React, {useContext, useEffect, useState} from "react";
import './UserProfilePage.css';
import {Link, useHistory} from "react-router-dom";
import logo from "../../assets/ohm.png";
import PageHeader from "../../components/PageHeader/PageHeader";
import Footer from "../../components/Footer/Footer";
import {AuthContext} from "../../context/AuthContext";
import axios from "axios";
import {useParams} from "react-router-dom";
import Button from "../../components/Button/Button";
import UserInfo from "../../components/UserInfo/UserInfo";
import {UserProfileContext} from "../../context/UserProfileContext";

function UserProfilePage() {
    // const { id } = useParams();
    const {userProfile, loading} = useContext(UserProfileContext)
    const history = useHistory()

    const {user, logOut, isAdmin, isAuth} = useContext(AuthContext)


    // const { user } = useContext(AuthContext)

    // const [profileData, setProfileData] = useState({
    //     userProfile: null,
    // })

    //without context
    // const [profileData, setProfileData] = useState({});
    // const [loading, toggleLoading] = useState(false);
    // const [changeData, setChangeData] = useState(false)
    //
    // useEffect(() => {
    //     toggleLoading(true)
    //     setChangeData(false)
    //     const token = localStorage.getItem("token")
    //     if (token) {
    //         async function getUserData() {
    //             try {
    //                 const result = await axios(`http://localhost:8080/api/users/${user.id}/userprofile`, {
    //                     headers: {
    //                         "Content-Type": "application/json",
    //                         Authorization: `Bearer ${token}`
    //                     }
    //                 })
    //                 setProfileData({
    //                     userProfile: {
    //                         id: result.data?.id,
    //                         firstName: result.data?.firstName,
    //                         lastName: result.data?.lastName,
    //                         age: result.data?.age,
    //                         address: result.data?.address,
    //                         postalCode: result.data?.postalCode,
    //                         country: result.data?.country,
    //                     }
    //                 })
    //             } catch (e) {
    //                 setProfileData({
    //                     profileData: null,
    //                 })
    //             }
    //             toggleLoading(false)
    //         }
    //         if(token) {
    //             getUserData()
    //         }
    //     }
    // }, [user, changeData])

    //fake server
    // const [profileData, setProfileData] = useState({});
    //real server
    // const [profileData, setProfileData] = useState([]);
    // const [isMounted, setIsMounted] = useState(false)


    // const token = localStorage.getItem("token")

    //real server
    // useEffect(() => {
    //     setIsMounted(true)
    //
    //     const source = axios.CancelToken.source();
    //     //get page content (mounting)
    //     async function fetchProfileData() {
    //         //get token to prove authorisation
    //         const token = localStorage.getItem('token');
    //         try {
    //             //get request to backend to get user info
    //             const result = await axios.get('http://localhost:8080/api/users/${user.id}/userprofile', {
    //                 headers: {
    //                     "Content-Type": "application/json",
    //                     Authorization: `Bearer ${token}`,
    //                 },
    //                 cancelToken: source.token,
    //             });
    //             // get usernames
    //             const usernames = result.data.map(user => user.username)
    //             // loop over usernames
    //             for (let i = 0; i < usernames.length; i++) {
    //                 // if logged in user matches, set user
    //                 if (usernames[i] === user.username) {
    //                     const user = usernames[i]
    //                     // get rest of user info and set it to state
    //                     const currentUser = result.data.filter(username => user.includes(username.username))
    //                     setProfileData(currentUser)
    //
    //                     break
    //                 }
    //             }
    //             // setProfileData(result.data);
    //         } catch (e) {
    //             console.error(e);
    //         }
    //     }
    //     if(token) {
    //         fetchProfileData()
    //     }
    //     return function cleanup() {
    //         source.cancel();
    //     }
    // }, [])

    //fake server
    // useEffect(() => {
    //     const source = axios.CancelToken.source();
    //     //get page content (mounting)
    //     async function fetchProfileData() {
    //         //get token to prove authorisation
    //         const token = localStorage.getItem('token');
    //         try {
    //             //get request to backend to get user info
    //             const result = await axios.get('http://localhost:3000/private-content', {
    //                 headers: {
    //                     "Content-Type": "application/json",
    //                     Authorization: `Bearer ${token}`,
    //                 },
    //                 cancelToken: source.token,
    //             });
    //             setProfileData(result.data);
    //         } catch (e) {
    //             console.error(e);
    //         }
    //     }
    //     fetchProfileData();
    //     return function cleanup() {
    //         source.cancel();
    //     }
    // }, [])

    function handleClick() {
        if (userProfile.firstName === undefined) {
            history.push("/add-info")
        } else {
            history.push("/update-info")
        }
    }

    //real server
    // http://localhost:8080/api/users/${user.id}/userprofile
    //fake server
    // http://localhost:3000/private-content


    return (
        <>
            <PageHeader icon={logo} title="Profile Page"/>
            {/*<p>Page for user profile {id}</p>*/}
            <div className="profile-container">
                {loading && <span>Loading...</span>}

                <h2>Info</h2>
                <div className="main-info">

                    <p><strong>Username: </strong> {user.username} </p>
                    <p><strong>Email:</strong> {user.email}</p>
                </div>

                <h3>Additional info:</h3>
                <div className="extra-info">

                    {userProfile &&
                    <UserInfo
                        // userName={user.username}
                        userFirstName={userProfile.firstName}
                        userLastName={userProfile.lastName}
                        // userEmail={user.email}
                        userAddress={userProfile.address}
                        userCountry={userProfile.country}
                        userAge={userProfile.age}
                    />
                    }
                </div>

                {/*<p><strong>First Name:</strong> {user.firstName}</p>*/}
                {/*/!*{userProfile &&*!/*/}
                {/*<UserInfo*/}
                {/*    // userName={user.username}*/}
                {/*    firstName={profileData.firstName}*/}
                {/*    lastName={profileData.lastName}*/}
                {/*    // userEmail={user.email}*/}
                {/*    age={profileData.age}*/}
                {/*    address={profileData.address}*/}
                {/*    postalCode={profileData.postalCode}*/}
                {/*    country={profileData.country}*/}
                {/*/>*/}
                {/*/!*}*!/*/}


                {!loading &&
                <Button
                    className="update-button"
                    type="button"
                    onClick={() => handleClick()}
                    text="Update info"
                >
                </Button>
                }

                {/*{Object.keys(profileData).length > 0 &&*/}
                {/*<section>*/}
                {/*    <h2>Strikt geheime profiel-content</h2>*/}
                {/*    <h3>{profileData.title}</h3>*/}
                {/*    <p>{profileData.content}</p>*/}
                {/*</section>*/}
                {/*}*/}

                {!isAdmin &&
                <p>To watch media content, click <Link to="/media"> <b> here! </b> </Link></p>
                }
                {isAdmin &&
                <p>To post a video, click <Link to="/fileupload"> <b> here! </b> </Link></p>
                }

                <Button
                    type="button"
                    onClick={logOut}
                    className="round-button"
                    text="Log out"
                >
                </Button>
            </div>
            <Footer/>
        </>
    );
}

export default UserProfilePage;