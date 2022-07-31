import { useRouter } from 'next/router'
import PageLayout from '../components/PageLayout'
import CardFeed from '../components/CardFeed'

// locales
import en from '../locales/en'
import pt_BR from '../locales/pt-BR'
import pt_PT from '../locales/pt-PT'

export default function Index() {
  // defaults
  const router = useRouter()
  const { locale } = router
  var t

  // locale
  if (locale === 'pt-BR') {
    t = pt_BR
  } else if (locale === 'pt-PT') {
    t = pt_PT
  } else {
    t = en
  }
  console.log('LOCALE', locale)

  return (
    <PageLayout
      title={t.title}
      description={t.description}
      legal={t.legal}
      about={t.about}
      privacy={t.privacy}
      feedback={t.feedback}
      edition={t.edition}
      credits={t.credits}
      contribute={t.contribute}
      donate={t.donate}
      news={t.news}
      check={t.check}
      tech={t.tech}
      biz={t.biz}
      sport={t.sport}
      cult={t.cult}
      geek={t.geek}
      sci={t.sci}
      dscvr={t.dscvr}>
      {/* <FetchFeeds country="us" category="news"/> */}
      <section id="news">
        <div className="feedSection">
          <h2>{t.news}</h2>
          <CardFeed country={t.country} category="news" />
        </div>
      </section>

      <section id="biz">
        <div className="feedSection">
          <h2>{t.biz}</h2>
          <CardFeed country={t.country} category="biz" />
        </div>
      </section>

      <section id="tech">
        <div className="feedSection">
          <h2>{t.tech}</h2>
          <CardFeed country={t.country} category="tech" />
        </div>
      </section>

      <section id="sport">
        <div className="feedSection">
          <h2>{t.sport}</h2>
          <CardFeed country={t.country} category="sport" />
        </div>
      </section>

      <section id="cult">
        <div className="feedSection">
          <h2>{t.cult}</h2>
          <CardFeed country={t.country} category="cult" />
        </div>
      </section>

      <section id="geek">
        <div className="feedSection">
          <h2>{t.geek}</h2>
          <CardFeed country={t.country} category="geek" />
        </div>
      </section>

      <section id="sci">
        <div className="feedSection">
          <h2>{t.sci}</h2>
          <CardFeed country={t.country} category="sci" />
        </div>
      </section>

      <section id="check">
        <div className="feedSection">
          <h2>{t.check}</h2>
          <CardFeed country={t.country} category="check" />
        </div>
      </section>

      <section id="dscvr">
        <div className="feedSection">
          <h2>{t.dscvr}</h2>
          <CardFeed country={t.country} category="dscvr" />
        </div>
      </section>
    </PageLayout>
  )
}
