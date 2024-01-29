const express = require('express')
const app = express()

//middleware
app.use(express.json())



let rooms = [
  {
    id:1,
    name:"small",
    seats : 50,
    roomId: 100,
    amenities : ["internet_access","food","ac","tv"],
    price:500,
    BookingStatus : "Occupied",
    customerDetails : {
      cutstomerName : "sivanathan",
      date : "2022-09-23",
      start : "15:00",
      end : "20:00",
      roomId : "100",
      status : "Booked",
    }
  },
  {
    id:2,
    name:"Large",
    seats : 100,
    roomId: 101,
    amenities : ["internet_access","food","ac","tv"],
    price:1000,
    BookingStatus : "Available",
    customerDetails : {
      cutstomerName : "",
      date : "",
      start : "",
      end : "",
      roomId : "",
      status : "",
    }
  }
];

// get all data from room
app.get('/', function (req, res) {
  res.send(rooms)
})

// 
//create room
app.post('/create-room', function (req, res) {
  try {
    req.body.id = rooms.length + 1;
    rooms.push(req.body)
    res.json({
      statusCode:200,
      message:"Room created successfully",
      
    })
  } catch (error) {
    console.log(error);
    res.json({
      statusCode:500,
      message:"Internal Server Error",
      error,
    })
  }
})

// Room booking
app.post('/room-booking', function (req, res) {
  try {
    let booked = false;
    let validRoomid = true;
    rooms.forEach((item) => {
      if (item.roomId == req.body.roomId) {
         validRoomid = false;
        if (new Date(item.customerDetails.date).getTime() != new Date(req.body.date).getTime() && item.customerDetails.start != req.body.start) {
          item.customerDetails.cutstomerName = req.body.name,
            item.customerDetails.date = req.body.date,
            item.customerDetails.start = req.body.start,
            item.customerDetails.end = req.body.end,
            item.customerDetails.roomId = req.body.roomId,
            item.customerDetails.status = "Booked",
            item.BookingStatus = "Occupied",
            booked = true;
         
        }
      }

    })

    if (booked) {
      res.json({
        message: "Booking Successfull"
      })
    }
    if(validRoomid){
      res.json({
        message: "Plz Enter Valid Room"
      })
    } else {
      res.json({
        message: "Booking Failed",
        instruction: "Sorry! Room is Already Booked and check the availability"
      })
    }

  } catch (error) {
    console.log(error);
    res.json({
      statusCode: 500,
      message: "Internal Server Error",
      error,
    })
  }
})

   

// booked-customer-details

app.get('/booked-customer-details', function (req, res) {
  
try {
  let data = [];

  rooms.forEach((item)=>{
    if(item.BookingStatus == "Occupied"){
      data.push(item.customerDetails)
    }
  })
  res.json({
    statusCode:200,
    Booked_Customer_Details : data,
  })
  
} catch (error) {
  res.json({
    statusCode: 500,
    message: "Internal Server Error",
    error,
  })
}

})


// Booked Room Details

app.get('/booked-room-details', function (req, res) {
  
  try {
    let data = [];
  
    rooms.forEach((item)=>{
      if(item.BookingStatus == "Occupied"){
        data.push({
          name:item.name,
          seats : item.seats ,
          amenities :item.amenities,
          price:item.price,
          BookingStatus : item.BookingStatus,
          cutstomerName :item.customerDetails.cutstomerName ,
          date :item.customerDetails.date ,
          start :item.customerDetails.start ,
          end :item.customerDetails.end ,
          roomId : item.customerDetails.roomId,
            
          
        })
      }
    })
    res.json({
      statusCode:200,
      Booked_Room_Details : data,
    })
    
  } catch (error) {
    res.json({
      statusCode: 500,
      message: "Internal Server Error",
      error,
    })
  }
  
  })

app.listen(5000)