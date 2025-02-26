import { Link } from "react-router-dom";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./ui/hover-card";
import { ChevronDown, ShoppingCart } from "lucide-react";

const HoverCardMyCart = () => {
  return (
    <HoverCard openDelay={1} closeDelay={1}>
      <HoverCardTrigger>
        <Link to="/my-cart" className="flex gap-2 items-center">
          <ShoppingCart />
          <span>My cart</span>
          <ChevronDown size={15} />
        </Link>
      </HoverCardTrigger>
      <HoverCardContent></HoverCardContent>
    </HoverCard>
  );
};

export default HoverCardMyCart;
