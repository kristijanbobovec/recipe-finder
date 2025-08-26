import * as Model from "../model";
import Router from "../router";
import FooterView from "../views/FooterView";
import NavigationView from "../views/NavigationView";
import HeroView from "../views/HeroView";

const controllRoutes = function () {
  const newPage = Router.handleRoute();
  Model.updateCurrentPage(newPage);
  NavigationView.update({ currentPage: Model.state.currentPage });
  HeroView.render({
    data: { currentPage: Model.state.currentPage },
    hero: true,
  });
};

const appController = async function () {
  /* First call on init app */
  const page = Router.handleRoute();
  Model.updateCurrentPage(page);

  // Render all things that pages have in common
  // Render Navigation
  NavigationView.render({ data: { currentPage: Model.state.currentPage } });
  // Hero View
  HeroView.render({
    data: { currentPage: Model.state.currentPage },
    hero: true,
  });
  // Render Footer
  FooterView.render();

  /* This will add hanlder to routes. */
  /* And automatically on handle route change view */
  Router.addHandlerRoute(controllRoutes);
};

export default appController;
