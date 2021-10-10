import { func } from 'prop-types'
import React from 'react'
import './ServiceIntro.css'

export default function ServiceIntro() {
    const services = [
        {id : 1, name : '건강 설문', description: '설문을 한다.', img : '아이콘 이미지'},
        {id : 2, name :'샐러드 추천', description: '샐러드를 추천한다', img : '이미지'},
        {id : 3,name : '샐러드 구독', description : '샐러드를 구독한다', img : '이미지'}
    ]
    const serviceFunctionList = services.map(e =>
        <li id = {e.id}>
            <p>{e.img}</p>
            <h4>0{e.id}</h4>
            <h3>{e.name}</h3>
            <p>{e.description}</p>
        </li>
        );
    
    return (
        <ol id = 'serviceFunctions'>
            {serviceFunctionList}
        </ol>
    )
}
