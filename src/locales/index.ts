import idID from "antd/locale/id_ID";
import enUS from "antd/locale/en_US";

import { getIdIDLang, getEnUsLang } from "./helper";

export * from "./t";

export type LanguageType = "id-ID" | "en-US";

export const ANT_DESIGN_LOCALE = {
  "id-ID": idID,
  "en-US": enUS,
};

export const i18nResources = {
  "id-ID": {
    translation: getIdIDLang(),
  },
  "en-US": {
    translation: getEnUsLang(),
  },
};

export const i18nInitOptions = {
  lng: "id-ID",
  resources: i18nResources,
};

export default i18nInitOptions;