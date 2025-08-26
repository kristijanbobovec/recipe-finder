/*
 * Pages for navigation order matters
 */
export const PAGES = [
  { label: "Home", link: "home" },
  { label: "About", link: "about" },
  { label: "Recipes", link: "recipes" },
];

/* Social network links and details order matters*/

export const SOCIAL_MEDIA_LINKS = [
  {
    name: "instagram",
    link: "",
    icon() {
      return `./src/assets/images/icon-${this.name}.svg`;
    },
  },
  {
    name: "bluesky",
    link: "",
    icon() {
      return `./src/assets/images/icon-${this.name}.svg`;
    },
  },
  {
    name: "tiktok",
    link: "",
    icon() {
      return `./src/assets/images/icon-${this.name}.svg`;
    },
  },
];

/* Timeout seconds */
export const TIMEOUT_SEC = 2;
