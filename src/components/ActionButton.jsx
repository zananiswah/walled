import { useTheme } from "../hooks/useTheme";
function ActionButton({ children, disabled, onClick }) {
  const { toggleTheme, theme } = useTheme();
  const themeColor = theme === "green" ? "#19918F" : "#007BFF";
    return (
      
      <button
        className="bg-[#19918F] text-white font-bold shadow-[0_0_10px_0_rgba(25,145,143,1)] p-4 rounded-[5px] hover:scale-105 transition-all active:scale-110 disabled:opacity-50 disabled:hover:scale-100" 
        disabled={disabled}
        onClick={onClick}
        style={{ backgroundColor: themeColor }}
      >
        {children}
      </button>
    );
  }
  
  export default ActionButton;