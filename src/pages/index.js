import * as React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";
import Seo from "../components/seo";

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>My first Home page using Gatsby</p>
      <StaticImage alt="Clifford" src="../images/nextusedcar.jpg" />
    </Layout>
  );
};

export default IndexPage;

export const Head = () => <Seo title="Home page" />;
