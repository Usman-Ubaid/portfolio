import taskTracker from "../../assets/taskTracker.png";
import weather from "../../assets/weather.png";
import issueTracker from "../../assets/issueTracker.png";
import ShoppingCart from "../../assets/shoppingCart.png";

export const projects = [
  {
    id: 1,
    name: "Issue Tracker",
    imgSrc: issueTracker,
    tags: ["NodeJS", "ExpressJS", "REST APIS", "React", "React-Modal", "SASS"],
    description: "A simple CRUD application",
    webapp: "https://issue-tracker-mini-jira-avyp.vercel.app/",
  },
  {
    id: 4,
    name: "Shopping Cart",
    imgSrc: ShoppingCart,
    tags: ["React", "TypeScript", "Bootstrap", "Web API", "Vite"],
    description:
      "A Typescript front end React shopping store project where user is able to add products - fetched from the 3rd Party API using Fetch API - to the cart.",
    webapp: "https://shopping-cart-gamma-jet.vercel.app/",
  },
  {
    id: 2,
    name: "Task Tracker",
    imgSrc: taskTracker,
    tags: ["React", "JavaScript", "localStorage"],
    description:
      "A front end web application that uses localStorage to save tasks and deletes from it.",
    webapp: "https://task-tracker-rouge-three.vercel.app/",
  },
  {
    id: 3,
    name: "Weather App",
    imgSrc: weather,
    tags: ["React", "JavaScript", "TailwindCSS", "Web API"],
    description:
      "This project uses geolocation API to display weather data of the user and 3rd Part API to fetch other cities weather data by searching in the search bar.",
    webapp: "https://weather-app-two-chi-73.vercel.app/",
  },
];
