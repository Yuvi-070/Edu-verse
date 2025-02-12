import React from "react";
import Image from "next/image";
import { blogs } from "@/data/blog";
import Link from "next/link";
export default function RelatedBlogs() {
  return (
    <section className="layout-pt-lg layout-pb-lg bg-light-4">
      <div className="container">
        <div className="row justify-center text-center">
          <div className="col-auto">
            <div className="sectionTitle ">
              <h2 className="sectionTitle__title ">Related Posts</h2>

              <p className="sectionTitle__text ">
                10,000+ unique online course list designs
              </p>
            </div>
          </div>
        </div>

        <div className="row y-gap-30 pt-60">
          {blogs.slice(0, 4).map((elm, i) => (
            <div key={i} className="col-lg-3 col-md-6">
              <div className="blogCard -type-1">
                <div className="blogCard__image">
                  <Image
                    width={510}
                    height={425}
                    src={elm.imageSrc}
                    alt="image"
                  />
                </div>
                <div className="blogCard__content mt-20">
                  <div className="blogCard__category">
                    {elm.category.toUpperCase()}
                  </div>
                  <h4 className="blogCard__title text-17 lh-15 mt-5">
                    <Link className="linkCustom" href={`/blogs/${elm.id}`}>
                      {elm.title}
                    </Link>
                  </h4>
                  <div className="blogCard__date text-14 mt-5">{elm.date}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
