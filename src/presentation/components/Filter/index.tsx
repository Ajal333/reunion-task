import { Divider, Input, Select } from "@chakra-ui/react";
import React from "react";
import Buttons from "../Buttons";

const Filter = ({
  onSearch,
  location,
  date,
  priceRange,
  propType,
  setLocation,
  setDate,
  setPriceRange,
  setPropType,
}: any) => {
  return (
    <div className="bg-white rounded-md w-full min-h-[4.5rem] mt-4 flex flex-wrap py-4">
      <div className="flex-1 px-6 ">
        <small className="text-gray-400">Location</small>
        <Input
          variant={"unstyled"}
          className="text-black"
          placeholder="Enter your location"
          value={location}
          onChange={({ target: { value } }) => setLocation(value)}
        />
      </div>
      <Divider orientation="vertical" />
      <div className="flex-1 px-6 ">
        <small className="text-gray-400">When</small>
        <Input
          variant={"unstyled"}
          type="date"
          className="text-black"
          placeholder="Select-Move-In Data"
          value={date}
          onChange={({ target: { value } }) => setDate(value)}
        />
      </div>
      <Divider orientation="vertical" />
      <div className="flex-1 px-6 ">
        <small className="text-gray-400">Price</small>
        <Select
          variant={"unstyled"}
          className="text-black"
          placeholder="Select Price Range"
          defaultValue={priceRange}
          onChange={({ target: { value } }) => setPriceRange(value)}
        >
          <option value={1}>$100 - $200</option>
          <option value={2}>$200 - $500</option>
        </Select>
      </div>
      <Divider orientation="vertical" />
      <div className="flex-1 px-6 ">
        <small className="text-gray-400">Propery Type</small>
        <Select
          variant={"unstyled"}
          className="text-black"
          placeholder="Select Product Type"
          defaultValue={propType}
          onChange={({ target: { value } }) => setPropType(value)}
        >
          <option value="appartments">Appartments</option>
          <option value="villa">Villa</option>
          <option value="pg">PG</option>
        </Select>
      </div>
      <Divider orientation="vertical" />
      <div className="flex flex-[0.5] items-center justify-center">
        <Buttons classname={"mr-4"} text={"Search"} onClick={onSearch} />
      </div>
    </div>
  );
};

export default Filter;
