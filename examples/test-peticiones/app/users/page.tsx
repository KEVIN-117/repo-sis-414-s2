interface Charater {
    id: number;
    name: string;
    gender: string;
}

interface BaseType {
    items: Charater[];
}

export default async function UsersPage() {
    const res = await fetch('https://dragonball-api.com/api/characters')
    const data = await res.json() as BaseType;
    const characters = data.items;
    console.log(characters);

    return (
        <div className="flex gap-3 flex-wrap">
            {characters.map((character) => (
                <div className="flex gap-2 first-letter:uppercase border border-slate-900 bg-slate-900/30 text-white w-fit p-3 rounded-xl" key={character.id}>
                    <h1>{character.name}</h1>
                    <p>{character.gender}</p>
                </div>
            ))}
        </div>
    )
}