import { faCircleInfo, faMap } from "@fortawesome/free-solid-svg-icons";
import { faBarChart } from "@fortawesome/free-regular-svg-icons";

export const navCardData = [
  {
    title: "Go Digging",
    description: "Check out our interactive dinosaur map!",
    to: "/go-digging",
    icon: faMap,
  },
  {
    title: "Dino Data",
    description: "Learn more about dinosaur diets & types",
    to: "/data",
    icon: faBarChart,
  },
  {
    title: "More Info",
    description: "Interested in knowing more about this project?",
    to: "/about",
    icon: faCircleInfo,
  },
];
