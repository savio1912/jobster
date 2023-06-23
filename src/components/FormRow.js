const FormRow = ({ type, name, value, handleChange, labelText }) => {
  return (
    <div className="form-row">
      <label htmlFor={name} className="form-label">
        {labelText || name}
      </label>
      <input
        type={type}
        id={name}
        onChange={handleChange}
        className="form-input"
        name={name}
        value={value}
      />
    </div>
  );
};
export default FormRow;
