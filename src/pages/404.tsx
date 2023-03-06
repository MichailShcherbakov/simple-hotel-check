export function PageNotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen gap-2">
      <p className="text-lg font-bold">Страница не найдена</p>
      <p className="text-sm">
        Страница, которую вы ищите, могла быть удалена, ее имя изменилось или
        она времменно не доступна
      </p>
    </div>
  );
}
