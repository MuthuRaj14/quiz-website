import { useState, useEffect } from 'react';

export default function Progress({ timeout, onTimeout }) {
    const [remainingTime, setRemainingTime] = useState(timeout);

    useEffect(() => {
        const timeoutId = setTimeout(onTimeout, timeout);
        return () => clearTimeout(timeoutId);
    }, [onTimeout, timeout]);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setRemainingTime((prevTime) => prevTime - 100);
        }, 100);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <progress id='question-time' max={timeout} value={remainingTime} />
    );
}
