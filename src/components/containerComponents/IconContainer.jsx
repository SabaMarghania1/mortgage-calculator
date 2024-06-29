export default function IconContainer({icon, extraStyles, classname = '', error = ''}) {
  const styles = {
    ...extraStyles,
  };
  return (
    <div style={styles} className={`icon__container ${error && classname}`}>
      {icon}
    </div>
  );
}
