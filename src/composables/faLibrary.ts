import { library } from "@fortawesome/fontawesome-svg-core";
import { faMoon, faSun } from "@fortawesome/free-regular-svg-icons";
import {
  faCheck,
  faCircleInfo,
  faCircleQuestion,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faCheck, faCircleInfo, faCircleQuestion, faMoon, faSun, faXmark);

export { library, FontAwesomeIcon };
