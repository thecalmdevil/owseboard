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

    // Public methods and properties
    return {
        initialize: function () {
            // Create the calendar
            const calendar = document.getElementById('calendar');
            for (let i = 1; i <= 31; i++) {
                calendar.appendChild(createDayElement(i));
            }
        },
    };
})();
