import React from "react";
import UserData from "../../types/UserData";

interface StatusProps {
  data: UserData[];
}

const Status = ({ data }: StatusProps) => {
  return (
    <>
      {data.length > 0 ? (
        <div className="status-wrapper">
          {data.map((user) => (
            <div className="status-card">
              <div className="profile-picture">
                <img src={user.user_url} alt="" />
              </div>
              <p className="username">{user.username}</p>
            </div>
          ))}
        </div>
      ) : (
        <div className="status-wrapper">
          <div className="status-card">
            <div className="profile-picture">
              <img src="assets/add_users.png" alt="" />
            </div>
            <p className="username">Add users</p>
          </div>
        </div>
      )}
    </>
  );
};

export default Status;
