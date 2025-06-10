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

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-black bg-opacity-50"
        onClick={onClose}
      ></div>
      <div className="bg-white rounded-lg w-full max-w-lg z-10 overflow-hidden">
        <div className="p-4 border-b flex justify-between items-center">
          <h3 className="text-lg font-semibold">{title}</h3>
          <button
            onClick={onClose}
            className="p-1 rounded-full hover:bg-gray-100"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        <div className="p-4">
          <p className="mb-2 text-sm text-gray-600">
            ไม่สามารถคัดลอกอัตโนมัติได้ กรุณาคลิกในกล่องข้อความแล้วเลือก
            "คัดลอก" หรือกด Ctrl+C (Cmd+C บน Mac)
          </p>
          <div
            className="bg-gray-50 border rounded-md p-3 mb-4 focus:outline-none"
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
            <pre className="whitespace-pre-wrap text-sm">{text}</pre>
          </div>
          <div className="flex justify-end">
            <button
              onClick={onClose}
              className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition-colors"
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
