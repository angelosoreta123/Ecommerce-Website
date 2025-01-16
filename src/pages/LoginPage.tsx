import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <div className="flex flex-col gap-4 items-center text-2xl text-center text-white m-20 mb-[253px]">
      <p>This page is currently not available.</p>{" "}
      <Link
        to={"/"}
        className="font-bold border-b-2 border-b-yellow-300 hover:border-b-yellow-400"
      >
        Continue Shopping
      </Link>
    </div>
  );
};

export default LoginPage;
