import { useEffect, useState } from "react";

function Clock({
    morningColor,
    dayColor,
    nightColor,
    showDate,
    fontFamily,
    fontSize,
    fontColor
}) {

    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const hour = time.getHours();

    let background = dayColor;

    if (hour >= 6 && hour < 12) {
        background = morningColor;
    } else if (hour >= 12 && hour < 18) {
        background = dayColor;
    } else {
        background = nightColor;
    }

    return (
        <div
            style={{
                background,
                width: "500px",
                padding: "40px",
                borderRadius: "15px",
                textAlign: "center",
                color: fontColor,
                fontFamily,
                margin: "50px auto",
                boxShadow: "0 0 20px gray"
            }}
        >
            <h1 style={{ fontSize }}>
                {time.toLocaleTimeString()}
            </h1>

            {showDate && (
                <h2>
                    {time.toLocaleDateString()}
                </h2>
            )}
        </div>
    );
}

export default Clock;