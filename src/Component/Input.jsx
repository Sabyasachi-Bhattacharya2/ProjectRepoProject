

export default function Input({label, textarea}) {
    return (
        <p>
            <label>{label}</label>
            {textarea? <textarea/> : <input/>}
        </p>
    )
}