// const { send } = require("express/lib/response");

$("#add_user").submit(function (event) {
  alert("Data Inserted Successfully!");
});

$("#update_user").submit(function (event) {
  event.preventDefault();

  var unindexed_array = $(this).serializeArray();
  var data = {};

  $.map(unindexed_array, function (n, i) {
    data[n["name"]] = n["value"];
  });

  var request = {
    url: `http://localhost:3000/api/users/${data.id}`,
    method: "PUT",
    data: data,
  };

  $.ajax(request).done(function (response) {
    alert("Data Updated Successfully!");
  });
});

if (window.location.pathname == "/") {
  $ondelete = $(".table tbody td a.delete");
  $ondelete.click(function () {
    var id = $(this).attr("data-id");

    var request = {
      url: `http://localhost:3000/api/users/${id}`,
      method: "DELETE",
    };

    if (confirm("Do you really want to delete this record?")) {
      $.ajax(request).done(function (response) {
        alert("Data Deleted Successfully!");
        location.reload();
      });
    }
  });
}

//Asynchronous
/*
If any code is made asynchronous then when that code runs it do not block other code block.
It runs in background.
And when that code stops running whatever callback it contain that code starts to run.
*/

// console.log("Hello");
// setTimeout(()=>{console.log("Hello from setTimeout");},5000); //it will not block cl("js")
// console.log("JavaScript");

// const greeting = ()=>{
//     console.log("Hello from setTimeout");
// }

// console.log("Hello");
// setTimeout(greeting,5000); //it will not block cl("js") //remember no parethesis orelse it will not be asynchronous
// console.log("JavaScript");

//applications - server call , eventListener

// console.log("start");
// setTimeout(()=>{
//     console.log("I am from timeout"); //bhale 0 ho ya kuch ye web api me push ho jaega or baad me hi run hoga jab call stack empty ho jaega
// },0)
// console.log("end");

//callback

// const register = ()=>{
//     console.log("Register end");
// }
// const sendEmail = ()=>{
//     console.log("send email");
// }
// const login = ()=>{
//     console.log("login end");
// }
// const getUserData = ()=>{
//     console.log("got user data");
// }
// const displayUserData = ()=>{
//     console.log("user data displayed");
// }

// //synchronous
// register();
// sendEmail();
// login();
// getUserData();
// displayUserData();

// console.log("Other application work!");

//////////////////////////////////////////////////////////////////
//drawback of synchroous javascript

// function waitForThreeSeconds(){
//     let ms = 3000 + new Date().getTime();
//     while(new Date() < ms){}
// }

// const register = ()=>{
//     //simulating server req
//     waitForThreeSeconds();
//     console.log("Register end"); //what if this function is sending req to
//     //the server
//     //then we dont know how much time is taken to complete the function
//     //as it is synchronous below functions will get blocked
// }
// const sendEmail = ()=>{
//     waitForThreeSeconds();
//     console.log("send email");
// }
// const login = ()=>{
//     waitForThreeSeconds();
//     console.log("login end");
// }
// const getUserData = ()=>{
//     console.log("got user data");
// }
// const displayUserData = ()=>{
//     console.log("user data displayed");
// }

// register();
// sendEmail();
// login();
// getUserData();
// displayUserData();

// console.log("Other application work!");

///////////////////////////////////////////////////////////
//making asynchronous javascript

// const register = ()=>{
//     setTimeout(()=>{console.log("Register end");},2000);

// }
// const sendEmail = ()=>{
//     setTimeout(()=>{console.log("send email");},1000);

// }
// const login = ()=>{
//     setTimeout(()=>{console.log("login end");},1000);

// }
// const getUserData = ()=>{
//     setTimeout(()=>{console.log("got user data");},1000);

// }
// const displayUserData = ()=>{
//     setTimeout(()=>{console.log("user data displayed");},1000);

// }

// register();
// sendEmail();
// login();
// getUserData();
// displayUserData();

// console.log("Other application work!"); //this will run first

//in above code our desired request is not fullfilled as
//register end is done at the end

///////////////////////////////////////////////////////////////

//goal is run the functions in a sequence without blocking any code

// const register = (callback) => {
//   setTimeout(() => {
//     console.log("Register end");
//     callback();
//   }, 4000);
// };
// const sendEmail = (callback) => {
//   setTimeout(() => {
//     console.log("send email");
//     callback();
//   }, 2000);
// };
// const login = (callback) => {
//   setTimeout(() => {
//     console.log("login end");
//     callback();
//   }, 6000);
// };
// const getUserData = (callback) => {
//   setTimeout(() => {
//     console.log("got user data");
//     callback();
//   }, 1000);
// };
// const displayUserData = () => {
//   setTimeout(() => {
//     console.log("user data displayed");
//   }, 5000);
// };

// register(() => {
//   sendEmail(() => {
//     login(() => {
//       getUserData(() => {
//         displayUserData();
//       });
//     });
//   });
// });

// console.log("Other application work!");

//drawback - nesting is not good - callback hell
//more complicated when we pass parameters
/////////////////////////////////////////////////////////////////////


//promises
// promise is inbuilt class

// const register = () => {
//     return new Promise((resolve, reject)=>{
//         setTimeout(() => {
//             console.log("Register end");
//             resolve();
//           }, 4000);
//     });
  
// };
// const sendEmail = () => {
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             console.log("send email");
//             resolve();
//           }, 2000);
//     })
  
// };
// const login = () => {
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             console.log("login end");
//             resolve();
//           }, 6000);
//     })
  
// };
// const getUserData = () => {
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             console.log("got user data");
//             resolve();
//           }, 1000);
//     })
  
// };
// const displayUserData = () => {
//   setTimeout(() => {
//     console.log("user data displayed");
//   }, 5000);
// };


// register()
// .then(sendEmail)
// .then(login)
// .then(getUserData)
// .then(displayUserData)

// console.log("Other application work!");



// //Best Way - syntactic sugar
// //Async Await

// //await is used inside a function only
// //await function ko sirf async function ke anadr hona chahiye

// async function authenticate(){
//     await register();
//     await sendEmail();
//     await login();
//     await getUserData();
//     await displayUserData();
// }
