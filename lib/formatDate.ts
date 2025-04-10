export function formatDateRange(startDate: string, endDate: string): string {
    const options: Intl.DateTimeFormatOptions = {
        month: "short", 
        day: "numeric", 
        year: "numeric", 
    };

    const start = new Date(startDate).toLocaleDateString("en-US", options);
    const end = new Date(endDate).toLocaleDateString("en-US", options);

    return `${start} - ${end}`;
}
