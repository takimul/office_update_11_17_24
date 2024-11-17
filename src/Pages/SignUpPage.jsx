"use client";
import LoadingInfinite from "@/Components/Shared/Loading/LoadingInfinite";
import SocialLogin from "@/Components/Shared/SocialLogin/SocialLogin";
import MainLayout from "@/Layout/MainLayout";
import { useAxios } from "@/Services/useAxios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignUpPage = () => {
  const { register, handleSubmit, reset } = useForm();
  const image_hosting_url = process.env.NEXT_PUBLIC_IMAGE_HOSTING_URL;
  const [exist, setExist] = useState(false);
  const [logging, setLogging] = useState(false);

  const onSubmit = async (data) => {
    setLogging(true);
    const email = { email: data.email };
    console.log(email);
    const res = await useAxios.post("/sign-up/api", email);
    console.log(res.data.status);
    if (res.data.status === 200) {
      setExist(false);
      const imageFile = { image: data.image[0] };

      const imageHosting = await useAxios.post(image_hosting_url, imageFile, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log(imageHosting.data);
      if (imageHosting.data.success) {
        const userData = {
          name: data.name,
          email: data.email,
          password: data.password,
          role: "client",
          image: imageHosting.data.data.display_url,
        };

        const res = await useAxios.patch("/sign-up/api", userData);
        console.log(res.data.status);
        if (res.data.status === 200) {
          reset();
          setLogging(false);
          return toast("Wow so easy!");
        }
      }
    }
    if (res.data.status === 409) {
      setExist(true);
    }
  };
  return (
    <MainLayout>
      {logging ? (
        <div className="min-h-screen bg-black flex justify-center items-center ">
          <div className="w-1/3 h-96 flex justify-center items-center border border-gray-800 p-8 rounded-xl backdrop-blur-lg shadow-inner">
            <LoadingInfinite></LoadingInfinite>
          </div>
        </div>
      ) : (
        <div className="min-h-screen flex justify-center flex-col py-24 items-center">
          <h1 className={" text-2xl font-bold py-12"}>Please Sign Up</h1>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className=" lg:w-1/3 w-[80%] border shadow-xl p-8 rounded-xl backdrop-blur-lg "
          >
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white">Name</span>
              </label>
              <input
                {...register("name", { required: true })}
                type="text"
                placeholder="Name"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white">Email</span>
              </label>
              <input
                {...register("email", { required: true })}
                type="email"
                placeholder="Email"
                className="input input-bordered"
              />
            </div>
            {exist && <p className="text-red-500 py-2">Email Already Exist!</p>}
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white">Password</span>
              </label>
              <input
                type="password"
                placeholder="Password"
                className="input input-bordered text-black"
                {...register("password", { required: true })}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white">Upload Image</span>
              </label>
              <input
                type="file"
                className="file-input file-input-bordered w-full "
                {...register("image", { required: true })}
              />
              <label className="label">
                <a
                  href="#"
                  className="label-text-alt link link-hover text-white"
                >
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Sign Up</button>
            </div>
          </form>
          <div className={"divider w-3/4 lg:w-1/4 mx-auto"}>Or Login With</div>
          <SocialLogin></SocialLogin>
          <ToastContainer />
        </div>
      )}
    </MainLayout>
  );
};

export default SignUpPage;
