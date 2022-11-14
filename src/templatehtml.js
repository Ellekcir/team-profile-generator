// Create the HTML Dynamically using HTML templates
const generateTeam = (team) => {

    function generateManager(manager) {
        return `<card class="card employeeCard col-3 d-inline-flex justify-content-center">
    <div class="cardHeader text-center">
        <!-- Name and role -->
        <h2 class="cardName">${manager.name}</h2>
        <h3 class="cardRole">${manager.getRole()}</h3>
    </div>
    <div class="cardBody text-center">
        <ul class="list-group">
        <!-- Id, Email, OfficeNumber/GitHub/School-->
            <li class="list-group-item">ID: ${manager.getId()}</li>
            <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
            <li class="list-group-item">Office Number: ${manager.officeNumber}</li>
        </ul>
    </div>
</card>`;
    }

    function generateEngineer(engineer) {
        return `                <card class="card employeeCard col-3 d-inline-flex justify-content-center">
        <div class="cardHeader text-center">
            <!-- Name and role -->
            <h2 class="cardName">${engineer.name}</h2>
            <h3 class="cardRole">${engineer.getRole()}</h3>
        </div>
        <div class="cardBody text-center">
            <ul class="list-group">
            <!-- Id, Email, OfficeNumber/GitHub/School-->
                <li class="list-group-item">ID: ${engineer.id}</li>
                <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}<\a></li>
                <li class="list-group-item">GitHub: <a href="https:\\github.com\${engineer.getGithub()}">${engineer.getGithub()}<\a></li>
            </ul>
        </div>
    </card>`;
    }

    function generateIntern(intern) {
        return `
        <card class="card employeeCard col-3 d-inline-flex justify-content-center">
        <div class="cardHeader text-center">
            <!-- Name and role -->
            <h2 class="cardName">${intern.name}</h2>
            <h3 class="cardRole">${intern.getRole()}</h3>
        </div>
        <div class="cardBody text-center">
            <ul class="list-group">
            <!-- Id, Email, OfficeNumber/GitHub/School-->
                <li class="list-group-item">ID: ${intern.id}</li>
                <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}<\a></li>
                <li class="list-group-item">School: ${intern.school}</li>
            </ul>
        </div>
    </card>`;
 }


const html = [];

    
html.push(
    team
      .filter((employee) => employee.getRole() === "Manager")
      .map((manager) => generateManager(manager))
  );
  html.push(
    team
      .filter((employee) => employee.getRole() === "Engineer")
      .map((engineer) => generateEngineer(engineer))
      .join("")
  );
  html.push(
    team
      .filter((employee) => employee.getRole() === "Intern")
      .map((intern) => generateIntern(intern))
      .join("")
  );
  
  return html.join("");
  };
  
  // Export function to generate entire page
  module.exports = (team) => {
  return `
  <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" 
    integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
    <link href="https://fonts.googleapis.com/css2?family=Alkalami&family=Dancing+Script:wght@500&family=Noto+Sans+Mono:wght@100&family=Sono&family=Syne:wght@800&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="../dist/style.css">

    <title> MY TEAM </title>
</head>

<body>
    <!-- Container for page content -->
    <div class="container-fluid">
        <!-- Title bar -->
        <div class="row">
            <div class="col-12 jumbotron mb-3 team-heading">
                <h1 class="text-center">MY TEAM </h1>

            </div>
        </div>
    <!-- Page content - Employee's Cards-->
    <div class="container">
        <div class="row justify-content-center">
            ${generateTeam(team)}  
            </div>
        </div>
    </div>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js" 
    integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3" crossorigin="anonymous"></script>
</body>

</html>`;
};

// <!DOCTYPE html>
// <html lang="en">

// <head>
//     <meta charset="UTF-8">
//     <meta http-equiv="X-UA-Compatible" content="IE=edge">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" 
//     integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
//     <link href="https://fonts.googleapis.com/css2?family=Alkalami&family=Dancing+Script:wght@500&family=Noto+Sans+Mono:wght@100&family=Sono&family=Syne:wght@800&display=swap" rel="stylesheet">
//     <link rel="stylesheet" href="../dist/style.css">

//     <title> MY TEAM </title>
// </head>

// <body>
//     <!-- Container for page content -->
//     <div class="container-fluid">
//         <!-- Title bar -->
//         <div class="row">
//             <div class="col-12 jumbotron mb-3 team-heading">
//                 <h1 class="text-center">MY TEAM </h1>

//             </div>
//         </div>
//     <!-- Page content - Employee's Cards-->
//     <div class="container">
//         <div class="row justify-content-center">
           
//             <!-- Cards -->

// <!-- MANAGER -->

// <card class="card employeeCard col-3 d-inline-flex justify-content-center">
//     <div class="cardHeader text-center">
//         <!-- Name and role -->
//         <h2 class="cardName"></h2>
//         <h3 class="cardRole"></h3>
//     </div>
//     <div class="cardBody text-center">
//         <ul class="list-group">
//         <!-- Id, Email, OfficeNumber/GitHub/School-->
//             <li class="list-group-item"></li>
//             <li class="list-group-item"></li>
//             <li class="list-group-item"></li>
//         </ul>
//     </div>
// </card>


// <!-- ENGINEER -->
//                 <card class="card employeeCard col-3 d-inline-flex justify-content-center">
//                     <div class="cardHeader text-center">
//                         <!-- Name and role -->
//                         <h2 class="cardName">${engineer.name}</h2>
//                         <h3 class="cardRole">${engineer.getRole()}</h3>
//                     </div>
//                     <div class="cardBody text-center">
//                         <ul class="list-group">
//                         <!-- Id, Email, OfficeNumber/GitHub/School-->
//                             <li class="list-group-item">ID: ${engineer.id}</li>
//                             <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}<\a></li>
//                             <li class="list-group-item">GitHub: <a href="https:\\github.com\${engineer.getGithub()}">${engineer.getGithub()}<\a></li>
//                         </ul>
//                     </div>
//                 </card>
// <!-- INTERN -->
//                 <card class="card employeeCard col-3 d-inline-flex justify-content-center">
//                     <div class="cardHeader text-center">
//                         <!-- Name and role -->
//                         <h2 class="cardName">${intern.name}</h2>
//                         <h3 class="cardRole">${intern.getRole()}</h3>
//                     </div>
//                     <div class="cardBody text-center">
//                         <ul class="list-group">
//                         <!-- Id, Email, OfficeNumber/GitHub/School-->
//                             <li class="list-group-item">ID: ${intern.id}</li>
//                             <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}<\a></li>
//                             <li class="list-group-item">School: ${intern.school}</li>
//                         </ul>
//                     </div>
//                 </card>
                
//             </div>
//         </div>
//     </div>
//     <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js" 
//     integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3" crossorigin="anonymous"></script>
// </body>

// </html>