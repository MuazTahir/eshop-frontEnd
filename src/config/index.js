import { Cuboid, DatabaseZap, Layers, UserCheck } from "lucide-react"


export const SignUpFormControls = [
    {
        name: 'userName',
        label: 'User Name',
        placeholder: "Enter Your First Name",
        componentType: "input",
        type: "text",

    },
    {
        name: 'email',
        label: 'Email',
        placeholder: "Enter  Email",
        componentType: "input",
        type: "email",

    },
    {
        name: 'password',
        label: 'Password',
        placeholder: "Enter Password",
        componentType: "input",
        type: "password",

    },
]


export const LoginFormControls = [

    {
        name: 'email',
        label: 'Email',
        placeholder: "Enter  Email",
        componentType: "input",
        type: "email",

    },
    {
        name: 'password',
        label: 'Password',
        placeholder: "Enter Password",
        componentType: "input",
        type: "password",

    },
]


export const sidebarComponent = [
    {
        id: 'dashboard',
        label: 'DashBoard',
        icons: <DatabaseZap className="text-[#096723de]" />,
        path: '/admin/dashboard'
    },
    {
        id: 'ProductClient',
        label: 'Products',
        icons: <Cuboid className="text-[#096723de]" />,
        path: '/admin/Products'
    },
    {
        id: 'Orders',
        label: 'Orders',
        icons: <Layers className="text-[#096723de]" />,
        path: '/admin/orders'
    },
    {
        id: 'Users',
        label: 'Users',
        icons: <UserCheck className='text-[#096723de]' />,
        path: '/admin/users'
    },
]

export const addProductFormElements = [
    {
        label: "Title",
        name: "title",
        componentType: "input",
        type: "text",
        placeholder: "Enter product title",
    },
    {
        label: "Description",
        name: "description",
        componentType: "textarea",
        placeholder: "Enter product description",
    },
    {
        label: "Category",
        name: "category",
        componentType: "select",
        options: [
            { id: "men", label: "Men" },
            { id: "women", label: "Women" },
            { id: "kids", label: "Kids" },
            { id: "accessories", label: "Accessories" },
            { id: "footwear", label: "Footwear" },
        ],
    },
    {
        label: "Brand",
        name: "brand",
        componentType: "select",
        options: [
            { id: "nike", label: "Nike" },
            { id: "adidas", label: "Adidas" },
            { id: "puma", label: "Puma" },
            { id: "levi", label: "Levi's" },
            { id: "zara", label: "Zara" },
            { id: "h&m", label: "H&M" },
        ],
    },
    {
        label: "Price",
        name: "price",
        componentType: "input",
        type: "number",
        placeholder: "Enter product price",
    },
    {
        label: "Sale Price",
        name: "salePrice",
        componentType: "input",
        type: "number",
        placeholder: "Enter sale price (optional)",
    },
    {
        label: "Total Stock",
        name: "totalStock",
        componentType: "input",
        type: "number",
        placeholder: "Enter total stock",
    },
];