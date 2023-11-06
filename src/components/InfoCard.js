const InfoCard = ({ factologist }) => {
    const id = factologist ? factologist.url.split('/').at(-2) : -1;
    if (factologist) {
        return (
            <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-flag mb7 mt0">
                <img src={`https://robohash.org/${id}?set=set2&size=200x200`} alt="instructor" />
                <div>
                    <h2>{factologist.name}</h2>
                    <ul className="tl">
                        <li>Year of birth: {factologist.birth_year}</li>
                        <li>Gender: {factologist.gender}</li>
                        <li>Skin: {factologist.skin_color}</li>
                        <li>Hair: {factologist.hair_color}</li>
                        <li>Eyes: {factologist.eye_color}</li>
                    </ul>
                </div>
            </div>
        )
    } else {
        return (
            <div>Loading resources</div>
        )
    }
}

export default InfoCard;