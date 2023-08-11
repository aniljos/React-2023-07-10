import React, {JSX} from 'react'
import { Product } from '../models/Product';

type ProductViewProps={
    product: Product,
    onEdit?: (product: Product)=> void
    onDelete?: (product: Product)=> void
}

//React.memo(16.3) ==> 
    //Memoized copy of the component: the copy will be updated only if the props or the state change 

// <ProductView product={item} onEdit={editProduct} onDelete={deleteProduct}/>
// <input type="text" onClick={foo} onKeyDown={bar}/>

const ProductView = React.memo((props: ProductViewProps) : JSX.Element => {

    console.log("Rendering ProductView", props.product.id);

    const {product, onDelete, onEdit} = props;
    const baseUrl = process.env.REACT_APP_BASE_URL || "";

    function edit(){
        if(onEdit){
            onEdit(product);
        }
    }
    function remove(){
        if(onDelete){
            onDelete(product);
        }
    }

    return (
        <div key={product.id} className="product" data-testid="product">
              <p>
                <img src={baseUrl + product.imageUrl} height={50} width={50} />
              </p>
              <p>{product.name}</p>
              <p>{product.price}</p>
              <p>{product.description}</p>
              <div>
                <button onClick={edit}>Edit</button> &nbsp;
                <button onClick={remove}>Delete</button>
              </div>
            </div>
    )
})

export default ProductView;