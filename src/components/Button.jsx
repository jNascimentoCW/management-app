export default function Button({ text, isWhite, hasStyleSet }) {
  let btnStyle;
  const hoverBtnState = "hover:bg-stone-400 hover:text-stone-900";

  // Check if the button is white or colored
  if (isWhite) {
    btnStyle = "bg-white text-stone-900 " + hoverBtnState;
  } else {
    btnStyle = "bg-stone-600 text-stone-100 " + hoverBtnState;
  }

  //hasStyleSet is used to set the button style from the parent component
  // if it is not set, then the default style will be used
  return (
    <button
      className={`${hasStyleSet ? hasStyleSet : btnStyle} cursor-pointer rounded-lg px-5 py-2`}
    >
      {text}
    </button>
  );
}
