//the speed of the fade in's
var fadeSpeed = 750;

var spawnQuestion = function(questionObject) {
    $('#' + questionObject.questionId).fadeIn(fadeSpeed);
    $('#' + questionObject.connectorPathDiv).delay(fadeSpeed).fadeIn(fadeSpeed);
    $('#' + questionObject.additionalConnector).delay(fadeSpeed).fadeIn(fadeSpeed);
    $('#' + questionObject.answerBlockDiv).delay(fadeSpeed*2).fadeIn(fadeSpeed)
    $('#' + questionObject.additionalAnswer).delay(fadeSpeed*2).fadeIn(fadeSpeed)
}

var spawnExitPath = function(exitPathId, questionBlockObject) {
    $('#' + exitPathId).fadeIn(fadeSpeed, function(){
        spawnQuestion(questionBlockObject)
    });
    console.log('Spawning Exit Path');    
}

var Q1 = {
    'questionId': 'Q1mostProud',
    'connectorPathDiv':'Q1mostProudConnectors',
    'answerBlockDiv':'Q1mostProudAnswers'
}

var Q2 = {
    'questionId': 'Q2EasilyDistracted',
    'connectorPathDiv':'Q2EasilyDistractedConnectors',
    'answerBlockDiv':'Q2EasilyDistractedAnswers',
}

var Q3 = {
    'questionId': 'Q3FollowOrDirect',
    'connectorPathDiv':'Q3FollowOrDirectConnectors',
    'answerBlockDiv':'Q3FollowOrDirectAnswers',
}

var Q4 = {
    'questionId': 'Q4Daydream',
    'connectorPathDiv':'Q4DaydreamConnectors',
    'answerBlockDiv':'Q4DaydreamAnswers'
}

var Q5 = {
    'questionId': 'Q5YourselfFirst',
    'connectorPathDiv':'Q5YourselfFirstConnectors',
    'answerBlockDiv':'Q5YourselfFirstAnswers'
}

var Q6 = {
    'questionId': 'Q6DailyTasks',
    'connectorPathDiv':'Q6DailyTasksConnectors',
    'answerBlockDiv':'Q6DailyTasksAnswers'
}

var Q7 = {
    'questionId': 'Q7WatchCoworkers',
    'connectorPathDiv':'Q7WatchCoworkersConnectors',
    'answerBlockDiv':'Q7WatchCoworkersAnswers'
}

var Q8 = {
    'questionId': 'Q8OthersSucceed',
    'connectorPathDiv':'Q8OthersSucceedConnectors',
    'answerBlockDiv':'Q8OthersSucceedAnswers'
}

var Q9 = {
    'questionId': 'Q9SuccessToYou',
    'connectorPathDiv':'Q9SuccessToYouConnectors',
    'answerBlockDiv':'Q9SuccessToYouAnswers'
}

var Q10 = {
    'questionId': 'Q10Argue',
    'connectorPathDiv':'Q10ArgueConnectors',
    'answerBlockDiv':'Q10ArgueAnswers'
}

//Not technically a question, but it performs the same way.
var dreamer ={
    'questionId': 'resultDreamer'
}

var ambassador = {
    'questionId': 'resultAmbassador'
}

var acheiver = {
    'questionId': 'resultAchiever'
}

var leader = {
    'questionId': 'resultLeader'
}

//This will be used later
var neverExitPath;

//This starts everything off.
$('body').ready( 
    function() {
        $('body').children().hide();

        //Title text
        $('#_idContainer096').show();
        
        spawnQuestion(Q1);
    }
);
//When an answer is clicked, it will trigger the path connected to it
//which will then spawn the question that is connected to that path

//The "never" answer in questions 2 and 3 will have different results
//depending on how they are triggered. This is kind of a nasty hack.
$('#Q1Generosity').click(function(){spawnExitPath('_idContainer043', Q2)});
$('#Q1Creativity').click(function(){spawnExitPath('_idContainer045', Q2)});
$('#Q1ProblemSolving').click(function(){spawnExitPath('_idContainer049', Q3)});
$('#Q1Leadership').click(function(){spawnExitPath('_idContainer039', Q3)});
$('#Q2never').click(function(){spawnExitPath('_idContainer038', Q3)});
$('#Q2IAlreadyForgot').click(function(){spawnExitPath('_idContainer046', Q4)});
$('#Q2Sometimes').click(function(){spawnExitPath('_idContainer047', Q5)});
$('#Q3Follow').click(function(){spawnExitPath('_idContainer041', Q5)});
$('#Q3Direct').click(function(){spawnExitPath('_idContainer040', Q6)});
$('#Q4WhenBored').click(function(){spawnExitPath('_idContainer021', Q8)});
$('#Q4AllDay').click(function(){spawnExitPath('_idContainer022', Q7)});
$('#Q5Yes').click(function(){spawnExitPath('_idContainer016', Q9)});
$('#Q5No').click(function(){spawnExitPath('_idContainer017', Q8)});
$('#Q6Always').click(function(){spawnExitPath('_idContainer014', Q10)});
$('#Q6Sometimes').click(function(){spawnExitPath('_idContainer015', Q9)});
$('#Q7Yes').click(function(){spawnExitPath('_idContainer005', ambassador)});
$('#Q7WatchOutForMe').click(function(){spawnExitPath('_idContainer006', dreamer)});
$('#Q8YouMeanWhenI').click(function(){spawnExitPath('_idContainer051', acheiver)});
$('#Q8ProudOfThem').click(function(){spawnExitPath('_idContainer002', ambassador)});
$('#Q9Efficiently').click(function(){spawnExitPath('_idContainer003', leader)});
$('#Q9OnMyOwn').click(function(){spawnExitPath('_idContainer004', acheiver)});
$('#Q10ImRight').click(function(){spawnExitPath('_idContainer052', leader)});
$('#Q10ResolveIt').click(function(){spawnExitPath('_idContainer001', acheiver)});