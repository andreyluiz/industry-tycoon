import { LandType, ResourceLocation, ResourceType } from './types';

export const LAND_IMAGES = {
	[LandType.Plains]: '/images/lands/plains.webp',
	[LandType.Mountain]: '/images/lands/mountains.webp',
	[LandType.Forest]: '/images/lands/forest.webp'
};

export const LAND_TITLES = {
	[LandType.Plains]: 'Great Plains',
	[LandType.Mountain]: 'Mountainous Land',
	[LandType.Forest]: 'Dense Forest'
};

export const LAND_DESCRIPTIONS = {
	[LandType.Plains]:
		'A vast field of grass and wildflowers. It is a good place for farming or for a city. Also, it might hide precious minerals underneath.',
	[LandType.Mountain]:
		'A rugged and mountainous terrain. It is a good place for mining stone or other minerals.',
	[LandType.Forest]:
		'A dense forest with a rich variety of trees and plants. It is a good place for wood extraction. Also, it might hide precious minerals underneath.'
};

export const LAND_PRICE_RANGES = {
	[LandType.Plains]: [2750000, 3250000],
	[LandType.Mountain]: [1325000, 2750000],
	[LandType.Forest]: [3250000, 3750000]
};

export const RESOURCE_UNIT_PRICE_RANGES = {
	[ResourceType.Iron]: [75, 125],
	[ResourceType.Wood]: [25, 75],
	[ResourceType.Stone]: [50, 100],
	[ResourceType.Corn]: [25, 50]
};

export const RESOURCE_QUANTITY_RANGES_PER_LAND = {
	[LandType.Plains]: {
		[ResourceType.Iron]: [1000, 2000],
		[ResourceType.Wood]: [10, 25],
		[ResourceType.Stone]: [1000, 2000],
		[ResourceType.Corn]: [5000, 7500]
	},
	[LandType.Mountain]: {
		[ResourceType.Iron]: [5000, 10000],
		[ResourceType.Wood]: [500, 750],
		[ResourceType.Stone]: [5000, 10000],
		[ResourceType.Corn]: [10, 25]
	},
	[LandType.Forest]: {
		[ResourceType.Iron]: [1000, 2000],
		[ResourceType.Wood]: [5000, 7500],
		[ResourceType.Stone]: [1000, 2000],
		[ResourceType.Corn]: [10, 25]
	}
};

export const RESOURCE_LOCATIONS = {
	[ResourceType.Iron]: [ResourceLocation.Surface, ResourceLocation.Underground],
	[ResourceType.Wood]: [ResourceLocation.Surface],
	[ResourceType.Stone]: [ResourceLocation.Surface, ResourceLocation.Underground],
	[ResourceType.Corn]: [ResourceLocation.Surface]
};

export const RESOURCE_IMAGES = {
	[ResourceType.Iron]: '/images/resources/iron.webp',
	[ResourceType.Wood]: '/images/resources/wood.webp',
	[ResourceType.Stone]: '/images/resources/stone.webp',
	[ResourceType.Corn]: '/images/resources/corn.webp'
};
