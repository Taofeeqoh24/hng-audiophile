// components/OrderConfirmationModal.tsx
"use client";

import React from 'react';
import Image from 'next/image';

interface OrderItem {
  id: number;
  name: string;
  price: number;
  count: number;
  image: string;
}

interface Props {
  orderNumber: string;
  items: OrderItem[];
  grandTotal: number;
  onClose: () => void;
}

export default function OrderConfirmationModal({ orderNumber, items, grandTotal, onClose }: Props) {
  // Show first item and count of other items
  const firstItem = items[0];
  const otherItemsCount = items.length - 1;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-[540px] w-full p-8 md:p-12">
        {/* Success Icon */}
        <div className="w-16 h-16 bg-[#D87D4A] rounded-full flex items-center justify-center mb-6">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M9 12L11 14L15 10" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="2"/>
          </svg>
        </div>

        {/* Thank You Message */}
        <h1 className="text-2xl md:text-3xl font-bold uppercase mb-4 leading-tight">
          Thank you <br />for your order
        </h1>
        <p className="text-black/50 mb-6">
          You will receive an email confirmation shortly.
        </p>

        {/* Order Summary */}
        <div className="flex mb-8 rounded-lg overflow-hidden">
          <div className="bg-[#F1F1F1 p-6">
            {/* First Item */}
            <div className="flex items-center gap-4 pb-4">
              <Image
                src={firstItem.image}
                alt={firstItem.name}
                width={12}
                height={12}
                className="rounded object-cover"
              />
              <div className="flex-1">
                <p className="font-bold text-sm">{firstItem.name}</p>
                <p className="text-black/50 text-sm">$ {firstItem.price.toLocaleString()}</p>
              </div>
              <p className="text-black/50 font-bold text-sm">x{firstItem.count}</p>
            </div>

            {/* Other Items Count */}
            {otherItemsCount > 0 && (
              <div className="border-t border-black/10 pt-4">
                <p className="text-black/50 text-xs text-center">
                  and {otherItemsCount} other item{otherItemsCount > 1 ? 's' : ''}
                </p>
              </div>
            )}
          </div>

          {/* Grand Total */}
          <div className="bg-black p-6">
            <p className="text-white/50 text-sm uppercase mb-2">Grand Total</p>
            <p className="text-white font-bold text-lg">
              $ {grandTotal.toLocaleString()}
            </p>
          </div>
        </div>

        {/* Back to Home Button */}
        <button
          onClick={onClose}
          className="w-full bg-[#D87D4A] text-white py-4 uppercase tracking-wider font-bold hover:bg-[#FBAF85] transition"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
}