export type AppBarProps = {
  title: string;
  LeftSlot?: React.ReactNode;
};

export function AppBar(props: AppBarProps) {
  const { title, LeftSlot } = props;

  return (
    <header className="w-full h-24 flex flex-row items-center p-8 justify-between">
      <div className="flex flex-row items-center">
        <p className="font-medium text-2xl text-gray-500">{title}</p>
      </div>
      <div className="flex flex-row items-center">{LeftSlot}</div>
    </header>
  );
}
