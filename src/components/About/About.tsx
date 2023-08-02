import Link from "next/link";

const About = () => {
  return (
    <>
      <h1>About</h1>
      <h2>Hi there 👋</h2>
      <p>Thanks for visiting my site!</p>
      <p>
        I'm Peter (or Pete – your call), and I'm a developer based in New York.
      </p>
      <p>
        I enjoy working across the stack in the TypeScript/JavaScript ecosystem
        (React, Redux, Node.js) with a core focus on frontend technologies. I'm
        especially excited about Accessibility and PWAs. In July, I gave a{" "}
        <Link href="/talks/accessibility">talk on Web Accessibility</Link> – let
        me know what you think!
      </p>
      <p>
        Recently, I've been working with a terrific team on{" "}
        <Link href="/projects#tulo">tulo.js</Link>, an open-source developer
        tool for client-side caching via service workers. I'm also building{" "}
        <Link href="/projects#non-prophet">non-prophet</Link>, an e-commerce
        brand. Once it officially launches, all profit will go to the Equal
        Justice Initiative.
      </p>
      <p>
        I designed this site with{" "}
        <a href="https://www.figma.com/" target="_blank">
          Figma
        </a>{" "}
        and built it out using{" "}
        <a href="https://nextjs.org/" target="_blank">
          Next.js
        </a>{" "}
        and{" "}
        <a href="https://styled-components.com/" target="_blank">
          Styled Components
        </a>
        . The iconography is from the{" "}
        <a href="https://feathericons.com/" target="_blank">
          Feather
        </a>{" "}
        open-source library. The developer experience working with those tools
        is fantastic – I'd love to chat more about it if you're interested!
      </p>
      <p>
        When I'm not coding, I do a lot of cooking (<em>read: pasta</em>) and
        running.
      </p>
    </>
  );
};

export default About;
