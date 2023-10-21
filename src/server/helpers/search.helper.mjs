import * as pagefind from "pagefind";

async function generateSearchIndex() {
  const { index } = await pagefind.createIndex({});

  await index.addDirectory({
    path: ".next/server/pages",
  });

  await index.writeFiles({
    outputPath: "public/pagefind",
  });
}

function run() {
  return generateSearchIndex()
    .then(() => console.log("Search index generated."))
    .catch((error) => console.error(`Error generating search index: ${error}`));
}

run();
