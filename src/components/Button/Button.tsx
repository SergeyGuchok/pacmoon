'use client'

type Props = {
    onClick: () => void;
    children: React.ReactNode
}

export function Button ({ onClick, children }: Props) {
    return (
        <button onClick={onClick}>{children}</button>
    )
}