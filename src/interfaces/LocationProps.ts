export interface LocationProps {
    id: number;
    name: string;
    type: string;
    dimension: string;
    residents: string[];
    url: string;
    created: string;
}

export type Locations = LocationProps[];
