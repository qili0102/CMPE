package hello;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;
import model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.*;

@RestController
public class HelloController {
    static final String api = "http://localhost:3000";

    @Autowired
    private UserRepository repository;

    @CrossOrigin(origins = api)
    @RequestMapping("/")
    public String index() {
        return "Greetings from Spring Boot!";
    }

    @CrossOrigin(origins = api)
    @PostMapping("/user")
    public ResponseEntity<String> addUser(@RequestBody User user){
        System.out.println("posted");
        repository.save(user);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    @CrossOrigin(origins = api)
    @RequestMapping("/default")
    public ResponseEntity<String> test(){
        repository.save(new User("qi.li@gmail.com", "1234"));
        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    @CrossOrigin(origins = api)
    @RequestMapping("/users")
    public List<User> getUsers(){
        return repository.findAll();
    }

}