import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="flex p-4 bg-gray-900 justify-between items-center">
        <div className="text-white font-bold">Logo</div>
        <div>
            <ul className="flex gap-4">
                <li className="text-lg text-slate-50 hover:text-gray-300">
                    <Link>Home</Link>
                </li>
                <li className="text-lg text-slate-50 hover:text-gray-300">
                    <Link>Login</Link>
                </li>
                <li className="text-lg text-slate-50 hover:text-gray-300">
                    <Link>About</Link>
                </li>
                <li className="text-lg text-slate-50 hover:text-gray-300">
                    <Link>Components</Link>
                </li>
                
            </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
