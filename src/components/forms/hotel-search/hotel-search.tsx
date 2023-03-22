import { useFormik } from "formik";
import { DateTime } from "luxon";
import { GetHotelsOptions } from "../../../api/hotels";
import { useHotelCriteria, useHotels } from "../../../store/hotel/hooks";
import { UiButton } from "../../../ui-kit/btn";
import { UiLoading } from "../../../ui-kit/loading";
import { UiTextField } from "../../../ui-kit/text-field";
import { HotelSearchSchema } from "./hotel-search-schema";

export function HotelSearchForm() {
  const { setHotelCriteria, criteria } = useHotelCriteria();
  const { isLoading, loadHotels } = useHotels();

  const formik = useFormik({
    initialValues: {
      location: criteria.location,
      checkIn: criteria.checkIn,
      numDays: 1,
    },
    validationSchema: HotelSearchSchema,
    onSubmit(value) {
      const criteria: GetHotelsOptions = {
        location: value.location,
        checkIn: value.checkIn,
        checkOut: DateTime.fromISO(value.checkIn)
          .plus({ days: value.numDays })
          .toISODate(),
      };

      setHotelCriteria(criteria);
      loadHotels(criteria);
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
      <UiButton
        type="submit"
        disabled={isLoading}
        className="flex flex-row items-center justify-center"
      >
        {isLoading && <UiLoading size={24} className="text-white" />}
        {!isLoading && <span>Найти</span>}
      </UiButton>
    </form>
  );
}
