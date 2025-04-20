export default function Button({ text, isWhite }) {
  return (
    <button
      className={`${isWhite ? "bg-white" : "bg-stone-600 text-stone-300"} cursor-pointer rounded-lg px-5 py-2 hover:bg-stone-400 hover:text-stone-900`}
    >
      {text}
    </button>
  );
}
