import { createSlice } from "@reduxjs/toolkit";
import { GalleryPicture } from "./type";

export type GalleryState = {
  all: Record<GalleryPicture["id"], GalleryPicture>;
};

const initialGalleryPictures: GalleryPicture[] = [
  {
    id: "1",
    uri: `${import.meta.env.VITE_WEB_URL}/images/pic1.jpg`,
  },
  {
    id: "2",
    uri: `${import.meta.env.VITE_WEB_URL}/images/pic2.jpg`,
  },
  {
    id: "3",
    uri: `${import.meta.env.VITE_WEB_URL}/images/pic3.jpg`,
  },
  {
    id: "4",
    uri: `${import.meta.env.VITE_WEB_URL}/images/pic4.jpg`,
  },
  {
    id: "4",
    uri: `${import.meta.env.VITE_WEB_URL}/images/pic1.jpg`,
  },
  {
    id: "5",
    uri: `${import.meta.env.VITE_WEB_URL}/images/pic2.jpg`,
  },
  {
    id: "6",
    uri: `${import.meta.env.VITE_WEB_URL}/images/pic3.jpg`,
  },
  {
    id: "7",
    uri: `${import.meta.env.VITE_WEB_URL}/images/pic4.jpg`,
  },
];

const initialState: GalleryState = {
  all: initialGalleryPictures.reduce<
    Record<GalleryPicture["id"], GalleryPicture>
  >((all, pic) => {
    all[pic.id] = pic;
    return all;
  }, {}),
};

const GallerySlice = createSlice({
  name: "Gallery",
  initialState,
  reducers: {},
});

export const galleryReducer = GallerySlice.reducer;
