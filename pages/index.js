import { useRouter } from 'next/router';
import PageLayout from '../components/PageLayout';
import VerticalNav from '../components/VerticalNav';
import CardFeed from '../components/CardFeed';

// locales
import en from '../locales/en';
import pt_BR from '../locales/pt-BR';
import pt_PT from '../locales/pt-PT';

export default function Index() {

    const router = useRouter();
    const { locale } = router;
    var t;

    if (locale === 'pt-BR') {
        t = pt_BR;
    } else if (locale === 'pt-PT') {
        t = pt_PT;
    } else {
        t = en;
    }
    console.log(locale);

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
        about={t.about}
        news={t.news}
        check={t.check}
        tech={t.tech}
        biz={t.biz}
        sport={t.sport}
        cult={t.cult}
        geek={t.geek}
        sci={t.sci}
        dscvr={t.dscvr}
    >
    
    <VerticalNav
        news={t.news}
        check={t.check}
        tech={t.tech}
        biz={t.biz}
        sport={t.sport}
        cult={t.cult}
        geek={t.geek}
        sci={t.sci}
        dscvr={t.dscvr}
    />

    <main>

        <section id="news">
            <div className="feedSection">

                <h2>{t.news}</h2>
                {/* <FetchFeeds country="us" category="news"/> */}
                <CardFeed country={t.country} category="news"/>

            </div>
        </section>

        <section id="biz">
            <div className="feedSection">

                <h2>{t.biz}</h2>
                <CardFeed country={t.country} category="biz"/>

            </div>
        </section>

        <section id="tech">
            <div className="feedSection">

                <h2>{t.tech}</h2>
                <CardFeed country={t.country} category="tech"/>

            </div>
        </section>

        <section id="sport" className="yellow">
            <div className="feedSection">

                <h2>{t.sport}</h2>
                <CardFeed country={t.country} category="sport"/>

            </div>
        </section>

        <section id="cult" className="purple">
            <div className="feedSection">

                <h2>{t.cult}</h2>
                <CardFeed country={t.country} category="cult"/>
 
            </div>
        </section>

        <section id="geek" className="pink">
            <div className="feedSection">

                <h2>{t.geek}</h2> 
                <CardFeed country={t.country} category="geek"/>

            </div>
        </section>

        <section id="sci" className="aqua">
            <div className="feedSection">

                <h2>{t.sci}</h2>
                <CardFeed country={t.country} category="sci"/>

            </div>
        </section>

        <section id="check">
            <div className="feedSection">

                <h2>{t.check}</h2>
                <CardFeed country={t.country} category="check"/>

            </div>
        </section>

        <section id="dscvr" className="orange">
            <div className="feedSection">

                <h2>{t.dscvr}</h2>
                <CardFeed country={t.country} category="dscvr"/>

            </div>
        </section>

    </main>

    </PageLayout>)
}