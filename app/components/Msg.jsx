import React from "react";
import { FaRegCircleCheck } from "react-icons/fa6";

export default function Msg({ title, text }) {
  return (
    <div className="flex flex-col gap-3 text-white font-karla">
      <div className="flex flex-row items-center gap-2">
        <FaRegCircleCheck />
        <p className="font-bold">{title}</p>
      </div>
      <span className="text-[#e2dede] text-[10px]">{text}</span>
    </div>
  );
}
