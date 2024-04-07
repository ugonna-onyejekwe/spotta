"use client";

import Image from "next/image";
import logo from "../../assets/logo.svg";
import Link from "next/link";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import avatar from "../../assets/avatar.png";
import { SearchInput } from "../searchinput/searchinput";
import { IoBookmarkOutline } from "react-icons/io5";
import { IoShareSocialOutline } from "react-icons/io5";
import { amenities } from "@/components/data/data";

// swiper
import { Navigation } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

export const Large_screen_navbar = () => {
  return (
    <nav className={"lg_sc_navbar"}>
      <div className="container ">
        <div className="con">
          <Link href={"/"} className="logo">
            <Image src={logo} alt="img" />
          </Link>
          <SearchInput />
        </div>
        <div className="avatar_section">
          <p>welcome!</p>
          <div className="img_con">
            <Image src={avatar} alt="img" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export const Sm_screen_navbar = () => {
  return (
    <nav className="sm_sc_navbar">
      <div className="container ">
        <div className="con">
          <Link href={"/"} className="logo">
            <Image src={logo} alt="img" />
          </Link>
          <div className="avatar_section">
            <p>welcome!</p>
            <div className="img_con">
              <Image src={avatar} alt="img" />
            </div>
          </div>
        </div>
        <SearchInput />
      </div>
    </nav>
  );
};

export const Large_screen_subnav = (props) => {
  return (
    <div className="large_sc_subnav container">
      <div className="part1">
        <div className="txt_con">
          <h3>bonny and clyde street, ajoe estate, lagos</h3>
          <p>
            <b>"420" Reviews</b>
            (People are reving about the seleted location)
          </p>
        </div>

        <div className="action_btns">
          <button
            className="btn_primary"
            onClick={() => props.setshowmodel(true)}
          >
            leave a review
          </button>
          <button className="btn_secondary">
            <IoBookmarkOutline />
          </button>
          <button className="btn_secondary">
            <IoShareSocialOutline />
          </button>
        </div>
      </div>

      <div className="part2">
        <div className="swiper_wrapper">
          <Swiper
            modules={[Navigation]}
            spaceBetween={10}
            slidesPerView={"auto"}
            navigation={{ prevEl: ".prev_btn", nextEl: ".next_btn" }}
            className={"swiper_con"}
          >
            {amenities.map((i, key) => {
              return (
                <SwiperSlide key={key} className={"swiper"}>
                  {" "}
                  {i}
                </SwiperSlide>
              );
            })}
          </Swiper>
          <div className="navigation_btns">
            <button className="prev_btn">
              <IoIosArrowBack />
            </button>
            <button className="next_btn">
              <IoIosArrowForward />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export const Sm_screen_subnav = (props) => {
  return (
    <div className="sm_sc_subnav container">
      <div className="txt_con">
        <h3>bonny and clyde street, ajoe estate, lagos</h3>
        <p>
          <b>"420" Reviews</b>
          (People are reving about the seleted location)
        </p>
      </div>
      <div className="swiper_wrapper">
        <Swiper
          modules={[Navigation]}
          spaceBetween={10}
          slidesPerView={"auto"}
          navigation={{ prevEl: ".prev_btn", nextEl: ".next_btn" }}
          className={"swiper_con"}
        >
          {amenities.map((i, key) => {
            return (
              <SwiperSlide key={key} className={"swiper"}>
                {" "}
                {i}
              </SwiperSlide>
            );
          })}
        </Swiper>
        <div className="navigation_btns">
          <button className="prev_btn">
            <IoIosArrowBack />
          </button>
          <button className="next_btn">
            <IoIosArrowForward />
          </button>
        </div>
      </div>

      <div className="action_btns">
        <button
          className="btn_primary"
          onClick={() => props.setshowmodel(true)}
        >
          leave a review
        </button>
        <button className="btn_secondary">
          <IoBookmarkOutline />
        </button>
        <button className="btn_secondary">
          <IoShareSocialOutline />
        </button>
      </div>
    </div>
  );
};
