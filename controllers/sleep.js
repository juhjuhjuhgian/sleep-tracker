const Sleep = require('../models/Sleep')

module.exports = {
    getSleepHist: async (req,res)=>{
        try{
            const sleepItems = await Sleep.find()
            res.render('sleep.ejs', {sleeps: sleepItems})
        }catch(err){
            console.log(err)
        }
    },
    createSleepEntry: async (req, res)=>{
    const input1 = document.querySelector("#st");
    const input2 = document.querySelector("#aw");

    const date1 = new Date(input1.value);
    const date2 = new Date(input2.value);

    const timeDiff = Math.abs(date2.getTime() - date1.getTime());
    const diffDays = Math.floor(timeDiff / (1000 * 3600 * 24)); 
    const diffHrs = Math.floor((timeDiff % (1000 * 3600 * 24)) / (1000 * 3600));
    const diffMins = Math.floor((timeDiff % (1000 * 3600)) / (1000 * 60));
    const diffSecs = Math.floor((timeDiff % (1000 * 60)) / 1000);

        try{
            await Sleep.create({
                troubleFalling: req.body.troubleFalling,
                sleepTime: req.body.sleepTime,
                wakeTime: req.body.wakeTime,
                timeAsleep: diffDays, diffHrs, diffMins, diffSecs,
                moodWhenAwake: req.body.moodWhenAwake
                })
            console.log('Sleep entry has been added!')
            res.redirect('/sleep')
        }catch(err){
            console.log(err)
        }
    },
    markComplete: async (req, res)=>{
        try{
            await Todo.findOneAndUpdate({_id:req.body.todoIdFromJSFile},{
                completed: true
            })
            console.log('Marked Complete')
            res.json('Marked Complete')
        }catch(err){
            console.log(err)
        }
    },
    markIncomplete: async (req, res)=>{
        try{
            await Todo.findOneAndUpdate({_id:req.body.todoIdFromJSFile},{
                completed: false
            })
            console.log('Marked Incomplete')
            res.json('Marked Incomplete')
        }catch(err){
            console.log(err)
        }
    },
    deleteTodo: async (req, res)=>{
        console.log(req.body.todoIdFromJSFile)
        try{
            await Todo.findOneAndDelete({_id:req.body.todoIdFromJSFile})
            console.log('Deleted Todo')
            res.json('Deleted It')
        }catch(err){
            console.log(err)
        }
    }
}    