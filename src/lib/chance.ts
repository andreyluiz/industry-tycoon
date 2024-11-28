import {
	LAND_DESCRIPTIONS,
	LAND_IMAGES,
	LAND_PRICE_RANGES,
	LAND_TITLES,
	RESOURCE_IMAGES,
	RESOURCE_LOCATIONS,
	RESOURCE_QUANTITY_RANGES_PER_LAND,
	RESOURCE_UNIT_PRICE_RANGES
} from './constants';
import { LandType, ResourceType, type Land, type Resource } from './types';

const getRandomArrayItem = <T>(array: T[]): T => {
	return array[Math.floor(Math.random() * array.length)];
};

const getRandomNumberInRange = (min: number, max: number): number => {
	return Math.floor(Math.random() * (max - min + 1)) + min;
};

const getRandomResource = (landType: LandType): Resource => {
	const type =
		Object.values(ResourceType)[Math.floor(Math.random() * Object.values(ResourceType).length)];
	const quantityRange = RESOURCE_QUANTITY_RANGES_PER_LAND[landType][type];
	const amount = getRandomNumberInRange(quantityRange[0], quantityRange[1]);
	const location = getRandomArrayItem(RESOURCE_LOCATIONS[type]);

	return {
		title: type,
		type,
		amount,
		image: RESOURCE_IMAGES[type],
		location
	};
};

const getRandomResources = (landType: LandType, landSize: number): Resource[] => {
	const resourceCount = getRandomNumberInRange(1, 3);
	const resources: Resource[] = [];
	const maximumResourceAmount = Math.floor(landSize / 10);

	for (let i = 0; i < resourceCount; i++) {
		const resource = getRandomResource(landType);
		if (resources.some((r) => r.type === resource.type)) {
			i--;
			continue;
		}
		const totalResourcesAmount = resources.reduce((acc, r) => acc + r.amount, 0);
		if (resource.amount + totalResourcesAmount > maximumResourceAmount) {
			resource.amount = maximumResourceAmount - totalResourcesAmount;
		}
		resources.push(resource);
	}

	return resources;
};

export const getRandomLand = (): Land => {
	const type = getRandomArrayItem(Object.values(LandType));
	const size = getRandomNumberInRange(10000, 100000);
	const priceRange = LAND_PRICE_RANGES[type];
	const price = getRandomNumberInRange(priceRange[0], priceRange[1]);
	const resources = getRandomResources(type, size).filter((r) => r.amount > 0);
	const resourcePrice = resources.reduce(
		(acc, resource) => acc + resource.amount * RESOURCE_UNIT_PRICE_RANGES[resource.type][0],
		0
	);
	return {
		title: LAND_TITLES[type],
		type,
		description: LAND_DESCRIPTIONS[type],
		image: LAND_IMAGES[type],
		resources,
		size: Math.floor(Math.random() * 100000) + 10000,
		price: price + resourcePrice
	};
};

export const getRandomLands = (count: number): Land[] => {
	return Array.from({ length: count }, () => getRandomLand()).sort((a, b) => a.price - b.price);
};
