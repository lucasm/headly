
<div align="center">
  <a href="https://headly.app/">
    <img height="64" src="https://headly.app/images/headly-logo-color.svg">
  </a>
</div>
<h1 align="center">
Headly
</h1>
<p align="center">
<img alt="Languages" src="https://img.shields.io/badge/languages available -3-4dc71f">
<img alt="Issues" src="https://img.shields.io/github/issues/lucasm/headly">
<img alt="License" src="https://img.shields.io/github/license/lucasm/headly?color=4dc71f">
</p>
<p align="center">
News for the critical sense.<br>
</p>


## The news headlines app

Headly show the latest headlines from trusted news sources. Headly encourages critical sense and helps you stay updated at glance, support the good journalism and fight against misinformation.

**Newest** — News headlines, fact-checking and opinions.

**Trusted** —  Journalism sources selected by the community with strong focus on critical sense, democracy, human rights and liberty of expression.

**International** — Editions available by country.

**Accessible** — Easy to navigate, fast on slow internet connections and featuring free access journalism above paywall's.


## Contributing


Visit the [discussions forum](https://github.com/lucasm/headly/discussions).

You can [buy me a coffee](https://www.buymeacoffee.com/lucasm) to maintain active development (helping pay app costs like domain and hosting).

For bugs or features, please, open a new issue before send pull requests. See also the [project development board](https://github.com/lucasm/headly/projects). 

Headly app is built with Next.js framework.

- **Frontend** is a React SPA `/pages/index.js` with `/components`.

- **Backend** is an Express API `/pages/api/feed.js` to pre-process RSS/XML feeds running on `/api/feed` with endpoints: All feeds by category on  `/api/feed?country=us&category=news`; Single feed by name on `/api/feed?country=us&category=news&name=BBC`.

- **Locales files** on `/locales/cc-CC.js` with language translations and `/locales/feeds/cc.json` with feeds parameters.

- **How add a new local edition?** 1) Create a `/locales/` JS file named as standard language codes (en, pt-BR, etc.) and put text translations. 2) Create a `/locales/feeds/` JSON file named as standard country codes (us, br, etc.) and put feeds parameters; 3) Add new locale in `/next.config.js` and call them in `/pages/index.js`.

## Legal

Open source project by [Lucas Menezes](https://lucasm.dev/?utm_source=headly).

* Source code is MIT licensed.
* Content is provided by third-parties. Trademarks belong to their respective owners. All rights reserved to them.
* [Privacy](https://lucasm.dev/privacy).