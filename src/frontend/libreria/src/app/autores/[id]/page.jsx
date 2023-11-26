import { getBiography } from "@/Utils/Utils"


async function  page({params}) {
    const biography =  await getBiography(params.id)
    console.log(biography);
    return (
        <div>
            <h1>{params.id}</h1>
        </div>
    )
}

export default page