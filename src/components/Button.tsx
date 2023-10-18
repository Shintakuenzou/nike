interface Buttonprops {
  label: string;
  iconUrl?: string;
  bgColor?: string;
  borderColor?: string;
  textColor?: string;
  fullWidth?: boolean;
}

export function Button({ label, iconUrl, bgColor, borderColor, textColor, fullWidth }: Buttonprops) {
  return (
    <button
      className={`flex justify-center items-center gap-2 px-7 py-4 
      font-montserrat text-lg leading-none 
      ${
        bgColor
          ? `${bgColor} ${textColor} ${borderColor} hover:bg-zinc-700`
          : "bg-cyan-600 hover:bg-sky-500  text-white border-cyan-500"
      }
      rounded-full ${fullWidth && "w-full"} transition-colors
      `}
    >
      {label}
      {iconUrl && <img className="ml-2 rounded-full w-5 h-5" src={iconUrl} alt="arrowRight" />}
    </button>
  );
}
