import { DollarSign, Headset, ShoppingBag, WalletCards } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const IconBoxes = () => {
  return (
    <Card>
      <CardContent className="grid md:grid-cols-4 gap-4 p-4">
        <div className="space-y-2">
          <ShoppingBag />
          <div className="text-sm font-bold">Free Shipping</div>
          <div className="text-sm font-muted">
            Free shipping on order above $100
          </div>
        </div>
        <div className="space-y-2">
          <DollarSign />
          <div className="text-sm font-bold">Money Back Guarantee</div>
          <div className="text-sm font-muted">Within 30 days of purchase</div>
        </div>
        <div className="space-y-2">
          <WalletCards />
          <div className="text-sm font-bold">Flexible Payment</div>
          <div className="text-sm font-muted">
            Pay with credit card, PayPal or COD
          </div>
        </div>
        <div className="space-y-2">
          <Headset />
          <div className="text-sm font-bold">24/7 support</div>
          <div className="text-sm font-muted">Get support at any time</div>
        </div>
      </CardContent>
    </Card>
  );
};

export default IconBoxes;
