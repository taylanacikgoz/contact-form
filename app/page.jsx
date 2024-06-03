"use client";

import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Form from "./components/Form";

export default function Home() {
  return (
    <main className="font-karla bg-[#E2F1E7] flex items-center justify-center min-h-screen">
      <ToastContainer
        autoClose={false}
        icon={false}
        className="hidden sm:flex"
      />
      <div className="sm:w-[720px] m-4 border border-solid border-white bg-white rounded-md p-5 flex flex-col gap-3">
        <h1 className="font-bold text-3xl mb-5">Contact Us</h1>
        <Form />
      </div>
    </main>
  );
}
