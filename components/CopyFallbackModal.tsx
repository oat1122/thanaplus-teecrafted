"use client";

import React from "react";
import { X } from "lucide-react";

interface CopyFallbackModalProps {
  isOpen: boolean;
  onClose: () => void;
  text: string;
  title?: string;
}

const CopyFallbackModal: React.FC<CopyFallbackModalProps> = ({
  isOpen,
  onClose,
  text,
  title = "คัดลอกข้อความ",
}) => {
  if (!isOpen) return null;

  return (    <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-4">
      <div
        className="absolute inset-0 bg-gradient-to-br from-gray-700/70 via-gray-900/70 to-black/70 backdrop-blur-sm"
        onClick={onClose}
      ></div>
      <div className="bg-white rounded-lg w-full max-w-sm sm:max-w-md md:max-w-lg z-10 overflow-hidden shadow-2xl">
        <div className="p-3 sm:p-4 border-b flex justify-between items-center">
          <h3 className="text-base sm:text-lg font-semibold">{title}</h3>
          <button
            onClick={onClose}
            className="p-1 rounded-full hover:bg-gray-100"
          >
            <X className="h-4 w-4 sm:h-5 sm:w-5" />
          </button>
        </div>        <div className="p-3 sm:p-4">
          <p className="mb-2 text-xs sm:text-sm text-gray-600">
            ไม่สามารถคัดลอกอัตโนมัติได้ กรุณาคลิกในกล่องข้อความแล้วเลือก
            &ldquo;คัดลอก&rdquo; หรือกด Ctrl+C (Cmd+C บน Mac)
          </p>
          <p className="mb-2 text-xs sm:text-sm text-blue-600 font-medium">
            <span className="bg-blue-50 inline-block px-1 py-0.5 rounded-sm">หลังจากคัดลอกแล้ว กรุณาเปิดแอพ LINE และวางข้อความเพื่อส่งคำสั่งซื้อ หรือแอด @teecrafted และส่งข้อความนี้</span>
          </p>
          <div
            className="bg-gray-50 border rounded-md p-2 sm:p-3 mb-3 sm:mb-4 focus:outline-none"
            onClick={(e) => {
              // Select all text when clicked
              const target = e.currentTarget;
              const selection = window.getSelection();
              const range = document.createRange();
              range.selectNodeContents(target);
              selection?.removeAllRanges();
              selection?.addRange(range);
            }}
          >
            <pre className="whitespace-pre-wrap text-xs sm:text-sm max-h-40 sm:max-h-60 overflow-y-auto">{text}</pre>
          </div>
          <div className="flex justify-end">
            <button
              onClick={onClose}
              className="px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-gray-200 to-gray-300 text-gray-800 rounded-md text-sm hover:from-gray-300 hover:to-gray-400 transition-colors"
            >
              ปิด
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CopyFallbackModal;
