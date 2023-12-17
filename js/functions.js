function isMeetingWithinWorkingHours(startWorking, endWorking, startMeeting, duration) {
  const [startHours, startMinutes] = startWorking.split(':').map(Number);
  const [endHours, endMinutes] = endWorking.split(':').map(Number);
  const [startMeetHours, startMeetMinutes] = startMeeting.split(':').map(Number);

  const totalStartMinutes = startHours * 60 + startMinutes;
  const totalEndMinutes = endHours * 60 + endMinutes;
  const totalStartMeetMinutes = startMeetHours * 60 + startMeetMinutes;
  const totalEndMeetMinutes = totalStartMeetMinutes + duration;

  return (
    totalStartMeetMinutes >= totalStartMinutes &&
    totalEndMeetMinutes <= totalEndMinutes &&
    totalEndMeetMinutes <= 24 * 60
  );
}

// Примеры использования функции
console.log(isMeetingWithinWorkingHours('08:00', '17:30', '14:00', 90)); // true
console.log(isMeetingWithinWorkingHours('8:0', '10:0', '8:0', 120));    // true
console.log(isMeetingWithinWorkingHours('08:00', '14:30', '14:00', 90)); // false
console.log(isMeetingWithinWorkingHours('14:00', '17:30', '08:0', 90));  // false
console.log(isMeetingWithinWorkingHours('8:00', '17:30', '08:00', 900)); // false
