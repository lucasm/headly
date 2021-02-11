import { useRouter } from 'next/router';
import PageLayout from '../components/PageLayout';
import VerticalNav from '../components/VerticalNav';
import Card from '../components/Card';

// locales
import en from '../locales/en';
import pt_BR from '../locales/pt-BR';

export default function Index() {

    const router = useRouter();
    const { locale } = router;
    const t = locale === 'en' ? en : pt_BR;
    const country = t.country;

  return (
    <PageLayout
        title={t.title}
        description={t.description}
        legal={t.legal}
        about={t.about}
        privacy={t.privacy}
        feedback={t.feedback}
        edition={t.edition}
        contribute={t.contribute}
        aboutHeader={t.aboutHeader}
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

        <section id="news" className="red">
            <div className="feedSection">

                <h2>{t.news}</h2>
                {/* <FetchFeeds country="us" category="news"/> */}
                <Card country={country} category="news"/>

            </div>
        </section>

        <section id="check" className="black">
            <div className="feedSection">

                <h2>{t.check}</h2>
                <Card country={country} category="check"/>

            </div>
        </section>

        <section id="tech" className="blue">
            <div className="feedSection">

                <h2>{t.tech}</h2>
                <Card country={country} category="tech"/>

            </div>
        </section>

        <section id="biz" className="green">
            <div className="feedSection">

                <h2>{t.biz}</h2>
                <Card country={country} category="biz"/>

            </div>
        </section>

        <section id="sport" className="yellow">
            <div className="feedSection">

                <h2>{t.sport}</h2>
                <Card country={country} category="sport"/>

            </div>
        </section>

        <section id="cult" className="purple">
            <div className="feedSection">

                <h2>{t.cult}</h2>
                <Card country={country} category="cult"/>
 
            </div>
        </section>

        <section id="geek" className="pink">
            <div className="feedSection">

                <h2>{t.geek}</h2> 
                <Card country={country} category="geek"/>

            </div>
        </section>

        <section id="sci" className="aqua">
            <div className="feedSection">

                <h2>{t.sci}</h2>
                <Card country={country} category="sci"/>

            </div>
        </section>

        <section id="dscvr" className="orange">
            <div className="feedSection">

                <h2>{t.dscvr}</h2>
                <Card country={country} category="dscvr"/>

            </div>
        </section>

    </main>

    </PageLayout>)
}