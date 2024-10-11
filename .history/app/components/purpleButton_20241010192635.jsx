export default function PurpleButton({ bgColor = '57458F', textColor = '#FFFFFF', boxWidth = 'auto', text, onClick }) {
    return (
      <button 
        className="flex justify-center items-center h-[48px] rounded-full text-lg font-medium px-6 transition-colors duration-300"
        style={{ backgroundColor: bgColor, color: textColor, width: boxWidth }}
        onMouseEnter={(e) => {
          e.target.style.backgroundColor = "#7461AC";
          e.target.style.color = "#FFFFFF";
        }}
        onMouseLeave={(e) => {
          e.target.style.backgroundColor = bgColor;
          e.target.style.color = textColor;
        }}
        onClick={onClick}
      > 
        <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.779 17.779 4.36 19.918 6.5 13.5m4.279 4.279 8.364-8.643a3.027 3.027 0 0 0-2.14-5.165 3.03 3.03 0 0 0-2.14.886L6.5 13.5m4.279 4.279L6.499 13.5m2.14 2.14 6.213-6.504M12.75 7.04 17 11.28"/>
</svg>
        {text}
      </button>
    );
  }