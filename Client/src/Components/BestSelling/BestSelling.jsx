import React from 'react'
import "./BestSelling.css"
const BestSelling = () => {
    return (
        <div>
            <section id="best-selling" class="leaf-pattern-overlay">
                <div class="corner-pattern-overlay"></div>
                <div class="container">
                    <div class="row justify-content-center">

                        <div class="col-md-8">

                            <div class="row">

                                <div class="col-md-6 left">
                                    <figure class="products-thumb">
                                        <img src="https://covers.openlibrary.org/b/id/11447888-L.jpg" alt="book" class="single-image"/>
                                    </figure>
                                </div>

                                <div class="col-md-6 right">
                                    <div class="product-entry">
                                        <h2 class="section-title divider">Best Selling Book</h2>

                                        <div class="products-content">
                                            <div class="author-name">By Timbur Hood</div>
                                            <h3 class="item-title">Birds gonna be happy</h3>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu feugiat amet,
                                                libero ipsum enim pharetra hac.</p>
                                            <div class="item-price">$ 45.00</div>
                                            <div class="btn-wrap">
                                                <a href="#" class="btn-accent-arrow">shop it now <i
                                                    class="icon icon-ns-arrow-right"></i></a>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default BestSelling