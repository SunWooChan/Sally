import React from 'react'

export default function Products() {
    return (
    <section id="products">
    {/* <!-- 추천 상품 슬라이더 --> */}
      <div class="title">
        <h2>맞춤 샐러드</h2>
        <p>
          고객님의 영양상태에 맞는 샐러드를 추천해드립니다. 
        </p>
      </div>

      <div class="slider">

        <div class="slide active"></div>
        <div class="slide"></div>
        <div class="slide"></div>

      </div>

      <p class="left-arrow"></p>
      <p class="right-arrow"></p>

    </section>
    )
}
