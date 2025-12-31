export type AttireType = 'Cozy'  | 'Fancy' | 'Casual'

export interface Activity {
    id: string;
    title: string;
    description: string;
    imageUrl: string;
    attire: AttireType[];
    tags: string[];
}


export interface Category {
    id: string;
    title: string;
    associatedAttire: AttireType;
    activityIds: string[];
    stepOrder: number;
}

export interface Sticker {
    id: string;
    src: string;
    alt: string;
    defaultScale: number;
}