import { Resend } from "resend";
import dotenv from "dotenv";
import { Order } from "@/types";
import { APP_NAME, SENDER_EMAIL } from "@/lib/constants";
import PurchaseReceiptEmail from "./purchase-receipt";

dotenv.config();

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendPurchaseReceipt = async ({ order }: { order: Order }) => {
  const result = await resend.emails.send({
    from: `${APP_NAME} <${SENDER_EMAIL}>`,
    to: order.user.email,
    subject: `Order Confirmation ${order.id}`,
    react: <PurchaseReceiptEmail order={order} />,
  });

  console.log("Resend result:", result);
};
