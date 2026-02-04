// import { Notfound } from "next/navigation";

async function ProductReview({
  params,
}: {
  params: Promise<{ productId: string; reviewId: string }>;
}) {
  const { productId, reviewId } = await params;
  // if (parseInt(reviewId > 1000)) {
  //   Notfound();
  // }
  return (
    <div>
      Review {reviewId} and product {productId}
    </div>
  );
}

export default ProductReview;
