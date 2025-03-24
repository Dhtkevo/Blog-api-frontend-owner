import React from "react";

interface postCardProps {
  title: string;
  content: string;
  createdAt: string;
}

export default function PostCard({ title, content, createdAt }: postCardProps) {
  return (
    <div className="flex flex-col gap-6 bg-amber-50 max-w-1/3  px-4 py-4 shadow-md rounded-md">
      <h2 className="self-center font-bold">{title}</h2>
      <p>{content}</p>
      <p className="self-center">{createdAt}</p>
    </div>
  );
}
