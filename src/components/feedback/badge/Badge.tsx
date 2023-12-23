interface Props {
  variant?: "block" | "inline" | "overlay";
  position?: "topRight" | "topLeft" | "bottomRight" | "bottomLeft";
  children: React.ReactNode;
}

export default function Badge(props: Props) {
  const { variant = "block", position, children } = props;

  const getVariantDisplay = () => {
    switch (variant) {
      case "block":
        return "block";
      case "overlay":
        return "absolute inline-flex items-center justify-center w-6 h-6";
      default:
        return "inline-flex items-center justify-center px-2 py-1.5";
    }
  };

  const getPosition = () => {
    switch (position) {
      case "topRight":
        return "-top-2 -end-3";
      case "topLeft":
        return "top-0 start-0";
      case "bottomRight":
        return "-bottom-2 -end-3";
      case "bottomLeft":
        return "-bottom-2 start-0";
      default:
        return "top-0 start-0";
    }
  };

  const calculatedVariant = getVariantDisplay();
  const calculatedPosition = getPosition();

  return (
    <div
      className={`${calculatedPosition} ${calculatedVariant} text-xs font-bold text-white bg-primary border-2 border-white rounded-full  dark:border-gray-900 animate-fade animate-duration-300`}
    >
      {children}
    </div>
  );
}
