interface FormFieldProps {
  type?: string;
  title: string;
  state: string;
  placeholder: string;
  isTextArea?: string;
  setState: (value: string) => void;
}

const FormField = ({
  type,
  title,
  state,
  placeholder,
  isTextArea,
  setState,
}: FormFieldProps) => {
  return (
    <div className="flexStart flex-col w-full gap-4">
      <label className="w-full text-gray-100">{title}</label>

      {isTextArea ? (
        <textarea
          required
          value={state}
          onChange={(e) => setState(e.target.value)}
          placeholder={placeholder}
          className="w-full outline-0 bg-light-white-100 rounded-xl p-4"
        />
      ) : (
        <input
          type={type || "text"}
          required
          value={state}
          onChange={(e) => setState(e.target.value)}
          placeholder={placeholder}
          className="w-full outline-0 bg-light-white-100 rounded-xl p-4"
        />
      )}
    </div>
  );
};

export default FormField;
