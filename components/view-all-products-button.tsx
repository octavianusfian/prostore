import Link from "next/link";
import { Button } from "./ui/button";

const ViewAllProductsButton = () => {
  return (
    <div className="flex justify-center items-center my-8">
      <Button asChild className="py-4 px-8 font-semibold text-lg">
        <Link href={"/search"}>View All Products</Link>
      </Button>
    </div>
  );
};

export default ViewAllProductsButton;
