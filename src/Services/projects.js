import ffgames from "../images/ff-img.png";
import todo from "../images/todo.png";
import videoFF from "../videos/ffgames.mp4";
import react from "../images/react.png";
import js from "../images/js.png";
import css from "../images/css.jpeg";
import vue from "../images/vue-logo.png";
import mysql from "../images/mysql.webp";
import node from "../images/node.png";
import videoTodo from "../videos/todo.mp4";
import netcarsVideo from "../videos/netcars.mp4";
import netcars from "../images/netcars.png";
import popups from "../images/popups.png";
import videoPop from "../videos/popups.mp4";
import nlw from "../images/expert-img.jpg";
import nlwVideo from "../videos/nlwexpert.mp4";
import reactN from "../images/react-n.png";
import dotbank from "../images/doting.png";
import dotvideo from "../videos/dotbank.mp4";
import firebase from "../images/firebase.png";
import planner from "../images/plannerimg.jpg";
import plannermp4 from "../videos/planner.mp4";
import ts from "../images/ts.webp";
import tail from "../images/tail.png";

const projects = [
  {
    id: 1,
    link: "https://free-games-seven.vercel.app/",
    project_name: "Find Free Games",
    project_img: ffgames,
    description:
      "Find free games is a website to facilitate the search for free games, for those who want to have fun without having to spend money.",
    project_video: videoFF,
    tools: [react, js, css],
  },
  {
    id: 2,
    link: "https://github.com/DanielCavalcantih/to-do-list",
    project_name: "To Do List",
    project_img: todo,
    description:
      "To do list consists of a website to organize your routine through personalized tasks. It can help with both work and day-to-day tasks.",
    project_video: videoTodo,
    tools: [js, css, vue, mysql, node],
  },
  {
    id: 3,
    link: "https://github.com/DanielCavalcantih/NETCARS",
    project_name: "Netcars",
    project_img: netcars,
    description:
      "Netcars is a website for buying and selling used or new cars.",
    project_video: netcarsVideo,
    tools: [react, js, css, mysql, node],
  },
  {
    id: 4,
    link: "https://github.com/DanielCavalcantih/pop-ups",
    project_name: "Popups",
    project_img: popups,
    description:
      "Popups consists of a demonstration of pop-ups widely used on sales sites that constantly contain promotions.",
    project_video: videoPop,
    tools: [vue, js, css],
  },
  {
    id: 5,
    link: "https://github.com/DanielCavalcantih/nlw-expert",
    project_name: "Nlw-Expert",
    project_img: nlw,
    description:
      "Nlw Expert consists of a snack bar delivery application. Projeto feito para NLW (Next Level Week da RocketSeat)",
    project_video: nlwVideo,
    tools: [reactN, js, tail],
  },
  {
    id: 6,
    link: "https://github.com/DanielCavalcantih/dot-bank",
    project_name: "Dotbank",
    project_img: dotbank,
    description:
      "Dotbank consists of an application developed to simulate a digital bank application, making transfers, viewing statements, etc.",
    project_video: dotvideo,
    tools: [reactN, js, css, firebase],
  },
  {
    id: 6,
    link: "https://github.com/DanielCavalcantih/planner",
    project_name: "Planner",
    project_img: planner,
    description:
      "Planner is an application for organizing trips with family or friends.",
    project_video: plannermp4,
    tools: [reactN, ts, tail, node, mysql],
  },
];

export default projects;
