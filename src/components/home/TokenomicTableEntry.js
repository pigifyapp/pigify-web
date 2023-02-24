export default function TokenomicTableEntry({ name, percentage, description }) {

    return (
        <tr>
            <th>{name}</th>
            <td>{percentage}%</td>
            <td>{description}</td>
        </tr>
    );
}