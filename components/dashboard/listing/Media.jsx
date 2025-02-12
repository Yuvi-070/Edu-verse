"use client";

import { mediaUpload } from "@/data/dashboard";
import Image from "next/image";
import React, { useState } from "react";

export default function Media() {
  const [previewImage, setPreviewImage] = useState(mediaUpload[0].imgSrc);
  const [previewVideo, setPreviewVideo] = useState(mediaUpload[1].imgSrc);
  const handleImageChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setPreviewImage(reader.result);
      };

      reader.readAsDataURL(file);
    }
  };
  const handleVideoChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setPreviewVideo(reader.result);
      };

      reader.readAsDataURL(file);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="col-12">
      <div className="rounded-16 bg-white -dark-bg-dark-1 shadow-4 h-100">
        <div className="d-flex items-center py-20 px-30 border-bottom-light">
          <h2 className="text-17 lh-1 fw-500">Media</h2>
        </div>

        <div className="py-30 px-30">
          <div className="row y-gap-50">
            <div className="col-12">
              <form
                onSubmit={handleSubmit}
                className="contact-form d-flex lg:flex-column"
              >
                <div
                  className="relative shrink-0"
                  style={
                    previewImage
                      ? {}
                      : { backgroundColor: "#f2f3f4", width: 250, height: 200 }
                  }
                >
                  {previewImage && (
                    <Image
                      width={735}
                      height={612}
                      className="w-1/1"
                      style={{
                        width: "250px",
                        height: "200px",
                        objectFit: "contain",
                      }}
                      src={previewImage}
                      alt="image"
                    />
                  )}

                  <div className="absolute-full-center d-flex justify-end py-20 px-20">
                    <span
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        document.getElementById("imageUpload1").value = "";
                        setPreviewImage("");
                      }}
                      className="d-flex justify-center items-center bg-white size-40 rounded-8 shadow-1"
                    >
                      <i className="icon-bin text-16"></i>
                    </span>
                  </div>
                </div>

                <div className="w-1/1 ml-30 lg:ml-0 lg:mt-20">
                  <div className="form-upload col-12">
                    <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">
                      Course thumbnail*
                    </label>
                    <div className="form-upload__wrap">
                      <input
                        required
                        type="text"
                        name="name"
                        placeholder={"Cover-1.png"}
                      />
                      <button className="button -dark-3 text-white">
                        <label
                          style={{ cursor: "pointer" }}
                          htmlFor="imageUpload1"
                        >
                          Upload Files
                        </label>
                        <input
                          required
                          id="imageUpload1"
                          type="file"
                          accept="image/*"
                          onChange={handleImageChange}
                          style={{ display: "none" }}
                        />
                      </button>
                    </div>
                  </div>

                  <p className="mt-10">
                    Upload your course image here. It must meet our course image
                    quality standards to be accepted. Important guidelines:
                    750x440 pixels; .jpg, .jpeg,. gif, or .png. no text on the
                    image.
                  </p>
                </div>
              </form>
            </div>
            <div className="col-12">
              <form
                onSubmit={handleSubmit}
                className="contact-form d-flex lg:flex-column"
              >
                <div
                  className="relative shrink-0"
                  style={
                    previewVideo
                      ? {}
                      : { backgroundColor: "#f2f3f4", width: 250, height: 200 }
                  }
                >
                  {previewVideo && (
                    <Image
                      width={735}
                      height={612}
                      className="w-1/1"
                      style={{
                        width: "250px",
                        height: "200px",
                        objectFit: "contain",
                      }}
                      src={previewVideo}
                      alt="image"
                    />
                  )}

                  <div className="absolute-full-center d-flex justify-end py-20 px-20">
                    <span
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        document.getElementById("imageUpload2").value = "";
                        setPreviewVideo("");
                      }}
                      className="d-flex justify-center items-center bg-white size-40 rounded-8 shadow-1"
                    >
                      <i className="icon-bin text-16"></i>
                    </span>
                  </div>
                </div>

                <div className="w-1/1 ml-30 lg:ml-0 lg:mt-20">
                  <div className="form-upload col-12">
                    <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">
                      Video URL*
                    </label>
                    <div className="form-upload__wrap">
                      <input
                        required
                        type="text"
                        name="name"
                        placeholder={"Video-1.mp3"}
                      />
                      <button className="button -dark-3 text-white">
                        <label
                          style={{ cursor: "pointer" }}
                          htmlFor="imageUpload2"
                        >
                          Upload Files
                        </label>
                        <input
                          required
                          id="imageUpload2"
                          type="file"
                          accept="image/*"
                          onChange={handleVideoChange}
                          style={{ display: "none" }}
                        />
                      </button>
                    </div>
                  </div>

                  <p className="mt-10">
                    {
                      "Enter a valid video URL. Students who watch a well-made promo video are 5X more likely to enroll in your course."
                    }
                  </p>
                </div>
              </form>
            </div>
          </div>

          <div className="row y-gap-20 justify-between pt-30">
            <div className="col-auto">
              <button className="button -md -outline-purple-1 text-purple-1">
                Prev
              </button>
            </div>

            <div className="col-auto">
              <button className="button -md -purple-1 text-white">Next</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
