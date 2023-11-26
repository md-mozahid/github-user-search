const Form = ({ handleChange, handleSubmit, value }) => {
  return (
    <>
      <div className="mt-10 text-center">
        <form className="space-x-5" onSubmit={handleSubmit}>
          <input
            type="text "
            placeholder="Search"
            className="px-5 py-2 rounded-full text-lg border-0 outline-0 text-slate-800"
            value={value}
            onChange={handleChange}
          />
          <button className="px-5 py-2 border rounded-full">Search</button>
        </form>
      </div>
    </>
  );
};

export default Form;
