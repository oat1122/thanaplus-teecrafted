import React from 'react';
import { Truck, Shield, RotateCcw } from 'lucide-react';

export const ProductFeatures = () => {
  const features = [
    {
      icon: Truck,
      text: 'ส่งฟรีทั่วประเทศ',
    },
    {
      icon: Shield,
      text: 'รับประกันคุณภาพ',
    },
    {
      icon: RotateCcw,
      text: 'เปลี่ยน-คืนได้ 7 วัน',
    },
  ];

  return (
    <div className="border-t pt-6">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
        {features.map(({ icon: Icon, text }, index) => (
          <div
            key={index}
            className="flex items-center space-x-3 bg-white p-3 rounded-lg shadow-sm"
          >
            <Icon className="h-5 w-5 text-gray-600 flex-shrink-0" />
            <span className="text-sm text-gray-600">{text}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
