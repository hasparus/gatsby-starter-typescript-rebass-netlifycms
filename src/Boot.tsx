import { MDXProvider } from "@mdx-js/tag";
import React from "react";
import { Provider as StateProvider } from "unstated";
import { LayoutComponents, Theme } from "./Theme";

export const Boot: React.SFC<{ element: any }> = ({ element }) => {
  return (
    <StateProvider>
      <MDXProvider components={LayoutComponents}>
        <Theme>{element}</Theme>
      </MDXProvider>
    </StateProvider>
  );
};
