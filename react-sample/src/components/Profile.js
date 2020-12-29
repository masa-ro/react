{/* <Profile profile={profile} */}
// {
//     profile: {
//         name: "坂本龍馬",
//         birthday: "1836/01/03"
//     }
// }
// props.profile.name

const Profile = (props) => {
    return(
        <ul>
            <li>名前：{props.name}</li>
            <li>誕生日：{props.birthday}</li>
        </ul>
    )
};

export default Profile;