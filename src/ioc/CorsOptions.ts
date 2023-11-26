class CorsOptionsDependency {
    static CorsOptions = {
        origin: 'https://nextjs-finalprogweb.vercel.app', // Sustituye variables
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
        credentials: true,
        optionsSuccessStatus: 200,
        allowedHeaders: 'Content-Type',
    }
}

export default CorsOptionsDependency