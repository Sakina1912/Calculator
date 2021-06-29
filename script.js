const input = document.getElementById('input')
const container = document.getElementById('container')
const btnArr = [7,8,9,'AC',4,5,6,'-',1,2,3,'*',0,'00','.','+','=','/']


function addingBtnToDom(){
    // creating the buttons
    btnArr.forEach((btn) => {
        container.innerHTML +=`
        <button id = "${btn}" class="btn" value ="${btn}">
            ${btn}
        </button>`
    })
    // evaluating the result
    const buttons = document.querySelectorAll('.btn')
    buttons.forEach(btn =>{
        btn.addEventListener('click', (e)=>{
            if(e.target.value == '='){
              let cal = input.value
              calculate = eval(cal)
              input.value = calculate
            }
            else if(e.target.value == 'AC'){
                input.value=''
            }else{
                let clickValue = e.target.value
                input.value += clickValue
            }
        })
    })
}

addingBtnToDom()


