import React from "react";

import Status from "./Status";
import Post from "./Posts";
import Recommendations from "./Recommendations";
import NavBar from "../NavBar/NavBar";

import UserData from "../../types/UserData";
import PostData from "../../types/PostsData";

type HomeProps = {
  userData: UserData[];
  postData: PostData[];
};

const Home = ({ userData, postData }: HomeProps) => {
  return (
    <>
      <NavBar userPic="" />
      <section className="main">
        <div className="wrapper">
          <div className="left-column">
            <Status data={userData} />
            <Post data={postData} />
          </div>
          <div className="right-column">
            <Recommendations data="" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
