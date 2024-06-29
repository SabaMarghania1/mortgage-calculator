export default function InputContainer({classname = '', children}) {
  return <div className={`input-container ${classname}`}>{children}</div>;
}
