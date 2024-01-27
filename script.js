arrayL = [ "",
/*1*/"Seu jeito gentil", 
/*2*/"A maneira como você se preocupa com as pessoas e sempre pensa em ajudar",
/*3*/"Seu cabeloo! Lindo e sempre hidratado kkk",
/*4*/"Seus olhos <3 são a coisa mais linda do mundo <3 <3",
/*5*/"Você é o melhor namorado do mundo todoooooo",
/*6*/"Você é um ótimo filho, isso me faz eu te admirar muito",
/*7*/"Você é extremamente lindo",
/*8*/"Sua covinhaa S2 S2",
/*9*/"Você é perfeito em todos os sentidos",
/*10*/"Seu sorriso S2 S2",
/*11*/"Sua inteligência",
/*12*/"Seu jeitinho nerd é muito atraente kkk",
/*13*/"Você sempre faz de tudo para me agradar S2 te admiro muito e prometo sempre fazer o mesmo por você",
/*14*/"Sua voz <3 Ela me acalma",
/*15*/"A maneira como você sempre acredita no meu potencial, mesmo quando nem eu acredito",
/*16*/"Você é um gêniooo da Informática, Amor! Também acho isso muito atraente",
/*17*/"Amo seu jeitinho carinhoso S2",
/*18*/"Você gosta de Star Wars",
/*19*/"Sua paciência(alguém que trabalha com JavaScript precisa ter de sobra)",
/*20*/"Seu bigode kkkkkkkk (acho charmoso)",
/*21*/"Amo seu cafuné",
/*22*/"Amo seus beijinhos",
/*23*/"Amo seu jeito companheiro de ser",
/*24*/"Amo quando você pergunta como foi meu dia",
/*25*/"Amo a maneira como você se importa comigo",
/*26*/"EU TE AMO MAIIIIIIIIIS",
/*27*/"Você é gatíssimoooo <3 <3",
/*28*/"Melhor professor de Javascript que eu poderia ter kkkk",
/*29*/"Meu namorado fala 3 línguasss!!!",
/*30*/"Seu olhar é incrível!!",
/*31*/"Seu abraço é maravilhoso! Aquece todo meu coração!",
/*32*/"Seu colo é o melhor lugar do mundo!!!",
/*33*/"Amo quando me chama de princesa e amor",
/*34*/ "Amo seus beijinhos",
/*35*/"Te amo por voce ser quem voce é e agradeço por voce ser o amor da minha vida"
];
const divResp = document.querySelector("#resposta");
const btn = document.querySelector("#button");

btn.onclick = function () {
    let number = document.querySelector("#number").value;
    console.log(number)
    console.log(arrayL)
    divResp.innerHTML += arrayL[number];
}


console.log("abacaxi")

