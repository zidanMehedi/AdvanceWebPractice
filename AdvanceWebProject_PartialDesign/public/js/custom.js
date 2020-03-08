$(document).ready(function(){
	$('.goHome').on('click',function goHome(){
     	window.location='http://localhost:4000/home';
    });

    $('#apply').on('click',function applyTopic(){
     	window.location='http://localhost:4000/topics';
    });

    $('.details').on('click',function applyTopic(){
     	window.location='http://localhost:4000/topics/topicDetails/'+$('.details').val();
    });


});

function goTo(value){
	window.location='http://localhost:4000/topics/topicDetails/'+value;
}

function apply(value){
    window.location='http://localhost:4000/topics/apply/'+value;
}

function addMember(value){
    window.location='http://localhost:4000/group/addMember/'+value;
}