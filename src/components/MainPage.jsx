import Button from "./Button";

export default function MainPage({ onClick }) {
  return (
    <div className="flex w-full flex-col items-center justify-center text-center md:w-3/4">
      <img src="/logo.png" alt="logo-img" className="mx-auto w-16 pb-6" />
      <h1 className="pb-6 text-2xl font-extrabold text-stone-600">
        No Project Selected
      </h1>
      <p className="pb-6 text-stone-500">
        Select a project or get started with a new one
      </p>
      <Button
        text="Create new project"
        isWhite={false}
        hasStyleSet=""
        onClick={onClick}
      />
    </div>
  );
}
