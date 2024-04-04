export default function Button ({text, onClick}) {
    return(
        <button type="button" onClick={onClick} className="my-3 p-2 bg-red-500 rounded-lg">
            {text}
        </button>
    )
}