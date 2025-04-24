// Runbin
// This theme switcher is a dropdown that lets you pick the team and it'll update the colors based on the team selected.

'use client';
import { useTheme } from '@/lib/useTheme';

export function ThemeSwitcher() {
    const { currentTeam, changeTeam, availableTeams } = useTheme();

    return (
        <div className="p-4">
            <label htmlFor="team-select" className="mr-2">Select Team:</label>
            <select
                id="team-select"
                value={currentTeam}
                onChange={(e) => changeTeam(e.target.value)}
                className="p-2 rounded border"
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