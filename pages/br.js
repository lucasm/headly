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

                <h2>Notícias</h2>
                <Card country="br" category="noticias"/>

            </div>
        </section>

        <section id="tech" className="blue">
            <div className="feedSection">

                <h2>Tech</h2>
                <Card country="br" category="tech"/>

            </div>
        </section>

        <section id="business" className="green">
            <div className="feedSection">

                <h2>Finanças</h2>
                <Card country="br" category="financas"/>
                
            </div>
        </section>

        <section id="sports" className="yellow">
            <div className="feedSection">

                <h2>Esportes</h2>
                <Card country="br" category="esportes"/>
                
            </div>
        </section>

        <section id="culture" className="purple">
            <div className="feedSection">

                <h2>Cultura</h2>
                <Card country="br" category="cultura"/>

            </div>
        </section>

        <section id="games" className="pink">
            <div className="feedSection">

                <h2>Games</h2> 

            </div>
        </section>

        <section id="science" className="aqua">
            <div className="feedSection">

                <h2>Ciência</h2>
                <Card country="br" category="ciencia"/>

            </div>
        </section>

        <section id="discover" className="orange">
            <div className="feedSection">

                <h2>Descubra</h2>

            </div>
        </section>

        <section id="check" className="black">
            <div className="feedSection">

                <h2>Checagem</h2>
                <Card country="br" category="checagem"/>

            </div>
        </section>

    </main>

    </PageLayout>)
}

console.log(process.env.API_URL);