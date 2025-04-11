export function formatDateRange(startDate: Date, endDate: Date): string {
    const options: Intl.DateTimeFormatOptions = {
        month: "short", 
        day: "numeric", 
    };

    const start = new Date(startDate).toLocaleDateString("en-US", options);
    const end = new Date(endDate).toLocaleDateString("en-US", options);

    return `${start} - ${end}`;
}
