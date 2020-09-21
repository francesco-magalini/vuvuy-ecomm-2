import React from "react";
import conditions from "./conditions";
import categoryPromo from "./categoryPromo";
import topCategories from "./topCategories";
import bestSellers from "./bestSellers";
import recentlyViewed from "./recentlyViewed";
import newArrivals from "./newArrivals";
import detailCategoryElectronics from "./detailCategoryElectronics";
import detailCategoryMobiles from "./detailCategoryMobiles";
import recommendedProducts from "./recommendedProducts";
import topBrands from "./topBrands";
import mostViewed from "./mostViewed";
import topCarouselReactSlick from "./topCarouselReactSlick";
import Header from "../layout/header";
import Footer from "../layout/footer";

export default function home() {
  return (
    <>
      <div className="App">
        <div className="page-wrapper">
          <Header />

          <main className="main home">
            <div className="container">
              {topCarouselReactSlick()}
              {conditions()}
              {mostViewed()}
              {categoryPromo()}
              {topCategories()}
            </div>
            {bestSellers()}
            <div className="container">
              {recentlyViewed()}
              {newArrivals()}
              {detailCategoryElectronics()}
              {detailCategoryMobiles()}
              {recommendedProducts()}
            </div>
            {topBrands()}
          </main>

          <Footer />
        </div>



      </div>

    </>
  );
}
