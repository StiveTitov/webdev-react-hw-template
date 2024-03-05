type ImputType = {
    className: string,
    type: string,
    placeholder?: string,
    name: string
}
export default function Input({ className, type, placeholder, name }: ImputType) {
    return (
        <>
            <input
                className={className}
                type={type}
                placeholder={placeholder}
                name={name}
            />
        </>
    );
}