import { useEffect, useState } from "react";

interface DateInfo {
    date: string;
    time: string;
}

export const useDate = (): DateInfo => {
    const locale: string = 'en';
    const [today, setDate] = useState<Date>(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setDate(new Date());
        }, 60 * 1000);

        return () => {
            clearInterval(timer);
        };
    }, []);

    const day: string = today.toLocaleDateString(locale, { weekday: 'long' });
    const date: string = `${day}, ${today.getDate()}, ${today.toLocaleDateString(locale, { month: 'long' })}\n\n`;
    const time: string = today.toLocaleDateString(locale, { hour: 'numeric', hour12: true, minute: 'numeric' });

    return {
        date,
        time
    };
};