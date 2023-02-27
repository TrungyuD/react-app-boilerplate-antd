import { Tooltip } from 'antd';
import { IToolTip } from 'utils/interface';
const ToolTipCustom = ({ placement, title, children }: IToolTip) => {
  return (
    <>
      <div className="tooltip-moon-staking">
        <div className="wrapper-tooltip">
          <Tooltip placement={placement} title={title}>
            {children}
          </Tooltip>
        </div>
      </div>
    </>
  );
};
export default ToolTipCustom;
