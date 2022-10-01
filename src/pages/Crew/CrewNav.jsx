export default function CrewNav({handleIndex, index}) {
    return (
        <div className='crew-nav nav'>
            <nav className='crew-navbar'>
                <ul className="crew-menu">
                    <li 
                        className={`crew-item ${index === 0 ? "active" : ""}`}
                        value={0}
                        onClick={handleIndex}
                    >
                        
                    </li>
                    <li 
                        className={`crew-item ${index === 1 ? "active" : ""}`}
                        value={1}
                        onClick={handleIndex}
                    >
                    </li>
                    <li 
                        className={`crew-item ${index === 2 ? "active" : ""}`}
                        value={2}
                        onClick={handleIndex}
                    >
                    </li>
                    <li 
                        className={`crew-item ${index === 3 ? "active" : ""}`}
                        value={3}
                        onClick={handleIndex}
                    >
                    </li>
                </ul>
            </nav>
        </div>
    )
}