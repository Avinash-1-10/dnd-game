import Fan from "../assets/Table Fan.png";
import Wire from "../assets/Wire.png";
import Refrigerator from "../assets/Refrigerator.png";
import Switch from "../assets/Wall Switch.png";
import Socket from "../assets/Wall Outlet.png";
import Ac from "../assets/AC.png";
import Nail from "../assets/nail.png";
import Battery from "../assets/9vBattery.png";
import Home_Battery from "../assets/Home Battery.png";

export interface Card {
  id: number;
  image: string;
  content: string;
  zone: string;
}

const cardData: Card[] = [
  {
    id: Math.floor(Math.random() * 10e4),
    image: Fan,
    content: "Fan",
    zone: "Load",
  },
  {
    id: Math.floor(Math.random() * 10e4),
    image: Wire,
    content: "Wire",
    zone: "Path",
  },
  {
    id: Math.floor(Math.random() * 10e4),
    image: Refrigerator,
    content: "Refrigerator",
    zone: "Load",
  },
  {
    id: Math.floor(Math.random() * 10e4),
    image: Switch,
    content: "Switch",
    zone: "Path",
  },
  {
    id: Math.floor(Math.random() * 10e4),
    image: Socket,
    content: "Electric Socket",
    zone: "Source",
  },
  {
    id: Math.floor(Math.random() * 10e4),
    image: Ac,
    content: "AC",
    zone: "Load",
  },
  {
    id: Math.floor(Math.random() * 10e4),
    image: Nail,
    content: "Nail",
    zone: "Path",
  },
  {
    id: Math.floor(Math.random() * 10e4),
    image: Battery,
    content: "Battery",
    zone: "Source",
  },
  {
    id: Math.floor(Math.random() * 10e4),
    image: Home_Battery,
    content: "Home Battery",
    zone: "Source",
  },
];

export default cardData;
