import React from 'react'
import './Footer.css'
export default function Footer() {

    return (
        <footer id="footer">
            <nav>
                <ol id='customer_service'>
                    <li><a href="">이용약관</a></li>
                    <li><a href="">개인정보처리방침</a></li>
                    <li><a href="">고객센터</a></li>
                </ol>

                <ol id='sns_link'>
                    <li><a href="">Facebook</a></li>
                    <li><a href="">Instagram</a></li>
                    <li><a href="">Blog</a></li>
                </ol>
            </nav>



            <div className="footer_body">
                <div className="address" >
                    <h4>Sally</h4>
                    <p>(주)Sally | 사업자번호 : 000-00-000 | 대표: 선우찬</p>
                    <p>아주대학교 어딘가</p>
                </div>
                <div className="cs_contact">
                    <h4>고객센터</h4>
                    <p>고객문의 : sally@email.example</p>
                    <p>전화 : 02-0000-0000</p>
                    <p>상담시간 : 평일 10:00-17:00</p>
                    <p>제휴문의 : 02-0000-0000</p>
                </div>
            </div>

            <div className="copyright">
                <p>Copyright © Sally. All rights reserved.</p>
            </div>
        </footer>
    )
}
