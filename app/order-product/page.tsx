"use client";
import { useRouter } from "next/navigation";

function OrderProduct() {
  const router = useRouter();
  return (
    <>
      <div>OrderProduct page</div>
      <button
        onClick={() => {
          console.log("placing order");
          router.push("/");
        }}
      >
        Place Order
      </button>
    </>
  );
}

export default OrderProduct;
