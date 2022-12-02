import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import ProductionQuantityLimitsOutlinedIcon from "@mui/icons-material/ProductionQuantityLimitsOutlined";
import CategoryOutlinedIcon from "@mui/icons-material/CategoryOutlined";
import HistoryIcon from "@mui/icons-material/History";

export const navData = [
  {
    title: "Home",
    icon: <HomeIcon />,
    link: "seller/home",
  },
  {
    title: "Products",
    icon: <CategoryOutlinedIcon />,
    link: "seller/products",
  },
  {
    title: "Orders",
    icon: <ProductionQuantityLimitsOutlinedIcon />,
    link: "seller/orders",
  },
  {
    title: "History",
    icon: <HistoryIcon />,
    link: "seller/history",
  },
];
