import Link from "next/link";

function F2() {
  return (
    <div>
      F2 page
      <div>
        <Link href={"/f4"}>F4</Link>
      </div>
    </div>
  );
}

export default F2;
