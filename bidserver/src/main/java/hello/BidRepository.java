package hello;

import model.Bid;
import java.util.*;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface BidRepository extends MongoRepository<Bid, String> {
    public Bid findByProject(String project);
    public List<Bid> findByFreelancer(String freelancer);
    public List<Bid> findByIsHire(Boolean isHire);
}