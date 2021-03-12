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
News reader for the critical sense.<br>
</p>


## A news app

Headly encourages peoples critical sense with latest headlines from trusted and diverse news sources. Headly helps you stay updated at glance, support the good journalism and fight against misinformation.

- Newest — news headlines, fact-checking and opinions.
- Trusted —  journalism sources selected by the community with strong focus on critical sense, democracy, human rights and liberty of expression.
- International — editions available by country.
- Accessible — easy to navigate, fast on slow internet connections and spotlighting free access journalism above paywall.


## Contributing

Thanks for considering contribute with Headly!

### Discussions

Visit [discussions](https://github.com/lucasm/headly/discussions) to suggest a news source, send a feedback, idea or any other topic.

### Donations

To help maintain active development and pay app costs, like domain and hosting, you can [buy me a coffee](https://www.buymeacoffee.com/lucasm).

### Development

View [projects](https://github.com/lucasm/headly/projects/1) to see development board. For bugs or features, please, open a new issue before send pull requests.

Headly app is built with Next.js framework, where:

- **Frontend** is a React SPA `/pages/index.js` with `/components`.

- **Backend** is an Express API `/pages/api/feed.js` to pre-process RSS/XML feeds running on `/api/feed` with endpoints: 1) All feeds by category: `/api/feed?country=us&category=news`; 2) Single feed by name: `/api/feed?country=us&category=news&name=BBC`.

- **Locales files** on `/locales/cc-CC.js` with language translations and `/locales/feeds/cc.json` with feeds parameters.

### Translations

To add a new local edition: 1) Create a `/locales/` JS file named as standard language codes (en, pt-BR, etc.) and put text translations. 2) Create a `/locales/feeds/` JSON file named as standard country codes (us, br, etc.) and put feeds parameters; 3) Add new locale in `/next.config.js` and call them in `/pages/index.js`.

## Legal

Open source project by [Lucas Menezes](https://lucasm.dev/?utm_source=headly).

* Source code is MIT licensed.
* Content is provided by third-parties. Trademarks belong to their respective owners. All rights reserved to them.
* [Privacy policy](https://lucasm.dev/privacy).