import CardBook from './card'
function SectionsBook(props) {
    return (
        <div className="container " style={{ marginTop: '30px' }}>
            {props.books.map((book) => (
                
                <div className='container'>
                    <h2 style={{textAlign:'center',marginTop:'2rem', backgroundColor:'#F5E8C7'}}>Categoria: {book.tipo}</h2>
                    <div className='container'  style={{marginTop:'3rem',display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', columnGap: '12px', rowGap: '12px'}}>
                    {book.titles.map((title) =>(
                        <CardBook props={title}></CardBook>
                    ))}
                    </div>
                </div>
            )
            )}
        </div>
    )
}

export default SectionsBook