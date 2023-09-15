// Define the OWSEBoard library
const OWSEBoard = (function () {
    // Private methods and properties

    function createDayElement(dayNumber) {
        const day = document.createElement('div');
        day.className = 'day';
        day.textContent = dayNumber;

        const inputFile = document.createElement('input');
        inputFile.type = 'file';
        inputFile.accept = 'image/*';
        inputFile.style.display = 'none';

        const label = document.createElement('label');
        label.textContent = 'Upload Photo';

        const img = document.createElement('img');

        inputFile.addEventListener('change', (event) => {
            const file = event.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = (e) => {
                    img.src = e.target.result;
                };
                reader.readAsDataURL(file);
            }
        });

        label.addEventListener('click', () => {
            inputFile.click();
        });

        day.appendChild(label);
        day.appendChild(inputFile);
        day.appendChild(img);

        return day;
    }

    function createMonthElement(monthName, daysInMonth) {
        const month = document.createElement('div');
        month.className = 'month';

        const monthTitle = document.createElement('h2');
        monthTitle.textContent = monthName;

        const daysContainer = document.createElement('div');
        daysContainer.className = 'days';

        for (let i = 1; i <= daysInMonth; i++) {
            daysContainer.appendChild(createDayElement(i));
        }

        month.appendChild(monthTitle);
        month.appendChild(daysContainer);

        return month;
    }

    // Public methods and properties
    return {
        initialize: function () {
            const calendar = document.getElementById('calendar');

            // Define the months and their respective days
            const months = [
                { name: 'January', days: 31 },
                { name: 'February', days: 28 },
                { name: 'March', days: 31 },
                { name: 'April', days: 30 },
                { name: 'May', days: 31 },
                { name: 'June', days: 30 },
                { name: 'July', days: 31 },
                { name: 'August', days: 31 },
                { name: 'September', days: 30 },
                { name: 'October', days: 31 },
                { name: 'November', days: 30 },
                { name: 'December', days: 31 }
            ];

            // Create and append each month to the calendar
            months.forEach((monthInfo) => {
                const monthElement = createMonthElement(monthInfo.name, monthInfo.days);
                calendar.appendChild(monthElement);
            });
        },
    };
})();

// Initialize the OWSEBoard library
OWSEBoard.initialize();
