

import { ShoppingCart, LogIn, UserPlus, Menu, X } from "lucide-react";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";



export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const authCtx = useContext(AuthContext);

    console.log(authCtx);

    return (
        <nav className="w-full bg-white shadow-md">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex justify-between items-center h-16">

                    {/* Logo */}
                    <div className="text-2xl font-bold text-gray-800 cursor-pointer">
                        LIM<span className="text-indigo-600">O</span>
                    </div>

                    {/* Desktop Links */}
                    <div className="hidden md:flex items-center space-x-8">
                        <Link to="/" className="hover:text-indigo-600 transition">Home</Link>
                        <Link to="/" className="hover:text-indigo-600 transition">Products</Link>
                        <Link to="/" className="hover:text-indigo-600 transition">Categories</Link>

                        <Link to="/login" onClick={() => authCtx.setIsLogin(true)} className="flex items-center gap-1 hover:text-indigo-600 transition">
                            <LogIn size={18} /> Login
                        </Link>

                        {
                            (authCtx.isLogin == false) ? <Link  to="/" className="flex items-center gap-1 hover:text-indigo-600 transition">
                                <UserPlus size={18} /> Register
                            </Link> : <Link onClick={() => authCtx.setIsLogin(false)} to="/" className="flex items-center gap-1 hover:text-indigo-600 transition">
                                <UserPlus size={18} /> Logout
                            </Link>
                        }

                        <Link to="/" className="relative hover:text-indigo-600 transition">
                            <ShoppingCart size={22} />
                            <span className="absolute -top-2 -right-2 bg-indigo-600 text-white text-xs px-1.5 rounded-full">
                                2
                            </span>
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button onClick={() => setIsOpen(!isOpen)}>
                            {isOpen ? <X size={26} /> : <Menu size={26} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {(isOpen == true) ? (
                <div className="md:hidden bg-white shadow-lg px-6 py-4 space-y-4">
                    <Link to="/" className="block hover:text-indigo-600">Home</Link>
                    <Link to="/" className="block hover:text-indigo-600">Products</Link>
                    <Link to="/" className="block hover:text-indigo-600">Categories</Link>

                    <Link to="/login" className="flex items-center gap-2 hover:text-indigo-600">
                        <LogIn size={18} /> Login
                    </Link>

                    <Link to="/" className="flex items-center gap-2 hover:text-indigo-600">
                        <UserPlus size={18} /> Register
                    </Link>

                    <Link to="/" className="flex items-center gap-2 hover:text-indigo-600">
                        <ShoppingCart size={18} /> Cart (2)
                    </Link>
                </div>
            ) : null
            }
        </nav>
    )
}