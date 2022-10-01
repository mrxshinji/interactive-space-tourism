export default function TechnologyNav({handleIndex, index}) {
    return (
        <div className='tech-nav nav'>
            <nav className='tech-navbar'>
                <ul className="tech-menu">
                    <li 
                        className={`tech-item ${index === 0 ? "active" : ""}`}
                        value={0}
                        onClick={handleIndex}
                    >
                        1
                    </li>
                    <li 
                        className={`tech-item ${index === 1 ? "active" : ""}`}
                        value={1}
                        onClick={handleIndex}
                    >
                        2
                    </li>
                    <li 
                        className={`tech-item ${index === 2 ? "active" : ""}`}
                        value={2}
                        onClick={handleIndex}
                    >
                        3
                    </li>
                </ul>
            </nav>
        </div>
    )
}