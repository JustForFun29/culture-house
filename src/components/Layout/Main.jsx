import { Fragment } from "react";
import classes from "./Main.module.css";
import FeaturedPaintings from "../Items/FeaturedPaintings";

const Main = () => {
  return (
    <section className={classes.featured}>
      <h2 className={classes["featured-heading"]}>Featured Paintings</h2>
      <FeaturedPaintings />
    </section>
  );
};

export default Main;
