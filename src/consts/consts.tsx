export interface Route {
  path: string;
  label: string;
}

export const CMS_API_URL: string = "https://kielczewska-cms.herokuapp.com";

export const instagramUrl = "https://onet.pl";

export const routes: Record<string, Route> = {
  mainPage: {
    path: "/",
    label: "Strona główna",
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
  routes.concerts,
  routes.couples,
  routes.single,
  routes.projects,
  routes.about,
  routes.contact,
];

export const centerContent: string = `justify-content: center; align-items: center;`;

export const primaryFont: string = "font-family: Lato";

export const navbarFont: string = "font-family: Alata; ";
