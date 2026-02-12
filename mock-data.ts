export interface Ingredient {
    id: string;
    name: string;
    stock: number;
    unit: string;
    lowStockThreshold: number;
}

export interface MenuItem {
    id: string;
    name: string;
    price: number;
    category: string;
    description: string;
    ingredients: { ingredientId: string; quantity: number }[];
}

export interface OrderItem {
    item: MenuItem;
    quantity: number;
    modifiers?: string[];
}

export interface Order {
    id: string;
    tableId: number;
    status: 'Pending' | 'Preparing' | 'Ready' | 'Completed';
    items: OrderItem[];
    total: number;
    createdAt: string;
}

export const ingredients: Ingredient[] = [
    { id: 'i1', name: 'Burger Bun', stock: 50, unit: 'pcs', lowStockThreshold: 10 },
    { id: 'i2', name: 'Beef Patty', stock: 40, unit: 'pcs', lowStockThreshold: 10 },
    { id: 'i3', name: 'Lettuce', stock: 20, unit: 'heads', lowStockThreshold: 3 },
    { id: 'i4', name: 'Cheese Slice', stock: 100, unit: 'slices', lowStockThreshold: 20 },
    { id: 'i5', name: 'Tomato', stock: 30, unit: 'pcs', lowStockThreshold: 5 },
    { id: 'i6', name: 'Fries', stock: 10, unit: 'kg', lowStockThreshold: 2 },
    { id: 'i7', name: 'Coca Cola', stock: 48, unit: 'cans', lowStockThreshold: 12 },
];

export const menuItems: MenuItem[] = [
    {
        id: 'm1',
        name: 'Classic Cheeseburger',
        price: 12.99,
        category: 'Mains',
        description: 'Juicy beef patty with cheddar cheese, lettuce, and tomato.',
        ingredients: [
            { ingredientId: 'i1', quantity: 1 },
            { ingredientId: 'i2', quantity: 1 },
            { ingredientId: 'i3', quantity: 0.1 },
            { ingredientId: 'i4', quantity: 1 },
            { ingredientId: 'i5', quantity: 0.5 },
        ],
    },
    {
        id: 'm2',
        name: 'Fries',
        price: 4.99,
        category: 'Sides',
        description: 'Crispy golden fries.',
        ingredients: [{ ingredientId: 'i6', quantity: 0.2 }],
    },
    {
        id: 'm3',
        name: 'Coke',
        price: 2.50,
        category: 'Drinks',
        description: 'Chilled can of Coca Cola.',
        ingredients: [{ ingredientId: 'i7', quantity: 1 }],
    },
];

export const initialOrders: Order[] = [
    {
        id: 'ord1',
        tableId: 5,
        status: 'Preparing',
        items: [
            { item: menuItems[0], quantity: 2, modifiers: ['No onions'] },
            { item: menuItems[1], quantity: 1 },
        ],
        total: 30.97,
        createdAt: new Date().toISOString(),
    },
    {
        id: 'ord2',
        tableId: 2,
        status: 'Ready',
        items: [
            { item: menuItems[2], quantity: 2 },
        ],
        total: 5.00,
        createdAt: new Date(Date.now() - 1000 * 60 * 15).toISOString(),
    },
];
