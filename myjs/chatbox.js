document.getElementById('usr1btn').addEventListener("click", usr1PswBox);
document.getElementById('usr2btn').addEventListener("click", usr2PswBox);
document.getElementById('usr1Gobtn').addEventListener("click",usr1CheckPass);
document.getElementById('usr2Gobtn').addEventListener("click",usr2CheckPass);
document.getElementById("usr1SendBtn").addEventListener("click", usr1MsgsndText);
document.getElementById("usr2SendBtn").addEventListener("click", usr2MsgsndText);
document.getElementById("usr1MsgSend").addEventListener("focus", usr1TypingMsg )
document.getElementById("usr1MsgSend").addEventListener("blur", usr1TypingMsgblank )
document.getElementById("usr2MsgSend").addEventListener("focus", usr2TypingMsg )
document.getElementById("usr2MsgSend").addEventListener("blur", usr2TypingMsgblank )
document.getElementById("clearscreenusr1").addEventListener("click",clearscreen1)
document.getElementById("clearscreenusr2").addEventListener("click",clearscreen2)
document.getElementById("dark").addEventListener("click",thmdark)
document.getElementById("light").addEventListener("click",thmlight)
function clearscreen1()
{
     document.getElementById("usr1ChatBox").innerHTML="";
}

function clearscreen2()
{
     document.getElementById("usr2ChatBox").innerHTML="";
}


function usr1PswBox()
{
	document.getElementById("usr1LoginBox").style.display="block";
}

function usr2PswBox()
{
	document.getElementById("usr2LoginBox").style.display="block";
}


function usr1CheckPass()
{
     let usr1Pwd=document.getElementById("usr1txtBox").value;

     if (usr1Pwd=="1234")
     {
     	document.getElementById("maindiv1").style.display="block";
     	document.getElementById("usr1LoginBox").style.display="none";
     }
     else
     {
     	alert("Invalid Password!!");
     	document.getElementById("usr1txtBox").value="";
     	document.getElementById("usr1txtBox").focus();
     }

}

function usr2CheckPass()
{
     let usr2Pwd=document.getElementById("usr2txtBox").value;

     if (usr2Pwd=="5678")
     {
     	document.getElementById("maindiv2").style.display="block";
     	document.getElementById("usr2LoginBox").style.display="none";
     }
     else
     {
     	alert("Invalid Login Detail!");
     	document.getElementById("usr2txtBox").value="";
     	document.getElementById("usr2txtBox").focus();
     }

}


function usr1MsgsndText()
{

 let usr1data=document.getElementById("usr1MsgSend").value;
 if (usr1data.length >=1){
 let myElm1=document.createElement("p");
     myElm1.style.padding="10px";
     myElm1.style.width="280px";
     myElm1.style.overflowWrap="anywhere";
     myElm1.style.float="right";
     myElm1.style.backgroundColor="#d0f7d4";
     myElm1.style.borderRadius="30px";
     myElm1.style.borderTopRightRadius="0px";
     myElm1.innerHTML=usr1data;
     myElm1.style.marginTop="10px";
     myElm1.style.fontSize="20px";
     myElm1.style.fontWeight="bolder";

     document.getElementById("usr1ChatBox").appendChild(myElm1);
document.getElementById("usr1MsgSend").value="";
let myElm2=document.createElement("p");
     myElm2.style.padding="10px";
     myElm2.style.width="280px";
     myElm2.style.float="left";
     myElm2.style.backgroundColor="#d0f7d4";
     myElm2.style.borderRadius="30px";
     myElm2.style.borderTopLeftRadius="0px";
     myElm2.innerHTML=usr1data;
     myElm2.style.marginTop="10px";
     myElm2.style.fontSize="20px";
     myElm2.style.fontWeight="bolder";

     setTimeout(usr2BoxData, 1000);

function usr2BoxData(){
     document.getElementById("usr2ChatBox").appendChild(myElm2);
   }


 }}


function usr2MsgsndText()
{

 let usr1data=document.getElementById("usr2MsgSend").value;
 if (usr1data.length >=1){
 let myElm1=document.createElement("p");
     myElm1.style.padding="10px";
     myElm1.style.width="280px";
     myElm1.style.float="right";
     myElm1.style.backgroundColor="#566573";
     myElm1.style.borderRadius="30px";
     myElm1.style.borderTopRightRadius="0px";
     myElm1.innerHTML=usr1data;
     myElm1.style.marginTop="10px";
     myElm1.style.fontSize="20px";
     myElm1.style.fontWeight="bolder";

     document.getElementById("usr2ChatBox").appendChild(myElm1);
document.getElementById("usr2MsgSend").value="";
let myElm2=document.createElement("p");
     myElm2.style.padding="10px";
     myElm2.style.width="280px";
     myElm2.style.float="left";
     myElm2.style.backgroundColor="#566573";
     myElm2.style.borderRadius="30px";
     myElm2.style.borderTopLeftRadius="0px";
     myElm2.innerHTML=usr1data;
     myElm2.style.marginTop="10px";
     myElm2.style.fontSize="20px";
     myElm2.style.fontWeight="bolder";

     setTimeout(usr2BoxData, 1000);

function usr2BoxData(){
     document.getElementById("usr1ChatBox").appendChild(myElm2);
   }


}}


function usr1TypingMsg()
{
	document.getElementById("typingusr2msg").innerHTML="Typing...";
}

function usr1TypingMsgblank()
{
	document.getElementById("typingusr2msg").innerHTML="";
}


function usr2TypingMsg()
{
     document.getElementById("typingusr1msg").innerHTML="Typing...";
}

function usr2TypingMsgblank()
{
     document.getElementById("typingusr1msg").innerHTML="";
}

function thmdark()
{
     document.getElementById("body1").style.backgroundImage="url('dark.jpeg')";
     document.getElementById('header').style.color="white";
     document.getElementById("usr1btn").style.backgroundColor="yellow";
     document.getElementById("usr2btn").style.backgroundColor="yellow";
     document.getElementById("usr1btn").style.color="#3498DB";
     document.getElementById("usr2btn").style.color="#3498DB";
     document.getElementById("maindiv1").style.boxShadow="5px -5px 5px 5px  #2A97DF";
     document.getElementById("maindiv2").style.boxShadow="-5px -5px 5px 5px #2A97DF";
     document.getElementById("usr1ChatBox").style.background="transparent";
     document.getElementById("usr2ChatBox").style.background="transparent";
     document.getElementById('header').style.textShadow="2px 2px #F1C40F"
}

function thmlight()
{
     document.getElementById("body1").style.backgroundColor="#85FFBD";
     document.getElementById('header').style.color="black";
     document.getElementById("usr1btn").style.backgroundColor="#A569BD";
     document.getElementById("usr2btn").style.backgroundColor="#A569BD";
     document.getElementById("usr1btn").style.color="white";
     document.getElementById("usr2btn").style.color="white";
     document.getElementById("maindiv1").style.boxShadow="5px -5px 5px 5px  black";
     document.getElementById("maindiv2").style.boxShadow="-5px -5px 5px 5px black";
     document.getElementById('header').style.textShadow="2px 2px #ff0000"
     document.getElementById("usr1ChatBox").style.background="url('backgroundimg.jpeg')";
     document.getElementById("usr2ChatBox").style.background="url('backgroundimg.jpeg')";
     
}
















