import { redirect } from "next/navigation";

function getRandomInt(count: Number) {
  return Math.floor(Math.random() * count);
}

async function ProductReview({
  params,
}: {
  params: Promise<{ productId: string; reviewId: string }>;
}) {
  const random = getRandomInt(2);
  if (random === 1) {
    throw new Error("Error loading in review");
  }
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
