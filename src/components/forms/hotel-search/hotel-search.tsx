import { useFormik } from "formik";
import { DateTime } from "luxon";
import { useHotelCriteria } from "../../../store/hotel/hooks";
import { UiButton } from "../../../ui-kit/btn";
import { UiTextField } from "../../../ui-kit/text-field";
import { HotelSearchSchema } from "./hotel-search-schema";

export function HotelSearchForm() {
  const { setHotelCriteria, criteria } = useHotelCriteria();

  const formik = useFormik({
    initialValues: {
      location: criteria.location,
      checkIn: criteria.checkIn,
      numDays: 1,
    },
    validationSchema: HotelSearchSchema,
    onSubmit(value) {
      setHotelCriteria({
        location: value.location,
        checkIn: value.checkIn,
        checkOut: DateTime.fromISO(value.checkIn)
          .plus({ days: value.numDays })
          .toISODate(),
      });
    },
  });

  return (
    <form className="flex flex-col gap-8" onSubmit={formik.handleSubmit}>
      <div className="flex flex-col gap-4">
        <UiTextField
          id="location"
          name="location"
          label="Локация"
          labelClassName="text-medium"
          value={formik.values.location}
          onChange={formik.handleChange}
          error={formik.touched.location && Boolean(formik.errors.location)}
          helperText={formik.errors.location}
        />
        <UiTextField
          id="checkIn"
          name="checkIn"
          type="date"
          label="Дата заселения"
          labelClassName="text-medium"
          value={formik.values.checkIn}
          onChange={formik.handleChange}
          error={formik.touched.checkIn && Boolean(formik.errors.checkIn)}
          helperText={formik.errors.checkIn}
        />
        <UiTextField
          id="numDays"
          name="numDays"
          type="number"
          label="Количество дней"
          labelClassName="text-medium"
          value={formik.values.numDays.toString()}
          onChange={formik.handleChange}
          error={formik.touched.numDays && Boolean(formik.errors.numDays)}
          helperText={formik.errors.numDays}
        />
      </div>
      <UiButton type="submit">Найти</UiButton>
    </form>
  );
}
