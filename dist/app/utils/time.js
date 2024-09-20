"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateTimeSlots = void 0;
const calculateTimeSlots = (startTime, endTime, duration) => {
    const slots = [];
    let start = new Date(`1970-01-01T${startTime}:00Z`);
    const end = new Date(`1970-01-01T${endTime}:00Z`);
    while (start < end) {
        const slotEnd = new Date(start.getTime() + duration * 60000);
        if (slotEnd > end)
            break;
        slots.push({
            startTime: start.toISOString().substring(11, 16),
            endTime: slotEnd.toISOString().substring(11, 16)
        });
        start = slotEnd;
    }
    return slots;
};
exports.calculateTimeSlots = calculateTimeSlots;
