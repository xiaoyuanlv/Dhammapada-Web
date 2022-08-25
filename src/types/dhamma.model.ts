
export type Dhamma = {
    id: number;
    message: string;
    mm_message: string;
    pali_message: string;
    pali_roman: string;
    fav: number;
    category_id: number;
};

export type DhammaListResponse = {
    data: Dhamma[]
};
 