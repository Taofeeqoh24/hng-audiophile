// lib/checkout-schema.ts
import { z } from "zod";

export const checkoutSchema = z.object({
  // Billing Details
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string()
    .min(10, "Phone number must be at least 10 digits")
    .regex(/^[0-9\s\-\+\(\)]+$/, "Invalid phone number format"),
  
  // Shipping Info
  address: z.string().min(5, "Address must be at least 5 characters"),
  zip: z.string().min(3, "ZIP code is required"),
  city: z.string().min(2, "City is required"),
  country: z.string().min(2, "Country is required"),
  
  // Payment
  paymentMethod: z.enum(["e-money", "cash"] as const, {
    message: "Please select a payment method",
  }),
  
  // E-Money fields (conditional)
  eMoneyNumber: z.string().optional(),
  eMoneyPin: z.string().optional(),
}).refine(
  (data) => {
    if (data.paymentMethod === "e-money") {
      return data.eMoneyNumber && data.eMoneyNumber.length >= 9;
    }
    return true;
  },
  {
    message: "e-Money Number must be at least 9 digits",
    path: ["eMoneyNumber"],
  }
).refine(
  (data) => {
    if (data.paymentMethod === "e-money") {
      return data.eMoneyPin && data.eMoneyPin.length >= 4;
    }
    return true;
  },
  {
    message: "PIN must be at least 4 digits",
    path: ["eMoneyPin"],
  }
);

export type CheckoutFormData = z.infer<typeof checkoutSchema>;