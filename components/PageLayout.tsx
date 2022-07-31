import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'

export default function PageLayout(props) {
  return (
    <div className="PageLayout">
      <Head>
        <title>{props.title}</title>
        <meta name="description" content={props.description} />
        <meta name="author" content="Lucas Menezes" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

        <meta name="theme-color" content="#fff" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="application-name" content="Headly" />
        <link rel="icon" sizes="192x192" type="image/png" href="images/icons/icon-192x192.png" />
        <link rel="manifest" href="manifest.json" />

        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="translucent" />
        <meta name="apple-mobile-web-app-title" content="Headly" />
        <link rel="apple-touch-icon" sizes="180x180" href="images/icons/apple-touch-icon-180x180.png" />
        <link rel="apple-touch-icon" sizes="167x167" href="images/icons/apple-touch-icon-167x167.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="images/icons/apple-touch-icon-152x152.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="images/icons/apple-touch-icon-120x120.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="images/icons/apple-touch-icon-76x76.png" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link rel="mask-icon" href="images/icons/safari-pinned-tab.svg" color="#fff" />

        <meta name="msapplication-tap-highlight" content="no" />

        <meta itemProp="name" content="Headly" />
        <meta itemProp="description" content={props.description} />
        <meta itemProp="image" content="https://headly.app/images/headly-share.png" />

        <meta property="og:title" content="Headly" />
        <meta property="og:description" content={props.description} />
        <meta property="og:image" content="https://headly.app/images/headly-share.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="Headly" />
        <meta property="og:url" content="https://headly.app/" />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Headly" />
        <meta name="twitter:description" content={props.description} />
        <meta name="twitter:image" content="https://headly.app/images/headly-share.png"></meta>
      </Head>

      <Header
        donate={props.donate}
        news={props.news}
        tech={props.tech}
        biz={props.biz}
        sport={props.sport}
        cult={props.cult}
        geek={props.geek}
        sci={props.sci}
        check={props.check}
        dscvr={props.dscvr}
      />
      <main>{props.children}</main>

      <Footer
        edition={props.edition}
        legal={props.legal}
        credits={props.credits}
        donate={props.donate}
        about={props.about}
        privacy={props.privacy}
        feedback={props.feedback}
      />
    </div>
  )
}
