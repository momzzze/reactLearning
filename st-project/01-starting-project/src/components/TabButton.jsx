export default function TabButton({
  children,
  isSelected,
  onSelect,
  ...props
}) {
  console.log('TABBUTTON COMPONENT EXECUTING');
  return (
    <li>
      <button
        className={isSelected ? 'active' : undefined}
        onClick={onSelect}
        {...props}
      >
        {children}
      </button>
    </li>
  );
}
