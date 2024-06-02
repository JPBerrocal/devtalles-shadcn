'use client';

import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";



export default function Page() {
   const [date, setDate] = useState<Date | undefined>(new Date());
   const [multipleDates, setMultipleDates] = useState<Date[] | undefined>([]);

   const smallDate = date?.toLocaleDateString("es-Es", {
      day: "numeric",
      month: "short",
      year: "numeric",
      weekday: "short" 
   })
   
  return (
    <div className="flex-col sm:flex sm:flex-row sm:flex-wrap gap-4">
       <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border shadow"
        disabled={(date) => date.getDay() === 0 || date.getDay() === 6}
      />

      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border shadow"
        disabled={(d) => d < new Date() }
      />

      <Calendar
        mode="multiple"
        selected={multipleDates}
        onSelect={setMultipleDates}
        className="rounded-md border shadow"
      />

      <div>
        <h1 className="text-3xl">Informacion</h1>
        <div className="border-b">
          <p>{smallDate}</p>
        </div>
      </div>
    </div>
  );
}