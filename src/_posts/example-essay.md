---
title: Example essay
date: July 9, 2023
---

# Example essay

This is an template/example essay for my under-construction blog.

## How the blog works

This essay is stored as a Markdown file, which gets converted to HTML using [`remark`](https://www.npmjs.com/package/remark) and [`remark-html`](https://www.npmjs.com/package/remark-html). The post front-matter/metadata—i.e.title and date—are parsed using [`gray-matter`](https://www.npmjs.com/package/gray-matter). The URLs are dynamically created for each new post using Next.js functions `getStaticProps` and `getStaticPaths` to parse the file name and convert Markdown to HTML.

I mostly copied this architecture from [petemilly.football](https://www.petemilly.football/), a fantasy football blog I started in August 2022. I leveraged the Next.js example repos when creating that.
