package hello;

import model.User;
import java.util.*;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface UserRepository extends MongoRepository<User, String> {
    public List<User> findByName(String name);
}