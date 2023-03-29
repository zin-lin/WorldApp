package com.dockerapp.demodoc.models;

import com.dockerapp.demodoc.SQLConnection;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class Controller1 {

    @GetMapping("/wPopulation")
    public String getPopulation(){
        SQLConnection sqlConnection = new SQLConnection();
        String ans;
        try {
            sqlConnection.connect("localhost:3001", 0);
            PopulationReport report = sqlConnection.getWorldPopulation();
            ans = report.toString();
        }catch(Exception e)
        {
            ans = "Error: " + e.getMessage();
        }
        return ans;
    }

}
