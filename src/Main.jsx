import Card from './Card';

const Main = ({ stays }) => {
    return (
        <main>
            <div className="header">
                <h1>Stays in Finland</h1>
                <span>{stays?.length} stays</span>
            </div>
            <div className="cards">
                {stays?.map((stay, i) => <Card key={i} stay={stay} />)}
            </div>
        </main>
    )
}

export default Main;