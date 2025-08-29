"use client";
import { useState } from "react";
import { useAds } from "../context/AdContext";

export default function CreateAd() {
  const { addAd } = useAds();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title && description) {
      addAd(title, description);
      setTitle("");
      setDescription("");
      alert("Ad created successfully! Go check the Feed.");
    }
  };

  return (
    <section style={{ padding: "16px" }}>
      <h2>Create an Ad</h2>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        <input
          type="text"
          placeholder="Ad Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={{ padding: "8px" }}
        />
        <textarea
          placeholder="Ad Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          style={{ padding: "8px" }}
        />
        <button type="submit" style={{ padding: "8px", background: "blue", color: "white" }}>
          Post Ad
        </button>
      </form>
    </section>
  );
}
