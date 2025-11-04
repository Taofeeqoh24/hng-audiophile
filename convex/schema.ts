// convex/schema.ts
import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  orders: defineTable({
    // Customer Info
    customerName: v.string(),
    customerEmail: v.string(),
    customerPhone: v.string(),
    
    // Shipping Address
    shippingAddress: v.string(),
    shippingCity: v.string(),
    shippingZip: v.string(),
    shippingCountry: v.string(),
    
    // Order Items
    items: v.array(v.object({
      id: v.string(),
      name: v.string(),
      price: v.number(),
      quantity: v.number(),
      image: v.optional(v.string()),
    })),
    
    // Totals
    subtotal: v.number(),
    shipping: v.number(),
    vat: v.number(),
    grandTotal: v.number(),
    
    // Payment Method
    paymentMethod: v.string(),
    
    // Order Status
    status: v.string(),
    orderNumber: v.string(),
    
    // Timestamps
    createdAt: v.number(),
  })
    .index("by_email", ["customerEmail"])
    .index("by_order_number", ["orderNumber"])
    .index("by_created_at", ["createdAt"]), // ✅ Changed from "by_creation_time"
});