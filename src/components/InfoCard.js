const InfoCard = ({ instructor }) => {
    const id = instructor ? instructor.url.split('/').at(-2) : -1;
    if (instructor) {
        return (
            <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-flag">
                <img src={`https://robohash.org/${id}?set=set2&size=200x200`} alt="instructor" />
                <div>
                    <h2>{instructor.name}</h2>
                    <ul>
                        <li>Year of birth: {instructor.birth_year}</li>
                        <li>Gender: {instructor.gender}</li>
                        <li>Skin: {instructor.skin_color}</li>
                        <li>Hair: {instructor.hair_color}</li>
                        <li>Eyes: {instructor.eye_color}</li>
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