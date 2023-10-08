function findPair(array, targetSum) {
    // Создаем пустой объект для хранения чисел из массива
    const nums = {};
  
    // Проходимся по элементам массива
    for (let num of array) {
        // Вычисляем, какое число нужно для получения целевой суммы из текущего числа
        let x = targetSum - num;
        
        // Если числа в объекте существует и оно не совпадает с текущим числом
        if (nums[x] && nums[x] !== num) {
            // Возвращаем массив с текущим числом и его парой
            return [num, x];
        }
    
        // Добавляем текущее число в объект
        nums[num] = true;
        console.log(nums)
    }
  
    // Если пара чисел не найдена, возвращаем пустой массив
    return [];
}

arr = [3, 5, -4, 8, 10, 1, -1, 6];
targetSum = 10;
console.log(arr, "\n", targetSum, "\n");
console.log(findPair(arr, targetSum));
