package hello;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;

import model.Project;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.*;

@RestController
public class HelloController {
    static final String api = "http://localhost:3000";
    static final String PROJ_OPEN = "PROJ_OPEN";
    static final String PROJ_CLOSE = "PROJ_CLOSE";
    static final String PROJ_HIRED = "PROJ_HIRED";

    @Autowired
    private ProjectRepository repository;

    @CrossOrigin(origins = api)
    @RequestMapping("/")
    public String index() {
        return "Greetings from Spring Boot!";
    }

    @CrossOrigin(origins = api)
    @PostMapping("/project")
    public ResponseEntity<String> addProject(@RequestBody Project project){
        System.out.println("posted");
        repository.save(project);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    @CrossOrigin(origins = api)
    @RequestMapping("/projects")
    public List<Project> getProjects(){
        return repository.findAll();
    }

    @CrossOrigin(origins = api)
    @PostMapping("/postedprojects")
    public List<Project> getPostedProjects(@RequestBody String email){
        return repository.findByEmployerEmail(email);
    }

    @CrossOrigin(origins = api)
    @RequestMapping("/openprojects")
    public List<Project> getOpenProjects(){
        return repository.findByStatus(PROJ_OPEN);
    }

}