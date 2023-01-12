import React, { useState } from "react";
import DatePicker from "uni-date-picker";
import styles from "./DateInput.module.css";
export const DateInput = ({
  defaultDate,
  locale,
  submitComponent,
  placeholder,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [date, setDate] = useState(null);
  const handleSubmit = (date) => {
    setDate(date);
    setIsOpen(false);
  };
  return (
    <div className={styles.container}>
      <input
        className={styles.input}
        defaultValue={date?.format("DD.MM.YYYY")}
        placeholder={placeholder}
        onClick={() => {
          setIsOpen(true);
        }}
        readOnly
      />
      <div className={styles.datePickerWrapper} style={{ opacity: +isOpen }}>
        <DatePicker
          width="100%"
          defaultDate={defaultDate}
          maxDate={defaultDate}
          locale={locale}
          submitComponent={submitComponent}
          onSubmit={handleSubmit}
        />
      </div>
    </div>
  );
};
