import { Footer } from "./footer";
import { Header } from "./header";

export const Base = ({ children }) => {
  return (
    <>
      <Header />
        <div>{children}</div>
      <Footer />
    </>
  );
};
