"use client";

import Image from "next/image";
import Link from "next/link";
import { AiOutlineTag } from "react-icons/ai";
import { FaQuoteLeft, FaRegCheckCircle, FaReply } from "react-icons/fa";

export default function BlogDetails({ blogsData }) {
  const { blogPost, socialIcons } = blogsData;

  // const currentUrl = `https://www.anondobari.com/blogs/${blogsData.slug}`;
  return (
    <div className="max-w-6xl mx-auto md:px-0 px-6 space-y-8 py-20">
      <Image
        src={blogPost.image}
        alt={blogPost.title}
        width={1200}
        height={1200}
        className="rounded-xl w-full h-1/2 object-cover"
      />

      <div className="text-sm text-gray-500">
        <span className="text-primary font-medium">Written by:</span>{" "}
        {blogPost.author}
        <span className="mx-3">|</span>
        {blogPost.date}
      </div>

      <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
        {blogPost.title}
      </h1>

      <p className="text-gray-700">{blogPost.description}</p>

      <div className="space-y-2 text-textSecondary text-base font-medium">
        {blogPost.checklist.map((item, idx) => (
          <div key={idx} className="flex items-center space-x-2">
            <FaRegCheckCircle className="text-primary" />
            <span>{item}</span>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {blogPost.subImages.map((img, i) => (
          <Image
            key={i}
            src={img}
            alt={`sub-img-${i}`}
            width={1200}
            height={1200}
            className="rounded-lg w-full h-full object-cover"
          />
        ))}
      </div>

      <blockquote className="bg-primary/10 text-gray-800 p-6 rounded-lg relative border-l-4 border-primary">
        <FaQuoteLeft className="text-primary text-2xl absolute -top-4 -left-4" />
        <p className="text-md italic">{blogPost.quote}</p>
      </blockquote>

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-sm text-textSecondary border-t pt-4 gap-4">
        <div className="flex items-center flex-wrap gap-2">
          <AiOutlineTag className="text-primary text-xl" />
          {blogPost.postTags.map((tag, i) => (
            <p
              // key={i}
              // href="#"
              className="bg-primary/80 text-white px-3 py-1 rounded-md text-sm transition transform duration-500"
            >
              {tag}
            </p>
          ))}
        </div>

        {/* <div className="flex items-center gap-2 flex-wrap">
          <span className="text-base text-textPrimary">Share Now</span>
          <div className="flex items-center gap-2">
            {blogsData.socialIcons.map(({ icon: Icon, link }, index) => (
              <a
                key={index}
                href={link}
                rel="noopener noreferrer"
                aria-label="Social Link"
                className="w-8 h-8 flex items-center justify-center border border-textSecondary text-textSecondary p-2 rounded-full hover:bg-primaryStart hover:text-textWhite hover:border-transparent cursor-pointer transition duration-500"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div> */}

        {/* <div className="flex items-center gap-2 flex-wrap">
          <span className="text-base text-textPrimary">Share Now:</span>
          <div className="flex items-center gap-2">
            {socialIcons.map(({ icon: Icon, link }, index) => (
              <a
                key={index}
                href={link(currentUrl, blogPost.title)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 flex items-center justify-center border border-textSecondary text-textSecondary p-2 rounded-full hover:bg-primary hover:text-white transition"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div> */}

        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-base text-textPrimary">Share Now</span>
          <div className="flex items-center gap-2">
            {blogsData.socialIcons.map(({ icon: Icon, link }, index) => {
              const currentUrl = `https://www.anondobari.com/blogs/${blogsData.slug}`;
              return (
                <a
                  key={index}
                  href={link(currentUrl, blogsData.blogPost.title)} // ✅ ekhane title pathachhi
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Share Link"
                  className="w-8 h-8 flex items-center justify-center border border-textSecondary text-textSecondary p-2 rounded-full hover:bg-primary hover:text-white transition-all transform duration-500"
                >
                  <Icon className="w-4 h-4" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
