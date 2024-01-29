
 

I have completed the hall booking task in node JS , here is a documentaion for api

=> To get the rooms available Details I have written a get request in https://hallbooking-api-services.onrender.com


=>  We can create a room with https://hallbooking-api-services.onrender.com/create-room

Sample Body for Creating API :-





{

     
        "name": "medium",
        "seats": 50,
        "roomid": 102,
        "amenities": [
            "internet_access",
            "food",
            "ac",
            "tv"
        ],
        "price": 500,
        "BookingStatus": "Available",
        "customerDetails": {
            "cutstomerName": "",
            "date": "",
            "start": "",
            "end": "",
            "roomId": ""
       
       }
    }




3) Booking a room made easy with a post request in https://hallbooking-api-services.onrender.com/room-booking

Sample Body for Booking a room : -



            {
            
            
            "name": "ram",
            "date": "2022-09-23",
            "start": "10:00",
            "end": "20:00",
            "roomId": 101
            
            
        }


 4) We can get the Booked Room details using a get request in https://hallbooking-api-services.onrender.com/booked-room-details


 5) We can get the Booked Customer details using a get request in  https://hallbooking-api-services.onrender.com/booked-customer-details