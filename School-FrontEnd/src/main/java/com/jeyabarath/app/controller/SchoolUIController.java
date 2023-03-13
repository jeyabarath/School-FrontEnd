package com.jeyabarath.app.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
public class SchoolUIController {
	
	@RequestMapping(path="/", method=RequestMethod.GET)
	public String goHome(){
		return "index";
	}
	
	@RequestMapping(path="/add", method=RequestMethod.GET)
	public String addStudent(){
		return "add";
	}
	
	@RequestMapping(path="/student", method=RequestMethod.GET)
	public String viewStudent(){
		return "student";
	}
	
	@RequestMapping(path="/addCourse", method=RequestMethod.GET)
	public String addStudentCourse(){
		return "addCourse";
	}
	
	@RequestMapping(path="/course", method=RequestMethod.GET)
	public String addCourse(){
		return "course";
	}
}
