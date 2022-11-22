// const stringObject = '{"name": "Fredrik", "age": 57}'
// console.log(stringObject)
// const object = JSON.parse(stringObject)
// console.log(object)

// const stringObj = { name: 'Fredrik' ,age: 57}
// console.log(stringObj)
// const obj = JSON.stringify(stringObject)
// console.log(obj)
// const input = document.querySelector("input")
// const h2 = document.querySelector("h2")
// h2.innerHTML = localStorage.getItem("value")
// input.addEventListener("keyup", display)

// function display(){
//     localStorage.setItem("value", input.value)
//     h2.innerHTML = localStorage.getItem("value")
// }
// async function main() {
//     const adviceRes = await fetch('https://api.adviceslip.com/advice')
//     const adviceData = await adviceRes.json()

//     const userRes = await fetch('https://randomuser.me/api/')
//     const userData = await userRes.json()

//     const h1 = document.querySelector('h1')
//     h1.innerText = adviceData.slip.advice
//     const p = document.querySelector('p')
//     p.innerText =
//         userData.results[0].name.first + ' ' + userData.results[0].name.last
// }
// main()


async function main() {
    const respons = await fetch('https://api.github.com/users/mojombo/repos')
    const data =await respons.json(); 
    console.log(data)
    
    for (let i = 0; i < data.length; i++) {
        const h1 = document.querySelector("h1")
        h1.innerText = data[i].owner.login
        const ul = document.querySelector("ul")
        const li = document.createElement("li")
        const star = document.createElement(`p`)
        const name = document.createElement("h3")
        name.innerText = data[i].name
        star.innerText = `Stars: ${data[i].stargazers_count}`;
        
        li.appendChild(name)
        li.appendChild(star)
        ul.appendChild(li)
    }

}

main()