import React from "react";
import Postdata from "../../types/PostsData";

interface PostProps {
  data: Postdata[];
}

const Post = ({ data }: PostProps) => {
  return (
    <>
      {data.length > 0 ? (
        <>
          {data.map((post) => (
              <div className="post">
                <div className="info">
                  <div className="user">
                    <div className="profile-picture">
                      <img src={post.user_image} alt="" />
                    </div>
                    <p className="username">{post.username}</p>
                  </div>
                  <img src="assets/option.png" className="options" alt="" />
                </div>
                <img src={post.post_image} className="post-image" alt="" />
                <div className="post-content">
                  <div className="reaction-wrapper">
                    <img src="assets/like.png" className="icon" alt="" />
                    <img src="assets/comment.png" className="icon" alt="" />
                    <img src="assets/send.png" className="icon" alt="" />
                    <img src="assets/save.png" className="save icon" alt="" />
                  </div>
                  <p className="likes">{post.likes} likes</p>
                  <p className="description">
                    <span>{post.username} </span>
                    {post.description}
                  </p>
                  <p className="post-time">{post.posted_time} ago</p>
                </div>
                <div className="comment-wrapper">
                  <img src="assets/smile.png" className="icon" alt="" />
                  <input
                    type="text"
                    className="comment-box"
                    placeholder="Add a comment"
                  />
                  <button className="comment-btn">post</button>
                </div>
              </div>
          ))}
        </>
      ) : (
        <div className="post">
          <img src="assets/no_posts_yet.png" className="no-posts-yet" alt=""/>
          <div className="error-post">No posts yet</div>
        </div>
      )}
    </>
  );
};

export default Post;
