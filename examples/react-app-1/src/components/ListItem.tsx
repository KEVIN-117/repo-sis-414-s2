import { User } from '../Utils'

export function ListItem({ user }: { user: User }) {
    return (
        <li
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '10px',
                flex: '1 1 200px',
                border: '1px solid black',
                padding: '10px',
                margin: '10px',
                borderRadius: '5px',
                backgroundColor: user.isActive ? 'lightgreen' : 'lightcoral',
                color: user.isActive ? 'green' : 'red'
            }}
        >
            <h1>{user.name}</h1>
            <h2>{user.lastName}</h2>
            <p>{user.age}</p>
            <p>{user.isActive ? 'Active' : 'Inactive'}</p>
        </li>
    )
}