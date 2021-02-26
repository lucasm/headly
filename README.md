<div align="center">
  <a href="https://headly.app/">
    <img height="64" src="https://headly.app/images/headly-logo-color.svg">
  </a>
</div>
<h1 align="center">
Headly
</h1>
<p align="center">
News reader for the critical sense.<br>
</p>

## Motivation

Headly is a news reader that encourages peoples critical sense with latest headlines, from trusted sources, to fight against misinformation, stay updated at glance and incentive the good journalism.

- Newest news — headlines, fact-checking and opinions.
- Trusted journalism sources — selected by the community with strong focus on critical sense, democracy, human rights and liberty of expression.
- International — editions available by country.
- Accessible — fast app in slow internet connections.

### App

Headly is built with Next.js framework.

- Front-end: React SPA `/pages/index.js` with `/components`
- Back-end: Express API `/pages/api/feed.js` to pre-process RSS/XML feeds
- Locales: files `/locales/aa-AA.js` (en, pt-BR...) with translations and `/data/cc.json` with feeds parameters

### Contributing

Open a new issue before send pull requests.

To contribute with a local edition of Headly: 1) create a new locale text file on `/locales` folder; 2) create a new file with feed parameters in  `/data` folder; 3) call it in 'pages/index'.

### Licences

Open source project by Lucas Menezes.

* Source code is MIT licensed.
* Content is provided by third-parties. Trademarks belong to their respective owners. All rights reserved to them. 
* Thanks to everyone who makes open Web. In memory of Aaron Swartz.