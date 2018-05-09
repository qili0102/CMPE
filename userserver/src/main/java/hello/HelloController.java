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
    public String userSignIn(@RequestBody User user){
        // Query query = new Query();
        // query.addCriteria(Criteria.where("email").is(user.email));
        User dbuser = repository.findByEmail(user.email);
        String pass = dbuser.password;
        System.out.println("signin:"+HttpStatus.OK);
        return pass;
    }

    @CrossOrigin(origins = api)
    @RequestMapping("/users")
    public List<User> getUsers(){
        return repository.findAll();
    }

    @CrossOrigin(origins = api)
    @PostMapping("/user/profile")
    public User userProfile(@RequestBody User user){
        User dbuser = repository.findByEmail(user.email);
        System.out.println("profile:"+HttpStatus.OK);
        return dbuser;
    }

    @CrossOrigin(origins = api)
    @PostMapping("/user/profile/name")
    public ResponseEntity<String> updateUserName(@RequestBody User user){
        User dbuser = repository.findByEmail(user.email);
        dbuser.setName(user.name);
        repository.save(dbuser);
        System.out.println("profile/name:"+HttpStatus.OK);
        return new ResponseEntity<>(HttpStatus.OK); 
    }

    @CrossOrigin(origins = api)
    @PostMapping("/user/profile/img")
    public ResponseEntity<String> updateUserImg(@RequestBody User user){
        User dbuser = repository.findByEmail(user.email);
        dbuser.setImg(user.img);
        repository.save(dbuser);
        System.out.println("profile/img:"+HttpStatus.OK);
        return new ResponseEntity<>(HttpStatus.OK); 
    }
    
    @CrossOrigin(origins = api)
    @PostMapping("/user/profile/phone")
    public ResponseEntity<String> updateUserPhone(@RequestBody User user){
        User dbuser = repository.findByEmail(user.email);
        dbuser.setPhone(user.phone);
        repository.save(dbuser);
        System.out.println("profile/phone:"+HttpStatus.OK);
        return new ResponseEntity<>(HttpStatus.OK); 
    }

    @CrossOrigin(origins = api)
    @PostMapping("/user/profile/aboutMe")
    public ResponseEntity<String> updateUserAboutMe(@RequestBody User user){
        User dbuser = repository.findByEmail(user.email);
        dbuser.setAboutMe(user.aboutMe);
        repository.save(dbuser);
        System.out.println("profile/aboutMe:"+HttpStatus.OK);
        return new ResponseEntity<>(HttpStatus.OK); 
    }

    @CrossOrigin(origins = api)
    @PostMapping("/user/profile/skills")
    public ResponseEntity<String> updateUserSkills(@RequestBody User user){
        User dbuser = repository.findByEmail(user.email);
        dbuser.setSkills(user.skills);
        repository.save(dbuser);
        System.out.println("profile/skills:"+HttpStatus.OK);
        return new ResponseEntity<>(HttpStatus.OK); 
    }

}