var employeeJson = [
   {
       "Employee Name":"Monish",
       "Address":"Chennai",
       "Email ID":"monish@gmail.com",
       "Age":25
   },
   {
       "Employee Name":"Sharan",
       "Address":"Mumbai",
       "Email ID":"sharan@gmail.com",
       "Age":24
   },
   {
       "Employee Name":"Ramesh",
       "Address":"Coimbatore",
       "Email ID":"ramesh@gmail.com",
       "Age":25
   },
   {
       "Employee Name":"Kiran",
       "Address":"Delhi",
       "Email ID":"kiran5@gmail.com",
       "Age":22
   }];
   
function createTableFromJsonData(){
  
   var headers = Object.keys(employeeJson[0]);
   
  
   var headerRowHTML='<tr>';
   for(var i=0;i<headers.length;i++){
       headerRowHTML+='<th>'+headers[i]+'</th>';
   }
   headerRowHTML+='</tr>';       
   
  
   var allRecordsHTML='';
   for(var i=0;i<employeeJson.length;i++){
    
      
       allRecordsHTML+='<tr>';
       for(var j=0;j<headers.length;j++){
           var header=headers[j];
           allRecordsHTML+='<td>'+employeeJson[i][header]+'</td>';
       }
       allRecordsHTML+='</tr>';
        
   }
    
  
   var table=document.getElementById("display_json_data");
   table.innerHTML=headerRowHTML + allRecordsHTML;
}

window.onload = createTableFromJsonData();