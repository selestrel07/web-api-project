const FactLine = ({ messages }) => {
    return(
        <div style={{overflowY: 'scroll', border: '3px solid black', height: '500px', width: '300px', margin: '0 auto', display: 'flex', flexDirection: 'column-reverse'}}>
            {
                messages.map(message => {
                    return (
                    <div>{message}</div>
                    )
                })
            }
        </div>
    )
}

export default FactLine;