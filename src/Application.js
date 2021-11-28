import React from "react";
import { Helmet } from "react-helmet";

export const Application = () => {
  return (
    <Helmet>
      <meta charSet='utf-8' />
      <title>My Title Web App</title>
      <link rel='canonical' href='http://mysite.com/example' />
    </Helmet>
  );
};
export default Application;
