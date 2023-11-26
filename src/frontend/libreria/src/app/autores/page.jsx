import { getAuthors } from "@/Utils/Utils"
import AuthorCard from "@/components/authorCard";
async function page() {
    const authors = await getAuthors();
    return (
        <>
            <div className="container">
                <h1 style={{ textAlign: "center" }}>Autores</h1>
            </div>
            <div className='container' style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', columnGap: '12px', rowGap: '12px' }}>
                {authors.data.map((author) => (
                    <AuthorCard key={author.id_autor} props={author}></AuthorCard>
                ))}
            </div>
        </>

    )
}

export default page