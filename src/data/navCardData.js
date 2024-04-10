import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { faBarChart } from "@fortawesome/free-regular-svg-icons";

export const navCardData = [
  {
    title: "T-Rex",
    description: "Learn more about the Tyrannosaurus rex!",
    to: "/dinosaurs/Tyrannosaurus",
    icon: "",
  },
  {
    title: "Dino Data",
    description: "Check out different dinosaur diets & types",
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
