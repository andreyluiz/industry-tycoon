export enum LandType {
	Plains = 'Plains',
	Mountain = 'Mountain',
	Forest = 'Forest'
	// Barren = 'Barren',
	// Desert = 'Desert',
	// Tundra = 'Tundra',
}

export enum ResourceType {
	Iron = 'Iron',
	Wood = 'Wood',
	Stone = 'Stone',
	Corn = 'Corn'
}

export enum ResourceLocation {
	Surface = 'Surface',
	Underground = 'Underground'
}

export interface Resource {
	title: string;
	type: ResourceType;
	amount: number;
	image: string;
	location: ResourceLocation;
}

export interface Land {
	title: string;
	type: LandType;
	description: string;
	image: string;
	resources: Resource[];
	size: number;
	price: number;
}
