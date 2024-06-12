'use client';

import { Calendar } from '@/components/ui/calendar';
import { useState } from 'react';

export default function Page() {
    const [date, setDate] = useState<Date | undefined>(new Date());
    const [multipleDate, setMultipleDate] = useState<Date[] | undefined>([]);

    const smallDate = date?.toLocaleDateString('es-ES', {
        weekday: 'short',
        day: 'numeric',
        month: 'short',
    });

    return (
        <div className="flex-col sm:flex-wrap gap-4 sm:flex-row sm:flex">
            <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-md border"
                disabled={(date) => date.getDay() === 0 || date.getDay() === 6}
            />
            <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-md border"
            />
            <Calendar
                mode="multiple"
                selected={multipleDate}
                onSelect={setMultipleDate}
                className="rounded-md border"
            />
            <div>
                <h1 className="text-3xl">Information</h1>
                <div className="border-b"></div>
                <p>{smallDate}</p>
                <p>
                    {multipleDate
                        ?.map((date) => date.toLocaleDateString())
                        .join(', ')}
                </p>
            </div>
        </div>
    );
}
