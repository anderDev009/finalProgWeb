
import FormContact from '@/components/FormContact';

function page() {

    return (
        <>
            <div className='container' style={{justifyContent:'center',marginTop:'30px'}}>
                <h2>Contactanos:</h2>
            </div>
            <div className="container mt-5" style={{ background: '#B0A695  ', padding: '20px', borderRadius: '8px',marginBottom:'6rem' }}>
                <FormContact></FormContact>
            </div>
        </>
    )
}

export default page;