import { Divider, IconButton } from "@chakra-ui/react";
import React from "react";
import { FaBed, FaRegHeart } from "react-icons/fa";
import { BiBath } from "react-icons/bi";
import { TbSquaresFilled } from "react-icons/tb";
import { BsStars } from "react-icons/bs";
import { Listing } from "../../pages/Home/constants";

const Card = ({
  price,
  address,
  area,
  bathrooms,
  city,
  beds,
  popular,
  type,
  date,
  imageUrl,
}: Listing) => {
  return (
    <div className="rounded-md m-4 cursor-pointer hover:shadow-lg transition-all ease-in-out duration-300 shadow-sm bg-white flex w-[320px] h-[400px] flex-col">
      <div className="relative">
        <img
          className="flex-1 object-cover rounded-t-md"
          src={imageUrl}
          alt="house"
        />
        {popular && (
          <>
            <div className="absolute flex bg-primary text-white items-center h-[25px] px-2 rounded-r-md bottom-[-12.5px] shadow-md before:bg-primary before:w-2">
              <BsStars size={12} />
              <small className="text-[10px] ml-2 uppercase">Popular</small>
            </div>
            <div className="absolute  bottom-[-16px] bg-primary left-[-5px] rounded-tl-xl rounded-bl-xl w-[5px] h-[28px]"></div>
          </>
        )}
      </div>
      <div className="flex-1 flex px-4 flex-col">
        <div className=" flex-[0.7]  py-4">
          <div className="flex justify-between">
            <span className="flex items-center">
              <p className="text-primary font-bold text-2xl">${price}</p>
              <small className="text-gray-400">/month</small>
            </span>
            <IconButton
              style={{
                borderRadius: "50%",
                color: "#5F63F2",
              }}
              aria-label="Wishlist"
              icon={<FaRegHeart />}
            />
          </div>
          <h1 className="text-black font-bold text-xl my-2">{city}</h1>
          <p className="text-gray-500 font-semibold text-sm">{address}</p>
        </div>
        <Divider />
        <div className="flex flex-[0.3] py-2 h-full items-center justify-between">
          <div className="flex items-center text-sm">
            <FaBed className="mr-1 text-primary" /> {beds} Beds
          </div>
          <Divider orientation="vertical" />
          <div className="flex items-center text-sm">
            <BiBath className="mr-1 text-primary" /> {bathrooms} Bathrooms
          </div>
          <Divider orientation="vertical" />
          <div className="flex items-center text-sm">
            <TbSquaresFilled className="mr-1 text-primary" /> {area}m
            <sup>2</sup>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
