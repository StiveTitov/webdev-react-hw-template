type SkiletonType={
    className: string;
}
export default function Skileton({ className }: SkiletonType) {
    return (
        <>
            <div className={className}></div>
        </>
    );
}