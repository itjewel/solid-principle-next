import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <ul className="flex justify-center items-center gap-6 py-4">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/login">Login</Link>
        </li>
        <li>
          <Link href="/users">Users</Link>
        </li>
        <li>
          <Link href="/products">Products</Link>
        </li>
      </ul>
    </>
  );
};

export default Navbar;
