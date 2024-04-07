import { IoIosStar } from "react-icons/io";

export const Rating = (props) => {
  return (
    <div>
      {[...Array(5)].map((_, index) => {
        index += 1;
        return (
          <IoIosStar
            color={props.rating >= index ? "#FABB07" : "#D1D1D1"}
            key={index}
          />
        );
      })}
    </div>
  );
};
