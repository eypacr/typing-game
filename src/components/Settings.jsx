/* eslint-disable react/prop-types */

const Settings = ({ difficulty, onDifficultyChange }) => {
  return (
    <div className="settings">
      <form id="settings-form">
        <div>
          <label htmlFor="difficulty">Difficulty </label>
          <select
            id="difficulty"
            value={difficulty}
            onChange={(e) => onDifficultyChange(e.target.value)}
          >
            <option value="easy">Kolay</option>
            <option value="medium">Orta</option>
            <option value="hard">Zor</option>
          </select>
        </div>
      </form>
    </div>
  );
};

export default Settings;
