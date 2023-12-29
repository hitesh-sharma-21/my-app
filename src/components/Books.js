import React, { useEffect, useState } from 'react'
function Books() {
    const [data, setData] = useState([]);
    useEffect(() => {
        try{

            fetch('https://webroottech.com/wp-json/wp/v2/posts').
            then((response)=>response.json()).then((res)=>{
                setData(res)
                console.log(res[0])
            })
        }catch(error){
                        console.log('i am in erro')
        }finally{

            if (!data){
              return <h1>... loading</h1>
            }
        }
        
    }, [])
    return (

        <>
        <div className="row">

      {data.map((book)=>{
          return(
             <div className="col-md-4">
                 <div  class="card" style={{width: "18rem"}}>
            <img src="..." class="card-img-top" alt="..." />
            <div class="card-body">
                <h5  class="card-title" dangerouslySetInnerHTML={{__html: book.title.rendered }}/>
                <p class="card-text" dangerouslySetInnerHTML={{__html: book.excerpt.rendered}}/>
                <a href="#" class="btn btn-primary">Read more</a>
            </div>
        </div>
             </div>
            )
        })}
        </div>
        </>
    )
}

export default Books