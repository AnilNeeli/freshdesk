function del(){

var id=parseInt(document.getElementById("delete").value);
if(confirm("please confirm if you want to proceed with the delete of ticket")){
 fetch(`https://anilkumar08071996.freshdesk.com/api/v2/tickets/${id}`, {
    method:'DELETE',
    headers: {
        "Authorization": "Basic " + btoa("bD9BVkWxUeyGp6kZ9xT2" + ":" + "x")
    },
}).then(response=>{
if(response.ok){
alert("ticket deleted successfully");
}
else{
alert("The given ticket id does not exit, please recheck it");
}

})
}


else{
alert("the task has been cancelled")
}
document.getElementById("delete").value="";
}


function sta(){
var id=parseInt(document.getElementById("idtic1").value);
var sta=parseInt(document.getElementById("status1").value);
if(confirm(`please confirm if you want to proceed with the change the status of the ticket ${id}`)){
 fetch(`https://anilkumar08071996.freshdesk.com/api/v2/tickets/${id}`, {
    method:'PUT',
    headers: {
        "Authorization": "Basic " + btoa("bD9BVkWxUeyGp6kZ9xT2" + ":" + "x"),
        'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({requester_id:63002373798,status:sta})
}).then(response=>{
if(response.ok){
alert("Status updated successfully");
}
else{
alert("The given ticket id does not exit, please recheck it");
}
})
}
else{
alert("the task has been cancelled")
}
document.getElementById("idtic1").value="";
}

function pri(){
var id=parseInt(document.getElementById("pri1").value);
var pri=parseInt(document.getElementById("priority1").value);
if(confirm(`please confirm if you want to proceed with the change the status of the ticket ${id}`)){
 fetch(`https://anilkumar08071996.freshdesk.com/api/v2/tickets/${id}`, {
    method:'PUT',
    headers: {
        "Authorization": "Basic " + btoa("bD9BVkWxUeyGp6kZ9xT2" + ":" + "x"),
        'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({requester_id:63002373798,priority:pri})
}).then(response=>{
if(response.ok){
alert("Priority updated successfully");
}
else{
alert("The given ticket id does not exit, please recheck it");
}
})
}
else{
alert("the task has been cancelled")
}
document.getElementById("pri1").value="";
}

function des(){
var id=parseInt(document.getElementById("des1").value);
var mes=document.getElementById("Description1").value;
if(confirm(`please confirm if you want to proceed with the change the status of the ticket ${id}`)){
 fetch(`https://anilkumar08071996.freshdesk.com/api/v2/tickets/${id}`, {
    method:'PUT',
    headers: {
        "Authorization": "Basic " + btoa("bD9BVkWxUeyGp6kZ9xT2" + ":" + "x"),
        'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({requester_id:63002373798,description:mes})
}).then(response=>{
if(response.ok){
alert("Description updated successfully");
}
else{
alert("The given ticket id does not exit, please recheck it");
}
})
}
else{
alert("the task has been cancelled")
}
document.getElementById("pri1").value="";
}




