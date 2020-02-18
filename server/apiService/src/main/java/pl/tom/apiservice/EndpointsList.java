package pl.tom.apiservice;

public class EndpointsList {
}


//---------->User<----------------------------------------------------------------------------------------
//AUTH service
// create new user: http://localhost:8090/sing-up    postMethod
// login user: http://localhost:8090/login           postMethod

//API service
// get all users: http://localhost:8080/user/all     getMethod required headers Authorization
// get user byId: http://localhost:8080/user/1       getMethod required headers Authorization
// update user byId: http://localhost:8080/user/1    putMethod required headers Authorization
// delete user byId: http://localhost:8080/user/1    deleteMethod required headers Authorization


//-------------->DRONE<---------------------------------------------------------------------------------------
//AUTH service
// get all drone: http://localhost:8090/drone/all                   getMethod
// get drone byId: http://localhost:8090/drone/1                    getMethod
// get drone byDescription: http://localhost:8090/drone?query=PRO   getMethod param

//API service
// create drone: http://localhost:8080/drone/create                 postMethod required headers Authorization
// update drone byId: http://localhost:8080/drone/3                 putMethod required headers Authorization
// delete drone byId: http://localhost:8080/drone/3                 deleteMethod required headers Authorization

//--------->Order Drone<----------------------------------------------------------------------------------------
//API service
// get all order drone: http://localhost:8080/order/drone/all       getMethod required headers Authorization
// get order drone byId: http://localhost:8080/order/drone/1        getMethod required headers Authorization
// create order drone: http://localhost:8080/order/drone/create     postMethod required headers Authorization
//update order drone byId: http://localhost:8080/order/drone/2      putMethod required headers Authorization
// delete order drone byId: http://localhost:8080/order/drone/3     deleteMethod required headers Authorization

//------------>Laptop<---------------------------------------------------------------------------------------------
//AUTH service
// get all laptop: http://localhost:8090/laptop/all                     getMethod
// get laptop byId: http://localhost:8090/laptop/1                      getMethod
// get laptop byDescription: http://localhost:8090/laptop?query=Think   getMethod

//Api service
// create laptop: http://localhost:8080/laptop/create                   postMethod required headers Authorization
// update laptop byId: http://localhost:8080/laptop/4                   putMethod required headers Authorization
// delete laptop byId: http://localhost:8080/laptop/3                   deleteMethod required headers Authorization

//---------------->Order Laptop<------------------------------------------------------------------------------------
//API service
//get all order laptop: http://localhost:8080/order/laptop/all           getMethod required headers Authorization
//get order laptop byId: http://localhost:8080/order/laptop/2            getMethod required headers Authorization
//create order laptop: http://localhost:8080/order/laptop/create         postMethod required headers Authorization
//update order laptop byId: http://localhost:8080/order/laptop/3         putMethod required headers Authorization
//delete order laptop byId: http://localhost:8080/order/laptop/3         deleteMethod required headers Authorization

//------------>Smartphone<-----------------------------------------------------------------------------------------
//Auth service
//get all smartphone: http://localhost:8090/smartphone/all                      getMethod
//get smartphone byId: http://localhost:8090/smartphone/1                       getMethod
//get smartphone byDescription: http://localhost:8090/smartphone?query=s9       getMethod

//API service
//create smartphone: http://localhost:8080/smartphone/create                    postMethod required headers Authorization
//update smartphone byId: http://localhost:8080/smartphone/3                    putMethod required headers Authorization
//delete smartphone byId: http://localhost:8080/smartphone/3                    deleteMethod required headers Authorization

//----------------------------->Order Smartphone<-------------------------------------------
//API service
//get all order smartphone: http://localhost:8080/order/smartphone/all         getMethod required headers Authorization
//get order smartphone byId: http://localhost:8080/order/smartphone/1          getMethod required headers Authorization
//create order smartphone: http://localhost:8080/order/smartphone/create       postMethod required headers Authorization
//update order smartphone byId: http://localhost:8080/order/smartphone/2       putMethod required headers Authorization
//delete order smartphone byId: http://localhost:8080/order/smartphone/3       deleteMethod required headers Authorization