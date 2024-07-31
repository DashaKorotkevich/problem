/* Задача: дан массив интервалов, нужно найти совокупность этих интервалов.
Пример:
[[11,12],[2,3],[5,7],[1,4],[8,10],[6,8]]
Ответ: [[1,4],[5,10],[11,12]]
 */

const arr=[[11,12],[2,3],[5,7],[1,4],[8,10],[6,8]];

function sortB(arr){
  let k=arr.length;
  for(let i=0;i<arr.length;i++){
    for(let j=0;j<k-1;j++){
      if(arr[j][0]>arr[j+1][0]){
        let elX=arr[j][0];
        let elY=arr[j][1];
        arr[j][0]=arr[j+1][0];
        arr[j][1]=arr[j+1][1];
        arr[j+1][0]=elX;
        arr[j+1][1]=elY;
      }
    }
    k=k-1;
  }
  //console.log(arr)
}

function merge(arr){
  sortB(arr);
  for (let i=0;i<arr.length;i++){
    for(let j=i;j<arr.length-1;j++){
      console.log('j = ', j)
      //console.log('условие съедения полностью', arr[i][1],'>=', arr[j+1][1] )
      //console.log('условие съедения части', arr[i][1],'>', arr[j+1][0] )
      if(arr[i][1]>=arr[j+1][1]){
        //console.log('зашел в съем полностью')
        arr[j+1][0]=0;
        arr[j+1][1]=0;
      }
      else if(arr[i][1]>=arr[j+1][0]){
        //console.log('зашел в съем кусок', arr[i][1],'>', arr[j+1][0] )
        arr[i][1]=arr[j+1][1]
        arr[j+1][0]=0;
        arr[j+1][1]=0;
      }
    }
  }
  const res=arr.filter((el)=>{return ((el[0]==0)&&(el[1]==0))?0:1})
  console.log(res)
}

merge(arr)