function fun(num) {
        if (num < 0) {
          return false; // Отрицательные числа не являются квадратами
        }
      
        if (num === 0 || num === 1) {
          return true; // 0 и 1 являются квадратами
        }
      
        for (let i = 2; i <= Math.floor(num / 2); i++) {
          if (i * i === num) {
            return true; // Мы нашли корень, значит число является квадратом
          }
        }
      
        return false; // Конец цикла, мы не нашли корень, значит число не является квадратом
    }
    
    for (let i = 0; i < 100; i++) {
        console.log(i+" "+fun(i));
      }