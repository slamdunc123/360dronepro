export type ToursPropsType = {
	tours: TourType[] | null | undefined;
};

type TourType = {
	__typename: 'Tour';
	id: string;
	name: string;
	caption?: string | null | undefined;
	description?: string | null | undefined;
	url: string;
	category: string;
	createdAt: string;
	updatedAt: string;
} | null;

export type AerialType = {
	img: string;
	url: string;
};
