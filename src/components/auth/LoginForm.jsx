import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../redux/slices/authSlice';
import { useNavigate, Link } from 'react-router-dom';
import Input from '../ui/Input';
import Button from '../ui/Button';
import toast from 'react-hot-toast';

const LoginForm = () => {
    const [formData, setFormData] = useState({
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
        const { email, password } = formData;

        if (!email.trim() || !password) {
            toast.error('Please fill in all fields');
            return false;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            toast.error('Please enter a valid email address');
            return false;
        }

        return true;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) return;

        const resultAction = await dispatch(loginUser(formData));
        if (loginUser.fulfilled.match(resultAction)) {
            navigate('/app');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
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
                Sign in
            </Button>

            <div className="flex justify-between items-center text-[13px] pt-2">
                <Link to="#" className="text-[#9CA3AF] hover:text-[#6B7280] transition-colors">
                    Forgot password?
                </Link>
                <Link to="/register" className="font-semibold text-[#4F46E5] hover:text-[#4338CA] transition-colors">
                    Create an account
                </Link>
            </div>
        </form>
    );
};

export default LoginForm;
