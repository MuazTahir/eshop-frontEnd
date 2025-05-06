
import AuthHeader from "@/app/components/auth/auth-header";
import ProductClient from "@/app/components/client/Product-client";
import ShopHeader from "@/app/components/shoppingPanel/shopHeader";





const { default: axios } = require("axios");


async function getProduct(id) {
    try {

        const res = await axios.get(`http://localhost:5000/api/apiData/${id}`)
        return res.data
    } catch (error) {
        console.log('the error of dynamic id:', error);
        return null;
    }


}

export default async function ProductDetails({ params }) {
    const { id } = params
    // console.log('the id is :', id);
    const product = await getProduct(id);




    if (!product) return <div> <h1 className="text-3xl">No Product Found</h1></div>

    return (
        <div>

            <AuthHeader />
            <ProductClient product={product} />

        </div>
    );

}