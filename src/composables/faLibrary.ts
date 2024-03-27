import { library } from "@fortawesome/fontawesome-svg-core";
import { faMoon, faSun } from "@fortawesome/free-regular-svg-icons";
import {
  faCheck,
  faChevronCircleDown,
  faCircleInfo,
  faCircleQuestion,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(
  faCheck,
  faChevronCircleDown,
  faCircleInfo,
  faCircleQuestion,
  faMoon,
  faSun,
  faXmark,
);

export { library, FontAwesomeIcon };
