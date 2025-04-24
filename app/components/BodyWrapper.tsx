// Runbin
// useTheme cannot be used in the layout because layout is server side so body wrapper is created to map the colors to the body.

'use client';

import { useTheme } from '@/lib/useTheme';

export function ThemeBodyWrapper({ children }: { children: React.ReactNode }) {
    const { currentTheme } = useTheme();

    return (
        <div
            style={{
                backgroundColor: currentTheme.primary,
            }}
        >
            {children}
        </div>
    );
}