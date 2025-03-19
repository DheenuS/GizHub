import React, { useContext, useState } from "react";
import info from "../db/db.json";
import cartIcon from "../assets/Icons/shopping-cart-white.png";
import { CartContext } from "../Context/CartContext";

const Products = () => {
  const { cart, setCart } = useContext(CartContext);
  const [data] = useState(info);

  const categories = [
    { name: "Smart Phones", key: "smartphones" },
    { name: "Airpods", key: "airpods" },
    { name: "Smart Watches", key: "smartwatches" },
  ];

  return (
    <main className="px-4 sm:px-6 lg:px-10 flex flex-col gap-8">
      {categories.map(({ name, key }) => (
        data[key] && data[key].length > 0 ? (
          <article key={key} className="flex flex-col gap-4">
            <h1 className="text-left text-white font-semibold text-[16px] sm:text-[20px] py-2 mt-2 underline underline-offset-8">
              {name}
            </h1>
            <section className="rounded-md grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 max-w-full">
              {data[key].map((product) => {
                const title = product.title.length > 20 
                  ? product.title.substring(0, 20) + "..." 
                  : product.title;

                const addCart = () => setCart([...cart, product]);

                const removeCart = () => {
                  const index = cart.findIndex(
                    (item) => item.id === product.id && item.category === product.category
                  );
                  if (index !== -1) {
                    const newCart = [...cart];
                    newCart.splice(index, 1);
                    setCart(newCart);
                  }
                };

                return (
                  <div
                    key={product.id}
                    className="bg-white px-4 py-2 min-w-[100px] max-w-full min-h-[150px] max-h-full rounded-md"
                  >
                    <img
                      src={`src/assets/Images/${product.image}`}
                      alt={product.title}
                      className="w-full max-h-[150px] object-contain hover:scale-110 transition-transform duration-300 delay-100 p-2"
                    />
                    <div className="mt-4 text-center">
                      <p>{title}</p>
                      <p className="font-semibold">₹{product.price}</p>
                    </div>
                    {cart.includes(product) ? (
                      <button
                        type="button"
                        onClick={removeCart}
                        className="flex items-center justify-center gap-2 px-4 py-2 w-full min-w-fit text-white bg-red-600 hover:bg-red-700 font-medium mt-4 rounded-md active:bg-red-800 transition duration-100 delay-50 ease-in-out"
                      >
                        <img src={cartIcon} className="link w-6 h-6" />
                        Remove
                      </button>
                    ) : (
                      <button
                        type="button"
                        onClick={addCart}
                        className="flex items-center justify-center gap-2 px-4 py-2 w-full min-w-fit text-white bg-violet-600 hover:bg-violet-700 font-medium mt-4 rounded-md active:bg-violet-800 transition duration-100 delay-50 ease-in-out"
                      >
                        <img src={cartIcon} className="link w-6 h-6" />
                        Add to Cart
                      </button>
                    )}
                  </div>
                );
              })}
            </section>
          </article>
        ) : (
          <p key={key} className="text-white">No products found in {name}...</p>
        )
      ))}
    </main>
  );
};

export default Products;
