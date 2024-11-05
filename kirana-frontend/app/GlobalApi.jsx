import { Item } from "@radix-ui/react-dropdown-menu";
import axios from "axios";


const API_KEY=process.env.NEXT_PUBLIC_STRAPI_API_KEY

const axiosClient = axios.create({
    baseURL:"http://localhost:1337/api",
    headers: {
        'Authorization':`Bearer ${API_KEY}`
    }
});

const getCategory =()=> axiosClient.get("/categories?populate=*");
//getCategory fetch from Strapi
const getProduct =()=> 
    axiosClient.get("/products?populate=*").then((res)=>res.data.data) || [];


// register from strapi
const registerUser =(username, email, password) => axiosClient.post("/auth/local/register",{
    username,
    email,
    password
});

// sign-in from strapi
const signIn = (email, password) => axiosClient.post("/auth/local", {
    identifier: email, password
});

  

// signle category fetch
const getSingleCategory = (category) =>
    axiosClient.get(`/products?populate=*&filters[category][title][$in]=${category}`
    );

// to be continue...
const addToCart = (data, jwt) => axiosClient.post(`http://localhost:1337/api/user-carts/:id`, data, {
    headers: {
        Authorization:
        "Bearer " +
        "634560def821528efd142a0c87fe018d1b8ae0667fabb0f6d1aaeb82d268e3e539e8486194fa01fd5db5df2bdbfc9f63dbe37a7e8d5284a253d2f52f6bcb5b6bd31c4b349decc23e887feeb9326a06a828b6c8c00e46e5591feabfebe1b8ad214eb0098e5ee8b1f3a5971e323c4074d4282b207ef244ece8aa935809a27bb64e"
    },
});

const getCartItem = (userId,jwt) => axiosClient.get(
    `/user-carts?populate[products][populate]=*&filters[userId][$eq]=${userId}`,
    {
        headers: {
            Authorization: "Bearer" + jwt,
        },
    }
).then((res)=>{
    const result = res.data.data;
    // console.log("result"+result);

    const CartItemsList = result.map((item, index)=>({
        title: item.products?.data[0].title,
        quantity: item.quantity,
        amount: item.amount,
        img: item.products?.data[0].img?.url,
        price: item.products?.data[0].price,
        id: item.id,

    }));
    return CartItemsList;
});

export default {
    getCategory, 
    getProduct, 
    getSingleCategory, 
    registerUser, 
    signIn, 
    addToCart,
    getCartItem
};