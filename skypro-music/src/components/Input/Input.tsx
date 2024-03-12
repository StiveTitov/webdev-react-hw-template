type ImputType = {
    className: string,
    type: string,
    placeholder?: string,
    name: string,
    value?: number,
    min?: string,
    max?: number,
    onChange?: () => void
}
export default function Input({ className, type, placeholder, name, value, min, max, onChange }: ImputType) {
    return (
        <>
            <input
                className={className}
                type={type}
                placeholder={placeholder}
                name={name}
                value={value}
                min={min}
                max={max}
                onChange={onChange}
            />
        </>
    );
}