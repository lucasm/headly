<div align="center">
  <a href="https://headlyne.vercel.app/">
    <img width="92" height="64" src="https://headlyne.vercel.app/images/headlyne-logo-color.svg">
  </a>
</div>

<h1 align="center">
Headlyne
</h1>
<p align="center">
A news reader for the critical sense. Headlines from trusted media, fact-checking and opinions for understanding the world beyond us.<br>
</p>

## Motivations

- Show news headlines, opinions and fact-check easily.
- Fight against the misinformation with trusted journalism sources, with strong focus on critical sense, democracy, human rights and liberty of expression.
- Availability by 'country editions'.
- Be a fast news app in slow internet connections.

### App structure

React web application with Next.js.

- Front-end: SPA `/pages/index.js` with `/components`
- Back-end: API service to read RSS / XML feeds `/pages/api/feed.js` built in Express.js
- Feeds: `/data/[cc].json` (country codes: us, br, etc.)

### Licences

* All content is provided by third-parties. All trademarks belong to their respective owners. All rights reserved to them. 
* Source code is MIT licensed.

### Thanks

Special thanks to everyone who make open Web to empower people. In memory of Aaron Swartz.