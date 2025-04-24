// Body Wrapper - Runbin

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