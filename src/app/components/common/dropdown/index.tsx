import { useOnClickOutside } from 'hooks/useOnClickOutside';
import { useRef } from 'react';
import './style.scss';

interface Props {
  children: React.ReactNode;
  dropdownComponent: React.ReactNode;
  isOpen: boolean;
  onIsOpenChange: (value: boolean) => void;
  position?: 'top' | 'bottom';
}

export const DropdownCommon = ({
  children,
  dropdownComponent,
  isOpen,
  onIsOpenChange,
  position = 'bottom',
}: Props) => {
  const ref = useRef(null);

  useOnClickOutside(ref, () => {
    onIsOpenChange(false);
  });

  return (
    <div ref={ref} className="dropdown-container">
      <div
        onClick={() => {
          onIsOpenChange(!isOpen);
        }}
      >
        {children}
      </div>
      <div
        style={{
          display: isOpen ? 'block' : 'none',
        }}
        className={`wrapper ${
          position === 'bottom' ? 'bottom slowlyScale' : 'top slowlyScaleBottom'
        }`}
      >
        {dropdownComponent}
      </div>
    </div>
  );
};
