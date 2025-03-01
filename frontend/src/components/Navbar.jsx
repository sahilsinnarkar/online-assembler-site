import { UserButton, SignInButton, SignedIn, SignedOut } from "@clerk/clerk-react";
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-teal-950 sticky text-white px-6 py-4 flex justify-between items-center">

      <h1 className="text-2xl font-bold">Assemble</h1>


      {/* Right - Navigation + Authentication */}
      <div className="flex items-center space-x-6">
        {/* Navigation Buttons */}
        <div className="flex space-x-4">
          <Link to="/learn">
            <button className="px-5 py-2 bg-teal-600 opacity-90 hover:bg-teal-500 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              Learn
            </button>
          </Link>
          <Link to="/contribute">
            <button className="px-5 py-2 bg-teal-600 opacity-90 hover:bg-teal-500 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              Contribute
            </button>
          </Link>
          <Link to="/try-it-yourself">
            <button className="px-5 py-2 bg-teal-600 opacity-90 hover:bg-teal-500 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              Try it yourself
            </button>
          </Link>
        </div>

        {/* Authentication */}
        <div>
          <SignedIn>
            <UserButton />
          </SignedIn>
          <SignedOut>
            <SignInButton mode="modal">
              <button className="px-5 py-2 bg-teal-600 opacity-90 hover:bg-teal-500 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">Sign In</button>
            </SignInButton>
          </SignedOut>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
