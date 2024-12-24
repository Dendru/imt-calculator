document.getElementById('bmiForm')?.addEventListener('submit', function (e) {
    console.log('Обработчик данных submit вызван');
    e.preventDefault();

    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value) / 100;

    if(!weight || !height || height <= 0) {
        document.getElementById('bmiResult').textContent = 'Введите корректные значения';
        return;
    }

    const bmi = (weight / (height * height)).toFixed(1);
    let category = '';

    if (bmi < 18.5) {
        category = 'Недостаточный вес';
    } else if (bmi < 24.9) {
        category = 'Норма';
    } else if (bmi < 29.9) {
        category = 'Избыточный вес';
    } else {
        category = 'Ожирение';
    }

    document.getElementById('bmiResult').textContent = `Ваш ИМТ: ${bmi} - ${category}` ;
        
    const additionalInfo = document.getElementById('additional-info');
    additionalInfo.style.display = 'block'
    console.log('Все действия на странице индекс выполнены')    
});


document.getElementById('calcOfBlueKit')?.addEventListener('submit', function(e){
    console.log('Обработчик данных submit вызван');
    e.preventDefault();


    const volume = parseFloat(document.getElementById('volume').value);

    if(!volume || volume <= 0) {
        alert('Введите корректный объем коктейля');
        return;
    }

    const whiskey = 0.232;
    const orangeJuice = 0.29;
    const pineappleJuice = 0.29;
    const lemonJuice = 0.065;
    const syrup = 0.123;

    const whiskeyAmount = (whiskey * volume).toFixed(2) + ' л';
    const orangeJuiceAmount = (orangeJuice * volume).toFixed(2) + ' л';
    const pineappleJuiceAmount = (pineappleJuice * volume).toFixed(2) + ' л';
    const lemonJuiceAmount = (lemonJuice * volume).toFixed(2) + ' л';
    const syrupAmount = (syrup * volume).toFixed(2) + ' л';

    const ingredientListOfBlueKit = document.getElementById('ingredientListOfBlueKit');
    ingredientListOfBlueKit.innerHTML = `
        <li>Виски: ${whiskeyAmount}</li>
        <li>Cок апельсиновый: ${orangeJuiceAmount}</li>
        <li>Сок ананасовый: ${pineappleJuiceAmount}</li>
        <li>Сок лимонный: ${lemonJuiceAmount}</li>
        <li>Сироп: ${syrupAmount}</li>
    `;
        
    document.getElementById('blueKitResult').style.display = 'block';
});


document.getElementById('calcOfBlueLagoon')?.addEventListener('submit', function(e){
    e.preventDefault();


    const volume = parseFloat(document.getElementById('volume').value);

    if(!volume || volume <= 0) {
        alert('Введите корректный объем коктейля');
        return;
    }

    const whiskey = 0.22;
    const sprite = 0.620;
    const lemonJuice = 0.06;
    const syrup = 0.1;

    const whiskeyAmount = (whiskey * volume).toFixed(2) + ' л';
    const spriteAmount = (sprite * volume).toFixed(2) + ' л';
    const lemonJuiceAmount = (lemonJuice * volume).toFixed(2) + ' л';
    const syrupAmount = (syrup * volume).toFixed(2) + ' л';

    const ingredientListOfBlueLagoon = document.getElementById('ingredientListOfBlueLagoon');
    ingredientListOfBlueLagoon.innerHTML = `
        <li>Виски: ${whiskeyAmount}</li>
        <li>Сок лимонный: ${lemonJuiceAmount}</li>
        <li>Сироп: ${syrupAmount}</li>
        <li>Спрайт: ${spriteAmount}</li>
    `;
        
    document.getElementById('blueLagoonResult').style.display = 'block';
});
