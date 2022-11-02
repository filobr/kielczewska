export interface Route {
  path: string;
  label: string;
}

export const CMS_API_URL: string = "https://kielczewska-cms.herokuapp.com";

export const routes: Record<string, Route> = {
  mainPage: {
    path: "/",
    label: "Main",
  },
  concerts: {
    path: "/fotografia-koncertowa",
    label: "Fotografia koncertowa",
  },
  couples: {
    path: "/fotografia-par",
    label: "Fotografia par",
  },
  single: {
    path: "/fotografia-indywidualna",
    label: "Fotografia indywidualna",
  },
  projects: {
    path: "/projekty",
    label: "Projekty",
  },
  about: {
    path: "/o-mnie",
    label: "O mnie",
  },
  contact: {
    path: "/kontakt",
    label: "Kontakt",
  },
};

export const tabs = [
  routes.mainPage,
  routes.concerts,
  routes.couples,
  routes.single,
  routes.projects,
  routes.about,
  routes.contact,
];
