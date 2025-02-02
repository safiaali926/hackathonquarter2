"use client";

import { useState, useEffect } from "react";
import { FiHeart } from "react-icons/fi";

// Define the product structure
interface Product {
  _id: string;
  title: string;
  description?: string;
  price?: number;
  originalprice?: number;
  reviews?: number;
  imageurl: string;
  categories?: string[];
  tags?: string[];
}

export default function WishlistFunc({ product }: { product: Product }) {
  const [wishlist, setWishlist] = useState<Product[]>([]);

  // Load wishlist from localStorage on component mount
  useEffect(() => {
    const storedWishlist = localStorage.getItem("wishlist");
    if (storedWishlist) {
      setWishlist(JSON.parse(storedWishlist));
    }
  }, []);

  // Handle Wishlist Add/Remove
  const handleWishlistToggle = (product: Product) => {
    const isAlreadyInWishlist = wishlist.some((item) => item._id === product._id);

    const updatedWishlist = isAlreadyInWishlist
      ? wishlist.filter((item) => item._id !== product._id) // Remove from wishlist
      : [...wishlist, product]; // Add to wishlist

    setWishlist(updatedWishlist);
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist)); // Save updated wishlist to localStorage
  };

  return (
    <button
      className="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full hover:bg-gray-200"
      aria-label="Add to Wishlist"
      onClick={() => handleWishlistToggle(product)}
    >
      <FiHeart
        className={`text-xl ${wishlist.some((item) => item._id === product._id) ? "text-pink-500" : ""}`}
      />
    </button>
  );
}
