import { ReactNode } from "react";

const H1 = ({ children }: { children: ReactNode }) => {
  return <h1 className="p-2 w-fit  font-bold border-b-4 border-b-yellow-300 text-lg md:text-3xl">{children}</h1>;
};

export default H1;
