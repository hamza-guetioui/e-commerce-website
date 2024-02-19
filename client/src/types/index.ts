type categoriesOptions = {
  optionsGroupName: string;
  categories: {
    name: string;
    path: string;
  }[];
};

export type NavigationPages = {
  name: string;
  path?: string;
  options?: (
 {
        name: string;
        path: string;
      }
    | categoriesOptions
  )[];
};

 