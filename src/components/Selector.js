const Selector = ({ factologistChange, text, items }) => {
    return (
        <label class="db tc fw4 pa3">
            <div class="ma3">
                {text}
            </div>
            <select onChange={factologistChange}>{
                items.map(item => {
                    return <option key={item[0]} value={item[1]}>{item[1]}</option>
                })
            }
            </select>
        </label>
        )
}

export default Selector;