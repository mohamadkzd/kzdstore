import { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import Container from "../Container/Container";

const Navbar = () => {
  const [menuMobile, setMenuMobile] = useState(false);
  return (
    
      <div
        className="w-full h-[100px] bg-[#2b2b2b] text-white flex justify-around items-center relative "
        dir="rtl"
      >
        {menuMobile ? (
          <div className="lg:hidden">
            <AiOutlineClose
              cursor={"pointer"}
              fontSize={"30px"}
              onClick={() => setMenuMobile(!menuMobile)}
            />
          </div>
        ) : (
          <div className="lg:hidden">
            <AiOutlineMenu
              cursor={"pointer"}
              fontSize={"30px"}
              onClick={() => setMenuMobile(!menuMobile)}
            />
          </div>
        )}

        <nav
          className={` lg:static absolute top-[100px] right-0 lg:w-auto w-screen lg:h-auto  lg:bg-inherit bg-[#252525] lg:p-0 py-[20px]  transition-all ease-linear ${
            menuMobile ? "opacity-[1]" : "lg:opacity-[1]  opacity-0"
          }`}
        >
          <ul className=" flex justify-center items-center gap-x-10 ">
            <li>
              <Link to="/">خانه</Link>
            </li>
            <li className=" group ">
              <Link className="py-[40px]" to="/store">
                فروشگاه
                <div
                  className={`transition-all ease-linear absolute top-[95%] right-0 max-w-[1400px] w-full opacity-0 invisible group-hover:opacity-[1] group-hover:visible group-hover:top-[100%]  group-hover:right-0`}
                >
                  <ul className="flex flex-col justify-center items-start gap-y-5 text-white bg-[#333333] pr-[20%] pb-[20px]">
                    <li>
                      <Link>موبایل</Link>
                    </li>
                    <li>
                      <Link>لپ تاپ</Link>
                    </li>
                    <li>
                      <Link>تپلت</Link>
                    </li>
                    <li>
                      <Link>کنسول گیم</Link>
                    </li>
                  </ul>
                </div>
              </Link>
            </li>
            <li>
              <Link>درباره ی ما</Link>
            </li>
            <li>
              <Link>ارتباط با ما</Link>
            </li>
          </ul>
        </nav>
        <div className="flex justify-center items-center gap-x-7 flex-wrap">
          <div className="border p-3 rounded-[10px] shadow-md shadow-[gray]">
            <h1>
              <Link to="/">KZDSTORE</Link>
            </h1>
          </div>
          <div className="border-b-2 pb-2 shadow-lg">
            <button>سبد خرید</button>
          </div>
        </div>
      </div>
    
  );
};

export default Navbar;
