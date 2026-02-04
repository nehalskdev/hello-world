async function ProductReview({
  params,
}: {
  params: Promise<{ productId: string; reviewId: string }>;
}) {
  const { productId, reviewId } = await params;
  return (
    <div>
      Review {reviewId} and product {productId}
    </div>
  );
}

export default ProductReview;
