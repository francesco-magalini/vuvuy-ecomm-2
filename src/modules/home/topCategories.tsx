import React from "react";

export default function topCategories() {
  return (
    <section className="product-category-panel mb-6">
      <div className="section-title">
        <h2>Top Categories</h2>
      </div>
      <div
        className="product-category-intro owl-carousel owl-theme text-center"
        data-toggle="owl"
        data-owl-options="{
          'margin': 0,
          'items': 2,
          'autoplayTimeout': 5000,
          'dots': false,
          'nav': true,
          'responsive': {
              '480': {
                  'items': 3
              },
              '576': {   
                  'items' : 4;
              },
              '768': {
                  'items': 5
              },
              '992': {
                  'items' : 6
              },
              '1200' : {
                  'items' : 7
              }
          }
      }"
      >
        <a href="category.html">
          <i className="icon-category-fashion" />
          Fashion
        </a>
        <a href="category.html">
          <i className="icon-category-electronics" />
          Electronics
        </a>
        <a href="category.html">
          <i className="icon-category-gifts" />
          Gifts
        </a>
        <a href="category.html">
          <i className="icon-category-garden" />
          Garden
        </a>
        <a href="category.html">
          <i className="icon-category-music" />
          Music
        </a>
        <a href="category.html">
          <i className="icon-category-motors" />
          Motors
        </a>
        <a href="category.html">
          <i className="icon-category-furniture" />
          Furniture
        </a>
      </div>
    </section>
  );
}
