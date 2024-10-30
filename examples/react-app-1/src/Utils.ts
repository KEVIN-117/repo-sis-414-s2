export interface User {
    name: string;
    lastName: string;
    age: number;
    isActive: boolean;
}

export const users: User[] = [
    {
        name: 'John',
        lastName: 'Doe',
        age: 25,
        isActive: true
    },
    {
        name: 'Jane',
        lastName: 'Doe',
        age: 30,
        isActive: false
    },
    {
        name: 'Tom',
        lastName: 'Smith',
        age: 22,
        isActive: true
    },
    {
        name: 'Alice',
        lastName: 'Smith',
        age: 28,
        isActive: false
    },
    {
        name: 'Bob',
        lastName: 'Brown',
        age: 35,
        isActive: true
    },
    {
        name: 'Emma',
        lastName: 'Brown',
        age: 40,
        isActive: false
    },
    {
        name: 'Oliver',
        lastName: 'Taylor',
        age: 20,
        isActive: true
    },
    {
        name: 'Sophia',
        lastName: 'Taylor',
        age: 24,
        isActive: false
    },
    {
        name: 'James',
        lastName: 'Wilson',
        age: 27,
        isActive: true
    },
    {
        name: 'Emily',
        lastName: 'Wilson',
        age: 32,
        isActive: false
    }
]