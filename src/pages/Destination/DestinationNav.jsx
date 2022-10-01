
export default function DestinationNav({ handlePlanet, planet }) {
    return (
        <div className='destination-nav nav'>
            <nav className='destination-navbar'>
                <ul className="destination-menu">
                    <li 
                        id='Moon'
                        className={`destination-item ${planet === 0 ? "active" : ""}`} 
                        onClick={handlePlanet}
                        value={0}
                    >
                        MOON
                    </li>
                    <li 
                        id='Mars'
                        className={`destination-item ${planet === 1 ? "active" : ""}`} 
                        onClick={handlePlanet}
                        value={1}
                    >
                        MARS
                    </li>
                    <li 
                        id='Europa'
                        className={`destination-item ${planet === 2 ? "active" : ""}`} 
                        onClick={handlePlanet}
                        value={2}
                    >
                        EUROPA
                    </li>
                    <li 
                        id='Titan'
                        className={`destination-item ${planet === 3 ? "active" : ""}`} 
                        onClick={handlePlanet}
                        value={3}
                    >
                        TITAN
                    </li>
                </ul>
            </nav>
        </div>
    )
}