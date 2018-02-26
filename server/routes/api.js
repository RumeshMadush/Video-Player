const express =require('express');
const router= express.Router();
const mongoos  = require('mongoose');
const Video = require('../models/video');

// connection for database file
const db ="mongodb://rumesh:rumesh@ds239648.mlab.com:39648/videoplayer"
mongoos.Promise = global.Promise;
mongoos.connect(db,function (err) {
    if(err){
        console.error("Error!"+ err);
    }

});

// getting all video from mongoo db
 router.get('/videos',function (req,res) {
    console.log('Get request for all videos');
    Video.find({})
        .exec(function (err,videos) {
            if(err){

                console.log("Error retrieving video")
            }else{
                res.json(videos);
            }

        });


});

// getting single video from mongoo db
router.get('/videos/:id',function (req,res) {
    console.log('Get request for single  videos');
    Video.findById(req.params.id)
        .exec(function (err,videos) {
            if(err){

                console.log("Error retrieving video")
            }else{
                res.json(videos);
            }

        });


});

// Insert new video to the database

router.post('/videos',function (req,res) {
    console.log('post a video ');
    var newVideo = new Video();
    newVideo.title= req.body.title;
    newVideo.url= req.body.url;
    newVideo.discription = req.body.discription;
    newVideo.save(function (err,insertedVideo) {
        if(err){
            console.log('Error saving vidoe');

        }else {
            res.json(insertedVideo);
        }
    });
});

//Update databse

router.put('/videos/:id',function (req,res) {
    console.log('Update a video');

    Video.findByIdAndUpdate(req.params.id,
        {

       $set:{title:req.body.title,url:req.body.url,discription:req.body.discription}
        },

        {
        new:true
        },
        function (err,updatedVideo) {
            if (err) {
                res.sent("Error Updated in video");
            } else {
                res.json(updatedVideo);
            }
        }
       );
});

//Delete videos form db
router.delete('/videos/:id',function (req,res) {
    console.log('Deleting a Video');
    Video.findByIdAndRemove(req.params.id, function (err,deletedVideo){
            if(err){
                res.send("Error Deleting Video");
            }else{
                res.json(deletedVideo);

            }

    });

});


module.exports=router;