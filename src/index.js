/**
 * const,letの変数宣言
 */

// var val1 = "var変数";
// console.log(val1);

// // var変数は上書き可能
// val1 = "var変数を上書き";
// console.log(val1);

// // var変数は再宣言可能
// var val1 = "var変数を再宣言";
// console.log(val1);

// let val2 = "let変数";
// console.log(val2);

// // letは上書きが可能
// val2 = "let変数を上書き";
// console.log(val2);

// //letは再宣言が不可能
// let val2 = "let変数を再宣言";

// const val3 = "const変数";
// console.log(val3);

// // const変数は上書きが不可能
// // val3 = "";

// const val3 = "const再宣言";

// constで定義したオブジェクトはプロパティの変更が可能
// const val4 = {
//   name: "くにま",
//   age: 30
// }
// val4.name = "くにまくら";
// val4.address = "大阪";
// console.log(val4);

// constで定義したオブジェクトはプロパティの変更が可能
// const val5 = ['dog','cat'];
// val5[0] = "bird";
// val5.push("monky");
// console.log(val5);

/**
*テンプレート文字列
 */
// const name = "くにま";
// const age = "30";
// // 「私の相棒はくにまです。多分30歳です。」

// //従来の方法
// const message1 = "私の相棒は" + name + "です。年齢は多分" + age + "歳です。";
// console.log(message1);

// //テンプレート文字列を用いた方法
// const message2 = `私の相棒は${name}です。年齢は多分${age}歳です。`;
// console.log(message2);

/**
*アロー関数
 */
 //従来の関数
// function func1(str){
//   return str;
//}
// const func1 = function(str){
//   return str;
// }
// console.log(func1("func1です"));

// //アロー関数
// const func2 = (str) => str;
// console.log(func2("func2です"));

// //変数２つの例
// // const func3 = (num1,num2) => {
// //   return num1 + num2;
// // };
// const func3 = (num1,num2) => num1 + num2;
// console.log(func3(10, 20));

/**
*分割代入
 */
// const myProfile = {
//   name: "くにま",
//   age: 30,
// };

// // const message1 = `名前は${myProfile.name}です。年齢は${myProfile.age}です。`;
// // //console.log(message1);

// const { name1, age } = myProfile;
// const message2 = `名前は${name1}です。年齢は${age}です。`;
// console.log(message2);

// const myProfile = ['くにま',30];

// const message3 = `名前は${myProfile[0]}です。年齢は${myProfile[1]}です。`;
// //console.log(message3);

// //順番に受け取る
// const [name,age] = myProfile;
// const message4 = `名前は${name}です。年齢は${age}です。`
// console.log(message4);


/**
* デフォルト値
 */
//  const sayHello = (name = "ゲスト") => console.log(`こんにちは!${name}さん！`);
//  sayHello("くにま");

/** 
* スプレット構文 ...
*/

//配列の展開
// const arr1 = [1,2];
// // console.log(arr1);
// // console.log(...arr1);
// //...で配列の中身をひとつづつ取り出して処理してくれる

// const sumFunc = (num1,num2) => console.log(num1 + num2);
// //sumFunc(arr1[0],arr1[1]);
// sumFunc(...arr1);//1,2を一つずつ取り出して、引数に渡している

//まとめる、まとめて受け取る
// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...arr3] = arr2;
// console.log(arr3);//[3,4,5]

//配列のコピーや結合
// const arr4 = [10, 20];
// const arr5 = [30, 40];

// const arr6 = [...arr4];//配列を展開して代入
// arr6[0] = 100;
// console.log(arr4);//[10, 20]　アドレスは渡さず値のみを純粋にコピーする。
// console.log(arr6);//[100, 20]

// const arr7 = [...arr4, ...arr5];
// console.log(arr7);//[10, 20, 30, 40]

// const arr8 = arr4;//=でコピーすると参照渡しになってしまう。
// console.log(arr8);
// arr8[0] = 100;
// console.log(arr4);

/**
 *　mapやfilterを使った配列の処理
 */
 const nameArr = ["田中","山田","鈴木"];
 //各要素を取り出したい
 //従来の例
//  for (let index = 0; index < nameArr.length; index ++){
//    console.log(nameArr[index]);
//  }

//mapを使った方法
// const nameArr2 = nameArr.map((name)=>{
//   return name;
// });
// // 引数(name)にnameArrの各要素が一つずつ入ってくる
// console.log(nameArr2);

//従来の例と同じ事がこの1行でできる！
nameArr.map((name) => console.log(name));

//配列の要素番号を出力する
//従来の例
 for (let index = 0; index < nameArr.length; index ++){
   console.log(`${index+1}番目は：${nameArr[index]}`);
 }

//mapを使った方法
nameArr.map((name,ind)=> console.log(`${ind+1}番目は${name}`))
//第2引数indに要素番号が入る　

//配列を一つずつ取り出して代入するパターン
//配列の要素一つ一つに何らかの処理をするパターンがある

//filter 条件に一致したものだけを返す
const numArr = [1 ,2 ,3, 4, 5];
const newNumArr = numArr.filter((num)=>{//引数には配列から取り出す器
  return num % 2 === 1;//return文に条件式を書く
})
console.log(newNumArr);

//特定の条件に当てはまる要素だけ何らかの処理をする
//田中のみ呼び捨て、他はさん付け
const newNameArr = nameArr.map((name)=>{
  if(name === "田中"){
    return name;
  }else{
    return `${name}さん`;
  }
})
console.log(newNameArr);

/**
 * 3項演算子
 */
// 構文
//　ある条件 ? 条件がtrueの時 : 条件がfalseの時

// const val1 = 1 < 0 ? "trueです" : "falseです";
// console.log(val1);

// const num = 1300;
// console.log(num.toLocaleString());//1,300 toLocaleStringは数値のカンマ区切り

//実装例

// //数値が入っているときだけカンマ区切り
// const formatterdNum = typeof num === 'number' ? num.toLocaleString() : '数値を入力してください。';
// console.log(formatterdNum);

//２つの数値の合計が許容範囲内かをチェックする関数
// const checkSum = (num1, num2) => {
//   return num1 + num2 > 100 ? "100を超えている" : "許容範囲内";
// }

//console.log(checkSum(39,50));

/**
 *論理演算子の本当の意味を知ろう
 */
const flag1 = true;
const flag2 = false;

if(flag1 || flag2){
  console.log("1か2はtrueです。");
}

if(flag1 && flag2){
  console.log("1も2はtrueです。");
}

//実は＆＆と｜｜は「かつ」や「または」ではない

//　||は左側がfalseなら右側を返す
const num = null;
const fee = num || "金額未設定です。"; //nullはfalseなので右側の文字列を返す
console.log(fee);//金額未設定です

// if(flag1 || flag2){
//   console.log("1か2はtrueです。");
//}
//flag1 false falg2 true：左がfalseなら右を返すのでtrueがかえる
//flag1 true falg2 false：左がtrueなので左を返すのでtrueがかえる


// &&は左側がtrueなら右側を返す
const num2 = 100;
const fee2 = num2 && "何か設定されました";
console.log(fee2);

// if(flag1 && flag2){
//   console.log("1か2はtrueです。");
//}
//flag1 false falg2 true：左がtrueなら右を返すので左のfalseがかえる
//flag1 true falg2 false：左がtrueなので右を返すので左のfalseがかえる
