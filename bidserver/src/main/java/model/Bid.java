package model;

import org.springframework.data.annotation.Id;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

public class Bid {

    @Id
    public String id;

    public String project;
    public String freelancer;
    public boolean isHire;
    public int price;

    public Bid() {}

    public Bid(String project, String freelancer, boolean isHire, int price) {
        this.project = project;
        this.freelancer = freelancer;
        this.isHire = isHire;
        this.price = price;
    }

    public void setPrice(int price){
        this.price = price;
    }

    @Override
    public String toString() {
        return String.format(
                "Bid [id=%s, freelancer='%s', price='%d']",
                id, freelancer, price);
    }

}