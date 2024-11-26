export type CharacterType = {
    created: string
    episode: string[]
    gender: 'Male' | 'Female' | 'Genderless' | 'unknown'
    id: number
    image: string
    location: { name: string, url: string }
    name: string
    origin: { name: string, url: string }
    species: string
    status: 'Alive' | 'Dead' | 'unknown'
    type: string
    url: string
}

type Info = {
    count: number;
    pages: number;
    next: string | null;
    prev: string | null;
}



export type LocationType = {
    "id": number
    "name": string
    "type": string
    "dimension": string
    "residents": string[]
    "url": string
    "created": string
}
export type EpisodesType = {
    "id": number
    "name": string
    "air_date": string
    "episode": string
    "characters": string[]
    "url": string,
    "created": string
}



export type CharacterResponse = {
    info: Info
    results: CharacterType[]
}
export type LocationsResponse = {
    info: Info
    results: LocationType[]
}

export type EpisodesResponse = {
    info: Info
    results: EpisodesType[]
}

export type Status = "alive" | "dead" | "unknown" | ""

export type Gender = "female" |"male" |"genderless" | "unknown" | ""
export type Species = "human" |"alien" |"humanoid" | "poopybutthole" | "mythological"| "unknown" | "animal" | "disease"| "robot"| "cronenberg"|"planet"| ""

export type Loading = {
    loading: boolean
}

