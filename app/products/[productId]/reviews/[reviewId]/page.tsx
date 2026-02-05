import { redirect } from "next/navigation";

async function ProductReview({
  params,
}: {
  params: Promise<{ productId: string; reviewId: string }>;
}) {
  const { productId, reviewId } = await params;
  if (Number(reviewId) > 1000) {
    redirect("/products");
  }
  return (
    <div>
      Review {reviewId} and product {productId}
    </div>
  );
}

export default ProductReview;
