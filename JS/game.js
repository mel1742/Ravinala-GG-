const resultat = document.querySelector("#valindalao");

var ravinaList = [
    [0,0,0,0,0,0],
    [0,0,0,0,0,0],
    [0,0,0,0,0,0],
    [0,0,0,0,0,0],
];

var listRefreshed = mipasoka();

var teoAloha=[];
var nipoitra=0;
var pare = true;

filaharantsary();

function filaharantsary(){
  var txt="";

  for (var i=0; i< ravinaList.length; i++){
    txt += "<div>";
    for(var j=0; j< ravinaList[i].length; j++){
      if (ravinaList[i][j] === 0){
        txt +="<button class='btn btn-primary m-3' style='width:90px; height:120px' onClick='verif(\""+i+"-"+j+"\")'> <img src='../image/carte.gif'> </button>";
      } else {
        txt += "<img src='"+getImage(ravinaList[i][j])+"' style='width:90px; height:120px' class='m-3'>";
      }
    }
    txt += "</div>";
  }
  resultat.innerHTML = txt;
}

function getImage(valeur){
  var imgChem = "../image/";
  switch(valeur){
    case 1 : imgChem += "romba.png";
    break;
    case 2 : imgChem += "ravinala.png";
    break;
    case 3 : imgChem += "artemisia.png";
    break;
    case 4 : imgChem += "moringa.png";
    break;
    case 5 : imgChem += "kafe.png";
    break;
    case 6 : imgChem += "vanille.png";
    break;
    case 7 : imgChem += "ylang.png";
    break;
    case 8 : imgChem += "kininimpotsy.png";
    break;
    case 9 : imgChem += "kininina.png";
    break;
    case 10 : imgChem += "kesika.png";
    break;
    case 11 : imgChem += "mandravasarotra.png";
    break;
    case 12 : imgChem += "ravintsara.png";
    break;
    default: console.log("Non pris en charge")
  }
  return imgChem;
}

function verif(bouton){
  if (pare){
    nipoitra++;
    //l: ligne, c: colonne
    var l = bouton.substr(0,1);
    var c = bouton.substr(2,1);
    
    ravinaList[l][c] = listRefreshed[l][c];
    filaharantsary();

    if(nipoitra>1){
      pare=false;
      setTimeout(() => {
        if(ravinaList[l][c] !== listRefreshed[teoAloha[0]][teoAloha[1]]){
          ravinaList[l][c]=0;
          ravinaList[teoAloha[0]][teoAloha[1]]=0;
        }
        filaharantsary();
        pare=true;
        nipoitra = 0;
        teoAloha = [l,c];
      },500)
    } else {
      teoAloha = [l,c];
    }
  }
}

function mipasoka(){
    var tab = [];
    var nbImagePosition=[0,0,0,0,0,0,0,0,0,0,0,0];

    for(var i = 0; i<4 ; i++){
      var l =[];
      for(var j = 0; j<6 ; j++){
        var fin = false;
        while(!fin){
          var randomImage = Math.floor(Math.random() * 12);
          if(nbImagePosition[randomImage] < 2){
            l.push(randomImage+1);
            nbImagePosition[randomImage]++;
            fin=true;
          }
        }
      }
      tab.push(l);
    }
    return tab;       
}

function veloma() {
  if (confirm("Voulez-vous vraiment quitter le jeu ?")) {
    window.location.href = "accueil.html";
  }
}
