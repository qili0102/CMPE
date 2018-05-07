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
    @PostMapping("/user/signin")
    public ResponseEntity<String> userSignIn(@RequestBody User user){
        // Query query = new Query();
        // query.addCriteria(Criteria.where("email").is(user.email));
        User dbuser = repository.findByEmail(user.email);
        String pass = dbuser.password;
        if(pass.equals(user.password)){
            return new ResponseEntity<>(HttpStatus.OK);
        }else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @CrossOrigin(origins = api)
    @RequestMapping("/users")
    public List<User> getUsers(){
        return repository.findAll();
    }

}