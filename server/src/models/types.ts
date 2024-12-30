export interface IManufacturer {
    _id: string;
    name: string;
    country: string;
    logo: string;
    contact: {
    email: string;
    phone: string;
    };
    established: number;
    }
    export interface ICategory {
    _id: string;
    name: string;
    description: string;
    icon: string;
    }
    export interface IKosherType {
    _id: string;
    name: string;
    symbol: string;
    description: string;
    }
    export interface ICandy {
    _id: string;
    name: string;
    manufacturerId: string;
    description: string;
    price: number;
    categoryIds: string[];
    kosherTypeIds: string[];
    ingredients: string[];
    nutritionFacts: {
    servingSize: string;
    calories: number;
    fat: number;
    carbs: number;
    protein: number;
    };
    inStock: number;
    averageRating: number;
    manufactureDate: Date;
    expiryDate: Date;
    allergens: string[];
    isGlutenFree: boolean;
    isVegan: boolean;
    }
    export interface IUser {
    _id: string;
    username: string;
    email: string;
    password: string;
    favoriteIds: string[];
    role: 'USER' | 'ADMIN';
    }
    export interface IReview {
    _id: string;
    candyId: string;
    userId: string;
    rating: number;
    content: string;
    date: Date;
    likes: number;
    }
    