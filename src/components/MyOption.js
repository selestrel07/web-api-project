export default function MyOption({ instructor }) {
    return (
        <option value={instructor.name.split(' ')[0].toLowerCase()}>{instructor.name}</option>
    )
}