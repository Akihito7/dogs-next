type ProfileIdPage = {
    params : {
        user : string
    }
}

export default function ProfileIdPage({params} : ProfileIdPage){

    return(
        <div>
            <h1>Profile user : {params.user}</h1>
        </div>
    )
}