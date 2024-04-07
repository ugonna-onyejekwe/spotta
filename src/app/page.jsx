import "./page.scss";
import { Large_screen_navbar } from "@/components/navbar/navbar";
import { reviews } from "@/components/data/data";
import { Review_card } from "@/components/review_card/review_card";
import { IoSearchOutline } from "react-icons/io5";
import Link from "next/link";

export default function Home() {
  return (
    <div className="home">
      <section>
        <Large_screen_navbar />
      </section>
      <main className="container">
        <div className="txt_part">
          <h1>Find a place you will love to live!</h1>
          <p>
            See through the lenses of people who have lived or visited the
            neighbourhood you might have in mind.
          </p>

          <div className="search_con">
            <span>
              <IoSearchOutline />
            </span>
            <input type="text" placeholder="enter address" />
          </div>
          <Link href="/reviews">
            <button className="btn_primary">search</button>
          </Link>
        </div>
        <div className="reviews_section">
          {reviews.map((review, key) => {
            return <Review_card {...review} key={key} />;
          })}
        </div>
      </main>
    </div>
  );
}
