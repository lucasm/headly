import PageLayout from '../components/PageLayout';
import VerticalNav from '../components/VerticalNav';
import Card from '../components/Card';

export default function Home() {
  return (
    <PageLayout title="Headlyne — Notícias para o senso crítico" description="Leitor de notícias para o senso crítico. Manchetes e checagem de fatos da mídia confiável.">
    
    <VerticalNav></VerticalNav>

    <main>

        <section id="news" className="red">
            <div className="feedSection">

                <h2>News</h2>
                <Card country="br" category="noticias"/>

            </div>
        </section>

        <section id="check" className="black">
            <div className="feedSection">

                <h2>Check</h2>
                <Card country="br" category="checagem"/>

            </div>
        </section>

        <section id="tech" className="blue">
            <div className="feedSection">

                <h2>Tech</h2>
                <Card country="br" category="tech"/>

            </div>
        </section>

        <section id="biz" className="green">
            <div className="feedSection">

                <h2>Biz</h2>
                <Card country="br" category="financas"/>
                
            </div>
        </section>

        <section id="sport" className="yellow">
            <div className="feedSection">

                <h2>Sport</h2>
                <Card country="br" category="esportes"/>
                
            </div>
        </section>

        <section id="cult" className="purple">
            <div className="feedSection">

                <h2>Cult</h2>
                <Card country="br" category="cultura"/>

            </div>
        </section>

        <section id="geek" className="pink">
            <div className="feedSection">

                <h2>Geek</h2> 
                <Card country="br" category="geek"/>
            </div>
        </section>

        <section id="sci" className="aqua">
            <div className="feedSection">

                <h2>Sci</h2>
                <Card country="br" category="ciencia"/>

            </div>
        </section>

        <section id="dscvr" className="orange">
            <div className="feedSection">

                <h2>Dscvr</h2>
                <Card country="br" category="discover"/>

            </div>
        </section>

    </main>

    </PageLayout>)
}

console.log(process.env.API_URL);