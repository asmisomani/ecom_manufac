import React from "react"
import CancelledOrders from "../orders/CancelledOrders";
import ConfirmedOrders from "../orders/ConfirmedOrders";
import FailedOrders from "../orders/FailedOrders";
import NewOrders from "../orders/NewOrders";
import ReplacedOrders from "../orders/ReplacedOrders";
import ReturnOrders from "../orders/ReturnOrders";
import ShippedOrders from "../orders/ShippedOrders";

const SEC_NAV_DATA = [
  { title: "New", path: "/orders/neworders" ,component:<NewOrders/>},
  { title: "Confirmed", path: "/orders/confirmedorders" ,component: <ConfirmedOrders/> },
  { title: "Cancelled", path: "/orders/cancelledorders" ,component:<CancelledOrders/>},
  { title: "Shipped", path: "/orders/shippedorders" ,component:<ShippedOrders/>},
  { title: "Returned", path: "/orders/returnedorders", component:<ReturnOrders/>},
  { title: "Replaced", path: "/orders/replacedorders",component:<ReplacedOrders/> },
  { title: "Failed", path: "/orders/failedorders" ,component:<FailedOrders/>},
];

export {SEC_NAV_DATA};