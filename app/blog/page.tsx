import Link from "next/link";
// import { resolve } from "path";

function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function Blog() {
  await delay(2000);
  return (
    <>
      {/* <Link href="/">Home</Link> */}
      <div>Blog page</div>
    </>
  );
}

export default Blog;
