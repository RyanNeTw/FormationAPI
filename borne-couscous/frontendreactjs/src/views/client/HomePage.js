import Header from "../../components/header"
import InsertName from "../../components/client/InsertName"
import ListProducts from "../../components/client/listProducts"
import MenuFooter from "../../components/client/MenuFooter"

export default function HomePage(){


    return(
        <div>
            <Header />


            <InsertName />

            <div>
                <ListProducts />
            </div>

            <MenuFooter />

        </div>
    )
}