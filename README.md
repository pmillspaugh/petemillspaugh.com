<h1 align="center"><img src="./public/images/p-logo-green.png" width="100" height="100" /></h1>

Hey, thanks for poking around my repo! I wrote about myself and my digital garden on [petemillspaugh.com/about](https://petemillspaugh.com/about), so I'll use this space to touch on the technical bits.

## React, Next.js

React and Next are the frontend framework and meta framework I know best. I really enjoy working with both. I plan to move from the legacy `/pages` directory to `/app`.

## MDX

I'm using [MDX](https://mdxjs.com/) with `next-mdx-remote` for my content.

### Components

Components are a spectrum from primitives like `Blockquote` to highly composed components like `Garden`. It's hard to draw a line in the sand between component-library-components that might live in `/components/lib` and bespoke components that are reused just once or not at all. So I mixed them all in one `/components` folder. I settled on this structure based on Josh Comeau's opinion on the subject in his React course.

I rely on unstyled component libraries like [Radix UI](https://radix-ui.com) for my underlying component primitives when it comes to complex implementations like `Popover` and `Switch`. I love getting accessibilty and usability out of the box with these sorts of libraries.

## Styled Components

I like the flexibility of CSS-in-JS and the colocation of markup + styles with `styled-components`. I also prefer writing vanilla CSS to writing utility classes, e.g. with Tailwind. I'm considering moving away from CSS-in-JS, though, maybe to CSS modules.

## Code snippets

I use [Code Hike](https://codehike.org/) to drop code examples in my MDX. It's fantastic.

## Animation

I use [react-spring](https://react-spring.dev/) for the Edison bulb in the top right corner of my garden, which [I wrote about here](https://www.petemillspaugh.com/edison-bulb). I'd like to play more with [Framer Motion](https://github.com/framer/motion) like I did in [weeksofyour.life](https://www.weeksofyour.life/) (loading UI).

## Backend

This is a static site, but there is some stuff that happens server-side. Email newsletter signup/verification/distribution is one. I used [val.town](https://val.town) to write custom email subscription logic, which [I wrote about here](https://www.petemillspaugh.com/cultivating-emails). Signup is in the footer, in case you're interested!

## Domain registrar

Cloudflare is my domain registrar of choice. They don't mark up domains and come with the expected features (SSL etc.).

## Deployment

I'm deploying on Vercel. Automatic preview deployments on PRs are really handy for a static site like this.

## Analytics

I use Vercel Analytics to track # of visitors, page visits by URL, referrers, countries, operating systems, and browsers. These are just curiosity/vanity metrics for me—I'm not interested in collecting or doing anything with individual user data. I might migrate from Vercel to Plausible or another alternative at some point.

## Monetization

No plans to ever monetize. My garden is for fun, learning, and meeting friends on the Internet!
