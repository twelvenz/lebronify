// Cody's component

'use client';
import { useTheme } from '@/lib/useTheme'

export default function Footer() {
    const { currentTheme } = useTheme();
    const style1 = "lg:px-5 px-2 border-amber-600 border-r"

    return (
        <footer
            //styling: fixed footer position at bottom and make width fill screen
            className="flex justify-between items-center h-20 fixed bottom-0 w-full"
            style={{ backgroundColor: currentTheme.secondary}}
        >
            <div className="flex justify-between items-center m-auto">
                <h2 className="px-5"><span className="font-bold">In Honor of the:</span></h2>
                <div className={style1}>
                    <h3 className="font-bold">4x MVP</h3>
                </div>
                <div className={style1}>
                    <h3 className="font-bold">4x Champion</h3>
                </div>
                <div className={style1}>
                    <h3 className="font-bold">4x FMVP</h3>
                </div>
                <div className={style1}>
                    <h3 className="font-bold">21x All Star</h3>
                </div>
                <div className={style1}>
                    <h3 className="font-bold">20x All-NBA</h3>
                </div>
                <div className={style1}>
                    <h3 className="font-bold">3x Olympic Gold Medalist</h3>
                </div>
            </div>
        </footer>
    )
}