import MDXRenderer from "gatsby-mdx/mdx-renderer";
import React from "react";
import { Box, Flex } from "rebass";
import { Link, graphql } from "gatsby";
import { NavTree } from "components/NavTree";

export const PageLayout: React.FC = ({ children }) => (
  <Flex>
    <Box mr="1em">
      <Box mb="1em">
        <Link to="/">Home</Link>
      </Box>
      <NavTree />
    </Box>
    <Box p={2}>{children}</Box>
  </Flex>
);

export default function DocsLayout(props) {
  const {
    data: {
      mdx: {
        code,
        frontmatter: { title },
      },
    },
  } = props;

  return (
    <Flex>
      <Box mr="1em">
        <Box mb="1em">
          <Link to="/">Home</Link>
        </Box>
        <NavTree />
      </Box>
      <Box p={2}>
        <h1>{title}</h1>
        <MDXRenderer>{code.body}</MDXRenderer>
      </Box>
    </Flex>
  );
}

/**
 * Query for data for the page. Note that $id is injected in via context from
 * actions.createPage. See gatsby-node.js for more info.
 */
export const pageQuery = graphql`
  query DocsLayoutQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      frontmatter {
        title
      }
      code {
        body
      }
    }
  }
`;
