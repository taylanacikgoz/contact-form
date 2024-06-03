"use client";

import { useForm } from "react-hook-form";
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Msg from "./Msg";

export default function Home() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = async (data) => {
    if (data) {
      try {
        console.log(data);
        toast.success(
          <Msg
            title="Message Sent"
            text="Thanks for completing the form. We'll be touching soon."
          />,
          {
            position: "top-center",
            autoClose: false,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          }
        );
      } catch (error) {
        console.error(error);
      }
    } else {
      toast.error("Form is not submitted", {
        position: "top-center",
        autoClose: false,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  return (
    <main className="font-karla bg-[#E2F1E7] flex items-center justify-center min-h-screen">
      <ToastContainer
        autoClose={false}
        icon={false}
        className="hidden sm:flex"
      />
      <div className="sm:w-[720px] m-4 border border-solid border-white bg-white rounded-md p-5 flex flex-col gap-3">
        <h1 className="font-bold text-3xl mb-5">Contact Us</h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          autoComplete="off"
          className="flex flex-col gap-5"
        >
          <div className="w-full flex flex-col gap-5 sm:flex sm:flex-row ">
            <div className="sm:w-1/2 flex flex-col gap-2">
              <label>
                First Name <span className="text-[#0A7D69]">*</span>
              </label>
              <input
                {...register("firstName", {
                  required: {
                    value: true,
                    message: "This field is required",
                  },
                  pattern: {
                    value: /^[A-Za-z]+$/i,
                    message: "Invalid first name",
                  },
                })}
                aria-invalid={errors.firstName ? "true" : "false"}
                type="text"
                className={`p-2 border border-solid rounded-md ${
                  errors.firstName ? "border-red-500" : ""
                }`}
              ></input>
              {errors.firstName && (
                <p role="alert" className="text-red-500">
                  {errors.firstName.message}
                </p>
              )}
            </div>
            <div className="sm:w-1/2 flex flex-col gap-2">
              <label>
                Last Name <span className="text-[#0A7D69]">*</span>
              </label>
              <input
                {...register("lastName", {
                  required: {
                    value: true,
                    message: "This field is required",
                  },
                  pattern: {
                    value: /^[A-Za-z]+$/i,
                    message: "Invalid last name",
                  },
                })}
                type="text"
                className={`p-2 border border-solid rounded-md ${
                  errors.lastName ? "border-red-500" : ""
                }`}
              ></input>
              {errors.lastName && (
                <p role="alert" className="text-red-500">
                  {errors.lastName.message}
                </p>
              )}
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label>
              Email Adress <span className="text-[#0A7D69]">*</span>
            </label>
            <input
              {...register("email", {
                pattern: {
                  value: /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/,
                  message: "Invalid Email Address",
                },
                required: {
                  value: true,
                  message: "Please enter a valid email address",
                },
              })}
              aria-invalid={errors.email ? "true" : "false"}
              type="email"
              className={`p-2 border border-solid rounded-md ${
                errors.email ? "border-red-500" : ""
              }`}
            ></input>
            {errors.email && (
              <p role="alert" className="text-red-500">
                {errors.email?.message}
              </p>
            )}
          </div>
          <div className="flex flex-col gap-2">
            <label>
              Query Type <span className="text-[#0A7D69]">*</span>
            </label>
            <div className="flex flex-col gap-2 sm:flex sm:flex-row sm:gap-5">
              <div className="active:bg-[#DFF1E7] w-full sm:w-1/2 p-3 pl-6 border border-solid rounded-md flex flex-row items-center gap-2">
                <input
                  type="radio"
                  id="enquiry"
                  value="General Enquiry"
                  {...register("radio", {
                    required: "Please select a query type",
                  })}
                  aria-invalid={errors.radio ? "true" : "false"}
                ></input>
                <label htmlFor="enquiry">General Enquiry</label>
              </div>
              <div className="active:bg-[#DFF1E7] w-full sm:w-1/2 p-3 pl-6 border border-solid rounded-md flex flex-row items-center gap-2">
                <input
                  type="radio"
                  id="support"
                  name="support"
                  value="Support Request"
                  {...register("radio")}
                  aria-invalid={errors.radio ? "true" : "false"}
                ></input>
                <label htmlFor="support" className="peer">
                  Support Request
                </label>
              </div>
            </div>
            {errors.radio && (
              <p role="alert" className="text-red-500">
                {errors.radio.message}
              </p>
            )}
            <label className="mt-2">
              Message <span className="text-[#0A7D69]">*</span>
            </label>
            <textarea
              className={`resize-none px-4 py-2 border border-solid rounded-md ${
                errors.textarea ? "border-red-500" : ""
              }`}
              cols="15"
              rows="5"
              {...register("textarea", {
                required: {
                  value: true,
                  message: "This field is required",
                },
                minLength: {
                  value: 10,
                  message: "This field must be at least 10 characters",
                },
              })}
              aria-invalid={errors.textarea ? "true" : "false"}
            ></textarea>
            {errors.textarea && (
              <p role="alert" className="text-red-500">
                {errors.textarea.message}
              </p>
            )}
            <div className="w-4/5 mt-7 flex flex-row gap-2 items-center">
              <input
                type="checkbox"
                id="contact"
                {...register("checkbox", {
                  required: {
                    value: true,
                    message:
                      "To submit this form, please consent to being contacted",
                  },
                })}
                aria-invalid={errors.textarea ? "true" : "false"}
              ></input>
              <label htmlFor="contact">
                I consent to being contacted by the team{" "}
                <span className="text-[#0A7D69]">*</span>
              </label>
            </div>
            {errors.checkbox && (
              <p role="alert" className="text-red-500">
                {errors.checkbox.message}
              </p>
            )}
            <button
              type="submit"
              className="text-white mt-5 border border-solid rounded-md bg-[#0A7D69] p-4 w-full hover:bg-[#023a31]"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
