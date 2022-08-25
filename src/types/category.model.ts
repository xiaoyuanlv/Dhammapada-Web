
export type Category = {
    id: number;
    title: string;
    mm_title: string;
    pali_title: string;
    pali_roman: string;
};

export type CategoryListResponse = {
    data: Category[]
};
 
export type CategoryResponse = {
    data: Category[],
    meta: {
        id: number;
    }
};
 