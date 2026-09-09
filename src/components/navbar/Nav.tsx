import { FaCartPlus } from "react-icons/fa";

const Nav = () => {
  return (
    <>
      <nav className="py-6 shadow">
        <div className="flex justify-between items-center gap-5  container mx-auto ">
          <div>
            <span className="text-2xl font-bold bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent">DigiTools</span>
          </div>
          <div>
            <ul className="flex justify-between items-center gap-5">
              <li>
                <a href="#">Products</a>
              </li>
              <li>
                <a href="#">Features</a>
              </li>
              <li>
                <a href="#">Pricing</a>
              </li>
              <li>
                <a href="#">Testimonials</a>
              </li>
              <li>
                <a href="#">FAQ</a>
              </li>
            </ul>
          </div>
          <div className="flex justify-between items-center gap-3">
            <FaCartPlus />
            <p>
              <a href="#">Login</a>
            </p>
            <button>Get Started</button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
