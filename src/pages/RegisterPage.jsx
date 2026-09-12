import React from 'react';
import RegisterForm from '../components/auth/RegisterForm';
import { AudioLines } from 'lucide-react';

const RegisterPage = () => {
    return (
        <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden bg-[#F7F9FC]">
            {/* Subtle ambient gradients */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                <div className="absolute top-[10%] left-[10%] w-[500px] h-[500px] rounded-full bg-[#4F46E5] opacity-[0.07] blur-[100px]"></div>
                <div className="absolute bottom-[10%] right-[10%] w-[500px] h-[500px] rounded-full bg-[#0EA5E9] opacity-[0.05] blur-[100px]"></div>
            </div>

            <div className="w-full max-w-[420px] relative z-10">
                <div className="bg-white rounded-[32px] shadow-[0_20px_50px_rgba(15,23,42,0.06)] p-10">
                    <div className="flex items-center space-x-3 mb-8">
                        <div className="w-10 h-10 bg-[#4F46E5] rounded-xl flex items-center justify-center text-white shadow-sm">
                            <AudioLines size={24} />
                        </div>
                        <span className="font-bold text-xl text-[#111827]">AuraVox</span>
                    </div>

                    <div className="mb-8">
                        <h1 className="text-3xl font-bold text-[#111827] tracking-tight">Create an account</h1>
                        <p className="text-[#6B7280] mt-2 text-[15px]">Generate incredibly realistic voices today.</p>
                    </div>

                    <RegisterForm />
                </div>
            </div>
        </div>
    );
};

export default RegisterPage;
