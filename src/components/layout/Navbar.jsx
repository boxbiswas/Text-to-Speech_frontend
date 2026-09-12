import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../../redux/slices/authSlice';
import { AudioLines, LogOut } from 'lucide-react';
import Button from '../ui/Button';

const Navbar = () => {
    const { user } = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = async () => {
        await dispatch(logoutUser());
        navigate('/login');
    };

    const linkClasses = ({ isActive }) =>
        `transition-colors duration-200 font-medium text-[15px] ${
            isActive ? 'text-[#4F46E5]' : 'text-[#6B7280] hover:text-[#111827]'
        }`;

    return (
        <nav className="sticky top-0 z-50 w-full bg-white/70 backdrop-blur-[18px] border-b border-white/65 shadow-[0_4px_20px_rgba(15,23,42,0.03)]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo & Brand */}
                    <div className="flex items-center space-x-8">
                        <div className="flex items-center space-x-2">
                            <div className="w-8 h-8 bg-[#4F46E5] rounded-lg flex items-center justify-center text-white shadow-sm">
                                <AudioLines size={18} />
                            </div>
                            <span className="font-bold text-xl text-[#111827] tracking-tight">AuraVox</span>
                        </div>
                        
                        {/* Navigation Links */}
                        <div className="hidden md:flex space-x-6">
                            <NavLink to="/app" className={linkClasses} end>
                                Studio
                            </NavLink>
                            <NavLink to="/history" className={linkClasses}>
                                History
                            </NavLink>
                        </div>
                    </div>

                    {/* User Actions */}
                    <div className="flex items-center space-x-4">
                        <span className="text-[#374151] font-medium hidden sm:block text-[15px]">
                            {user?.name}
                        </span>
                        <Button variant="secondary" onClick={handleLogout} className="!h-9 !px-4 !text-[13px] !rounded-full group">
                            <LogOut size={16} className="mr-2 text-[#9CA3AF] group-hover:text-[#374151] transition-colors" />
                            Log out
                        </Button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
