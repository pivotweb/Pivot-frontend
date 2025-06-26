import type React from "react"

interface ContainerWrapperProps {
    children: React.ReactNode;
}

export const ContainerWrapper: React.FC<ContainerWrapperProps> = ({children}) => {
    return (
        <section className="px-4 md:px-8 relative">
            {children}
        </section>
    );
}