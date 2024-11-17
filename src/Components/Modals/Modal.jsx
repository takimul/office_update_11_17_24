import React, { useState } from "react";
import { useForm } from "react-hook-form";
import UpdateButton from "../Shared/Buttons/UpdateButton";
import Image from "next/image";
import LoadingInfinite from "../Shared/Loading/LoadingInfinite";
import { useAxios } from "@/Services/useAxios";

const Modal = ({
  id,
  buttonName,
  input,
  apiName,
  loadedImage,
  refetch,
  heading,
  loadedTitle,
}) => {
  // console.log(loadedImage);
  const { register, handleSubmit, reset } = useForm();
  const image_hosting_url = process.env.NEXT_PUBLIC_IMAGE_HOSTING_URL;
  const [isLogoUploading, setIsLogoUploading] = useState(false);

  const onSubmit = async (data) => {
    console.log(data);
    const imageFile = { image: data.image[0] };
    setIsLogoUploading(true);

    const imageHosting = await useAxios.post(image_hosting_url, imageFile, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    if (imageHosting.data.success) {
      const getData = {
        image: imageHosting.data.data.display_url,
        name: data.name,
        description: data.description,
        pages: data.pages,
        technologies: data.technologies,
        price: data.price,
      };

      const res = await useAxios.post(`/${apiName}/api`, getData);
      console.log(res.data);
      if (res.status === 200) {
        reset();
        refetch && refetch();
        setIsLogoUploading(false);
      }
    }
  };
  return (
    <div className={""}>
      {/* You can open the modal using document.getElementById('ID').showModal() method */}
      <div onClick={() => document.getElementById(id).showModal()}>
        <UpdateButton buttonName={buttonName}></UpdateButton>
      </div>

      <dialog id={id} className="modal text-black overflow-y-scroll">
        <div className="modal-box w-11/12 max-w-4xl  space-y-4">
          <form method="dialog" className="">
            {/* if there is a button in div, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg">{heading}</h3>
          <div className="w-full  text-black flex justify-center items-center">
            {isLogoUploading ? (
              <LoadingInfinite></LoadingInfinite>
            ) : (
              loadedImage && (
                <Image
                  alt="logo"
                  src={loadedImage}
                  width={220}
                  height={220}
                ></Image>
              )
            )}
          </div>
          <form onSubmit={handleSubmit(onSubmit)} action="">
            <input
              {...register("image", { required: true })}
              type="file"
              className="file-input file-input-bordered file-input-md w-full"
            />
            {input &&
              input.map((item, idx) => (
                <div key={idx}>
                  <label className="form-control w-full">
                    <div className="label">
                      <span className="label-text">{item}</span>
                    </div>
                    {item == "description" ? (
                      <textarea
                        {...register(`${item}`, { required: true })}
                        className="textarea textarea-bordered h-24"
                        placeholder={item}
                        defaultValue={loadedTitle}
                      ></textarea>
                    ) : (
                      <input
                        {...register(`${item}`, { required: true })}
                        className="input input-bordered"
                        placeholder={item}
                      ></input>
                    )}
                  </label>
                </div>
              ))}
            <button className="btn btn-outline my-2 w-full">
              {buttonName}
            </button>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default Modal;
