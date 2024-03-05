type SVGtype = {
    icon: string,
    className?: string
}

export default function SVG({ className, icon }: SVGtype) {
    return (
        <svg className={className}>
            <use xlinkHref={`img/icon/sprite.svg#${icon}`} />
        </svg>
    );
}