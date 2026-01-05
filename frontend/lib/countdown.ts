import { intervalToDuration } from "date-fns";
import { toZonedTime } from "date-fns-tz";

export const eventDateInEgypt = toZonedTime("2026-01-06 16:40:00", "Africa/Cairo");
export interface Countdown {
	days: number,
	hours: number,
	minutes: number,
	seconds: number
}
export function getCountdown() {
	const diff = intervalToDuration({ start: toZonedTime(new Date(), "Africa/Cairo"), end: eventDateInEgypt });
	return {
		days: diff.days ?? 0,
		hours: diff.hours ?? 0,
		minutes: diff.minutes ?? 0,
		seconds: diff.seconds ?? 0
	}
} 