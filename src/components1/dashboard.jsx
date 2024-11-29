import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { userContext } from "../context/profile";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { products } from "./products";

const Dashboard = () => {
  // State to hold the list of menu items
  const [menuItems, setMenuItems] = useState([]);
  const [state, setter] = useState(true);
  const { user } = useContext(userContext);
  const router = useNavigate();
  //console.log(user);
  useEffect(() => {
    console.log(user);
    if (user._id == "") {
      //router("/login");
    }
  }, [user]);

  // State to hold the form inputs
  const [newItem, setNewItem] = useState({
    name: "",
    price: "",
    description: "",
    image: "",
  });

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewItem({
      ...newItem,
      [name]: value,
    });
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (newItem.name && newItem.price) {
      console.log(newItem);
      products.push({
        id: products.length + 1,
        ...newItem,
        price: parseInt(newItem.price),
      });
    }
    console.log(products);
    e.target.reset();
    router("/");
  };

  //console.log(user._id);

  return (
    <>
      {(user._id != undefined && user._id!="")? (
        <div className="container mx-auto p-8">
          <h1 className="mb-6 text-2xl font-bold">Add New Menu Item</h1>

          {/* Form to add a new item */}
          <form
            onSubmit={handleSubmit}
            className="mb-6 rounded-lg bg-white p-6 shadow-md"
          >
            <div className="mb-4">
              <label
                className="mb-2 block font-bold text-gray-700"
                htmlFor="name"
              >
                Item Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={newItem.name}
                onChange={handleInputChange}
                className="w-full rounded-lg border px-4 py-2 focus:outline-none"
                placeholder="Enter item name"
                required
              />
            </div>

            <div className="mb-4">
              <label
                className="mb-2 block font-bold text-gray-700"
                htmlFor="price"
              >
                Price
              </label>
              <input
                type="number"
                id="price"
                name="price"
                value={newItem.price}
                onChange={handleInputChange}
                className="w-full rounded-lg border px-4 py-2 focus:outline-none"
                placeholder="Enter price"
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="mb-2 block font-bold text-gray-700"
                htmlFor="name"
              >
                Image
              </label>
              <input
                type="text"
                id="image"
                name="image"
                value={newItem.image}
                onChange={handleInputChange}
                className="w-full rounded-lg border px-4 py-2 focus:outline-none"
                placeholder="Enter item name"
                required
              />
            </div>

            <div className="mb-4">
              <label
                className="mb-2 block font-bold text-gray-700"
                htmlFor="description"
              >
                Description
              </label>
              <textarea
                id="description"
                name="description"
                value={newItem.description}
                onChange={handleInputChange}
                className="w-full rounded-lg border px-4 py-2 focus:outline-none"
                placeholder="Enter description"
              />
            </div>

            <button
              type="submit"
              className="rounded-lg bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
            >
              Add Item
            </button>
          </form>
        </div>
      ) : (
        <div className="flex flex-row items-center justify-center gap-[5rem] p-5">
          <img
            src="./teddy.jpeg"
            alt=""
            className="h-[40rem] w-[50rem] rounded-[2rem]"
          />
          <div className="flex flex-col items-center justify-center gap-[2rem]">
            <h1 className="text-4xl font-bold">Please Login/Signup</h1>
            <NavLink
              className="rounded-[2rem] border-2 border-black px-5"
              to="/login"
            >
              Login or Signup
            </NavLink>
          </div>
        </div>
      )}
    </>
  );
};

export default Dashboard;
