/* eslint-disable @typescript-eslint/no-explicit-any */
// app/checkout/page.tsx
"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { selectCartTotal, clearCart, selectCart } from "@/store/cartSlice";
import Image from "next/image";
import Header from "@/components/header";
import Footer from "@/components/shared/footer";
import OrderConfirmationModal from "@/components/orderConfirmation";

const checkoutSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(1, "Phone is required"),
  address: z.string().min(1, "Address is required"),
  zip: z.string().min(1, "ZIP is required"),
  city: z.string().min(1, "City is required"),
  country: z.string().min(1, "Country is required"),
  paymentMethod: z.enum(["e-money", "cash"]),
  eMoneyNumber: z.string().optional(),
  eMoneyPin: z.string().optional(),
});

type CheckoutFormData = z.infer<typeof checkoutSchema>;

export default function CheckoutPage() {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const createOrder = useMutation(api.orders.createOrder); 

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false); // ✅ ADD THIS
  const [orderDetails, setOrderDetails] = useState<{
    orderNumber: string;
    items: any[];
    grandTotal: number;
  } | null>(null);

  // Get cart data from Redux
  const cartItems = useAppSelector(selectCart);
  const subtotal = useAppSelector(selectCartTotal);

  // Calculate totals
  const shipping = 50;
  const vat = Math.round((subtotal || 0) * 0.2);
  const grandTotal = (subtotal || 0) + shipping + vat;

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<CheckoutFormData>({
    resolver: zodResolver(checkoutSchema),
    defaultValues: {
      paymentMethod: "e-money",
    },
  });

  const paymentMethod = watch("paymentMethod");

  const onSubmit = async (data: CheckoutFormData) => {
    if (isSubmitting) return;

    // Filter out the initial dummy item
    const validCartItems = cartItems.filter(item => item.id !== 0);

    if (validCartItems.length === 0) {
      alert("Your cart is empty");
      router.push("/");
      return;
    }

    setIsSubmitting(true);

    try {
      // Create order in Convex
      const result = await createOrder({
        customerName: data.name,
        customerEmail: data.email,
        customerPhone: data.phone,
        shippingAddress: data.address,
        shippingCity: data.city,
        shippingZip: data.zip,
        shippingCountry: data.country,
        items: validCartItems.map(item => ({
          id: item.id.toString(),
          name: item.name,
          price: item.price,
          quantity: item.count,
          image: item.image,
        })),
        subtotal,
        shipping,
        vat,
        grandTotal,
        paymentMethod: data.paymentMethod,
      });

      console.log("Order created:", result);

      setOrderDetails({
        orderNumber: result.orderNumber,
        items: validCartItems,
        grandTotal,
      });

      // Send confirmation email
      fetch("/api/send-confirmation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          orderId: result.orderId,
          orderNumber: result.orderNumber,
          email: data.email,
          name: data.name,
          items: validCartItems,
          totals: { subtotal, shipping, vat, grandTotal },
          shippingAddress: data.address,
          shippingCity: data.city,
          shippingZip: data.zip,
          shippingCountry: data.country,
        }),
      }).catch(err => console.log("Email error (non-blocking):", err));

      // Clear cart from Redux
      dispatch(clearCart());

      // Show success modal
      setShowSuccessModal(true);
    } catch (error) {
      console.error("Checkout error:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Filter out dummy item for display
  const displayCartItems = cartItems.filter(item => item.id !== 0);

  return (
    <>
      <div className='bg-black'>
        <div className="w-[1110px] mx-auto">
          <Header />
          <hr className="mx-auto mt-9 text-white opacity-20"></hr>
        </div>
      </div>
      <div className="bg-[#F1F1F1] min-h-screen py-16 px-6">
        <div className="max-w-[1110px] mx-auto -mt-6">
          <button
            onClick={() => router.back()}
            className="text-black/50 hover:text-[#D87D4A] mb-6"
          >
            Go Back
          </button>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Checkout Form */}
            <form
              id="checkout-form"
              onSubmit={handleSubmit(onSubmit)}
              className="bg-white rounded-lg p-6 md:p-12 flex-1"
            >
              <h1 className="text-3xl font-bold uppercase tracking-wider mb-10">
                Checkout
              </h1>

              {/* Billing Details */}
              <div className="mb-8">
                <h2 className="text-[#D87D4A] text-sm font-bold uppercase tracking-wider mb-4">
                  Billing Details
                </h2>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-xs font-bold mb-2">
                      Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      {...register("name")}
                      className={`w-full px-6 py-4 border rounded-lg ${errors.name ? "border-red-500" : "border-[#CFCFCF]"
                        }`}
                      placeholder="Alexei Ward"
                    />
                    {errors.name && (
                      <span className="text-red-500 text-xs mt-1">
                        {errors.name.message}
                      </span>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-bold mb-2">
                      Email Address
                    </label>
                    <input
                      id="email"
                      type="email"
                      {...register("email")}
                      className={`w-full px-6 py-4 border rounded-lg ${errors.email ? "border-red-500" : "border-[#CFCFCF]"
                        }`}
                      placeholder="alexei@mail.com"
                    />
                    {errors.email && (
                      <span className="text-red-500 text-xs mt-1">
                        {errors.email.message}
                      </span>
                    )}
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-xs font-bold mb-2">
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      {...register("phone")}
                      className={`w-full px-6 py-4 border rounded-lg ${errors.phone ? "border-red-500" : "border-[#CFCFCF]"
                        }`}
                      placeholder="+1 202-555-0136"
                    />
                    {errors.phone && (
                      <span className="text-red-500 text-xs mt-1">
                        {errors.phone.message}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Shipping Info */}
              <div className="mb-8">
                <h2 className="text-[#D87D4A] text-sm font-bold uppercase tracking-wider mb-4">
                  Shipping Info
                </h2>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="md:col-span-2">
                    <label htmlFor="address" className="block text-xs font-bold mb-2">
                      Address
                    </label>
                    <input
                      id="address"
                      type="text"
                      {...register("address")}
                      className={`w-full px-6 py-4 border rounded-lg ${errors.address ? "border-red-500" : "border-[#CFCFCF]"
                        }`}
                      placeholder="1137 Williams Avenue"
                    />
                    {errors.address && (
                      <span className="text-red-500 text-xs mt-1">
                        {errors.address.message}
                      </span>
                    )}
                  </div>

                  <div>
                    <label htmlFor="zip" className="block text-xs font-bold mb-2">
                      ZIP Code
                    </label>
                    <input
                      id="zip"
                      type="text"
                      {...register("zip")}
                      className={`w-full px-6 py-4 border rounded-lg ${errors.zip ? "border-red-500" : "border-[#CFCFCF]"
                        }`}
                      placeholder="10001"
                    />
                    {errors.zip && (
                      <span className="text-red-500 text-xs mt-1">
                        {errors.zip.message}
                      </span>
                    )}
                  </div>

                  <div>
                    <label htmlFor="city" className="block text-xs font-bold mb-2">
                      City
                    </label>
                    <input
                      id="city"
                      type="text"
                      {...register("city")}
                      className={`w-full px-6 py-4 border rounded-lg ${errors.city ? "border-red-500" : "border-[#CFCFCF]"
                        }`}
                      placeholder="New York"
                    />
                    {errors.city && (
                      <span className="text-red-500 text-xs mt-1">
                        {errors.city.message}
                      </span>
                    )}
                  </div>

                  <div>
                    <label htmlFor="country" className="block text-xs font-bold mb-2">
                      Country
                    </label>
                    <input
                      id="country"
                      type="text"
                      {...register("country")}
                      className={`w-full px-6 py-4 border rounded-lg ${errors.country ? "border-red-500" : "border-[#CFCFCF]"
                        }`}
                      placeholder="United States"
                    />
                    {errors.country && (
                      <span className="text-red-500 text-xs mt-1">
                        {errors.country.message}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Payment Details */}
              <div className="mb-8">
                <h2 className="text-[#D87D4A] text-sm font-bold uppercase tracking-wider mb-4">
                  Payment Details
                </h2>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="md:col-span-2">
                    <label className="block text-xs font-bold mb-2">
                      Payment Method
                    </label>
                    <div className="space-y-4">
                      <label className="flex items-center gap-4 px-6 py-4 border border-[#CFCFCF] rounded-lg cursor-pointer hover:border-[#D87D4A]">
                        <input
                          type="radio"
                          value="e-money"
                          {...register("paymentMethod")}
                          className="w-5 h-5 accent-[#D87D4A]"
                        />
                        <span className="font-bold text-sm">e-Money</span>
                      </label>
                      <label className="flex items-center gap-4 px-6 py-4 border border-[#CFCFCF] rounded-lg cursor-pointer hover:border-[#D87D4A]">
                        <input
                          type="radio"
                          value="cash"
                          {...register("paymentMethod")}
                          className="w-5 h-5 accent-[#D87D4A]"
                        />
                        <span className="font-bold text-sm">Cash on Delivery</span>
                      </label>
                    </div>
                  </div>

                  {paymentMethod === "e-money" && (
                    <>
                      <div>
                        <label htmlFor="eMoneyNumber" className="block text-xs font-bold mb-2">
                          e-Money Number
                        </label>
                        <input
                          id="eMoneyNumber"
                          type="text"
                          {...register("eMoneyNumber")}
                          className={`w-full px-6 py-4 border rounded-lg ${errors.eMoneyNumber ? "border-red-500" : "border-[#CFCFCF]"
                            }`}
                          placeholder="238521993"
                        />
                        {errors.eMoneyNumber && (
                          <span className="text-red-500 text-xs mt-1">
                            {errors.eMoneyNumber.message}
                          </span>
                        )}
                      </div>

                      <div>
                        <label htmlFor="eMoneyPin" className="block text-xs font-bold mb-2">
                          e-Money PIN
                        </label>
                        <input
                          id="eMoneyPin"
                          type="text"
                          {...register("eMoneyPin")}
                          className={`w-full px-6 py-4 border rounded-lg ${errors.eMoneyPin ? "border-red-500" : "border-[#CFCFCF]"
                            }`}
                          placeholder="6891"
                        />
                        {errors.eMoneyPin && (
                          <span className="text-red-500 text-xs mt-1">
                            {errors.eMoneyPin.message}
                          </span>
                        )}
                      </div>
                    </>
                  )}

                  {paymentMethod === "cash" && (
                    <div className="md:col-span-2 flex items-start gap-8 p-6 bg-[#F1F1F1] rounded-lg">
                      <div className="flex-1">
                        <p className="text-black/50 text-sm leading-relaxed">
                          The Cash on Delivery option enables you to pay in cash when our
                          delivery courier arrives at your residence. Just make sure your address
                          is correct so that your order will not be cancelled.
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </form>

            {/* Order Summary Sidebar */}
            <aside className="bg-white rounded-lg p-8 lg:w-[350px] h-fit">
              <h2 className="text-lg font-bold uppercase tracking-wider mb-8">
                Summary
              </h2>

              <div className="space-y-6 mb-8">
                {displayCartItems.map((item) => (
                  <div key={item.id} className="flex items-center gap-4">
                    {item.image && (
                      <Image
                        src={item.image}
                        alt={item.name}
                        width={64}
                        height={64}
                        className="rounded-lg object-cover"
                      />
                    )}
                    <div className="flex-1">
                      <p className="font-bold text-sm">{item.name}</p>
                      <p className="text-black/50 text-sm">${item.price.toLocaleString()}</p>
                    </div>
                    <p className="text-black/50 font-bold">x{item.count}</p>
                  </div>
                ))}
              </div>

              <div className="space-y-2 mb-8">
                <div className="flex justify-between text-sm">
                  <span className="text-black/50 uppercase">Total</span>
                  <span className="font-bold">${subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-black/50 uppercase">Shipping</span>
                  <span className="font-bold">${shipping}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-black/50 uppercase">VAT (Included)</span>
                  <span className="font-bold">${vat.toLocaleString()}</span>
                </div>
                <div className="flex justify-between pt-4">
                  <span className="text-black/50 uppercase text-sm">Grand Total</span>
                  <span className="font-bold text-lg text-[#D87D4A]">
                    ${grandTotal.toLocaleString()}
                  </span>
                </div>
              </div>

              <button
                type="submit"
                form="checkout-form"
                disabled={isSubmitting}
                className="w-full bg-[#D87D4A] text-white py-4 uppercase tracking-wider font-bold hover:bg-[#FBAF85] transition disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Processing..." : "Continue & Pay"}
              </button>
            </aside>
          </div>
        </div>
      </div>
      <div className="-mt-38">
        <Footer />
      </div>

      {/* ✅ ADD THIS: Success Modal */}
      {showSuccessModal && orderDetails && (
        <OrderConfirmationModal
          orderNumber={orderDetails.orderNumber}
          items={orderDetails.items}
          grandTotal={orderDetails.grandTotal}
          onClose={() => {
            setShowSuccessModal(false);
            router.push("/");
          }}
        />
      )}
    </>
  );
}