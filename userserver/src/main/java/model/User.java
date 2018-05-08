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

    public void setName(String name){
        this.name = name;
    }

    public void setImg(String img){
        this.img = img;
    }

    public void setPhone(String phone){
        this.phone = phone;
    }

    public void setAboutMe(String aboutMe){
        this.aboutMe = aboutMe;
    }

    public void setSkills(String skills){
        this.skills = skills;
    }

    @Override
    public String toString() {
        return String.format(
                "User[id=%s, name='%s', email='%s']",
                id, name, email);
    }

}