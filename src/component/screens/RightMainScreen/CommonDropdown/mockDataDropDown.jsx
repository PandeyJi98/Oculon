import roadmap from "../../../assets/roadmap.svg";
import calender from "../../../assets/calendar.svg";
import preferences from "../../../assets/preferences.svg";
import Search from "../../../assets/Search.svg";
import comment from "../../../assets/add-comment.svg";
import trash from "../../../assets/trash.svg";
import arrowRight from "../../../assets/arrow-right.svg";
import copy from "../../../assets/copy.svg";
import chevronright from "../../../assets/chevron-right-large.svg"
import dollar from "../../../assets/dollar.svg"
import marketPlace from "../../../assets/marketplace.svg";

export const formatDropdown = [
    {
      icon1: calender,
      title: "Format",
      hasDropDown: false,
      icon2: chevronright,
      borderBottom: "1px solid var(--Neutral-300, #DEE2E6)",
    },
    {
      icon1: calender,
      title: "Aggregation",
      hasDropDown: false,
      icon2: chevronright,
    },
    {
      icon1: preferences,
      title: "Sorting",
      hasDropDown: false,
      icon2: chevronright,
      borderBottom: "1px solid var(--Neutral-300, #DEE2E6)",
    },
    {
      icon1: comment,
      title: "Comment",
      hasDropDown: false,
    },
    {
      icon1: Search,
      title: "Inspect",
      hasDropDown: false,
    },
    {
      icon1: copy,
      title: "Copy to",
      hasDropDown: false,
    },
    {
      icon1: arrowRight,
      title: "Move to",
      borderBottom: "1px solid var(--Neutral-300, #DEE2E6)",
      hasDropDown: false,
    },
    {
      icon1: trash,
      title: "Delete",
      hasDropDown: true,
    },
  ];
  
  export const dropdown1 = [
    {
      icon1: arrowRight,
      title: "Move to",
      borderBottom: "1px solid var(--Neutral-300, #DEE2E6)",
      hasDropDown: false,
    },
    {
      icon1: trash,
      title: "Delete",
      hasDropDown: false,
    },
  ];
  export const dropdown2 = [
    {
      icon1: trash,
      title: "one",
      hasDropDown: false,
    },
    {
      icon1: trash,
      title: "twoo",
      hasDropDown: false,
    },
  ];
  export const dropdown3 = [
    {
      icon1: trash,
      title: "try",
      hasDropDown: false,
    },
    {
      icon1: trash,
      title: "test",
      hasDropDown: false,
    },
  ];
  export const dropdown4 = [
    {
      icon1: trash,
      title: "tes",
      hasDropDown: false,
    },
    {
      icon1: trash,
      title: "yes",
      hasDropDown: false,
    },
  ];
  
  export const secondMainDropdown = [
    {
      icon1: roadmap,
      title: "If Statement",
      hasDropDown: false,
      subTitle: "If-then-else-condition",
    },
    {
      icon1: roadmap,
      title: "If_error(variable)",
      hasDropDown: false,
      subTitle:
        "if the first argument evaluates to an Invalid Number error, we return",
    },
    {
      icon1: roadmap,
      title: "fvifa()",
      hasDropDown: false,
      subTitle: "Future Value Interest Factor of an Annuity",
    },
    {
      icon1: roadmap,
      title: "pvif()",
      hasDropDown: false,
      subTitle: "Present Value Interest Factor",
    },
    {
      icon1: roadmap,
      title: "uniform(from, to)",
      hasDropDown: false,
      subTitle: "Uniform Distribution",
    },
  ];
  
  export const copyDropdown=[
    {
      title: "Search",
      isSearch: true,
      borderBottom:" 1px solid var(--Neutral-300, #DEE2E6)",
    },
    {
      title: "INPUTS",
      isHeading: true,
    },
    {
      icon1:calender,
      title:"Vendor Start Date",
      hasDropDown: false,
    },
    {
      icon1:calender,
      title:"Vendor End Date",
      hasDropDown: false,
    },
    {
      icon1:dollar,
      title:"Vendor - Cost",
      hasDropDown: false,
    },
    {
      icon1:marketPlace,
      title:"Vendor - Seats",
      borderBottom:" 1px solid var(--Neutral-300, #DEE2E6)",
      hasDropDown: false,
    },
    {
      title: "CALCULATIONS",
      isHeading: true,
    },
    {
      icon1:dollar,
      title:"P/L Expense by Itemised vendor",
      subTitle:"Itemised Vendor",
      hasDropDown: false,
    },
    {
      icon1:dollar,
      title:"Cash Outflow by Itemised Vendor",
      subTitle:"Itemised Vendor",
      hasDropDown: false,
    },
    {
      icon1:dollar,
      title:"P/L Expense Outflow by vendor",
      subTitle:"Payment Vendor",
      hasDropDown: false,
    },
    {
      icon1:dollar,
      title:"Cash Outflow by Vendor",
      subTitle:"Payment Vendor",
      hasDropDown: false,
    },
  ]