import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="fixed bottom-3 w-full">
      <div className="max-w-80 w-[95%] mx-auto ">
        <div className="py-3 px-6 flex justify-between">
          <div className="flex gap-3">
            <Link className="p-4 bg-slate-500" to="/home">
              Home
            </Link>
            <Link className="p-4 bg-slate-500" to="/shop">
              Shop
            </Link>
            <Link className="p-4 bg-slate-500" to="/today">
              Today
            </Link>
            <Link className="p-4 bg-slate-500" to="/login">
              login
            </Link>
            <Link className="p-4 bg-slate-500" to="/creator">
              Creator
            </Link>
            <Link className="p-4 bg-slate-500" to="/signin">
              SignIn
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
