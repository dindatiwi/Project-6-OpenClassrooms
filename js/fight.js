
function attack() {
	if(passivePlayer.protected === true){
    passivePlayer.lifePoint -= activePlayer.damage/2;
    passivePlayer.protected = false;
  }else{
    passivePlayer.lifePoint -= activePlayer.damage;

  }
  
  if(passivePlayer.lifePoint < 0){ passivePlayer.lifePoint=0; }
  //update lifepoints UI
  $("#"+passivePlayer.name+"LP").text(passivePlayer.lifePoint);
  //using animate css
  $("#"+passivePlayer.name+"LP").addClass('animated bounce')
                  .one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
                        $(this).removeClass('animated bounce');});


  if(passivePlayer.lifePoint === 0){
  	if(activePlayer.name === "player1"){
  		activePlayer.name = "player1";
  	}else{
  		activePlayer.name = "player2";
  	}	
  	$("#winnerbox .modal-body p:nth-child(3)").text(activePlayer.name);
  	$("#winner").attr("src","img/"+activePlayer.image);
    $("#winnerbox").modal(); 
    $("div#mapgen > div").removeClass('range');
  }else{
    passivePlayer.activatePlayer();
    fightButtonEnabling();
  }    
};

function defend(){
    activePlayer.protected = true;
    passivePlayer.activatePlayer();
    fightButtonEnabling();
}

function fightButtonEnabling(){
  if (activePlayer === player1){
    buttonP1A.removeAttr('disabled');
    buttonP1D.removeAttr('disabled');
    buttonP2A.attr('disabled', 'disabled');
    buttonP2D.attr('disabled', 'disabled');
  }else{
    buttonP2A.removeAttr('disabled');
    buttonP2D.removeAttr('disabled');
    buttonP1A.attr('disabled', 'disabled');
    buttonP1D.attr('disabled', 'disabled');
  }
}