import React, { useState,useEffect } from "react";
import Navbar from "../components/BodyNavbar/BodyNavbar";
import Header from "../components/Header";
import { reads, Grid } from "../HeaderData";
import { Typography} from "@mui/material";
import axios from "axios";
import { reads_api } from "../Api";
export default function Reads() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const getPosts = async () => {
      try {
        const response = await axios.get(`${reads_api}/api/reads/post`);
        setPosts(response.data);
      } catch (error) {
        console.error("Failed to fetch posts:", error);
      }
    };

    getPosts();
  }, []);

  const handlePostSubmit = async (post) => {
    try {
      const response = await axios.post(`${reads_api}/api/reads/create`, post);
      setPosts([...posts, response.data]);
    } catch (error) {
      console.error("Failed to create post:", error);
    }
  };
  const handlePostDelete = async (id) => {
    try {
      const response = await axios.delete(`${reads_api}/api/reads/delete/${id}/`);
      setPosts(posts.filter((post) => post.id !== id));
    } catch (error) {
      console.error('Failed to delete post:', error);
    }
  };
  return (
    <>
      <Navbar />
      <Header title={reads.title} />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div style={{ width: "100%", maxWidth: "800px" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: "20px",
            }}
          >
            {posts.map((post) => (
              <BlogPost key={post.id} {...post} onDelete={() => handlePostDelete(post.id)} />
            ))}
          </div>
        </div>
        <div style={{ width: "100%", maxWidth: "800px" }}>
          <Typography fontSize={24} align="center" color={"primary"}>
            Create your own{" "}
          </Typography>
          <BlogForm onSubmit={handlePostSubmit} />
        </div>
      </div>
    </>
  );
}

function BlogForm({ onSubmit }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ title, content, author });
    setTitle("");
    setContent("");
    setAuthor("");
  };

  return (
    <form
      style={{
        backgroundColor: "#f9f9f9",
        padding: "20px",
        borderRadius: "8px",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
      }}
      onSubmit={handleSubmit}
    >
      <div style={{ marginBottom: "15px" }}>
        <label style={{ display: "block", marginBottom: "5px" }}>
          <Typography>Title:</Typography>
        </label>
        <input
          type="text"
          style={{
            width: "100%",
            padding: "10px",
            fontSize: "16px",
            borderRadius: "4px",
            border: "1px solid #ccc",
          }}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div style={{ marginBottom: "15px" }}>
        <label style={{ display: "block", marginBottom: "5px" }}>
          <Typography>Content:</Typography>
        </label>
        <textarea
          style={{
            width: "100%",
            padding: "10px",
            fontSize: "16px",
            borderRadius: "4px",
            border: "1px solid #ccc",
          }}
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
      </div>
      <div style={{ marginBottom: "15px" }}>
        <label style={{ display: "block", marginBottom: "5px" }}>
          <Typography>Author:</Typography>
        </label>
        <input
          type="text"
          style={{
            width: "100%",
            padding: "10px",
            fontSize: "16px",
            borderRadius: "4px",
            border: "1px solid #ccc",
          }}
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          required
        />
      </div>
      <button
        type="submit"
        style={{
          backgroundColor: "#000249",
          color: "#fff",
          border: "none",
          borderRadius: "4px",
          padding: "10px 20px",
          fontSize: "16px",
          cursor: "pointer",
          transition: "background-color 0.3s",
        }}
      >
        <Typography>Submit</Typography>
      </button>
    </form>
  );
}

function BlogPost({ title, content, author, onDelete }) {
  return (
    <div
      style={{
        backgroundColor: "#fff",
        padding: "20px",
        marginTop: "20px",
        border: "1px solid #ddd",
        borderRadius: "8px",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Typography>{title}</Typography>
      <Typography>{content}</Typography>
      <Typography>By {author}</Typography>
      <button
        onClick={onDelete} 
        style={{ 
          backgroundColor: "#000249",
          color: "#fff",
          border: "none",
          borderRadius: "4px",
          padding: "10px 20px",
          fontSize: "13px",
          cursor: "pointer",
          height:"40px",
          marginTop:"10px",
          transition: "background-color 0.3s",
        }}
      >
      <Typography> Delete</Typography>
      </button>
    </div>
  );
}
