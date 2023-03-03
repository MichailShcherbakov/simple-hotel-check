import * as Yup from "yup";

export const HotelSearchSchema = Yup.object().shape({
  location: Yup.string().required("Это поле объязательно для заполнения"),
  checkIn: Yup.date().required("Это поле объязательно для заполнения"),
  numDays: Yup.number()
    .min(1, "Количество дней не может быть меньше одного")
    .max(999, "Слишком большое количество дней")
    .required("Это поле объязательно для заполнения"),
});
