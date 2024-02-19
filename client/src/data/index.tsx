type categoriesOptions = {
  optionsGroupName: string;
  categories: {
    name: string;
    path: string;
  }[];
};

type NavigationPageOption = {
  name: string;
  path: string;
};

export type NavigationPages = {
  name: string;
  path?: string;
  options?: (NavigationPageOption | categoriesOptions)[];
};

export const categoriesOptions : categoriesOptions[] = [
  {
    optionsGroupName: "Men's",
    categories: [
      {
        name: "clothes",
        path: "clothes",
      },
      {
        name: "shoes",
        path: "shoes",
      },
      {
        name: "accessories",
        path: "accessories",
      },
    ],
  },
  {
    optionsGroupName: "Women's",
    categories: [
      {
        name: "clothes",
        path: "/clothes",
      },
      {
        name: "shoes",
        path: "/shoes",
      },
      {
        name: "jewelry & accessories",
        path: "/jewelry-accessories",
      },
    ],
  },
  {
    optionsGroupName: "Boys & Girls",
    categories: [
      {
        name: "clothes",
        path: "/clothes",
      },
      {
        name: "shoes",
        path: "/shoes",
      },
      {
        name: "accessories",
        path: "/accessories",
      },
    ],
  },
  {
    optionsGroupName: "Assorted",
    categories: [
      {
        name: "Home Furniture",
        path: "home-furniture",
      },
      {
        name: "Luggages & Bags",
        path: "luggages-bags",
      },
      {
        name: "Decoration",
        path: "decoration",
      },
    ],
  },
];

export const NavigationPages: NavigationPages[] = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Categories",
    options: categoriesOptions,
  },
  {
    name: "Store",
    path: "/products",
  },
  {
    name: "Fashion",
    path: "/fashion",
  },
  {
    name: "Articles",
    path: "/articles",
  },
  {
    name: "More",
    options: [
      {
        name: "Contact Us",
        path: "/contactUs",
      },
      {
        name: "About Us",
        path: "/about",
      },
      {
        name: "FAQ's",
        path: "/faqs",
      },
      {
        name: "Terms & Conditions",
        path: "/terms",
      },
    ],
  },
];
