import { Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import { FiSearch } from "react-icons/fi";
import Card from "../../components/Card";
import Filter from "../../components/Filter";
import { Listing, Listings } from "./constants";
import { getPriceRange } from "./utils";

const Home = () => {
  const [listings, setListings] = useState<Listing[]>(Listings);
  const [search, setSearch] = useState<string>("");
  const [location, setLocation] = useState<string>("");
  const [date, setDate] = useState<string>("");
  const [priceRange, setPriceRange] = useState<number>(0);
  const [propType, setPropType] = useState<string>("");

  const onSearch = () => {
    const [start, end] = getPriceRange(priceRange);

    const newListings = Listings.filter(
      (listing) =>
        listing?.city?.toLowerCase().includes(location) &&
        listing?.type?.toLowerCase().includes(propType) &&
        listing?.price >= start &&
        listing?.price <= end &&
        (date?.length ? new Date(date) >= new Date(listing?.date) : true)
    );
    setListings(newListings);
  };

  return (
    <div className="bg-gray-50 h-screen flex flex-col overflow-hidden">
      <Navbar />
      <div className=" overflow-y-auto px-10">
        <section className="max-w-[1440px] mx-auto py-10 ">
          <div className="flex justify-between flex-col md:flex-row">
            <h1 className="font-bold  text-black text-2xl my-2">
              Search properties for rent
            </h1>
            <InputGroup width={"auto"}>
              <Input
                onChange={({ target: { value } }) => setSearch(value)}
                placeholder="Search with search bar"
              />
              <InputRightElement children={<FiSearch />} />
            </InputGroup>
          </div>
          <Filter
            {...{
              onSearch,
              location,
              date,
              priceRange,
              propType,
              setLocation,
              setDate,
              setPriceRange,
              setPropType,
            }}
          />
          <section className="w-full mt-5">
            <div className="flex flex-wrap">
              {listings
                ?.filter((list) =>
                  list?.city?.toLocaleLowerCase().includes(search)
                )
                ?.map((list, key) => (
                  <Card key={key} {...{ ...list }} />
                ))}
            </div>
          </section>
        </section>
      </div>
    </div>
  );
};

export default Home;
