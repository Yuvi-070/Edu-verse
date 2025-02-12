import { messageList } from "@/data/dashboard";
import React from "react";
import FooterNine from "../layout/footers/FooterNine";
import Image from "next/image";

export default function Message() {
  return (
    <div className="dashboard__main">
      <div className="dashboard__content bg-light-4">
        <div className="row pb-50 mb-10">
          <div className="col-auto">
            <h1 className="text-30 lh-12 fw-700">Messages</h1>
            <div className="mt-10">
              Lorem ipsum dolor sit amet, consectetur.
            </div>
          </div>
        </div>

        <div className="row y-gap-30">
          <div className="col-xl-4">
            <div className="rounded-16 bg-white -dark-bg-dark-1 shadow-4 h-100">
              <div className="d-flex items-center py-20 px-30 border-bottom-light">
                <h2 className="text-17 lh-1 fw-500">Basic Information</h2>
              </div>

              <div className="py-30 px-30">
                <div className="y-gap-30">
                  {messageList.map((elm, i) => (
                    <div key={i} className="d-flex justify-between">
                      <div className="d-flex items-center">
                        <div className="shrink-0">
                          <Image
                            width={50}
                            height={50}
                            src={elm.avatar}
                            alt="image"
                            className="size-50"
                          />
                        </div>
                        <div className="ml-10">
                          <div className="lh-11 fw-500 text-dark-1">
                            {elm.name}
                          </div>
                          <div className="text-14 lh-11 mt-5">{elm.title}</div>
                        </div>
                      </div>

                      <div className="d-flex items-end flex-column pt-8">
                        <div className="text-13 lh-1"> {elm.time}</div>
                        {elm.notificationCount && (
                          <div className="d-flex justify-center items-center size-20 bg-green-5 rounded-full mt-8">
                            <span className="text-11 lh-1 text-white fw-500">
                              {elm.notificationCount}
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-8">
            <div className="rounded-16 bg-white -dark-bg-dark-1 shadow-4 h-100">
              <div className="d-flex items-center justify-between py-20 px-30 border-bottom-light">
                <div className="d-flex items-center">
                  <div className="shrink-0">
                    <Image
                      width={50}
                      height={50}
                      src="/assets/img/avatars/small/2.png"
                      alt="image"
                      className="size-50"
                    />
                  </div>
                  <div className="ml-10">
                    <div className="lh-11 fw-500 text-dark-1">Arlene McCoy</div>
                    <div className="text-14 lh-11 mt-5">Active</div>
                  </div>
                </div>

                <a
                  href="#"
                  className="text-14 lh-11 fw-500 text-orange-1 underline"
                >
                  Delete Conversation
                </a>
              </div>

              <div className="py-40 px-40">
                <div className="row y-gap-20">
                  <div className="col-xl-7 col-lg-10">
                    <div className="d-flex items-center">
                      <div className="shrink-0">
                        <Image
                          width={50}
                          height={50}
                          src="/assets/img/avatars/small/4.png"
                          alt="image"
                          className="size-50"
                        />
                      </div>
                      <div className="lh-11 fw-500 text-dark-1 ml-10">
                        Albert Flores
                      </div>
                      <div className="text-14 lh-11 ml-10">35 mins</div>
                    </div>
                    <div className="d-inline-block mt-15">
                      <div className="py-20 px-30 bg-light-3 rounded-8">
                        How likely are you to recommend our company to your
                        friends and family?
                      </div>
                    </div>
                  </div>

                  <div className="col-xl-7 offset-xl-5 col-lg-10 offset-lg-2">
                    <div className="d-flex items-center justify-end">
                      <div className="text-14 lh-11 mr-10">35 mins</div>
                      <div className="lh-11 fw-500 text-dark-1 mr-10">You</div>
                      <div className="shrink-0">
                        <Image
                          width={50}
                          height={50}
                          src="/assets/img/avatars/small/3.png"
                          alt="image"
                          className="size-50"
                        />
                      </div>
                    </div>
                    <div className="d-inline-block mt-15">
                      <div className="py-20 px-30 bg-light-7 -dark-bg-dark-2 text-purple-1 rounded-8 text-right">
                        Hey there, we’re just writing to let you know that
                        you’ve been subscribed to a repository on GitHub.
                      </div>
                    </div>
                  </div>

                  <div className="col-xl-7 col-lg-10">
                    <div className="d-flex items-center">
                      <div className="shrink-0">
                        <Image
                          width={50}
                          height={50}
                          src="/assets/img/avatars/small/6.png"
                          alt="image"
                          className="size-50"
                        />
                      </div>
                      <div className="lh-11 fw-500 text-dark-1 ml-10">
                        Cameron Williamson
                      </div>
                      <div className="text-14 lh-11 ml-10">35 mins</div>
                    </div>
                    <div className="d-inline-block mt-15">
                      <div className="py-20 px-30 bg-light-3 rounded-8">
                        Ok, Understood!
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="py-25 px-40 border-top-light">
                <div className="row y-gap-10 justify-between">
                  <div className="col-lg-7">
                    <input
                      required
                      className="-dark-bg-dark-1 py-20 w-1/1"
                      type="text"
                      placeholder="Type a Message"
                    />
                  </div>
                  <div className="col-auto">
                    <button className="button -md -purple-1 text-white shrink-0">
                      Send Message
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <FooterNine />
    </div>
  );
}
