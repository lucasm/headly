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


## The news app

Headly encourages peoples critical sense with latest headlines from trusted and diverse news sources. Headly helps you stay updated at glance, support the good journalism and fight against misinformation.

- Newest — news headlines, fact-checking and opinions.
- Trusted —  journalism sources selected by the community with strong focus on critical sense, democracy, human rights and liberty of expression.
- International — editions available by country.
- Accessible — easy to navigate, fast on slow internet connections and spotlighting free access journalism above paywall.


## Contributing

Thanks for considering contribute with Headly!

### Discussions

Do you want to suggest a news source, have a feedback, idea or any other topic? Visit [discussions](https://github.com/lucasm/headly/discussions).

### Donations

You can [buy me a coffee](https://www.buymeacoffee.com/lucasm) to help maintain active development and pay app costs like APIs calls, domain and hosting.

### Development

Please, visit [projects](https://github.com/lucasm/headly/projects) to see current development board. For bugs or features, open a new issue before send pull requests.

Headly app is built with Next.js framework.

- **Frontend**: React SPA `/pages/index.js` with `/components`

- **Backend**: Express API `/pages/api/feed.js` to pre-process RSS/XML feeds running on `/api/feed` with endpoints: 1) All feeds by category: `/api/feed?country=us&category=news`; 2) Single feed by name: `/api/feed?country=us&category=news&name=bbc`

- **Locales files**: `/locales/cc-CC.js` with language translations and `/locales/feeds/cc.json` with feeds parameters by country.

### Translations

To add a new local edition of Headly: 1) Create a `/locales/` JS file named as standard language codes (en, pt-BR, etc.) and put text translations. 2) Create a `/locales/feeds/` JSON file named as standard country codes (us, br, etc.) and put feeds parameters; 3) Add new locale in `/next.config.js` and call them in `/pages/index.js`.

## Legal

Headly is an open source project by [Lucas Menezes](https://lucasm.dev/?utm_source=headly).

* Source code is under MIT license.
* Content is provided by third-parties. Trademarks belong to their respective owners. All rights reserved to them.
* Read the [privacy policy](https://lucasm.dev/privacy).