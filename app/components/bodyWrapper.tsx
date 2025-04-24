// Runbin
// useTheme cannot be used in the layout because layout is server side so body wrapper is created to map the colors to the body.

'use client';

import { useTheme } from '@/lib/useTheme';

export function BodyWrapper({ children }: { children: React.ReactNode }) {
    const { currentTheme } = useTheme();

    return (
        <body
            style={{
                backgroundColor: currentTheme.primary,
            }}
        >
            {children}
        </body>
    );
}