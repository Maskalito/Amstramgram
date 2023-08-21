import { useEffect, useState } from "react";
import axios, { AxiosError, AxiosResponse } from "axios";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";

import Home from "./components/HomePage/Home";
import Login from "./components/LoginPage/Profile";

import { getPostUrl, getUserUrl } from "./config/consts";
import UserData from "./types/UserData";
import PostData from "./types/PostsData";

function App() {
  const [userData, setUserData] = useState<UserData[]>([]);
  const [userErrorMessage, setUserErrorMessage] = useState<string>("");
  const [postData, setPostData] = useState<PostData[]>([]);
  const [postErrorMessage, setPostErrorMessage] = useState<string>("");

  const getUsers = async (): Promise<void> => {
    try {
      const res: AxiosResponse = await axios.get(getUserUrl);
      setUserData(res.data);
      setUserErrorMessage("");
      console.log("Fetch data : ", res.data);
    } catch (error) {
      if (error instanceof AxiosError) {
        setUserErrorMessage("Cannot find the users");
        console.error(userErrorMessage);
      }
    }
  };

  const getPosts = async (): Promise<void> => {
    try {
      const res: AxiosResponse = await axios.get(getPostUrl);
      setPostData(res.data);
      setPostErrorMessage("");;
      console.log("Fetch data : ", res.data);
    } catch (error) {
      if (error instanceof AxiosError) {
        setPostErrorMessage("Cannot find the posts");
        console.error(postErrorMessage);
      }
    }
  }

  useEffect(() => {
    getUsers();
    getPosts();
  }, []);

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home userData={userData} postData={postData}/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
