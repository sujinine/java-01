import { GNB } from "./GNB.js";
import { Sidebar } from "./Sidebar.js";
import { Header } from "./Header.js";
import { Frame } from "./Frame.js";

(async () => {
  await GNB();
  Frame();
  Sidebar();
  Header();
})();
