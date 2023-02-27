import useCountdownTimer from 'hooks/useCountdownTimer';
import './style.scss';

interface CountdownTimerProps {
  timestamp: number;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ timestamp }) => {
  const { time } = useCountdownTimer(timestamp);

  return (
    <>
      <div className="countdown-wrapper">
        <div className="time-value">
          {`${time.days < 10 ? 0 : ''}${time.days}`}
        </div>
        <div className="value">:</div>
        <div className="time-value">
          {`${time.hours < 10 ? 0 : ''}${time.hours}`}
        </div>
        <div className="value">:</div>
        <div className="time-value">
          {`${time.minutes < 10 ? 0 : ''}${time.minutes}`}
        </div>
        <div className="value">:</div>
        <div className="time-value">
          {`${time.seconds < 10 ? 0 : ''}${time.seconds}`}
        </div>
        <div className="unit">Days</div>
        <div className="unit">:</div>
        <div className="unit">Hrs</div>
        <div className="unit">:</div>
        <div className="unit">Mins</div>
        <div className="unit">:</div>
        <div className="unit">Secs</div>
      </div>
    </>
  );
};

export default CountdownTimer;
