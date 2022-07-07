import { RecoilRoot } from "recoil";

const StoreProvider = ({ children }: { children: React.ReactNode }) => {
  return <RecoilRoot>{children}</RecoilRoot>;
};

export default StoreProvider;
