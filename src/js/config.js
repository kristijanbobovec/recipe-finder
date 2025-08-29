/*
 * Pages for navigation order matters
 */

// First link is primary second is for subpages, only used for highligting same label in nav menu.
import { getImage } from "./helpers";

export const PAGES = [
  { label: "Home", link: ["home"] },
  { label: "About", link: ["about"] },
  { label: "Recipes", link: ["recipes", "recipe"] },
];

/* Social network links and details order matters*/

export const SOCIAL_MEDIA_LINKS = [
  {
    name: "instagram",
    link: "",
    icon() {
      return getImage(`icon-${this.name}.svg`);
    },
  },
  {
    name: "bluesky",
    link: "",
    icon() {
      return getImage(`icon-${this.name}.svg`);
    },
  },
  {
    name: "tiktok",
    link: "",
    icon() {
      return getImage(`icon-${this.name}.svg`);
    },
  },
];

/* Timeout seconds */
export const TIMEOUT_SEC = 15;

/* Number Of featured recipes in recipe page */
export const FEATURED_RECIPES = 3;
