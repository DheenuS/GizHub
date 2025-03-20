import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../Context/CartContext";
import emptyCartIcon from "/assets/Icons/empty-cart.png";

const ViewCart = () => {
  const { cart, setCart } = useContext(CartContext);
  const navigate = useNavigate();
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, [setCart]);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));

    const totalAmount = cart.reduce((acc, item) => {
      const numericPrice = String(item.price).replace(/[^0-9.]/g, "");
      const priceValue = parseInt(numericPrice) || 0;
      return acc + priceValue * (item.quantity || 1);
    }, 0);

    setTotal(totalAmount.toFixed(2));
  }, [cart]);

  const removeCart = (itemToRemove) => {
    setCart((prevCart) =>
      prevCart.filter(
        (item) =>
          !(item.id === itemToRemove.id && item.category === itemToRemove.category)
      )
    );
  };

  return (
    <>
      <main className="px-4 lg:px-10 flex flex-col gap-2 min-h-[626px]">
        <p className="text-end text-white text-[16px] py-4 sm:py-4">
          Total Amount:
          <span className=" font-normal"> ₹{total}</span>
        </p>
        <article className="border-2 border-gray-600 rounded-md grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 p-4 max-w-full">
          {cart.length > 0 ? (
            cart.map((c) => (
              <div
                key={`${c.id}-${c.category}`}
                className="bg-white px-4 py-2 min-w-[100px] max-w-full min-h-[150px] max-h-full rounded-md"
              >
                <img
                  src={c.image}
                  alt={c.title}
                  loading="lazy"
                  className="w-full max-h-[150px] object-contain hover:scale-110 transition-transform duration-300 delay-100 p-2"
                />
                <div className="mt-4 text-center">
                  <p>
                    {c.title.length > 20
                      ? c.title.substring(0, 20) + "..."
                      : c.title}
                  </p>
                  <p className="font-semibold">₹{c.price}</p>
                </div>
                <button
                  onClick={() => removeCart(c)}
                  className="px-4 py-2 w-full min-w-fit text-white bg-red-600 hover:bg-red-700 font-medium mt-4 rounded-md active:bg-red-800 transition duration-100 delay-50 ease-in-out"
                >
                  Remove
                </button>
              </div>
            ))
          ) : (
            <div>
              <p className="p-2 text-white font-semibold text-center flex items-center justify-center text-[16px] sm:text-[18px] md:text-[20px]">
                Cart is Empty...
              </p>
              <img
                src={emptyCartIcon}
                alt="empty-cart"
                loading="lazy"
                className="w-full h-auto"
              />
              <button
                onClick={() => navigate("/")}
                className="px-4 py-2 w-full min-w-fit text-white bg-violet-600 hover:bg-violet-700 font-medium mt-4 rounded-md active:bg-violet-800 transition duration-100 delay-50 ease-in-out"
              >
                Add Products
              </button>
            </div>
          )}
        </article>
      </main>
    </>
  );
};

export default ViewCart;