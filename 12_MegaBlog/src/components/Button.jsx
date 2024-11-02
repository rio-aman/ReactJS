import React from "react";

export default function Button({
    children,
    type = "button",
    bgColor = "bg-blue-600",
    textColor = "text-white",
    className = "",
    ...props
    // yaha pr className ko khali or ...props is leyia deya hai ke phla className user apne bhi desakta hai to vo javascript ka help se button me add hojayenge
    // or ...props ka mtlb ye hai ke user or bhi properties desakta hai button ko to vo jobhi dega ... honi ke vaja se spread hojayenge or button inject hojayenge javascript ke help se 
}) {
    return (
        <button className={`px-4 py-2 rounded-lg ${bgColor} ${textColor} ${className}`} {...props}>
            {children}
        </button>
    );
}