export default function GradientFont({ children }) {
  return (
    <>
      <span className="bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text inline-block text-transparent py-2">
        {children}
      </span>{" "}
    </>
  );
}
