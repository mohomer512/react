import { useEffect, useState } from "react"
import { Link } from "react-router-dom"


export default function ProductList (){
    const [products, setProducts] = useState([]) 
    function getProduct(){
        fetch("http://localhost:4000/products?_sort=id&_order=desc")
          .then(response => {
            if (response.ok){
                return response.json()

            }

            throw new Error()
        })
        .then(data => {
            setProducts(data)
        })
        .catch(error =>{
            alert ("unable to get the data")
        })
    }
   


    useEffect(getProduct, [])

    function deleteProduct(id){
        fetch("http://localhost:4000/products/" + id , {
            method: "DELETE"
        })
        .then (response => {
            if (!response.ok) {
                throw new Error()
            }
            getProduct()
        })
        .catch(error =>{

            alert("cannot delete the product")
        } )

    }



    return (
       <div className ="container my-4">
            <h2 clssName="text-Center m-4">Products</h2>

            <div className="row mb-3">

            <div className="col">
                <Link className="btn btn-primary me-1" to="/admin/products/create" role="button">Create Product</Link>
                <button type="button" className="btn btn-outline-primary" onClick={getProduct}>Refresh</button>
            </div>
            
            <div className="col">
            </div>

            </div>


            <table className="table">
            <thead>
                <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Brand</th>
            <th>Category</th>
            <th>Price</th>
            {/* <th>description</th> */}
            <th>Image</th>
            <th>Created At</th>
            <th>Action</th>

            </tr>
            </thead>
            <tbody>

            </tbody>
                {
                    products.map((products, index) => {
                        return (
                            <thead>
                            <tr key={index} >
                            <td>{products.id}</td>
                            <td>{products.name}</td>
                            <td>{products.brand}</td>
                            <td>{products.categoy}</td>
                            <td>{products.price}$</td>
                            {/* <td>{products.description.slice(0,0)}</td> */}
                            <td><img src = {"http://localhost:4000/images/" + products.imageFilename } width="100" alt="..." /></td>
                            <td>{products.createdAt.slice(0,10)}</td>
                            <td style={{width: "10px", whiteSpace: "nowrap" }}>
                            <Link className="btn btn-primary btn-sm me-1" to={"/admin/products/edit/" + products.id }>Edit</Link>
                            <button type="button" className="btn btn-danger btn-sm" 
                            onClick={()  => deleteProduct(products.id)}>Delete</button>
                            </td>
                            </tr>
                            </thead>


                        )

                    })
                }
            </table>
        </div>




    )
      
}
