"use client";
import "./reviews.scss";
import { reviews, amenities } from "@/components/data/data";
import {
  Large_screen_navbar,
  Large_screen_subnav,
  Sm_screen_navbar,
  Sm_screen_subnav,
} from "@/components/navbar/navbar";
import Image from "next/image";
import { IoIosStar } from "react-icons/io";
import { HiOutlineThumbUp } from "react-icons/hi";
import { HiOutlineThumbDown } from "react-icons/hi";
import { FaRegCommentAlt } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";

import image1 from "../../assets/image1.png";
import image2 from "../../assets/image2.png";
import image3 from "../../assets/image3.png";
import image4 from "../../assets/image4.png";
import anonymous_img from "../../assets/anonymous.png";
import img from "../../assets/avatar.png";
import React, { useState } from "react";

export default function Reviews_page() {
  const [showamenities, setShowamenities] = useState(false);
  const [showmodel, setShowmodel] = useState(false);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [anonymous, setAnonymous] = useState(false);
  const [reviewsdata, setReviewsdata] = useState([...reviews]);

  const init = () => {
    setAnonymous(false);
    setComment("");
    setRating(0);
    setShowmodel(false);
  };

  const handle_submit = () => {
    setReviewsdata([
      {
        person: {
          name: anonymous ? "anonymous" : "james t.",
          img: anonymous ? anonymous_img : img,
          location: "ikate, lekki",
          rating: rating,
          time: "now",
        },
        review: comment,
        tag: "",
        likes: 0,
        dislike: 0,
        comment: 0,
      },
      ...reviewsdata,
    ]);
    init();
  };

  return (
    <div className="review_page">
      <section className="header">
        <Large_screen_navbar />
        <Sm_screen_navbar />
        <Large_screen_subnav setshowmodel={setShowmodel} />
        <Sm_screen_subnav setshowmodel={setShowmodel} />
      </section>

      <main>
        <div className="container">
          <section className="reviews_section">
            {reviewsdata.map((review, key) => {
              return (
                <div className="box">
                  <div className="avatar_section">
                    <div className="col1">
                      <Image src={review.person.img} />
                      <p>
                        {review.person.name} <span>{review.person.time}</span>
                      </p>
                    </div>
                    <div className="col2">
                      <IoIosStar className="icon" /> {review.person.rating}.0
                    </div>
                  </div>

                  <div className="reviews_container">
                    <p>{review.review}</p>
                  </div>

                  <div className="action_btns">
                    <button>
                      <HiOutlineThumbUp className="icon" />
                      {review.likes}
                    </button>
                    <button>
                      <HiOutlineThumbDown className="icon" />
                      {review.dislike}
                    </button>
                    <button>
                      <FaRegCommentAlt className="icon" />
                      {review.comment}
                    </button>
                  </div>
                </div>
              );
            })}
          </section>
          <section className="img_section">
            <Image src={image1} />
            <Image src={image2} />
            <Image src={image3} />
            <Image src={image4} />
          </section>
        </div>
      </main>

      <div className={showmodel ? "modal_section active" : "modal_section "}>
        <div className="overlay"></div>
        <div className="add_review_modal">
          <h2>review location</h2>
          <h3>Bonny and Clyde Street, Ajao Estate, Lagos</h3>
          <div className="select_amenities_section">
            <button
              onClick={() => {
                setShowamenities(!showamenities);
              }}
            >
              select amenities{" "}
              <span>
                <IoIosArrowDown />
              </span>
            </button>
            <div
              className="amenities"
              style={{ display: showamenities ? "grid" : "none" }}
            >
              {amenities.map((i, index) => {
                return (
                  <div className="item" key={index}>
                    <input type="checkbox" id={index} />
                    <label htmlFor={index}>{i}</label>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="rating_section">
            <h3>rate location</h3>
            {[...Array(5)].map((_, index) => {
              const curr_rating = index + 1;
              return (
                <label>
                  <IoIosStar
                    color={curr_rating <= rating ? "#FABB07" : "#fab90752"}
                    onClick={() => setRating(curr_rating)}
                  />
                </label>
              );
            })}
          </div>
          <div className="comment_section">
            <h3>write review</h3>
            <textarea
              placeholder="leave a comment..."
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />

            <div className="col">
              <input
                type="checkbox"
                name=""
                id="anonymous"
                onChange={() => setAnonymous(!anonymous)}
                checked={anonymous ? true : false}
              />
              <label htmlFor="anonymous">post as anonymous</label>
            </div>
          </div>

          <div className="action_btns">
            <button
              className="btn_primary"
              disabled={comment === "" || rating === 0 ? true : false}
              onClick={handle_submit}
            >
              submit
            </button>
            <button className="btn_secondary" onClick={init}>
              cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
