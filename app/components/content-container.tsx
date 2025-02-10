import * as React from "react";

export function ContentContainer({children}: {children: React.ReactNode}) {
    return (
        <div className="p-4 border border-gray-4">
            {children}
        </div>
    )
}