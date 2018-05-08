package model;

import org.springframework.data.annotation.Id;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

public class Project {

    @Id
    public String id;

    public String title;
    public String employerEmail;
    public String description;
    public String file;
    public String skill_required;
    public int budget_range_start;
    public int budget_range_end;
    public String status;
    public String freelancer_email;

    public Project() {}

    public Project(String title, String employer_email, String description, String file, String skill_required, int budget_range_start, int budget_range_end, String status) {
        this.title = title;
        this.employerEmail = employer_email;
        this.description = description;
        this.file = file;
        this.skill_required = skill_required;
        this.budget_range_start = budget_range_start;
        this.budget_range_end = budget_range_end;
        this.status = status;
    }

    public void setStatus(String status){
        this.status = status;
    }

    @Override
    public String toString() {
        return String.format(
                "Project [id=%s, employer='%s', title='%s']",
                id, employerEmail, title);
    }

}