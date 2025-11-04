// convex/orders.ts
import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

// Generate unique order number
function generateOrderNumber(): string {
  const timestamp = Date.now().toString(36).toUpperCase();
  const random = Math.random().toString(36).substring(2, 8).toUpperCase();
  return `AUD-${timestamp}-${random}`;
}

export const createOrder = mutation({
  args: {
    customerName: v.string(),
    customerEmail: v.string(),
    customerPhone: v.string(),
    shippingAddress: v.string(),
    shippingCity: v.string(),
    shippingZip: v.string(),
    shippingCountry: v.string(),
    items: v.array(v.object({
      id: v.string(),
      name: v.string(),
      price: v.number(),
      quantity: v.number(),
      image: v.optional(v.string()),
    })),
    subtotal: v.number(),
    shipping: v.number(),
    vat: v.number(),
    grandTotal: v.number(),
    paymentMethod: v.string(),
  },
  handler: async (ctx, args) => {
    const orderNumber = generateOrderNumber();
    
    const orderId = await ctx.db.insert("orders", {
      ...args,
      orderNumber,
      status: "confirmed",
      createdAt: Date.now(),
    });
    
    return { orderId, orderNumber };
  },
});

export const getOrder = query({
  args: { orderId: v.id("orders") },
  handler: async (ctx, args) => {
    return await ctx.db.get(args.orderId);
  },
});

export const getOrderByNumber = query({
  args: { orderNumber: v.string() },
  handler: async (ctx, args) => {
    const order = await ctx.db
      .query("orders")
      .withIndex("by_order_number", (q) => 
        q.eq("orderNumber", args.orderNumber)
      )
      .first();
    return order;
  },
});