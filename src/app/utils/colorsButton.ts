export function getColorButton(colour : string) {
  switch (colour) {
    case "amber":
      return "bg-amber-700 text-slate-200 hover:bg-amber-600";
    case "green":
      return "bg-green-700 text-slate-200 hover:bg-green-600";
    case "transparent":
      return "bg-transparent text-slate-800 hover:bg-gray-200";
    default:
      return null;
  }
}
