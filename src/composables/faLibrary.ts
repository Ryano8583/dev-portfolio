import { library } from "@fortawesome/fontawesome-svg-core";
import { faLinkedin, faSquareGithub } from "@fortawesome/free-brands-svg-icons";
import { faMoon, faSun } from "@fortawesome/free-regular-svg-icons";
import {
  faCheck,
  faChevronCircleDown,
  faCircleInfo,
  faCircleQuestion,
  faGear,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(
  faCheck,
  faChevronCircleDown,
  faCircleInfo,
  faCircleQuestion,
  faGear,
  faLinkedin,
  faMoon,
  faSquareGithub,
  faSun,
  faXmark,
);

export { library, FontAwesomeIcon };
