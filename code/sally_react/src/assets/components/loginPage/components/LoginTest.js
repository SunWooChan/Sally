import React, { useState } from 'react';
import axios from 'axios';


function Login() {
    const [user, setUser] = useState([]);
    
    // 카페 메뉴를 불러오는 함수입니다.
    async function fetchCafe() {
        const response = await axios.get(
            `https://${window.location.hostname}:8190/data`
        );
        setCafe(response.data);
    };
    
    const menuName = cafe.map(
        (menu) => (<li key={menu.id}> {menu.item} </li>)
    );
    
    // 지시사항을 참고하여 카페 메뉴를 등록하는 기능을 완성하세요.
    // ****************************************
    
    // axios.post()
    const handleSubmit = (event) =>{
        event.preventDefault()
        axios.post(`https://${window.location.hostname}:8190/data`, {
            id : event.target.save_id.value,
            item : event.target.save_item.value
        })
        .then( response => {console.log(response)})
        .catch( response => {console.log(response) })
        
    }
    return (
        <>
            <h4>카페 메뉴</h4>
            <div> {menuName} </div> 
            <button id='load' onClick={fetchCafe}>불러오기</button> <br/><br/>
            <form onSubmit = {handleSubmit}>
                // <input name='save_id'>ID: </input>
                // <label name = 'save_id'/>
                // <input name='save_item'>카페 메뉴: </input>
                // <label name = 'save_item'/>
                // <button id ="save">등록하기</button>
            </form>
        </>
    );
}


function App() {
  return (
    <div className="App">
      <Cafes/>
    </div>
  );
}

export default App;
