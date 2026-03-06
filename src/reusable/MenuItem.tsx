import React from "react";
import { Link } from "react-router-dom";
import { IconType } from "react-icons";

interface MenuItemProps {
  title: string;
  address: string;
  Icon: IconType;
  onClick?: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
}

const MenuItem: React.FC<MenuItemProps> = ({
  title,
  address,
  Icon,
  onClick,
}) => {
  return (
    <Link
      to={address}
      onClick={onClick}
      className="flex items-center gap-2 p-2 pb-4 hover:text-customTeal-950 hover:p-2 rounded font-semibold text-black"
    >
      <Icon className="w-5 h-5 sm:hidden" />
      <span>{title}</span>
    </Link>
  );
};

export default MenuItem;
