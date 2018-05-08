package hello;

import model.Project;
import java.util.*;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface ProjectRepository extends MongoRepository<Project, String> {
    public Project findByTitle(String title);
    public List<Project> findByEmployerEmail(String employer_email);
    public List<Project> findByStatus(String status);
}