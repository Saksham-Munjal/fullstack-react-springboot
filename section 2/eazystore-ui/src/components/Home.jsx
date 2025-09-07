import products from "../data/products";
import PageHeading from "./PageHeading";
import ProductListing from "./ProductListing";


export default  function Home(){
    return (
        <div className="home-container"> 
        <PageHeading title = "Explore Eazy Stickers!">
            Add a touch of your creativity to your space withwide range of fun and 
      unique stickers.Perfect for any occasion!
        </PageHeading>
        <ProductListing products={products}/>
        </div>
    );
}