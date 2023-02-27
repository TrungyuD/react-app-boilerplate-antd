import { Modal, ModalProps } from 'antd';
import iconClose from 'assets/icons/close.svg';
import './style.scss';

interface IModal extends ModalProps {
  open: boolean;
  onOk?: () => void;
  onCancel?: () => void;
  title?: string;
  cancelButtonProps?: any;
  children?: React.ReactNode;
  footer?: React.ReactNode;
  maskClosable?: boolean;
  closable?: boolean;
}
const IconCloseCustom = () => {
  return (
    <>
      <img alt="icon close" className="img-close-wallet" src={iconClose} />
    </>
  );
};
const ModalCommon = ({
  open,
  onOk,
  onCancel,
  title,
  children,
  cancelButtonProps,
  footer,
  maskClosable = false,
  closable = true,
  ...rest
}: IModal) => {
  return (
    <Modal
      closable={closable}
      open={open}
      onOk={onOk}
      onCancel={onCancel}
      footer={footer} //null if hide button oke and close
      cancelButtonProps={cancelButtonProps} // style cancel button display
      maskClosable={maskClosable} // Whether to close the modal dialog when the mask (area outside the modal) is clicked
      closeIcon={<IconCloseCustom />}
      className="modal-custom"
      {...rest}
    >
      <div className="modal-header">
        {title && <div className="modal-title">{title}</div>}
      </div>
      {/* loading or styled any*/}
      {children && <div className="children-modal">{children}</div>}
    </Modal>
  );
};

export default ModalCommon;
