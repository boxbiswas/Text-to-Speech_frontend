import React, { forwardRef } from 'react';

const Input = forwardRef(({
  label,
  id,
  type = 'text',
  error,
  className = '',
  ...props
}, ref) => {
  return (
    <div className="flex flex-col space-y-1.5 w-full">
      {label && (
        <label htmlFor={id} className="text-[11px] font-semibold uppercase tracking-wider text-[#9CA3AF]">
          {label}
        </label>
      )}
      <input
        ref={ref}
        id={id}
        type={type}
        className={`
          w-full h-11 px-4
          bg-white/75 backdrop-blur-sm
          border border-[#94A3B8]/25
          rounded-xl
          text-[15px] text-[#111827] placeholder:text-[#9CA3AF]
          transition-all duration-200
          outline-none
          focus:border-[#4F46E5] focus:ring-4 focus:ring-[#4F46E5]/10
          disabled:opacity-50 disabled:cursor-not-allowed
          ${error ? 'border-[#DC2626] focus:border-[#DC2626] focus:ring-[#DC2626]/10' : ''}
          ${className}
        `}
        {...props}
      />
      {error && (
        <p className="text-[13px] text-[#DC2626] mt-1">{error}</p>
      )}
    </div>
  );
});

Input.displayName = 'Input';

export default Input;
