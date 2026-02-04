async function ProductDetails({
  params,
}: {
  params: Promise<{ productId: string }>;
}) {
  const productId = (await params).productId;
  return <div>Details of product : {productId}</div>;
}

export default ProductDetails;
