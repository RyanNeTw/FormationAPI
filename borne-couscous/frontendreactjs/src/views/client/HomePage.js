import Header from "../../components/header"
import InsertName from "../../components/client/InsertName"
import ListProducts from "../../components/client/listProducts"

export default function HomePage(){


    return(
        <div>
            <Header />


            {/* <InsertName /> */}

            <div>
                <ListProducts />
            </div>

        </div>
    )
}