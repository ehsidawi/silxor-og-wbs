import { useLanguage } from "@/context/LanguageContext";

const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={() => setLanguage("en")}
        className="font-mono font-[400] transition-colors duration-200"
        style={{
          fontSize: 11,
          color: language === "en" ? "#DDB343" : "#4A5060",
          background: "none",
          border: "none",
          cursor: "pointer",
          padding: 0,
        }}
      >
        EN
      </button>
      <div style={{ width: 1, height: 14, backgroundColor: "rgba(255,255,255,0.1)" }} />
      <button
        onClick={() => setLanguage("ar")}
        className="transition-colors duration-200"
        style={{
          fontSize: 13,
          fontFamily: "'Cairo', sans-serif",
          fontWeight: 400,
          color: language === "ar" ? "#DDB343" : "#4A5060",
          background: "none",
          border: "none",
          cursor: "pointer",
          padding: 0,
        }}
      >
        ع
      </button>
    </div>
  );
};

export default LanguageToggle;
