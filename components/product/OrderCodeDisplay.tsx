import React from 'react';
import { Copy } from 'lucide-react';

interface OrderCodeDisplayProps {
  orderCode: string;
  copied: boolean;
  onCopyCode: () => void;
}

export const OrderCodeDisplay = ({ orderCode, copied, onCopyCode }: OrderCodeDisplayProps) => {
  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-3 sm:p-4 space-y-3 sm:space-y-4 shadow-sm">
      <h4 className="font-semibold text-gray-900 flex items-center">
        <Copy className="h-4 w-4 mr-2 opacity-70" />
        โค้ดสั่งซื้อ LINE:
      </h4>
      <p className="text-xs text-blue-600 mb-2">
        คัดลอกโค้ดนี้แล้วแอดไลน์ <strong>@teecrafted</strong> เพื่อส่งคำสั่งซื้อ
      </p>
      <div className="bg-white/80 backdrop-blur-sm rounded-lg p-3 sm:p-4 border border-gray-100 shadow-inner text-sm">
        <pre className="whitespace-pre-wrap text-gray-700 max-h-48 overflow-y-auto text-xs sm:text-sm">
          {orderCode}
        </pre>
      </div>
      <div className="flex justify-end mt-2">
        <button
          onClick={onCopyCode}
          className="bg-gray-200 text-gray-800 py-2 px-3 rounded-lg text-xs sm:text-sm hover:bg-gray-300 transition-colors flex items-center space-x-1"
        >
          <Copy className="h-3 w-3" />
          <span>{copied ? 'คัดลอกแล้ว!' : 'คัดลอกโค้ด'}</span>
        </button>
      </div>
    </div>
  );
};
