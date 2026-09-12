import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../../redux/slices/authSlice';
import { useNavigate, Link } from 'react-router-dom';
import Input from '../ui/Input';
import Button from '../ui/Button';
import toast from 'react-hot-toast';

const RegisterForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
    });

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { loading } = useSelector((state) => state.auth);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const validateForm = () => {
        const { name, email, password } = formData;

        if (!name.trim() || !email.trim() || !password) {
            toast.error('Please fill in all fields');
            return false;
        }

        const nameRegex = /^[a-zA-Z\s]+$/;
        if (!nameRegex.test(name)) {
            toast.error('Name should only contain letters and spaces');
            return false;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            toast.error('Please enter a valid email address');
            return false;
        }

        if (password.length < 8) {
            toast.error('Password must be at least 8 characters long');
            return false;
        }

        return true;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) return;

        const resultAction = await dispatch(registerUser(formData));
        if (registerUser.fulfilled.match(resultAction)) {
            navigate('/app');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
                <Input
                    label="Full Name"
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                />

                <Input
                    label="Email"
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    required
                />

                <Input
                    label="Password"
                    id="password"
                    type="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="••••••••"
                    required
                />
            </div>

            <Button type="submit" loading={loading} className="w-full !rounded-full">
                Create Account
            </Button>

            <div className="flex justify-between items-center text-[13px] pt-2">
                <Link to="/login" className="text-[#9CA3AF] hover:text-[#6B7280] transition-colors">
                    Already have an account?
                </Link>
                <Link to="/login" className="font-semibold text-[#4F46E5] hover:text-[#4338CA] transition-colors">
                    Sign in
                </Link>
            </div>
        </form>
    );
};

export default RegisterForm;
