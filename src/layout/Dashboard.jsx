import { FaHome, FaList, FaShoppingCart } from "react-icons/fa";
import { FaCalendar } from "react-icons/fa6";
import { MdReviews } from "react-icons/md";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="flex">
        {/* dashboard side bar */}
      <div className="w-64 min-h-screen bg-orange-400">
        <ul className="menu p-4">
          <li>
            <NavLink to="/dashboard/userHome"><FaHome /> User Home</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/reservation"><FaCalendar /> Reservation</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/cart"><FaShoppingCart /> My Cart</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/review"><MdReviews /> Add a Review</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/booking"><FaList /> My Bookings</NavLink>
          </li>
        </ul>
      </div>
      {/* dashboard content */}
      <div className="flex-1">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
