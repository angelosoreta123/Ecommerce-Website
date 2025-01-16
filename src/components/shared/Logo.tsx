import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to={"/"} className="text-4xl font-bold text-white">
      PC<span className="text-yellow-300">MoTo</span>
    </Link>
  );
};

export default Logo;
