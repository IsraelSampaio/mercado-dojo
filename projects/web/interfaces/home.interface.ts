export interface ChildrenCategory {
    id: string;
    name: string;
    permalink: string;
}

export interface Category {
    id: string;
    name: string;
    permalink: string;
    children_categories: ChildrenCategory[];
}

export interface Pictures {
    id: number;
    name: string;
    url: string;
    secure_url: string;
}

export interface Brand {
    official_store_id: number;
    fantasy_name: string;
    permalink: string;
    pictures: Pictures;
}

export interface Sidebar {
    title: string;
    brands: Brand[];
}

export interface SubDepartments {
    name: string;
    categories: Category[];
    sidebar: Sidebar;
}

export interface HomeProps {
    departments: {
        title: string;
        url: string;
        subDepartments: SubDepartments;
    };
}
