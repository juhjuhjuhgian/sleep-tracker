const Sleep = require('../models/Sleep')

module.exports = {
    getEdit: (req, res) => {
        const id = req.params.id;
        Sleep.find({}, (err, tasks) => {
            res.render("edit.ejs", { 
                sleeps: tasks, 
                idTask: id });
        });
    },
    getSleepHist: async (req,res)=>{
        try{
            const sleepItems = await Sleep.find()
            res.render('sleep.ejs', {sleeps: sleepItems})
        }catch(err){
            console.log(err)
        }
    },
    createSleepEntry: async (req, res)=>{
        try{
            await Sleep.create({
                troubleFalling: req.body.troubleFalling,
                sleepTime: req.body.sleepTime,
                wakeTime: req.body.wakeTime,
                moodWhenAwake: req.body.moodWhenAwake
                })
            console.log('Sleep Entry Added')
            res.redirect('/sleep')
        }catch(err){
            console.log(err)
        }
    },
    updateEntry: (req, res) => {
        const id = req.params.id;
        Sleep.findByIdAndUpdate(
            id,
            {
                troubleFalling: req.body.troubleFalling,
                sleepTime: req.body.sleepTime,
                wakeTime: req.body.wakeTime,
                moodWhenAwake: req.body.moodWhenAwake
            },
            err => {
                if (err) return res.status(500).send(err);
                res.redirect("/sleep");
            });
    },

    // updateEntry: async (req, res)=>{
    //     try{
    //         await Sleep.findOneAndUpdate({_id:req.body.sleepIdFromJSFile},{
    //         })
    //         console.log('Entry Updated')
    //         res.json('Entry Updated')
    //     }catch(err){
    //         console.log(err)
    //     }
    // },

    deleteSleepEntry: async (req, res)=>{
        console.log(req.body.sleepIdFromJSFile)
        try{
            await Sleep.findOneAndDelete({_id:req.body.sleepIdFromJSFile})
            console.log('Deleted Entry')
            res.json('Deleted Entry')
        }catch(err){
            console.log(err)
        }
    }
}    