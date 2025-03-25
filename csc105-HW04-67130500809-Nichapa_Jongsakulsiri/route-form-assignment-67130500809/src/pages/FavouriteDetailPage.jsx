import { useParams, useSearchParams } from "react-router-dom";
function FavDetail(){
    const {id} = useParams();
    const [searchParams] = useSearchParams();

    const query = searchParams.get("q");
    const size = searchParams.get("size");
    return(
        <div className="flex items-center justify-center h-screen ">
            <div className="text-center w-100 bg-white p-8 rounded-2xl shadow-md">
                <h2 className="text-4xl font-bold">Favourite Details</h2>
                <p className="text-2xl mt-3">Your favourite post is <span className="font-bold">{query}</span>. Post ID is <spna className="font-bold">{id}</spna>. Size is <span className="font-bold">{size}</span>.</p>
            </div>
        </div>
    )
}
export default FavDetail;