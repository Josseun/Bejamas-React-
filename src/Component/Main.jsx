import React, { useState } from "react";
import Nav from "./Nav";
import Hero from "./Hero";
import Img from "../assets/img/Samurai-King-Resting.jpg";
import Img1 from "../assets/img/Red-bench.jpg";
import Img2 from "../assets/img/egg-balloons.jpg";
import Img3 from "../assets/img/man.png";
import Img4 from "../assets/img/Architecture.jpg";
import ProductList from "./ProductList";
import Filters from "./Filters";
import { LuArrowUpDown } from "react-icons/lu";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import Img5 from "../assets/img/Istanbul-turkey.jpg";
import Img6 from "../assets/img/pexels-photo.jpg";
import Img7 from "../assets/img/egg-balloons.jpg";

function Main() {
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const products = [
    {
      id: 0,
      name: "Samurai King Resting",
      category: "Pets",
      price: "$10000.00",
      image: Img,
    },
    {
      id: 1,
      name: "Red Bench",
      category: "People",
      price: "$3.89",
      image: Img1,
    },
    {
      id: 2,
      name: "Egg Balloon",
      category: "Food",
      price: "$93.89",
      image: Img2,
    },
    {
      id: 3,
      name: "Egg Balloon",
      category: "Food",
      price: "$93.89",
      image: Img2,
    },
    { id: 4, name: "Man", category: "People", price: "$100.00", image: Img3 },
    {
      id: 5,
      name: "Architecture",
      category: "Landmarks",
      price: "$101.00",
      image: Img4,
    },
    {
      id: 6,
      name: "Architecture",
      category: "Landmarks",
      price: "$101.00",
      image: Img4,
    },
  ];

  const addToCart = (product) => {
    setSelectedProducts((prevProducts) => {
      const existingProduct = prevProducts.find((p) => p.id === product.id);
      if (!existingProduct) {
        return [...prevProducts, product];
      }
      return prevProducts;
    });
    setIsCartOpen(true);
  };

  const clearCart = () => {
    setSelectedProducts([]);
  };

  const closeCart = () => {
    setIsCartOpen(false);
  };

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const ItemList = products
    .filter((product) => product.id !== 0)
    .map((product) => {
      return (
        <div key={product.id}>
          <div className="lg:pr-10 pb-10 ssm:pr-0">
            <div className="relative">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-[398px]"
              />
              <button
                onClick={() => addToCart(product)}
                className="bg-black text-white p-3 flex justify-center items-center absolute bottom-0 w-full cursor-pointer hover:bg-gray-800 transition-colors"
              >
                Add to Cart
              </button>
            </div>
            <div className="text-[#656565] font-Archivo-bold text-[22px] pt-2">
              {product.category}
            </div>
            <div className="font-Archivo-bold text-[34px] ">{product.name}</div>
            <div className="font-Archivo-bold text-[#656565] text-[29px]">
              {product.price}
            </div>
          </div>
        </div>
      );
    });

  const heroProduct = products.find((product) => product.id === 0);

  const heroContent = heroProduct ? (
    <div key={heroProduct.id}>
      <div className="lg:block ssm:hidden">
        <div className="flex justify-center items-center">
          <div className="flex justify-between items-center w-full ">
            <div className="font-bold font-Archivo-bold lg:text-3xl">
              {heroProduct.name}
            </div>
            <button
              onClick={() => addToCart(heroProduct)}
              className="font-Archivo-reg font-medium bg-black text-white px-5 py-3 text-2xl cursor-pointer hover:bg-gray-800 transition-colors"
            >
              ADD TO CART
            </button>
          </div>
        </div>
        <div className="flex justify-center items-center w-full h-full py-5">
          <div className="flex justify-center items-center w-full h-full relative">
            <img
              src={heroProduct.image}
              className="w-full h-[553px]"
              alt="Samurai King Resting"
            />
            <div className="bg-white text-xl font-Archivo-bold py-4 w-70 absolute bottom-0 left-0 flex justify-center items-center">
              Photo of the day
            </div>
          </div>
        </div>
        <div className="flex justify-between w-full h-full ">
          <div className="flex flex-col justify-between w-full h-full ">
            <div className="font-Archivo-bold text-xl">
              About the Samurai King Resting
            </div>
            <div className="font-Archivo-bold text-[#656565] font-bold text-xl py-5">
              Pets
            </div>
            <div className="w-full max-w-[690px] text-lg font-Archivo-reg font-normal text-[#656565] pr-5">
              <div>
                So how did the classical Latin become so incoherent? According
                to McClintock, a 15th century typesetter likely scrambled part
                of Cicero's De Finibus in order to provide placeholder text to
                mockup various fonts for a type specimen book.So how did the
                classical Latin become so incoherent? According to McClintock, a
                15th century typesetter likely scrambled part of Cicero's De
                Finibus in order to provide placeholder
              </div>
              <div className="mt-8">
                text to mockup various fonts for a type specimen book.So how did
                the classical Latin become so incoherent? According to
                McClintock.
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-between items-end w-200 h-full  ">
            <div className="w-full font-Archivo-bold text-xl text-right mb-8">
              People also buy
            </div>
            <div className="flex justify-between w-full h-full mb-10 ">
              <img src={Img5} alt="" className="w-[130px] h-[160px]" />
              <img src={Img6} alt="" className="w-[130px] h-[160px]" />
              <img src={Img7} alt="" className="w-[130px] h-[160px]" />
            </div>
            <div className="w-full mt-5 text-right">
              <div className="text-2xl text-[#000000] font-Archivo-bold ">
                Details
              </div>
              <div className="text-[#656565] text-base">
                Size: 1020 x 1020 pixel
              </div>
              <div className="text-[#656565] text-base">Size: 15 mb</div>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:hidden ssm:block">
        <div className="flex justify-center items-center">
          <div className="flex justify-between items-center w-full px-10 ssm:p-0">
            <div className="font-bold font-Archivo-bold text-2xl">
              {heroProduct.name}
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center w-full h-full py-5">
          <div className="flex justify-center items-center w-full h-full relative">
            <img
              src={heroProduct.image}
              className="w-full"
              alt="Samurai King Resting"
            />
            <div className="bg-white text-sm font-Archivo-bold py-3 w-40 absolute bottom-0 left-0 flex justify-center items-center">
              Photo of the day
            </div>
          </div>
          <button
            onClick={() => addToCart(heroProduct)}
            className="font-Archivo-reg font-medium bg-black text-white w-full flex justify-center items-center py-5 text-2xl mt-5 hover:bg-gray-800 transition-colors"
          >
            ADD TO CART
          </button>
        </div>
        <div className="flex flex-col justify-between w-full h-full ">
          <div className="flex flex-col justify-between w-full h-full ">
            <div className="font-Archivo-bold text-lg pb-5">
              About the Samurai King Resting
            </div>
            <div className="w-full text-sm font-Archivo-reg font-normal text-[#656565]">
              <div>
                So how did the classical Latin become so incoherent? According
                to McClintock, a 15th century typesetter likely scrambled part
                of Cicero's De Finibus in order to provide placeholder text to
                mockup various fonts for a type specimen book.
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-between items-end w-full h-full  ">
            <div className="w-full font-Archivo-bold text-xl text-left mt-8 mb-4">
              People also buy
            </div>
            <div className="flex justify-around items-center w-full h-full mb-10 ">
              <img src={Img5} alt="" className="w-[98px] h-[122px]" />

              <img src={Img6} alt="" className="w-[98px] h-[122px] mx-3" />

              <img src={Img7} alt="" className="w-[98px] h-[122px]" />
            </div>
            <div className="w-full mt-5 pl-5">
              <div className="text-2xl text-[#000000] font-Archivo-bold ">
                Details
              </div>
              <div className="text-[#656565] text-base">
                Size: 1020 x 1020 pixel
              </div>
              <div className="text-[#656565] text-base">Size: 15 mb</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : null;

  return (
    <div className="w-full font-Archivo-reg lg:px-10 md:px-5 ssm:px-3">
      <Nav cartCount={selectedProducts.length} toggleCart={toggleCart} />
      {/* Cart Modal */}
      <div className="w-full relative">
        <hr className="w-full mb-10 text-[#E4E4E4] border-4" />
        {isCartOpen && (
          <div className="absolute top-2 w-[443px] flex justify-end h-auto right-0 z-[1000]">
            <div className="bg-white w-[90%] max-w-[400px] border-4 border-[#E4E4E4] border-t-0 overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.3)]">
              <div className="flex justify-end p-2">
                <button
                  onClick={closeCart}
                  className="text-2xl hover:text-gray-600 font-bold"
                >
                  ×
                </button>
              </div>

              <div className="max-h-[400px] overflow-y-auto">
                {selectedProducts.length === 0 ? (
                  <p className="text-center text-[#666] p-8 text-[23px] font-Archivo-reg font-medium">
                    Your cart is empty
                  </p>
                ) : (
                  selectedProducts.map((product) => (
                    <div
                      key={product.id}
                      className="p-4 border-b border-gray-200 flex flex-col justify-between items-center"
                    >
                      <div className="w-full flex justify-between items-center">
                        <div>
                          <div className="text-xl font-bold font-Archivo-reg">
                            {product.name}
                          </div>
                          <div className="text-[29px] text-[#656565] font-normal font-Archivo-reg">
                            {product.price}
                          </div>
                        </div>
                        <img
                          className="w-[149px] h-[86px]"
                          src={product.image}
                          alt={product.name}
                        />
                      </div>
                    </div>
                  ))
                )}
              </div>
              <div className="p-4 border-t border-gray-200">
                <button
                  onClick={clearCart}
                  className="w-full bg-white text-[#333] border-2 border-[#333] px-3 py-3 rounded cursor-pointer text-[23px] font-Archivo-reg font-medium uppercase tracking-wider hover:bg-gray-50 transition-colors"
                >
                  CLEAR
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      <Hero heroContent={heroContent} />
      <hr className="w-full my-10 text-[#E4E4E4] border-1" />
      <div>
        <div className="flex justify-between items-center my-20">
          <div className="flex lg:text-3xl ssm:text-[18px]">
            <div className="font-Archivo-bold ">Photography</div>
            <div className="font-Archivo-bold px-4 ">/</div>
            <div className="font-normal text-[#9B9B9B] ">Premium Photos</div>
          </div>
          <div className="lg:flex font-normal text-xl md:flex ssm:hidden">
            <div className="flex justify-center items-center pr-4 text-[#9B9B9B]">
              <LuArrowUpDown size={25} className="pr-1" />
              Sort By
            </div>
            <div className="flex justify-center items-center">
              Price <MdOutlineKeyboardArrowDown size={25} />
            </div>
          </div>
          <div className="lg:hidden ssm:block">
            <svg
              width="29"
              height="29"
              viewBox="0 0 29 29"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M23.8119 0H5.18805C2.32736 0 0 2.32736 0 5.18805V23.812C0 26.6726 2.32736 29 5.18805 29H23.812C26.6726 29 29 26.6726 29 23.8119V5.18805C29 2.32736 26.6726 0 23.8119 0ZM27.3008 23.8119C27.3008 25.7357 25.7357 27.3008 23.8119 27.3008H5.18805C3.26431 27.3008 1.69922 25.7357 1.69922 23.8119V5.18805C1.69922 3.26431 3.26431 1.69922 5.18805 1.69922H23.812C25.7357 1.69922 27.3008 3.26431 27.3008 5.18805V23.8119Z"
                fill="black"
              />
              <path
                d="M24.5103 6.3702H11.5701C11.2143 5.31357 10.2149 4.55017 9.03986 4.55017C7.86479 4.55017 6.86537 5.31357 6.50961 6.3702H4.48975C4.02054 6.3702 3.64014 6.7506 3.64014 7.21981C3.64014 7.68902 4.02054 8.06942 4.48975 8.06942H6.50966C6.86542 9.12605 7.86485 9.88946 9.03991 9.88946C10.215 9.88946 11.2144 9.12605 11.5702 8.06942H24.5103C24.9795 8.06942 25.3599 7.68902 25.3599 7.21981C25.3599 6.7506 24.9795 6.3702 24.5103 6.3702ZM9.03986 8.19024C8.50477 8.19024 8.06943 7.7549 8.06943 7.21981C8.06943 6.68473 8.50477 6.24939 9.03986 6.24939C9.57494 6.24939 10.0103 6.68473 10.0103 7.21981C10.0103 7.7549 9.57494 8.19024 9.03986 8.19024Z"
                fill="black"
              />
              <path
                d="M24.5103 13.6504H22.4904C22.1346 12.5937 21.1351 11.8303 19.9601 11.8303C18.7851 11.8303 17.7857 12.5937 17.4299 13.6504H4.48975C4.02054 13.6504 3.64014 14.0308 3.64014 14.5C3.64014 14.9692 4.02054 15.3496 4.48975 15.3496H17.4299C17.7857 16.4062 18.7852 17.1696 19.9602 17.1696C21.1352 17.1696 22.1347 16.4062 22.4904 15.3496H24.5103C24.9795 15.3496 25.3599 14.9692 25.3599 14.5C25.3599 14.0308 24.9795 13.6504 24.5103 13.6504ZM19.9602 15.4704C19.4251 15.4704 18.9897 15.035 18.9897 14.5C18.9897 13.9649 19.4251 13.5295 19.9602 13.5295C20.4953 13.5295 20.9306 13.9649 20.9306 14.5C20.9306 15.035 20.4953 15.4704 19.9602 15.4704Z"
                fill="black"
              />
              <path
                d="M24.5103 20.9306H15.2102C14.8545 19.874 13.855 19.1106 12.68 19.1106C11.5049 19.1106 10.5055 19.874 10.1497 20.9306H4.48975C4.02054 20.9306 3.64014 21.311 3.64014 21.7802C3.64014 22.2494 4.02054 22.6298 4.48975 22.6298H10.1497C10.5055 23.6865 11.5049 24.4499 12.68 24.4499C13.855 24.4499 14.8545 23.6865 15.2102 22.6298H24.5103C24.9795 22.6298 25.3599 22.2494 25.3599 21.7802C25.3599 21.311 24.9795 20.9306 24.5103 20.9306ZM12.68 22.7507C12.1449 22.7507 11.7096 22.3154 11.7096 21.7803C11.7096 21.2452 12.1449 20.8099 12.68 20.8099C13.2151 20.8099 13.6504 21.2452 13.6504 21.7802C13.6504 22.3153 13.2151 22.7507 12.68 22.7507Z"
                fill="black"
              />
            </svg>
          </div>
        </div>
        <div className="flex justify-between w-full ">
          <div className="lg:block ssm:hidden">
            <Filters />
          </div>
          <ProductList ItemList={ItemList} />
        </div>
      </div>
      <div className="w-full flex justify-center items-center">
         <div className="flex justify-around items-center w-[187px]">
        <button className="text-[29px] font-Archivo-reg font-normal text-black cursor-pointer hover:text-gray-600">
          &#60;
        </button>
        <button className="text-[29px] font-Archivo-reg font-normal text-[#B4B4B4] cursor-pointer hover:text-black">
          1
        </button>
        <button className="text-[29px] font-Archivo-reg font-normal text-[#B4B4B4] cursor-pointer hover:text-black">
          2
        </button>
        <button className="text-[29px] font-Archivo-reg font-normal text-black cursor-pointer">
          3
        </button>
        <button className="text-[29px] font-Archivo-reg font-normal text-[#B4B4B4] cursor-pointer hover:text-black">
          4
        </button>
        <button className="text-[29px] font-Archivo-reg font-normal text-black cursor-pointer hover:text-gray-600">
          &#62;
        </button>
      </div>
      </div>
     
    </div>
  );
}

export default Main;
