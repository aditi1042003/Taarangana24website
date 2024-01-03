@import url('https://fonts.googleapis.com/css?family=Codystar:300&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300&family=Press+Start+2P&display=swap');
@import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@100;300&family=Poppins:wght@300&family=Press+Start+2P&display=swap');

body {
  width: 96vw;
  min-height: 100vh;
  display: grid;
  place-items: center;
  overflow-x: hidden;
  font-family: JetBrains Mono, monospace;
}


.pageHeading{
  display:flex;
  justify-content:center;
  align-items:center;
  font-family: 'Press Start 2P';
}
.sponsorHead{
  font-family: JetBrains Mono, monospace;
}


.pac-container{
    height: 100px;
    margin-right:60%;
    padding: 0;
    position: relative;
  
}
.pac::before,
.pac::after {
  z-index: 1;
  position: absolute;
  content: "";
  background: #CC07F0;
  width: 50px;
  height: 25px;
  left: 75px;
}

.pac::before {
  top: 50px;
  border-radius: 25px 25px 0 0;
  transform-origin: 50% 100%;
  animation: topFace 1s linear infinite;
}
.pac::after {
  bottom: 0px;
  border-radius: 0 0 25px 25px;
  transform-origin: 50% 0;
  animation: bottomFace 1s linear infinite;
}
@keyframes topFace {
  0%,
  100% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(-30deg);
  }
}
@keyframes bottomFace {
  0%,
  100% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(30deg);
  }
}
.food-container {
  position: absolute;
  left: 150px;
  top: 75px;
  width: 800px;
  height: 10px;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.food {
  width: 10px;
  height: 10px;
  background: white;
  border-radius: 50%;
  animation: move-left 1s linear infinite;
}
@keyframes move-left {
  to {
    transform: translatex(-100px);
  }
}

#div-0 { margin: 10px; }
.contained {
  margin-top: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 4rem;
  color: #ffffff;
  position: relative;
  z-index: 2;
}

.imgContainer{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  width: 100%;
  z-index: 2;
  margin: 4px;
  padding-bottom: 20px;
}

.partners {
  display: flex;
  flex-direction:inherit;
  justify-content: center;
  margin-bottom: 5%;
  margin-top: 2%;
  border-radius: 50%;
  padding: 20px;
  display: inline-block;
  text-align: center;
  /* width: 28vw; */
}

.box {
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 4%;
  width: 79%;
}

.neons {
  font-size: 5rem;
  text-align: center;
  -webkit-animation: glow 2s ease-in-out infinite alternate;
  -moz-animation: glow 2s ease-in-out infinite alternate;
  animation: glow 2s ease-in-out infinite alternate;
}

.neons h1 {
  padding-top: 3rem;
  /* padding-left: 3rem; */
  font-size: 5rem;
  text-decoration: none;
  color: #CC07F0;
  text-align: center;
  position: relative;
}


/* --------------------------------------------------------------------------------------------------------- */


@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&display=swap");
.card{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-size: 62.5%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.imgspr{
  width: 300px;
  height: 320px;
  object-fit: fill;
}

.cardBox {
  width: 300px;
  height: 300px;
  position: absolute;
  display: grid;
  background: transparent;
  place-items: center;
  overflow: hidden;
  justify-content: center;
  border-radius:50%;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 10px 0px,
    rgba(0, 0, 0, 0.5) 0px 2px 25px 0px;
}
.card {
  position: absolute;
  width: 97%;
  height: 97%;
  background: black;
  border-radius: 50%;
  z-index: 5;
  display: flex;
  gap: 5px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  color: #ffffff;
  overflow: hidden;
  padding: 20px;
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 30px 60px -12px inset,
    rgba(0, 0, 0, 0.5) 0px 18px 36px -18px inset;
}
.card h2, span {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 3rem;
  font-weight: 800;
  pointer-events: none;
  
}

span {
  top: 50%;
}

.card .content h4 {
  font-size: 2rem;
  padding-bottom: 10px;
}
.card .content p {
  font-size: 1.6rem;
  line-height: 25px;
}
.card .content {
  transform: translateY(100%);
  opacity: 0;
  transition: 0.3s ease-in-out;
}


.card:hover{
  background-color: black;
  color: #bb00ff;
  text-shadow: 1px 1px 1px rgb(230, 230, 230) ;
}
.card:hover .content {
  transform: translateY(0);
  opacity: 1;
}

.card:hover .image{
opacity: 0;
}


.cardBox::before,
.cardBox::after {
  border-radius: 50%;
  height: 300px !important;
  width: 300px !important;
}

.cardBox::after {
  content: "";
  position: absolute;
  width: 300px;
  height: 300px;
  background-image: conic-gradient(
    transparent,
    transparent,
    transparent,
    #ffffff
  );
  animation: animate 4s linear infinite;
  animation-delay: -2s;
}

.partners::after {
  content: "";
  display: flex;
  width: 300px;
  height: 300px;
  filter: blur(100px);
  background-image: conic-gradient(
    transparent,
    transparent,
    transparent,
    #bb00ff
  );
  animation: animate 4s linear infinite;
}

.cardBox::before {
  content: "";
  position: absolute;
  width: 300px;
  height: 300px;
  background-image: conic-gradient(
    transparent,
    transparent,
    transparent,
    #bb00ff
  );
  animation: animate 4s linear infinite;
}

@keyframes animate {
  0% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(180deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@media only screen and (max-width: 930px){
 .neons h1{
  font-size: 5rem;
 }
}

@media only screen and (max-width: 700px){
  .neons h1{
   font-size: 5rem;
  }
  
   .cardBox {
    width: 220px;
    height: 220px;
  }
  .imgspr{
    width: 220px;
    height: 220px;
    object-fit: fill;
  }

  .contained h1{
    font-size: 28px;
  }

h1 {
    padding-top: 18px;
}
  .card .content h4{
    font-size: 1.5rem;
  }
 }

 @media only screen and (max-width: 500px){
  body{
    overflow-x: hidden;
  }
  .neons h1{
    font-size: 3.2rem;
    padding-top: 60px;
   }
   .neons h1{
    font-size:55%;
   }
   .pac-container{
    margin-right: 125%;
   }
   .food-container {
    position: absolute;
    left: 157px;
    top: 75px;
    width: 250px;
    height: 10px;
    display: flex;
    align-items: center;
    justify-content: space-around;
}
   .contained{
    margin-top: -10px;
   }
   .partners{
    position: relative;
    padding-bottom: 0px;
    margin-bottom: 0px !important;
    margin-top: 0px !important; 
  }
   .cardBox{
    position: absolute;
    left: 17%;
    width: 220px;
    height: 210px;
  }
  .imgContainer{
    margin-bottom: -70px;
    gap: 0px;
  }
  .imgspr{
    width: 220px;
    height: 220px;
    object-fit: fill;
  }
  #hugehead{
    margin-bottom: 28px;
  }
  .food {
    width: 10px;
    height: 10px;
    background: white;
    border-radius: 50%;
    animation: move-left 0.7s linear infinite;
  }
  @keyframes move-left {
    to {
      transform: translatex(-85px);
    }
  }

  .pac::before {
    top: 50px;
    border-radius: 25px 25px 0 0;
    transform-origin: 50% 100%;
    animation: topFace 0.7s linear infinite 0.2s;
  }
  .pac::after {
    bottom: 0px;
    border-radius: 0 0 25px 25px;
    transform-origin: 50% 0;
    animation: bottomFace 0.7s linear infinite 0.2s;
  }
  @keyframes topFace {
    0%,
    100% {
      transform: rotate(0deg);
    }
    50% {
      transform: rotate(-30deg);
    }
  }
  @keyframes bottomFace {
    0%,
    100% {
      transform: rotate(0deg);
    }
    50% {
      transform: rotate(30deg);
    }
  }
 }
