import React, { useEffect, useState } from 'react'
function Books() {
    const [data, setData] = useState([]);
    useEffect(() => {
        try{
            fetch('http://localhost/aqlix/wp-json/wp/v2/posts').
            then((response)=>response.json()).then((res)=>{
               setData(res)
               console.log(res[0])
            })
        }catch(err){
            alert('error')
        }
    }, [])
    
    return (
        data.map((book)=>{
            return(
                <>
                <div  class="card" style={{width: "18rem"}}>
            <img src="..." class="card-img-top" alt="..." />
            <div class="card-body">
                <h5  class="card-title">{book.title.rendered}</h5>
                <p class="card-text">{book.excerpt.rendered}</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>
                </>
            )
        })
    )
}

export default Books