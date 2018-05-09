package hello;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;

import model.Bid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.*;

@RestController
public class HelloController {
    static final String api = "http://localhost:3000";

    @Autowired
    private BidRepository repository;

    @CrossOrigin(origins = api)
    @RequestMapping("/")
    public String index() {
        return "Greetings from Spring Boot!";
    }

    @CrossOrigin(origins = api)
    @PostMapping("/bid")
    public ResponseEntity<String> addBid(@RequestBody Bid bid){
        System.out.println("bid placed");
        repository.save(bid);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }

}