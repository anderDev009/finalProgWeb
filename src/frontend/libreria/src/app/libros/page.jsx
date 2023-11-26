import { getBooksByCategory } from "@/Utils/Utils"
import SectionsBook from "@/components/SectionsBook";
import CardBook from "@/components/card";
async function About() {
    const books = await getBooksByCategory();
    return (
        //display: grid; grid-template-columns: 1fr 1fr;"
        <>
        <div className="container" style={{display:'flex',justifyContent:'center',alignItems:"center",marginTop:'6rem'}}>
            <h2>Libros: </h2>
        </div>     
        <SectionsBook books={books.data}></SectionsBook>
       
        </>
    )
}

export default About