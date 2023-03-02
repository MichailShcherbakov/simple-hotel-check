import clsx from "clsx";

export type UiPaperProps = {
  className?: string;
  children?: React.ReactNode;
};

export function UiPaper(props: UiPaperProps) {
  const { className } = props;
  return (
    <div
      {...props}
      className={clsx(
        "rounded-2xl bg-white ui-paper-box-shadow z-10 p-8 relative",
        className,
      )}
    />
  );
}
