//============================= MODULO 1 ========================


// ==================================1===============================
// var endereco = {
//     rua: "Rua dos pinheiros",
//     numero: 1293,
//     bairro: "Centro",
//     cidade: "São Paulo",
//     uf: "SP"
//    };


// console.log(`O usuário mora em ${endereco.cidade} / ${endereco.uf}, no bairro ${endereco.bairro},
//  na rua ${endereco.rua} com nº ${endereco.numero}.`)
   

// ==================================2===============================

// function pares(x, y) {
//     // código aqui
// var armazenaPar = [];
//     while (x < y){
//         if((x%2) ==0){
//             armazenaPar.push(x)
//             // console.log('true')
       
//         }
//         x++
//     }     console.log(armazenaPar)
//    }
//    pares(32, 321);


// ==================================3===============================
   



//    function temHabilidade(skills) {
//     if (skills.indexOf("Javascript") != -1){
//         console.log('true')
        
//     }else{
//         console.log('false')
     
//     }
    
//    }
//    var skills = ["Javascript", "ReactJS", "React Native"];
//    temHabilidade(skills); // true ou false


// ==================================4===============================


// function experiencia(anos) {

//     switch(true){
//         case (anos <= 1):
//             console.log('Iniciante')
//             break
//         case anos <= 3:
//             console.log('Intermediário')
//             break
//         case anos <= 6:
//             console.log('Avançado')
//             break
//         case anos >= 7:
//             console.log('Jedi Master')
//             break
     

//     }
// }
// var anosEstudo = 7;
// experiencia(anosEstudo);
// // De 0-1 ano: Iniciante
// // De 1-3 anos: Intermediário
// // De 3-6 anos: Avançado
// // De 7 acima: Jedi Master


// ==================================5===============================


// var usuarios = [
//  {
//  nome: "Diego",
//  habilidades: ["Javascript", "ReactJS", "Redux"]
//  },
//  {
//  nome: "Gabriel",
//  habilidades: ["VueJS", "Ruby on Rails", "Elixir"]
//  }
// ];

// function hab(usuarios) {
//     for(usuario of usuarios){
//         console.log(`O ${usuario.nome} possui as habilidades: ${usuario.habilidades.join(', ')}`)
//     }

// }

// hab(usuarios)



//============================= MODULO 2 ========================


// ==================================1 e 2 ===============================

// var btn = document.getElementById('box')
// var div = document.getElementById('boxSpace')


// function DrawBox(){
   
//     var newBox = document.createElement('p')

//     newBox.style.width= "100px"
//     newBox.style.height= "100px"
//     newBox.style.backgroundColor= '#f00'


//     newBox.onmouseover = function () {
//         newBox.style.backgroundColor= getRandomColor()
//     }

//     div.appendChild(newBox)
   

// }


// function getRandomColor() {
//     var letters = "0123456789ABCDEF";
//     var color = "#";
//     for (var i = 0; i < 6; i++) {
//     color += letters[Math.floor(Math.random() * 16)];
//     }
//     return color;
//    }
//    var newColor = getRandomColor(); // #E943F0
   

// ==================================3 e 4===============================


// var ul = document.getElementById('recebeLista')

// var nomes = ["Diego", "Gabriel", "Lucas"];

// for(nome of nomes){
//     var li = document.createElement('li')
//     li.innerHTML = nome
    
//     ul.appendChild(li)
// }

// function AdicionaNome(){
//     var txt = document.getElementById('text').value
   
//     var li = document.createElement('li')
//     li.innerHTML = txt
    
//     ul.appendChild(li)
 

// }





//============================= MODULO 4 ========================


// ==================================1===============================


// var verify;
// function checaIdade(idade) {
//     verify = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if(idade >= 18){
//                 resolve()
//             }else{
//                 reject()
//             }

//         }, 2000);

//     })
// }
// checaIdade(15)
//  verify.then(function() {
//  console.log("Maior que 18");
//  })
//  verify.catch(function() {
//  console.log("Menor que 18");
//  });

 
// ==================================2 e 3 ===============================

// var nome = document.getElementById('user')
// var ul = document.getElementById('adiciona')

// user.value = 'caiammm'

// btn.onclick = function busca(){
//     ul.innerHTML = 'Carregando...'
//     axios.get(`https://api.github.com/users/${nome.value}/repos`) 
//     .then(response=>{
        
//         ul.innerHTML = ''  
        
//         for(i=0; i<response.data.length; i++){
           
//             var li = document.createElement('li')
//             var link = document.createElement('a')
//             link.href = response.data[i].html_url
//             link.innerText = `repo ${i}`

//             li.append(link)
//             ul.appendChild(li)
             
//         }
//     })
//     .catch(reject => {
//         console.warn('usuário não encontrado')
//         ul.innerHTML = 'erro 404, usuário não encontrado'

//     })   
// }

