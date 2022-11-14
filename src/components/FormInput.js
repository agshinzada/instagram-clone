import { useEffect, useState } from "react";

function FormInput({ label, type = "text", ...props }) {
  const [showRule, setShowRule] = useState(false);
  const [inputType, setInputType] = useState(type);

  useEffect(() => {
    if (showRule) {
      setInputType("text");
    } else if (type === "password") {
      setInputType("password");
    }
  }, [showRule]);

  return (
    <div className="relative flex">
      <input
        type={inputType}
        className="w-[265px] text-xs bg-zinc-50 rounded-sm p-2.5 border outline-none peer valid:pt-3.5 valid:pb-1.5"
        required={true}
        onChange={(e) => props.setValue(e.target.value)}
      />
      <span className="absolute left-3 top-3 opacity-50 text-xs pointer-events-none peer-valid:top-0 peer-valid:text-[10px] transition-all">
        {label}
      </span>

      {type === "password" && props?.value ? (
        <button
          className="absolute hidden right-2 top-2 font-semibold text-sm text-gray-700  peer-valid:block"
          onClick={() => setShowRule(!showRule)}
        >
          {showRule ? "Hide" : "Show"}
        </button>
      ) : (
        ""
      )}
    </div>
  );
}

export default FormInput;
