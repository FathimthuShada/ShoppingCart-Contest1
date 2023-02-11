fetch("https://dummyjson.com/products")
.then((Response) => Response.json())
.then((data) => {
    console.log("Data is:",data);
    let myArr=data.products;
     let myDiv=document.getElementById("results");
     myArr.map((product) => {
         myDiv.innerHTML += `<div>
                                <img src="${product.images[0]}"> 
                                Title: ${product.title} <br/> 
                                Brand:  ${product.brand} <br/> 
                                Price: ${product.price} <br/> 
                                Rating: ${product.rating} <br/> 
                                Stock: ${product.stock}</div><br/>`
     });
});