export interface Listing {
  price: number;
  address: string;
  city: string;
  beds: number;
  bathrooms: number;
  area: string;
  popular: boolean;
  type: "appartments" | "villa" | "pg";
  date: string;
  imageUrl: string;
}

export const Listings: Listing[] = [
  {
    price: 200,
    city: "New York City, USA",
    address: "2821 Lake Sevilla, Palm Habour, TX",
    imageUrl:
      "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    beds: 2,
    bathrooms: 2,
    area: "2*7.5",
    type: "villa",
    date: "2021/12/27",
    popular: true,
  },
  {
    price: 500,
    city: "New Delhi, India",
    address: "2821 Lake Sevilla, Palm Habour, TX",
    imageUrl:
      "https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    beds: 2,
    bathrooms: 2,
    area: "2*7.5",
    type: "appartments",
    date: "2021/1/10",
    popular: false,
  },
  {
    price: 100,
    city: "Kolkata, India",
    address: "2821 Lake Sevilla, Palm Habour, TX",
    imageUrl:
      "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    beds: 2,
    bathrooms: 2,
    area: "2*7.5",
    type: "appartments",
    date: "2022/10/20",
    popular: false,
  },
  {
    price: 200,
    city: "New Jersey, USA",
    address: "2821 Lake Sevilla, Palm Habour, TX",
    imageUrl:
      "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    beds: 2,
    bathrooms: 2,
    area: "2*7.5",
    type: "appartments",
    date: "2022/10/20",
    popular: false,
  },
  {
    price: 500,
    city: "New York City, USA",
    address: "2821 Lake Sevilla, Palm Habour, TX",
    imageUrl:
      "https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    beds: 2,
    bathrooms: 2,
    area: "2*7.5",
    type: "villa",
    date: "2022/10/20",

    popular: true,
  },
  {
    price: 200,
    city: "New York City, USA",
    address: "2821 Lake Sevilla, Palm Habour, TX",
    imageUrl:
      "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    beds: 2,
    bathrooms: 2,
    area: "2*7.5",
    type: "appartments",
    date: "2022/10/20",
    popular: true,
  },
  {
    price: 220,
    city: "New Jersey, USA",
    address: "2821 Lake Sevilla, Palm Habour, TX",
    imageUrl:
      "https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    beds: 2,
    bathrooms: 2,
    area: "2*7.5",
    type: "appartments",
    date: "2022/10/20",
    popular: true,
  },
  {
    price: 200,
    city: "New York City, USA",
    address: "2821 Lake Sevilla, Palm Habour, TX",
    imageUrl:
      "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    beds: 2,
    bathrooms: 1,
    area: "2*7.5",
    type: "villa",
    date: "2022/10/20",
    popular: false,
  },
  {
    price: 110,
    city: "New Jersey, USA",
    address: "2821 Lake Sevilla, Palm Habour, TX",
    imageUrl:
      "https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    beds: 2,
    bathrooms: 2,
    area: "2*7.5",
    type: "pg",
    date: "2022/10/20",
    popular: false,
  },
  {
    price: 200,
    city: "New York City, USA",
    address: "2821 Lake Sevilla, Palm Habour, TX",
    imageUrl:
      "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    beds: 2,
    bathrooms: 5,
    area: "2*7.5",
    type: "appartments",
    date: "2022/10/20",
    popular: false,
  },
  {
    price: 200,
    city: "Kolkata, India",
    address: "2821 Lake Sevilla, Palm Habour, TX",
    imageUrl:
      "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    beds: 2,
    bathrooms: 2,
    area: "2*7.5",
    type: "pg",
    date: "2022/10/20",
    popular: false,
  },
  {
    price: 400,
    city: "New York City, USA",
    address: "2821 Lake Sevilla, Palm Habour, TX",
    imageUrl:
      "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    beds: 2,
    bathrooms: 2,
    area: "2*7.5",
    type: "pg",
    date: "2022/10/20",
    popular: false,
  },
  {
    price: 200,
    city: "New York City, USA",
    address: "2821 Lake Sevilla, Palm Habour, TX",
    imageUrl:
      "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    beds: 3,
    bathrooms: 2,
    area: "2*7.5",
    type: "appartments",
    date: "2022/10/20",
    popular: false,
  },
  {
    price: 250,
    city: "New York City, USA",
    address: "2821 Lake Sevilla, Palm Habour, TX",
    imageUrl:
      "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    beds: 5,
    bathrooms: 2,
    area: "2*7.5",
    type: "appartments",
    date: "2022/10/20",
    popular: false,
  },
];
