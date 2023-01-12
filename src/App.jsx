import { useLocalStorage } from "./hooks/useLocalStorage";
import { useEffect } from "react";
import dayjs from "dayjs";
import "dayjs/locale/en";
import "dayjs/locale/ka";
import { DateInput } from "./components/DateInput";

function App() {
  const [locale, setLocale] = useLocalStorage("locale", "en");

  useEffect(() => {
    dayjs.locale(locale);
  }, [locale]);

  return (
    <div className="App">
      <div>current locale: {locale}</div>
      <button
        onClick={() => {
          if (locale === "en") {
            setLocale("ka");
            dayjs.locale("ka");
          } else {
            setLocale("en");
            dayjs.locale("en");
          }
        }}
      >
        change locale
      </button>
      <DateInput
        placeholder="15.10.2022"
        defaultDate={dayjs()}
        locale={locale}
        submitComponent={
          <button
            style={{
              width: "100%",
              backgroundColor: "#4980c0",
              padding: "1rem",
              fontSize: "1rem",
              borderRadius: "6px",
              border: "none",
              cursor: "pointer",
            }}
          >
            {locale === "ka" ? "თარიღის არჩევა" : "submit date"}
          </button>
        }
      />
    </div>
  );
}

export default App;
