export default function Input({
    label, placeholder, onChange, value, type
}) {
    return (
        <>
            <label className="mt-3">{label}</label>
            <input 
            placeholder={placeholder}
            type={type || "text"} 
            value={value}
            onChange={onChange}
            className="focus:outline-none px-2 py-1 rounded-lg text-black"
            />
        </>
    )
}