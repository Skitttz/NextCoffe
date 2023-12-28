export function coffeStoreStatus (){
    const today: Date = new Date();

    const dayOfWeek: number = today.getDay();
    const hour: number = today.getHours();
    const hourOfDay = hour < 10 ? "0"+ hour : hour;
    const hourPMorAM: string = hour < 12 ? 'AM' : 'PM';

    const minOfDay: number = today.getMinutes();
    const daysOfWeek: string[] = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    // Get the name of the day of the week
    const dayName: string = daysOfWeek[dayOfWeek];

    let status: string;

    if (dayName === 'Sunday' || (dayName === 'Saturday' && (hour < 9 || hour >= 17)) || (hour < 8 || hour >= 18)) {
      status = '🔴';
    } else {
      status = '🟢';
    }


    return `${dayName}, ${hourOfDay}:${minOfDay} ${hourPMorAM} ${status}`;
  
};
