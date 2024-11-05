import Banner from "./_components/Banner";
import Category from "./_components/category/Category";
import Footer from "./_components/footer/Footer";
import Header from "./_components/Header";
import NewsLetter from "./_components/newsLetter/newsLetter";
import PaymentMethods from "./_components/paymentMethods/PaymentMethods";
import Products from "./_components/Products/Products";
import { Testimonial } from "./_components/testimonial/Testimonial";

import GlobalApi from "./GlobalApi";

export default async function Home() {

  const getProduct = await GlobalApi.getProduct();
  // console.log("getProduct", getProduct);  

  return (
    <>
    <Header/>
    <Banner/>
    <PaymentMethods/>

    <div className="container px-0 py-10 pl-1">
     <Category/>
    </div>

    <div className="container px-0 py-10 pl-20 ml-8">
    <h1 className="text-3xl font-semibold py-5 ml-20">Popular Products</h1>
      <Products getProduct={getProduct}/>
    </div>  

    <Testimonial className='ml-20' />

    <div className="mt-6">
      <NewsLetter />
    </div>

    <Footer/>
    </>
  );
}
