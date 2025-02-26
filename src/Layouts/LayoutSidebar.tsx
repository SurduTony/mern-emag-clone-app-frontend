import NavBarLeft from "@/components/NavBarLeft";

type Props = {
  children: React.ReactNode;
};

const LayoutSidebar = ({ children }: Props) => {
  return (
    <div className="grid grid-cols-[1fr_4fr] gap-4 px-4 pt-4">
      <NavBarLeft />
      {children}
    </div>
  );
};

export default LayoutSidebar;
