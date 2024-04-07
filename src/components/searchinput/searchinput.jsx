import { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";

export const SearchInput = () => {
  const [searchvalue, setSearchvalue] = useState("");

  return (
    <div className="search_con">
      <span>
        <IoSearchOutline />
      </span>
      <input
        type="text"
        placeholder={"bonny and clyde street, ajao Estate, lagos"}
        value={searchvalue}
        onChange={(e) => setSearchvalue(e.target.value)}
      />
      <span style={{ display: searchvalue !== "" ? "block" : "none" }}>
        <IoMdClose onClick={() => setSearchvalue("")} />
      </span>
    </div>
  );
};
