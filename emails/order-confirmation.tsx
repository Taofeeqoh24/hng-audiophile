// emails/order-confirmation.tsx
import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
  Row,
  Column,
  Hr,
} from "@react-email/components";

interface OrderItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image?: string;
}

interface OrderConfirmationEmailProps {
  name: string;
  orderNumber: string;
  email: string;
  items: OrderItem[];
  shippingAddress: string;
  shippingCity: string;
  shippingZip: string;
  shippingCountry: string;
  totals: {
    subtotal: number;
    shipping: number;
    vat: number;
    grandTotal: number;
  };
}

export const OrderConfirmationEmail = ({
  name = "Valued Customer",
  orderNumber = "AUD-123456",
  email = "customer@example.com",
  items = [],
  shippingAddress = "1137 Williams Avenue",
  shippingCity = "New York",
  shippingZip = "10001",
  shippingCountry = "United States",
  totals = { subtotal: 0, shipping: 50, vat: 0, grandTotal: 50 },
}: OrderConfirmationEmailProps) => (
  <Html>
    <Head />
    <Preview>Your Audiophile order {orderNumber} has been confirmed!</Preview>
    <Body style={main}>
      <Container style={container}>
        {/* Header */}
        <Section style={header}>
          <Heading style={logo}>AUDIOPHILE</Heading>
        </Section>

        {/* Success Icon */}
        <Section style={iconSection}>
          <div style={successIcon}>✓</div>
        </Section>

        {/* Thank You Message */}
        <Section style={content}>
          <Heading as="h1" style={h1}>
            Thank you for your order, {name}!
          </Heading>
          <Text style={text}>
            Were excited to let you know that your order has been confirmed and is being processed.
            Youll receive a shipping confirmation email with tracking information once your order ships.
          </Text>
          <Section style={orderBox}>
            <Text style={orderLabel}>Order Number</Text>
            <Text style={orderNumberText}>{orderNumber}</Text>
          </Section>
        </Section>

        <Hr style={divider} />

        {/* Order Items */}
        <Section style={orderSection}>
          <Heading as="h2" style={h2}>Order Summary</Heading>
          {items.map((item, index) => (
            <Row key={index} style={itemRow}>
              <Column style={itemImageCol}>
                {item.image && (
                  <Img
                    src={item.image}
                    alt={item.name}
                    width="64"
                    height="64"
                    style={itemImage}
                  />
                )}
              </Column>
              <Column style={itemDetailsCol}>
                <Text style={itemName}>{item.name}</Text>
                <Text style={itemPrice}>$ {item.price.toLocaleString()}</Text>
              </Column>
              <Column style={itemQuantityCol}>
                <Text style={itemQuantity}>x{item.quantity}</Text>
              </Column>
            </Row>
          ))}
        </Section>

        <Hr style={divider} />

        {/* Totals */}
        <Section style={totalsSection}>
          <Row style={totalRow}>
            <Column><Text style={totalLabel}>Subtotal</Text></Column>
            <Column align="right">
              <Text style={totalValue}>$ {totals.subtotal.toLocaleString()}</Text>
            </Column>
          </Row>
          <Row style={totalRow}>
            <Column><Text style={totalLabel}>Shipping</Text></Column>
            <Column align="right">
              <Text style={totalValue}>$ {totals.shipping}</Text>
            </Column>
          </Row>
          <Row style={totalRow}>
            <Column><Text style={totalLabel}>VAT (20%)</Text></Column>
            <Column align="right">
              <Text style={totalValue}>$ {totals.vat.toLocaleString()}</Text>
            </Column>
          </Row>
          <Row style={grandTotalRow}>
            <Column><Text style={grandTotalLabel}>Grand Total</Text></Column>
            <Column align="right">
              <Text style={grandTotalValue}>
                $ {totals.grandTotal.toLocaleString()}
              </Text>
            </Column>
          </Row>
        </Section>

        <Hr style={divider} />

        {/* Shipping Details */}
        <Section style={shippingSection}>
          <Heading as="h2" style={h2}>Shipping Address</Heading>
          <Text style={shippingText}>{name}</Text>
          <Text style={shippingText}>{shippingAddress}</Text>
          <Text style={shippingText}>
            {shippingCity}, {shippingZip}
          </Text>
          <Text style={shippingText}>{shippingCountry}</Text>
        </Section>

        <Hr style={divider} />

        {/* CTA Button */}
        <Section style={buttonSection}>
          <Link
            href={`${process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'}/orders/${orderNumber}`}
            style={button}
          >
            VIEW YOUR ORDER
          </Link>
        </Section>

        {/* Support Info */}
        <Section style={footer}>
          <Text style={footerHeading}>Need Help?</Text>
          <Text style={footerText}>
            If you have any questions about your order, please contact our customer support team:
          </Text>
          <Text style={contactText}>
            Email:{" "}
            <Link href="mailto:support@audiophile.com" style={link}>
              support@audiophile.com
            </Link>
          </Text>
          <Text style={contactText}>
            Phone: +1 (800) AUDIOPHILE
          </Text>
          
          <Hr style={footerDivider} />
          
          <Text style={copyrightText}>
            © 2025 Audiophile. All rights reserved.
          </Text>
          <Text style={copyrightText}>
            Premium audio equipment for discerning listeners.
          </Text>
        </Section>
      </Container>
    </Body>
  </Html>
);

