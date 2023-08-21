import React from "react";

interface RecommendationsProps {
    data: string;
}

const Recommendations = ({ data }: RecommendationsProps) => {
  return (
    <>
      <div className="profile-card">
        <div className="profile-picture">
            <img src="assets/profile-pic.jpeg" alt=""/>
        </div>
        <div>
            <p className="username">Moi</p>
            <p className="sub-text">Clem._.03</p>
        </div>
        <button className="action-btn">switch</button>
      </div>
      <p className="suggestion-text">Suggestions for you</p>
      <div className="profile-card">
        <div className="profile-picture">
            <img src="assets/profile-pic.png" alt=""/>
        </div>
        <div>
            <p className="username">Someone</p>
            <p className="sub-text">followed by user</p>
        </div>
        <button className="action-btn">follow</button>
      </div>
      <div className="profile-card">
        <div className="profile-picture">
            <img src="assets/profile-pic.png" alt=""/>
        </div>
        <div>
            <p className="username">YourFriend</p>
            <p className="sub-text">followed by user</p>
        </div>
        <button className="action-btn">follow</button>
      </div>
      <div className="profile-card">
        <div className="profile-picture">
            <img src="assets/profile-pic.png" alt=""/>
        </div>
        <div>
            <p className="username">Miles Morales</p>
            <p className="sub-text">followed by user</p>
        </div>
        <button className="action-btn">follow</button>
      </div>
    </>
  );
};

export default Recommendations
