const Selector = ({ factologistChange, text, items }) => {
    return (
        <label className="db tc fw4 pa3">
            <div className="ma3">
                {text}
            </div>
            <select className="bg-lightest-blue" onChange={factologistChange}>{
                items.map(item => {
                    return <option key={item[0]} value={item[1]}>{item[1]}</option>
                })
            }
            </select>
        </label>
        )
}

export default Selector;