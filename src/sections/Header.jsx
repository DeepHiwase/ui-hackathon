import Aside from "../components/Aside";
import { NavBar } from "../components/NavBar";

export const Header = () => {
  return (
    <header>
      <section id="#header">
        <NavBar />
        <Aside />
      </section>
    </header>
  );
};
