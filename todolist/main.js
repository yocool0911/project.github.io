//基本設定
const int = document.querySelector('.input'); // 輸入框
const save = document.querySelector('.save') ;// 儲存
const list = document.querySelector('.listbox');


//資料初始化渲染
let data = [
  {content: "基本資料" },
];

renderData();
function renderData(){
  //創建一個儲放html格式的變數
  let str = '';
  //利用forEach把資料渲染進去
   data.forEach((item,key)=>{
      str += `
      <li data-num=${key}>  ${key+1} ${item.content} <input class="del" type="button" value="刪除" data-num=${key} ></li> <br>
      `;
   })
   list.innerHTML =str ;
 }


 //使用者互動

 //新增代辦
 save.addEventListener('click',(e)=>{
    // 創建空字串物件讓他可以push進去data
    let obj = {content:""};
    obj.content = int.value;
    data.push(obj);
    renderData();
 })

//刪除代辦

list.addEventListener('click',function(e){

    if(e.target.getAttribute('class')=="del"){
        let num = e.target.getAttribute('data-num');
        data.splice(num,1);
        renderData();
        return;
    }



})