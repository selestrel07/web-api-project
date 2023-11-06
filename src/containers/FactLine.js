import './FactLine.css'

const FactLine = ({ messages }) => {
    return(
        <div class="line dib bg-light-blue v-top mt0">
            {
                messages.map((message, i) => {
                    return (
                    <div class="msg bg-washed-green mid-gray pa4" key={"msg" + i}>{message}</div>
                    )
                })
            }
        </div>
    )
}

export default FactLine;