const mongoose = require('mongoose');

let EventSchema = new mongoose.Schema({
    title:{
    type: String,
    required: true
    },

    description:{
      type: String,
      required: true    
    },

    date:{
      type: String,
      required: true
    },

    location: {
      type: String,
    },

    image: {
      type: String,
      default: 'https://res.cloudinary.com/dzzpwrdae/image/upload/v1598875942/eventDefault_t9wpe7.png',
      required: true
    },

    keywords:[{
      type:String,
      default:'general'
    }],
    //object ID
    created_by:{
      type: mongoose.Schema.Types.ObjectId,
      ref: "user"
    }
})

let EventModel = mongoose.model('Event', EventSchema)

module.exports = EventModel;