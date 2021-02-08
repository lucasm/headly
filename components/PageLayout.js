// components/PageLayout.js

import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'

export default function PageLayout(props) {

  return ( 
  <div className="PageLayout">
    <Head>
		<title>{props.title}</title>
		<meta name="description" content={props.description}/>
		<meta name="author" content="Headlyne"/>
		<link rel="icon" href="/favicon.ico"/>

		<link rel="preconnect" href="https://fonts.gstatic.com"/>
		<link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;700&display=swap" rel="stylesheet"/>

		<meta name="theme-color" content="#fff"/>
		<meta name="mobile-web-app-capable" content="yes"/>
		<meta name="application-name" content="Headlyne"/>
		<link rel="icon" sizes="192x192" type="image/png" href="images/icons/icon-192x192.png"/>
		<link rel="manifest" href="manifest.json"/>

		<meta name="apple-mobile-web-app-capable" content="yes"/>
		<meta name="apple-mobile-web-app-status-bar-style" content="translucent"/>
		<meta name="apple-mobile-web-app-title" content="Headlyne"/>
		<link rel="apple-touch-icon" sizes="180x180" href="images/icons/apple-touch-icon-180x180.png"/>
		<link rel="apple-touch-icon" sizes="167x167" href="images/icons/apple-touch-icon-167x167.png"/>
		<link rel="apple-touch-icon" sizes="152x152" href="images/icons/apple-touch-icon-152x152.png"/>
		<link rel="apple-touch-icon" sizes="120x120" href="images/icons/apple-touch-icon-120x120.png"/>
		<link rel="apple-touch-icon" sizes="76x76" href="images/icons/apple-touch-icon-76x76.png"/>
		<link rel="apple-touch-icon" href="apple-touch-icon.png"/>
		<link rel="mask-icon" href="images/icons/safari-pinned-tab.svg" color="#fff"/>

		<meta name="msapplication-tap-highlight" content="no"/>

		<meta itemprop="name" content="Headlyne"/>
		<meta itemprop="description" content={props.description}/>
		<meta itemprop="image" content="https://headlyne.vercel.app/images/headlyne-share.png"/>

		<meta property="og:title" content="Lucas Menezes"/>
		<meta property="og:description" content={props.description}/>
		<meta property="og:image" content="https://headlyne.vercel.app/images/headlyne-share.png"/>
		<meta property="og:image:width" content="1200"/>
		<meta property="og:image:height" content="630"/>
		<meta property="og:site_name" content="Headlyne"/>
		<meta property="og:url" content="https://headlyne.vercel.app/"/>
		<meta property="og:type" content="website"/>

		<meta name="twitter:card" content="summary_large_image"/>
		<meta name="twitter:title" content="Headlyne"/>
		<meta name="twitter:description" content={props.description}/>
		<meta name="twitter:image" content="https://headlyne.vercel.app/images/headlyne-share.png"></meta>
      
		{/* <script async src="https://www.googletagmanager.com/gtag/js?id=G-8ZFVF9EE79"></script>
		<script
			dangerouslySetInnerHTML={{
			__html: `
				window.dataLayer = window.dataLayer || [];
				function gtag(){dataLayer.push(arguments);}
				gtag('js', new Date());
		
				gtag('config', 'G-8ZFVF9EE79'); 
				`,
			}}
		></script> */}

    </Head>

    <Header/>

      {props.children}

    <Footer/>
  </div>
)}



