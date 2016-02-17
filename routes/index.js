var projects = require('../projects.json');

/*
 * GET home page.
 */

exports.view = function(req, res){
  	var randome_num = Math.random();
    console.log(randome_num);
    
    if (randome_num > 0.5) 
    {
        projects["grid"] = false;
        res.render('index', projects);
    } 
    else
    {
        res.redirect('/grid');        
    }
};

exports.viewGrid = function(req, res){
    var randome_num = Math.random();
  	if (randome_num > 0.5) 
    {
        projects["grid"] = true;
        res.render('index', projects);
    } 
    else
    {
        res.redirect('/');
    }
};