import * as Model from "../model";
import Router from "../router";
import FooterView from "../views/FooterView";
import NavigationView from "../views/NavigationView";
import HeroView from "../views/HeroView";

const setPage = function () {
  const newPage = Router.handleRoute();
  Model.updateCurrentPage(newPage);
};

const controlRoutes = function () {
  window.scrollTo({ top: 0 });
  /* Checks and sets the current page */
  setPage();

  NavigationView.update({ currentPage: Model.state.currentPage });
  HeroView.render({
    data: { currentPage: Model.state.currentPage },
    hero: true,
  });
};

const appController = async function () {
  /* Checks and sets the current page */
  setPage();

  // Render all common elements on page.
  // Render navigation
  NavigationView.render({ data: { currentPage: Model.state.currentPage } });

  // Render navigation
  HeroView.render({
    data: { currentPage: Model.state.currentPage },
    hero: true,
  });

  // Render Footer
  FooterView.render();

  /* This will add hanlder to routes. */
  /* And automatically handle route change view */
  Router.subscribeHandlerRoute(controlRoutes);
};

export default appController;
