type PhotoIdPage = {
    params : {
        id : string
    }
}

export default function PhotoIdPage({params} : PhotoIdPage){
    return (
        <div>
            <h1>Photo id : {params.id}</h1>
        </div>
    )
}