import { useAppSelector } from "../hooks";

export function useGalleryPictures() {
  const pictures = useAppSelector(state => state.gallery.all);
  return { pictures };
}
