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
                <h2 className="px-5"><span className="font-bold">Lebron's Stats</span> (April 2025):</h2>
                <div className={style1}>
                    <h3 className="font-bold">MVPs won:</h3>
                    <p>4</p>
                </div>
                <div className={style1}>
                    <h3 className="font-bold">All-Stars won:</h3>
                    <p>21</p>
                </div>
                <div className={style1}>
                    <h3 className="font-bold">Total Points Scored:</h3>
                    <p>42,184</p>
                </div>
                <div className={style1}>
                    <h3 className="font-bold">Points Per Game:</h3>
                    <p>27.0</p>
                </div>
                <div className={style1 + " md:block hidden"}>
                    <h3 className="font-bold">Assists Per Game:</h3>
                    <p>7.4</p>
                </div>
                <div className={style1 + " lg:block hidden"}>
                    <h3 className="font-bold">Rebounds Per Game:</h3>
                    <p>7.5</p>
                </div>
                <div className={style1 + " 2xl:block hidden"}>
                    <h3 className="font-bold">Highest Scoring Game:</h3>
                    <p>61 PTS vs. Charlotte Bobcats</p>
                </div>
                <div className="lg:px-5 px-2 2xl:block hidden">
                    <h3 className="font-bold">Olympic Medals:</h3>
                    <p>3 Gold, 1 Bronze</p>
                </div>
            </div>
        </footer>
    )
}