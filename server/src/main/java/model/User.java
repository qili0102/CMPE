package model;

import org.springframework.data.annotation.Id;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

public class User {

    @Id
    public String id;

    public String name;
    public String email;
    public String password;
    public String img;
    public String phone;
    public String aboutMe;
    public String skills;

    public User() {}

    public User(String email, String password) {
        this.email = email;
        this.password = password;
    }

    @Override
    public String toString() {
        return String.format(
                "User[id=%s, name='%s', email='%s']",
                id, name, email);
    }

}