"use client";
import React from "react";
import Image from "next/image";

function CustomButton({ title, containerStyles, onClick, btnType }) {
  return (
    <button
      disabled={false}
      type={btnType || "button"}
      className={`custom-btn ${containerStyles}`}
      onClick={onClick}
    >
      <span className={`flex-1`}>{title}</span>
    </button>
  );
}

export default CustomButton;
