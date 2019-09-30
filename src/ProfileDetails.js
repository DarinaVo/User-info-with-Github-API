import React from "react";
const imgStyle = {
  borderRadius: "50%",
  width: "250px",
  height: "250px"
};
const ProfileDetails = props => {
  return (
    <div>
      <div>
        {props.infoclean.avatar_url ? (
          <img
            src={props.infoclean.avatar_url}
            alt="Profile"
            style={imgStyle}
          />
        ) : null}
      </div>
      <div>
        {props.infoclean.name ? (
          <div>
            <p>Name:</p>
            <p>{props.infoclean.name}</p>
          </div>
        ) : null}
      </div>
    </div>
  );
};
export default ProfileDetails;
