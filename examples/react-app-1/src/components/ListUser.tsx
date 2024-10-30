import { users } from "../Utils";
import { ListItem } from "./ListItem";

export default function ListUser() {
    return (
        <div
            style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '10px',
                padding: '10px',
                backgroundColor: 'black',
            }}
        >
            {users.map((user, index) => (
                <ListItem key={index} user={user} />
            ))}
        </div>
    )
}
