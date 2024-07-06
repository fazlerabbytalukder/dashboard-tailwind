document.addEventListener('DOMContentLoaded', () => {
    // tab button make
    const buttons = document.querySelectorAll('.tab-button');
    const sections = document.querySelectorAll('.main-part');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const target = button.getAttribute('data-target');
            sections.forEach(section => {
                section.classList.remove('active');
            });
            document.querySelector(`.${target}`).classList.add('active');
            buttons.forEach(btn => btn.classList.remove('active-nav'));
            button.classList.add('active-nav');
        });
    });


    // chart javascript
    const data = [30, 50, 80, 20, 50, 20, 30, 30, 50, 80, 20, 50, 20, 30, 30, 50, 80, 20, 50, 20, 30, 50, 50]; // Set all dataset here
    const chart = document.getElementById('chart');

    data.forEach(value => {
        const bar = document.createElement('div');
        bar.style.height = `${value * 2}px`;
        bar.style.width = `16px`;
        bar.style.backgroundColor = `#D0E4FF`;
        bar.className = 'bar w-[16px]';
        bar.setAttribute('data-value', value);
        chart.appendChild(bar);
    });
});