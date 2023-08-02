import Head from "next/head";
import Projects from "@/components/Projects";

const ProjectsPage = () => {
  return (
    <>
      <Head>
        <title>Peter Millspaugh | Projects</title>
        <meta name="description" content="Peter Millspaugh - Projects" />
      </Head>
      <Projects />
    </>
  );
};

export default ProjectsPage;
