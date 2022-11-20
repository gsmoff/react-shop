export type Product = {
    id: number;
    name: string;
    description: string;
    type: string;
    capacity: number;
    price: number;
    image: string;
};
const productsArray:Product[] = [
    {
        id:1,
        name: "iPhone X",
        description: "This is iphone X",
        type: "phone",
        capacity: 64,
        price: 500,
        image: '/images/iphone-gold.jpg'
    },
    {
        id:2,
        name: "iPhone XS",
        description: "This is iphone XS",
        type: "phone",
        capacity: 128,
        price: 800,
        image: '/images/iphone-blu.jpg'

    },
    {
        id:3,
        name: "iPhone X",
        description: "This is iphone X",
        type: "phone",
        capacity: 256,
        price: 600,
        image: '/images/iphone-green.jpg'

    },
    {
        id:4,
        name: "iPhone X",
        description: "This is iphone X",
        type: "phone",
        capacity: 64,
        price: 500,
        image: '/images/iphone-purple.jpg'

    },
    {
        id:5,
        name: "iPhone 12",
        description: "This is iphone 12",
        type: "phone",
        capacity: 512,
        price: 700,
        image: '/images/iphone-red.jpg'

    },
    {
        id:6,
        name: "iPhone 13",
        description: "This is iphone 13",
        type: "phone",
        capacity: 64,
        price: 700,
        image: '/images/iphone-silver.jpg'

    },
    {
        id:7,
        name: "iPhone 14",
        description: "This is iphone 14",
        type: "phone",
        capacity: 128,
        price: 900,
        image: '/images/iphone-yellow.jpg'

    },
        {
        id:8,
        name: "iPhone 12",
        description: "This is iphone 12",
        type: "phone",
        capacity: 512,
            price: 700,
        image: '/images/iphone-black.jpg'
        
    },
]

export const getProductsObject = (array: Product[]) => array.reduce((object,
    product) => ({
    ...object,
    [product.id]: product
    }), {})

export default productsArray