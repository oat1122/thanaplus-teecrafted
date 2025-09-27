import React from 'react';

interface ValidationMessageProps {
  show: boolean;
}

export const ValidationMessage = ({ show }: ValidationMessageProps) => {
  if (!show) return null;

  return (
    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4" role="alert">
      <p className="text-yellow-800 text-sm">กรุณาเลือกขนาดและสีก่อนสร้างโค้ดสั่งซื้อ</p>
    </div>
  );
};
