// Runbin
// This theme switcher is a dropdown that lets you pick the team and it'll update the colors based on the team selected.

'use client';
import { useTheme } from '@/lib/useTheme';

export function ThemeSwitcher() {
    const { currentTeam, changeTeam, availableTeams } = useTheme();

    return (
        <div className="px-3 border-l-2 border-black">
            <label htmlFor="team-select" className="mr-2 font-bold text-lg hover:scale-[1.02] inline-block">Theme:</label>
            <select
                id="team-select"
                value={currentTeam}
                onChange={(e) => changeTeam(e.target.value)}
                className="px-2 rounded-2xl border"
            >
                {availableTeams.map(team => (
                    <option key={team} value={team}>
                        {team}
                    </option>
                ))}
            </select>
        </div>
    );
}