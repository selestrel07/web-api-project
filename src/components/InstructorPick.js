import MyOption from "./MyOption"

const InstructorPick = ({ instructors }) => {
    return (
        <label>
            Pick your personal instructor:
            <select>{
                instructors.map(instr => {
                    return <MyOption key={instr.url.split('/').slice(-2)[0]} instructor={instr} />
                })
            }
            </select>
        </label>
        )
}

export default InstructorPick;