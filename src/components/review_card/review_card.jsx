import Image from "next/image";
import "./review_card.scss";
import { FaThumbsUp } from "react-icons/fa6";
import { FaThumbsDown } from "react-icons/fa6";
import { BiSolidMessage } from "react-icons/bi";
import { Rating } from "../rating/rating";

export const Review_card = ({ person, review, tag }) => {
  return (
    <div className="box">
      <div className="avater_section">
        <div className="part1">
          <div className="img_con">
            <Image src={person.img} />
          </div>
          <div className="txt_con">
            <h5>{person.name}</h5>
            <span>{person.time}</span>
          </div>
        </div>
        <div className="part2">
          <p>{person.location}</p>
          <span>{<Rating rating={person.rating} />}</span>
        </div>
      </div>
      <div className="review_con">
        <p>{review}</p>
      </div>
      <div className="action_con">
        <div className="action_btns">
          <span>
            <FaThumbsUp />
            <small>10</small>
          </span>
          <span>
            <FaThumbsDown />
            <small>23</small>
          </span>
          <span>
            <BiSolidMessage />
            <small>3</small>
          </span>
        </div>
        <div className="tag">
          <button className={tag}>{tag}</button>
        </div>
      </div>
    </div>
  );
};
