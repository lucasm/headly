export default function FooterSelect() {

    return (
        <form onSubmit={function(evento) {
            console.log(evento);
            }}>
            <label>Edition:</label>
            <select id="country">
                <option value="/" defaultValue>United States</option>
                <option value="/br">Brazil</option>
            </select>
        </form>
    )
}