import PageLayout from '../components/PageLayout';
import VerticalNav from '../components/VerticalNav';
import Card from '../components/Card';

export default function Home() {
  return (
    <PageLayout title="Headlyne — News for the critical sense" description="News reader for the critical sense. Headlines and fact-checking from trusted media.">
    
    <VerticalNav></VerticalNav>

    <main>

        <section id="news" className="red">
            <div className="feedSection">

                <h2>News</h2>
                {/* <FetchFeeds country="us" category="news"/> */}
                <Card country="us" category="news"/>

            </div>
        </section>

        <section id="check" className="black">
            <div className="feedSection">

                <h2>Check</h2>
                <Card country="us" category="checking"/>

            </div>
        </section>

        <section id="tech" className="blue">
            <div className="feedSection">

                <h2>Tech</h2>
                <Card country="us" category="tech"/>

            </div>
        </section>

        <section id="biz" className="green">
            <div className="feedSection">

                <h2>Biz</h2>
                <Card country="us" category="business"/>

            </div>
        </section>

        <section id="sport" className="yellow">
            <div className="feedSection">

                <h2>Sport</h2>
                <Card country="us" category="sports"/>

            </div>
        </section>

        <section id="cult" className="purple">
            <div className="feedSection">

                <h2>Cult</h2>
                <Card country="us" category="culture"/>
 
            </div>
        </section>

        <section id="geek" className="pink">
            <div className="feedSection">

                <h2>Geek</h2> 
                <Card country="us" category="gaming"/>

            </div>
        </section>

        <section id="sci" className="aqua">
            <div className="feedSection">

                <h2>Sci</h2>
                <Card country="us" category="science"/>

            </div>
        </section>

        <section id="dscvr" className="orange">
            <div className="feedSection">

                <h2>Dscvr</h2>
                <Card country="us" category="discover"/>

            </div>
        </section>

    </main>

    </PageLayout>)
}