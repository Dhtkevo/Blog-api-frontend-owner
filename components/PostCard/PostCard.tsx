import React from "react";
import { redirect } from "react-router";

interface postCardProps {
  id: number;
  title: string;
  content: string;
  createdAt: string;
  token: string;
}

export default function PostCard({
  id,
  title,
  content,
  createdAt,
  token,
}: postCardProps) {
  const handleDelete = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    let response = await fetch("http://localhost:3000/posts/" + id, {
      headers: {
        Authorization: "Bearer " + token,
      },
      method: "DELETE",
    });

    response = await response.json();
  };

  return (
    <div className="flex flex-col gap-6 bg-amber-50 max-w-1/3  px-4 py-4 shadow-md rounded-md">
      <h2 className="self-center font-bold">{title}</h2>
      <p>{content}</p>
      <p className="self-center">{createdAt}</p>
      <button
        onClick={handleDelete}
        className="border border-red-400 bg-red-500 rounded-2xl py-2 hover:bg-red-300 hover:cursor-pointer"
      >
        Delete
      </button>
    </div>
  );
}