// Styles (Audiophile-themed, works in all email clients)
const main = {
  backgroundColor: "#f6f6f6",
  fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
  padding: "20px 0",
};

const container = {
  backgroundColor: "#ffffff",
  margin: "0 auto",
  maxWidth: "600px",
  borderRadius: "8px",
  overflow: "hidden",
};

const header = {
  backgroundColor: "#191919",
  padding: "32px",
  textAlign: "center" as const,
};

const logo = {
  color: "#ffffff",
  fontSize: "28px",
  fontWeight: "bold",
  letterSpacing: "4px",
  margin: "0",
};

const iconSection = {
  padding: "40px 0 20px",
  textAlign: "center" as const,
};

const successIcon = {
  width: "64px",
  height: "64px",
  borderRadius: "50%",
  backgroundColor: "#D87D4A",
  color: "#ffffff",
  fontSize: "36px",
  fontWeight: "bold",
  lineHeight: "64px",
  margin: "0 auto",
};

const content = {
  padding: "0 40px 20px",
};

const h1 = {
  color: "#000000",
  fontSize: "28px",
  fontWeight: "700",
  textAlign: "center" as const,
  margin: "0 0 16px",
  lineHeight: "1.3",
};

const h2 = {
  color: "#000000",
  fontSize: "20px",
  fontWeight: "700",
  margin: "0 0 20px",
  textTransform: "uppercase" as const,
  letterSpacing: "1px",
};

const text = {
  color: "#666666",
  fontSize: "16px",
  lineHeight: "24px",
  textAlign: "center" as const,
  margin: "0 0 24px",
};

const orderBox = {
  backgroundColor: "#f9f9f9",
  padding: "24px",
  borderRadius: "8px",
  textAlign: "center" as const,
  border: "2px solid #D87D4A",
};

const orderLabel = {
  color: "#666666",
  fontSize: "12px",
  textTransform: "uppercase" as const,
  letterSpacing: "1px",
  margin: "0 0 8px",
};

const orderNumberText = {
  color: "#000000",
  fontSize: "24px",
  fontWeight: "700",
  margin: "0",
  letterSpacing: "2px",
};

const divider = {
  borderColor: "#eeeeee",
  margin: "0",
};

const orderSection = {
  padding: "32px 40px",
};

const itemRow = {
  marginBottom: "20px",
};

const itemImageCol = {
  width: "80px",
  verticalAlign: "top" as const,
  paddingRight: "16px",
};

const itemImage = {
  borderRadius: "8px",
  objectFit: "cover" as const,
};

const itemDetailsCol = {
  verticalAlign: "top" as const,
};

const itemName = {
  fontSize: "15px",
  fontWeight: "700",
  color: "#000000",
  margin: "0 0 4px",
};

const itemPrice = {
  fontSize: "14px",
  color: "#666666",
  margin: "0",
};

const itemQuantityCol = {
  verticalAlign: "top" as const,
  textAlign: "right" as const,
  width: "60px",
};

const itemQuantity = {
  fontSize: "15px",
  fontWeight: "700",
  color: "#666666",
  margin: "0",
};

const totalsSection = {
  padding: "32px 40px",
  backgroundColor: "#f9f9f9",
};

const totalRow = {
  marginBottom: "12px",
};

const totalLabel = {
  fontSize: "14px",
  color: "#666666",
  textTransform: "uppercase" as const,
  letterSpacing: "1px",
  margin: "0",
};

const totalValue = {
  fontSize: "16px",
  color: "#000000",
  fontWeight: "700",
  margin: "0",
};

const grandTotalRow = {
  marginTop: "20px",
  paddingTop: "20px",
  borderTop: "2px solid #D87D4A",
};

const grandTotalLabel = {
  fontSize: "14px",
  color: "#000000",
  fontWeight: "700",
  textTransform: "uppercase" as const,
  letterSpacing: "1.5px",
  margin: "0",
};

const grandTotalValue = {
  fontSize: "24px",
  color: "#D87D4A",
  fontWeight: "700",
  margin: "0",
};

const shippingSection = {
  padding: "32px 40px",
};

const shippingText = {
  fontSize: "15px",
  color: "#000000",
  lineHeight: "24px",
  margin: "0 0 4px",
};

const buttonSection = {
  padding: "32px 40px",
  textAlign: "center" as const,
};

const button = {
  backgroundColor: "#D87D4A",
  color: "#ffffff",
  fontSize: "13px",
  fontWeight: "700",
  textDecoration: "none",
  textTransform: "uppercase" as const,
  letterSpacing: "1px",
  padding: "16px 48px",
  borderRadius: "0",
  display: "inline-block",
};

const footer = {
  padding: "40px",
  backgroundColor: "#fafafa",
  textAlign: "center" as const,
};

const footerHeading = {
  fontSize: "18px",
  fontWeight: "700",
  color: "#000000",
  margin: "0 0 12px",
};

const footerText = {
  fontSize: "14px",
  color: "#666666",
  margin: "0 0 20px",
  lineHeight: "20px",
};

const contactText = {
  fontSize: "14px",
  color: "#000000",
  margin: "0 0 8px",
};

const link = {
  color: "#D87D4A",
  textDecoration: "underline",
};

const footerDivider = {
  borderColor: "#dddddd",
  margin: "24px 0",
};

const copyrightText = {
  fontSize: "12px",
  color: "#999999",
  margin: "0 0 4px",
};

export default OrderConfirmationEmail;