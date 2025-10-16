function updateClock() {
  const now = new Date();

  // Convert to WIB GMT+7
  const utc = now.getTime() + now.getTimezoneOffset() * 60000;
  const gmtPlus7 = new Date(utc + 7 * 3600000);

  // Format time
  const hours = String(gmtPlus7.getHours()).padStart(2, '0');
  const minutes = String(gmtPlus7.getMinutes()).padStart(2, '0');
  const seconds = String(gmtPlus7.getSeconds()).padStart(2, '0');

  // Format date
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  const dateStr = gmtPlus7.toLocaleDateString('en-ID', options);

  // Update DOM
  document.getElementById(
    'time'
  ).innerHTML = `${hours}<span class="colon">:</span>${minutes}<span class="colon">:</span>${seconds}`;
  document.getElementById('date').textContent = dateStr;
}

// Initial call
updateClock();

// Update every second
setInterval(updateClock, 1000);
