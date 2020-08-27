// 1. Use Strict

//     Strict mode ↔ Sloppy mode

//     Introduce ECMAScript5

//     restricted variant of JavaScript 

//     ES6부터는 default mode로 사용되기 때문에 따로 선언할 필요 없음.

// 2. Variable

//     let (added in ES6)↔ var(ES5)

//     scope : Global, block(use brace { })

//     var를 쓰면 안되는 이유

//     1. var hoisting : 변수를 끌어올림 → 변수를 선언하지 않고 출력 및 할당을 우선적으로 할 수 있음
//     2. block scope를 사용할 수 없음.

// 3. Constants

//     변수를 할당한 뒤에 변경이 불가능함.(Immutable)
//     Favor immutable data type always for a few reasons
//     - security
//     - thread safety
//     - reduce humann mistakes

// 4. Variable types
// primitive, single item (더 이상 나눌 수 없는 기본 타입)
// - number(숫자 전체, int + float)
// - string(문자)
// - boolean(논리)
// - null(할당하지 않음)
// - undefined(할당하지 않음)
// - symbol(고유값을 가짐)
// Object, box container
// Function, first-class function

//     **Number - special numeric value: infinity, -infinity, NaN**

    const infinity = 1 / 0;
    const negativeInfinity = -1 / 0;
    const nAn = 'not a number';
    console.log(infinity);
    console.log(negativeInfinity);
    console.log(nAn);


//     **BigInt (fairly new, don't use it yet)**
//     기본적인 number type은 $`{-2}^{53}$ ~ $2^{53}$` 을 가지지만 BigInt는 숫자 마지막에 `n` 을 붙여준다.(이정도로 큰 숫자를 사용할 일이 없을 것 같다.)

    const bigInt = 1234567890123456789012345678901234567890n;
    console.log('value: ${bigInt}, type: ${typeof bigInt}');

//     **String**
//     문자의 길이와 상관없이 모두 string으로 처리

    const char = 'c';
    const text = 'text';
    const greeting = 'hello '+text;
    console.log('value: ${text});
    const hello = 'hi ${text}!'; //template literals(string)

//     **Boolean**
//     false : 0, null, nudefined, NaN, ''
//     true : any other value

    const canRead = true;
    const test = 3 < 1; //false

//     **Null**
//     명확하게 할당하지 않음을 할당

    let nothing = null

//     **Undefined**
//     할당하지 않음

    let x;
    let x = undefined;

//     **symbol**
//     고유의 식별자를 만들어준다.

    const symbol1 = Symbol('id');
    const symbol2 = Symbol('id');
    console.log(symbol1 === symbol2); // false
    const gSymbol1 = Symbol.for('id');
    const gSymbol1 = Symbol.for('id');
    console.log(gSymbol1 === gSymbol2); // true
    console.log('value: ${symbol1.description}, type: ${typeof symbol1}');

// 5. Dynamic typing: dynamically typed language

    let text = 'hello';
    console.log(text.charAt(0)); // h
    console.log('value: ${text}, type: ${text}'); // string
    text = 1;
    console.log('value: ${text}, type: ${text}'); // number
    text = '7' + 5;
    console.log('value: ${text}, type: ${text}'); // string
    text = '7' / '5';
    console.log('value: ${text}, type: ${text}'); // number
