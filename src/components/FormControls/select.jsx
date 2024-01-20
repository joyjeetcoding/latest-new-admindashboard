export default function Select({ label, value, onChange, options = [] }) {
  <>
    <label className="mt-3">{label}</label>
    <select
      className="text-black focus:outline-none"
      onChange={onChange}
      value={value}
    >
      <option id="" value="">
        Select
      </option>
      {
        options && options.length
          ? options.map((item) => <option id={item.id} key={item.id} value={item.id}>{item.label}</option>)
          : null
      }
    </select>
  </>;
}
