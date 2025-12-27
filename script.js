
    const no = Math.floor(Math.random()* 9000) + 1000;
    const s1 = document.querySelector('.screen1')
    const can = document.querySelector('.candidate')
    const s2 = document.querySelector('.screen2')
    const p1 = document.querySelector(".p1")
    can.style.display = 'none'
    const btn = document.querySelector('button')
    const input = document.querySelector('input')
    const imgone = document.querySelector('.one')
    const imgtwo = document.querySelector('.two')
    
    s2.style.display = 'none'
    let count = 0
    p1.append(no)
    let wrong = document.createElement('p')
    btn.addEventListener('click', function(){
        let num = Number(input.value)
        if(no === num)
        {
            s1.style.display= 'none';
            s2.style.display=''
            can.style.display = 'flex';
        }
        else if(num === 0){
            wrong.innerText = "No PIN Entered"
            s1.append(wrong)
        }
        else{
            wrong.innerText = "Wrong PIN Entered"
            s1.append(wrong)
        }
    
        input.addEventListener('click', function(){
            wrong.innerText=''
        })
        
    })

let countone = Number(localStorage.getItem('countone')) || 0;
let counttwo = Number(localStorage.getItem('counttwo')) || 0;

can.addEventListener('click', function (e) {

    const one = e.target.closest('.one');
    const two = e.target.closest('.two');

    if (!one && !two) return;

    if (one) {
        one.style.border = '10px solid green';
        if (imgtwo) imgtwo.style.border = '5px solid black';

        countone++;
        localStorage.setItem('countone', countone);
    }
    else if (two) {
        two.style.border = '10px solid green';
        if (imgone) imgone.style.border = '5px solid black';

        counttwo++;
        localStorage.setItem('counttwo', counttwo);
    }
});



const sbtn = document.querySelector('.sbtn')
sbtn.addEventListener('click', function(){
const end = document.createElement('p')
end.textContent = 'Thank You for Voting!'
end.style.fontSize = '40px'
end.style.alignContent= 'center'
end.style.color = 'red'
end.style.fontWeight = 'bold'
s2.append(end)

setTimeout(() => {
        location.reload();
    }, 2500);
})
